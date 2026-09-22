import { Component, OnInit, OnDestroy, HostListener, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {
  ProfileInfo,
  SkillCategory,
  Project,
  TimelineItem,
  Certification,
  ContactInfoCard
} from './models/portfolio.model';
import {
  PORTFOLIO_PROFILE,
  PORTFOLIO_CERTIFICATIONS,
  PORTFOLIO_SKILL_CATEGORIES,
  PORTFOLIO_PROJECTS,
  PORTFOLIO_TIMELINE,
  PORTFOLIO_CONTACT_CARDS
} from './data/portfolio.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  // Main Data Models
  readonly profile: ProfileInfo = PORTFOLIO_PROFILE;
  readonly certifications: Certification[] = PORTFOLIO_CERTIFICATIONS;
  readonly skillCategories: SkillCategory[] = PORTFOLIO_SKILL_CATEGORIES;
  readonly projects: Project[] = PORTFOLIO_PROJECTS;
  readonly timelineItems: TimelineItem[] = PORTFOLIO_TIMELINE;
  readonly contactCards: ContactInfoCard[] = PORTFOLIO_CONTACT_CARDS;

  // State Management via Signals
  readonly activeSection = signal<string>('hero');
  readonly selectedSkillCategory = signal<string>('all');
  readonly selectedCertCategory = signal<string>('all');
  readonly isMobileMenuOpen = signal<boolean>(false);
  readonly isScrolled = signal<boolean>(false);
  readonly contactSubmitted = signal<boolean>(false);
  readonly contactSubmitting = signal<boolean>(false);
  readonly contactError = signal<string | null>(null);
  readonly copiedEmail = signal<boolean>(false);
  readonly selectedCert = signal<Certification | null>(null);

  // Typewriter Animation State
  readonly currentRoleText = signal<string>('');
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typewriterTimer: any = null;

  // Contact Form
  contactForm!: FormGroup;

  // Filtered Skills
  readonly filteredSkills = computed(() => {
    const active = this.selectedSkillCategory();
    if (active === 'all') {
      return this.skillCategories.flatMap(cat =>
        cat.skills.map(skill => ({ ...skill, categoryTitle: cat.title }))
      );
    }
    const cat = this.skillCategories.find(c => c.id === active);
    return cat ? cat.skills.map(skill => ({ ...skill, categoryTitle: cat.title })) : [];
  });

  // Filtered Certifications
  readonly filteredCertifications = computed(() => {
    const active = this.selectedCertCategory();
    if (active === 'all') {
      return this.certifications;
    }
    return this.certifications.filter(c => c.category === active);
  });

  // Filtered Timeline
  readonly experienceList = computed(() =>
    this.timelineItems.filter(item => item.type === 'experience')
  );

  readonly educationList = computed(() =>
    this.timelineItems.filter(item => item.type === 'education')
  );

  constructor(
    private fb: FormBuilder,
    private sanitizer: DomSanitizer
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.startTypewriter();
  }

  ngOnDestroy(): void {
    if (this.typewriterTimer) {
      clearTimeout(this.typewriterTimer);
    }
  }

  // Scroll listener for sticky navbar & active section spy
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPos = window.scrollY || document.documentElement.scrollTop || 0;
    this.isScrolled.set(scrollPos > 60);

    const sections = ['hero', 'about', 'skills', 'projects', 'certifications', 'timeline', 'contact'];
    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const top = el.offsetTop - 120;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          this.activeSection.set(section);
          break;
        }
      }
    }
  }

  // Typewriter Effect
  private startTypewriter(): void {
    const titles = this.profile.titles;
    const currentTitle = titles[this.roleIndex];

    if (this.isDeleting) {
      this.charIndex--;
      this.currentRoleText.set(currentTitle.substring(0, this.charIndex));
    } else {
      this.charIndex++;
      this.currentRoleText.set(currentTitle.substring(0, this.charIndex));
    }

    let typeSpeed = this.isDeleting ? 40 : 85;

    if (!this.isDeleting && this.charIndex === currentTitle.length) {
      typeSpeed = 1800; // Pause at end of sentence
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % titles.length;
      typeSpeed = 400; // Pause before typing new sentence
    }

    this.typewriterTimer = setTimeout(() => this.startTypewriter(), typeSpeed);
  }

  // Navigation Helpers
  scrollToSection(sectionId: string): void {
    this.isMobileMenuOpen.set(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  setSkillCategory(categoryId: string): void {
    this.selectedSkillCategory.set(categoryId);
  }

  setCertCategory(category: string): void {
    this.selectedCertCategory.set(category);
  }

  // Certificate Modal Handlers
  openCertModal(cert: Certification): void {
    this.selectedCert.set(cert);
    document.body.style.overflow = 'hidden';
  }

  closeCertModal(): void {
    this.selectedCert.set(null);
    document.body.style.overflow = '';
  }

  getSafeCertUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // Contact Form Setup
  private initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Form Submission
  onContactSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.contactSubmitting.set(true);
    this.contactError.set(null);

    const formValues = this.contactForm.value;

    const payload = {
      name: formValues.name,
      email: formValues.email,
      _subject: `[Portfolio Inquiry] ${formValues.subject} - from ${formValues.name}`,
      message: formValues.message,
      _replyto: formValues.email,
      _template: 'table',
      _captcha: 'false'
    };

    fetch(`https://formsubmit.co/ajax/${this.profile.email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(async (response) => {
        this.contactSubmitting.set(false);
        if (response.ok) {
          this.contactSubmitted.set(true);
          this.contactForm.reset();
          setTimeout(() => {
            this.contactSubmitted.set(false);
          }, 8000);
        } else {
          const data = await response.json().catch(() => ({}));
          this.contactError.set(
            data.message || 'Unable to submit automatically. Please use the "Send via Mail App" button below.'
          );
        }
      })
      .catch(() => {
        this.contactSubmitting.set(false);
        this.contactError.set(
          'Network transmission encountered an issue. Please click "Send via Mail App" to send your message directly.'
        );
      });
  }

  // Fallback: Open pre-composed email directly in visitor's email client
  sendViaMailClient(): void {
    const formValues = this.contactForm.value;
    const name = formValues.name ? `Name: ${formValues.name}\n` : '';
    const senderEmail = formValues.email ? `Email: ${formValues.email}\n` : '';
    const subject = encodeURIComponent(formValues.subject || 'Portfolio Inquiry for Shashi Kanta Sahoo');
    const body = encodeURIComponent(
      `Hello Shashi,\n\n${name}${senderEmail}\nMessage:\n${formValues.message || ''}\n\nBest regards,\n${formValues.name || 'Visitor'}`
    );
    window.location.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
  }

  // Copy email to clipboard
  copyEmail(): void {
    navigator.clipboard.writeText(this.profile.email).then(() => {
      this.copiedEmail.set(true);
      setTimeout(() => this.copiedEmail.set(false), 2500);
    });
  }

  // Download Resume Trigger
  downloadResume(): void {
    const resumeText = `SHASHI KANTA SAHOO - .NET Full-Stack Developer
Email: ${this.profile.email} | Phone: ${this.profile.phone} | Location: ${this.profile.location}
Skills: C#, ASP.NET Core MVC, SQL Server, Entity Framework Core, Angular, REST APIs, ADO.NET, Razor Pages
Projects: Team Task Manager (teamtaskmanager.runasp.net), Hotel Booking Web App, CRUD Razor Pages, Selenium Test Framework
Certifications:
1. Full Stack .NET Core (Naresh i Technologies, ISO 9001:2015)
2. CCNAv7: Introduction to Networks (Cisco Networking Academy)
3. CCNAv7: Switching, Routing, and Wireless Essentials (Cisco Networking Academy)
4. CCNAv7: Enterprise Networking, Security, and Automation (Cisco Networking Academy)
5. Web Development CSS3 & HTML5 Internship Certification (WorInWell & Coincent)
6. Web Development CSS3 & HTML5 Training Completion (WorInWell & Coincent)
7. Web Development CSS3 & HTML5 Certificate of Participation (Robotics Club IIT Guwahati & Coincent)`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = this.profile.resumeFileName.replace('.pdf', '.txt');
    link.click();
    URL.revokeObjectURL(link.href);
  }
}
