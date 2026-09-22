import {
  ProfileInfo,
  SkillCategory,
  Project,
  TimelineItem,
  Certification,
  ContactInfoCard
} from '../models/portfolio.model';

export const PORTFOLIO_PROFILE: ProfileInfo = {
  name: 'SHASHI KANTA SAHOO',
  role: '.NET Full-Stack Developer',
  subtitle: 'ASP.NET Core MVC | C# | SQL Server | Entity Framework Core',
  tagline: 'Architecting robust enterprise backend systems and sleek, high-performance web experiences.',
  titles: [
    '.NET Full-Stack Developer',
    'ASP.NET Core & Web API Engineer',
    'C# & Entity Framework Specialist',
    'Angular & Modern Web Developer'
  ],
  bio: 'Driven .NET Full-Stack Developer with hands-on experience building scalable web applications, RESTful APIs, and database-driven architectures. Passionate about writing clean, maintainable C# code, architecting relational SQL databases, and crafting responsive user interfaces with Angular and Bootstrap.',
  location: 'Bhubaneswar, Odisha, India',
  phone: '+91-6372239985',
  email: 'sashikant3452@gmail.com',
  avatarUrl: 'assets/images/shashi_professional.jpg',
  fullPhotoUrl: 'assets/images/shashi_professional.jpg',
  headshotUrl: 'assets/images/shashi_photo.jpg',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  resumeFileName: 'Shashi_Kanta_Sahoo_Resume.pdf',
  stats: [
    { label: 'Core Projects Built', value: '4+', icon: 'bi-kanban' },
    { label: 'Certifications & Honors', value: '7', icon: 'bi-patch-check-fill' },
    { label: 'Internships Completed', value: '3', icon: 'bi-briefcase' },
    { label: 'Code Quality & Clean Architecture', value: '100%', icon: 'bi-shield-check' }
  ]
};

export const PORTFOLIO_CERTIFICATIONS: Certification[] = [
  {
    id: 'nareshit-dotnet',
    title: 'Full Stack .NET Core Course Completion',
    issuer: 'Naresh i Technologies',
    partner: 'An ISO 9001:2015 Certified Company',
    issueDate: 'April 2026',
    duration: 'November 2025 - April 2026',
    category: '.NET & Web Development',
    credentialBadge: 'ISO 9001:2015 Certified',
    imagePath: 'assets/certificates/nareshit_fullstack_dotnet.png',
    verifyUrl: 'https://www.nareshit.com',
    icon: 'bi-patch-check-fill',
    skills: ['C#', 'ASP.NET Core MVC', 'ASP.NET Web API', 'SQL Server', 'EF Core', 'Angular'],
    description: 'Comprehensive professional course covering Full-Stack .NET Core, enterprise RESTful APIs, C# OOP, Entity Framework Core, SQL Server schema design, and modern web application development.'
  },
  {
    id: 'cisco-ccna-intro',
    title: 'CCNAv7: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    partner: 'C. V. Raman Global University',
    issueDate: '11 Feb 2023',
    duration: 'Certified Feb 2023',
    category: 'Cisco Networking & Security',
    credentialBadge: 'Cisco Certified',
    imagePath: 'assets/certificates/cisco_ccna_intro.jpg',
    verifyUrl: 'https://www.netacad.com',
    icon: 'bi-router-fill',
    skills: ['IPv4 & IPv6 Addressing', 'Switches & Routers', 'Ethernet Protocols', 'OSI Model Layers', 'Network Security'],
    description: 'Student-level credential in CCNAv7: Introduction to Networks. Proficient in configuring switches and routers, building IP addressing schemes, and implementing network security best practices.'
  },
  {
    id: 'cisco-ccna-switching',
    title: 'CCNAv7: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    partner: 'C. V. Raman Global University',
    issueDate: '11 May 2023',
    duration: 'Certified May 2023',
    category: 'Cisco Networking & Security',
    credentialBadge: 'Cisco Certified',
    imagePath: 'assets/certificates/cisco_ccna_switching.jpg',
    verifyUrl: 'https://www.netacad.com',
    icon: 'bi-hdd-network-fill',
    skills: ['VLANs & Inter-VLAN Routing', 'STP & EtherChannel', 'WLANs & WLC', 'Static Routing', 'LAN Attack Mitigation'],
    description: 'Student-level credential in CCNAv7: Switching, Routing, and Wireless Essentials. Proficient in configuring redundant switched networks, wireless LANs, and first-hop redundancy protocols.'
  },
  {
    id: 'cisco-ccna-enterprise',
    title: 'CCNAv7: Enterprise Networking, Security, and Automation',
    issuer: 'Cisco Networking Academy',
    partner: 'C. V. Raman Global University',
    issueDate: '9 May 2023',
    duration: 'Certified May 2023',
    category: 'Cisco Networking & Security',
    credentialBadge: 'Cisco Certified',
    imagePath: 'assets/certificates/cisco_ccna_enterprise.jpg',
    verifyUrl: 'https://www.netacad.com',
    icon: 'bi-shield-lock-fill',
    skills: ['OSPFv2 Routing', 'Network Security & ACLs', 'NAT Services', 'QoS', 'Virtualization & SDN Automation'],
    description: 'Student-level credential in CCNAv7: Enterprise Networking, Security, and Automation. Proficient in OSPFv2, WAN access, scalable network architectures, and software-defined network automation.'
  },
  {
    id: 'worinwell-internship',
    title: 'Web Development CSS3 & HTML5 Internship Certification',
    issuer: 'WorInWell',
    partner: 'Coincent Learning Drives Excellence',
    issueDate: 'August 2023',
    duration: '01st Jul, 2023 - 31st Aug, 2023',
    category: '.NET & Web Development',
    credentialBadge: 'Verified Internship',
    imagePath: 'assets/certificates/worinwell_internship.jpg',
    pdfPath: 'assets/certificates/worinwell_internship.pdf',
    verifyUrl: 'https://coincent.ai/verify-certificate',
    icon: 'bi-laptop',
    skills: ['HTML5', 'CSS3', 'Web Layouts', 'Responsive UI', 'Cross-Browser Compatibility'],
    description: 'Officially certified for successfully completing the intensive Web Development CSS3 and HTML5 internship program. Commended as dedicated, hardworking, and diligent.'
  },
  {
    id: 'worinwell-training',
    title: 'Web Development CSS3 & HTML5 Training Completion',
    issuer: 'WorInWell',
    partner: 'Coincent Learning Drives Excellence',
    issueDate: '02-JUL-2023',
    duration: '01st May, 2023 - 30th Jun, 2023',
    category: '.NET & Web Development',
    credentialBadge: 'Course Certified',
    imagePath: 'assets/certificates/worinwell_training.jpg',
    pdfPath: 'assets/certificates/worinwell_training.pdf',
    verifyUrl: 'https://coincent.ai/verify-certificate',
    icon: 'bi-award-fill',
    skills: ['HTML5 Semantic Elements', 'CSS3 Flexbox & Grid', 'Responsive Design', 'Web Standards'],
    description: 'Participated and successfully completed structured curriculum covering frontend web development, semantic markup, modern CSS styling systems, and mobile-first responsiveness.'
  },
  {
    id: 'iit-guwahati-robotics',
    title: 'Web Development CSS3 & HTML5 Certificate of Participation',
    issuer: 'Robotics Club IIT Guwahati',
    partner: 'Coincent',
    issueDate: '30-Jun-2023',
    duration: '01st May, 2023 - 30th Jun, 2023',
    category: '.NET & Web Development',
    credentialBadge: 'IIT Guwahati Honors',
    imagePath: 'assets/certificates/iit_guwahati_robotics.jpg',
    pdfPath: 'assets/certificates/iit_guwahati_robotics.pdf',
    verifyUrl: 'https://coincent.ai/verify-certificate',
    icon: 'bi-star-fill',
    skills: ['Web Technologies', 'Modern CSS', 'HTML5', 'UI Engineering'],
    description: 'Certified by Robotics Club IIT Guwahati and Coincent for active participation and successful completion of the Web Development CSS3 and HTML5 training program.'
  }
];

export const PORTFOLIO_SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'bi-code-square',
    description: 'Foundation programming and query languages for scalable systems',
    skills: [
      { name: 'C#', proficiency: 92, level: 'Advanced', icon: 'bi-filetype-cs', highlight: true },
      { name: 'SQL', proficiency: 90, level: 'Advanced', icon: 'bi-database-check', highlight: true },
      { name: 'JavaScript (ES6+)', proficiency: 85, level: 'Proficient', icon: 'bi-filetype-js' },
      { name: 'C++', proficiency: 80, level: 'Proficient', icon: 'bi-file-code' }
    ]
  },
  {
    id: 'frameworks',
    title: 'Back-End & .NET Frameworks',
    icon: 'bi-cpu',
    description: 'Enterprise server-side frameworks, ORM tooling, and API development',
    skills: [
      { name: 'ASP.NET Core MVC', proficiency: 94, level: 'Advanced', icon: 'bi-layers', highlight: true },
      { name: 'ASP.NET Web API', proficiency: 90, level: 'Advanced', icon: 'bi-cloud-arrow-up', highlight: true },
      { name: 'Entity Framework Core', proficiency: 88, level: 'Advanced', icon: 'bi-diagram-3', highlight: true },
      { name: 'ADO.NET', proficiency: 86, level: 'Proficient', icon: 'bi-hdd-network' },
      { name: 'LINQ', proficiency: 90, level: 'Advanced', icon: 'bi-search' }
    ]
  },
  {
    id: 'web',
    title: 'Frontend & Web Technologies',
    icon: 'bi-window-sidebar',
    description: 'Responsive UI engineering, component frameworks, and modern interfaces',
    skills: [
      { name: 'Angular (v17+)', proficiency: 84, level: 'Proficient', icon: 'bi-app-indicator', highlight: true },
      { name: 'Razor Pages', proficiency: 88, level: 'Advanced', icon: 'bi-file-earmark-code', highlight: true },
      { name: 'RESTful APIs', proficiency: 92, level: 'Advanced', icon: 'bi-arrow-left-right' },
      { name: 'Bootstrap 5', proficiency: 90, level: 'Advanced', icon: 'bi-bootstrap' },
      { name: 'HTML5 & CSS3', proficiency: 92, level: 'Advanced', icon: 'bi-filetype-html' }
    ]
  },
  {
    id: 'tools',
    title: 'Databases, DevOps & Tools',
    icon: 'bi-tools',
    description: 'Relational data management, version control, and containerization',
    skills: [
      { name: 'SQL Server', proficiency: 90, level: 'Advanced', icon: 'bi-database-fill-gear', highlight: true },
      { name: 'SSMS', proficiency: 90, level: 'Advanced', icon: 'bi-terminal' },
      { name: 'Git & GitHub', proficiency: 88, level: 'Proficient', icon: 'bi-git' },
      { name: 'Basic Docker', proficiency: 75, level: 'Intermediate', icon: 'bi-box-seam' }
    ]
  }
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'team-task-manager',
    title: 'Team Task Manager',
    category: 'Full-Stack Web Application',
    badge: 'Production Live Demo',
    summary: 'A robust enterprise task management system featuring secure authentication, role-based workflows, and real-time reporting dashboards.',
    highlights: [
      'Engineered complete full-stack workflow with ASP.NET Core MVC and SQL Server.',
      'Implemented secure user authentication, role-based authorization (Admin, Manager, Member), and session tracking.',
      'Constructed dynamic reporting dashboards with progress statistics, task lifecycles, and priority matrix.',
      'Deployed live on production server with zero-downtime availability.'
    ],
    technologies: ['ASP.NET Core MVC', 'C#', 'SQL Server', 'Entity Framework Core', 'Bootstrap 5', 'JavaScript'],
    liveDemoUrl: 'http://teamtaskmanager.runasp.net',
    githubUrl: 'https://github.com',
    icon: 'bi-kanban-fill',
    featured: true
  },
  {
    id: 'hotel-booking',
    title: 'Hotel Booking Web Application',
    category: 'Relational E-Commerce & Booking',
    badge: 'Enterprise Architecture',
    summary: 'Comprehensive hotel reservation portal with dynamic room filtering, availability engines, payment flows, and optimized ADO.NET database operations.',
    highlights: [
      'Architected end-to-end room search, real-time availability checks, and multi-tier room categorization.',
      'Integrated streamlined guest checkout and payment reservation workflow logic.',
      'Utilized high-performance ADO.NET data access patterns with stored procedures and indexed SQL tables.',
      'Designed a responsive booking management console for hotel staff to track occupancy.'
    ],
    technologies: ['C#', 'ASP.NET Core', 'ADO.NET', 'SQL Server', 'HTML5/CSS3', 'Bootstrap'],
    liveDemoUrl: '',
    githubUrl: 'https://github.com',
    icon: 'bi-building-fill-check',
    featured: true
  },
  {
    id: 'crud-razor-pages',
    title: 'CRUD Operations using Razor Pages',
    category: 'Full-Stack Data Management',
    badge: 'Core .NET Showcase',
    summary: 'High-speed relational data manipulation interface demonstrating clean Razor Pages architecture, server-side validation, and responsive layouts.',
    highlights: [
      'Developed complete Create, Read, Update, and Delete operations leveraging PageModels and Tag Helpers.',
      'Implemented robust server-side and client-side data validation models preventing erroneous inputs.',
      'Integrated Entity Framework Core DbContext with relational constraint handling.',
      'Styled cleanly with modern Bootstrap components and intuitive action modals.'
    ],
    technologies: ['ASP.NET Razor Pages', 'C#', 'Entity Framework Core', 'SQL Server', 'Bootstrap'],
    liveDemoUrl: '',
    githubUrl: 'https://github.com',
    icon: 'bi-table',
    featured: false
  },
  {
    id: 'qa-regression-testing',
    title: 'Regression Testing Automation Framework',
    category: 'Quality Assurance & Automation',
    badge: 'Automation Engineering',
    summary: 'Automated test suite engineered with Selenium WebDriver and Java to execute robust regression cycles across cross-browser web workflows.',
    highlights: [
      'Developed modular Page Object Model (POM) architecture maximizing test script reusability.',
      'Configured automated assertion suites verifying end-to-end user journeys and form validations.',
      'Generated actionable execution reports with detailed pass/fail logs and error screenshots.',
      'Significantly reduced manual regression testing turnaround time and prevented release regressions.'
    ],
    technologies: ['Selenium WebDriver', 'Java', 'TestNG', 'Maven', 'XPath/CSS Selectors'],
    liveDemoUrl: '',
    githubUrl: 'https://github.com',
    icon: 'bi-check2-circle',
    featured: false
  }
];

export const PORTFOLIO_TIMELINE: TimelineItem[] = [
  {
    id: 'exp-worinwell',
    title: 'Web Development Intern',
    organization: 'WorInWell',
    period: 'Internship Track',
    location: 'Remote / India',
    type: 'experience',
    categoryBadge: 'Internship',
    bulletPoints: [
      'Spearheaded development of responsive frontend interfaces and reusable client-side components.',
      'Collaborated closely with backend engineers to integrate RESTful API endpoints and resolve data discrepancies.',
      'Applied cross-browser compatibility fixes, performance tuning, and modern semantic HTML5/CSS3 structure.'
    ],
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'REST APIs', 'Git'],
    icon: 'bi-laptop'
  },
  {
    id: 'exp-bharat-intern',
    title: 'Web Development Intern',
    organization: 'Bharat Intern',
    period: 'Internship Track',
    location: 'Remote / India',
    type: 'experience',
    categoryBadge: 'Internship',
    bulletPoints: [
      'Developed dynamic web modules adhering to strict user experience and mobile-first responsive guidelines.',
      'Engineered backend integration routines and client-side validation logic for data-entry workflows.',
      'Authored clear documentation and utilized Git for source control collaboration and code reviews.'
    ],
    techStack: ['Web Technologies', 'JavaScript', 'Bootstrap', 'Relational DB', 'Git'],
    icon: 'bi-briefcase-fill'
  },
  {
    id: 'exp-salesforce',
    title: 'Salesforce Developer Virtual Intern',
    organization: 'Salesforce Developer Virtual Internship',
    period: 'Virtual Internship Track',
    location: 'Virtual Program',
    type: 'experience',
    categoryBadge: 'Specialized Program',
    bulletPoints: [
      'Mastered cloud architecture foundations, declarative automation tools, and Lightning Platform capabilities.',
      'Implemented Apex triggers, SOQL database queries, and custom business logic flows.',
      'Practiced sandbox deployment strategies, test class coverage creation, and security permissions.'
    ],
    techStack: ['Salesforce', 'Apex', 'SOQL', 'Process Automation', 'Cloud Computing'],
    icon: 'bi-cloud-check-fill'
  },
  {
    id: 'edu-btech',
    title: 'B.Tech in Computer Science & Engineering',
    organization: 'B.Tech Degree Tracking',
    period: 'Graduation Milestone',
    location: 'Odisha, India',
    type: 'education',
    categoryBadge: 'Higher Education',
    bulletPoints: [
      'Focused on Core Computing: Data Structures, Object-Oriented Programming (OOP) in C# / C++, Database Management Systems (DBMS), and Software Engineering.',
      'Completed comprehensive capstone implementations with real-world full-stack architectures.',
      'Actively participated in technical coding seminars and hands-on developer workshops.'
    ],
    techStack: ['Data Structures', 'Algorithms', 'DBMS', 'OOP', 'Software Engineering'],
    icon: 'bi-mortarboard-fill'
  }
];

export const PORTFOLIO_CONTACT_CARDS: ContactInfoCard[] = [
  {
    title: 'Location',
    value: 'Bhubaneswar, Odisha, India',
    linkText: 'Bhubaneswar, Odisha',
    linkHref: 'https://maps.google.com/?q=Bhubaneswar,+Odisha,+India',
    icon: 'bi-geo-alt-fill',
    color: '#00d2ff'
  },
  {
    title: 'Email Address',
    value: 'sashikant3452@gmail.com',
    linkText: 'sashikant3452@gmail.com',
    linkHref: 'mailto:sashikant3452@gmail.com',
    icon: 'bi-envelope-fill',
    color: '#00f2fe'
  },
  {
    title: 'Phone / WhatsApp',
    value: '+91-6372239985',
    linkText: '+91 63722 39985',
    linkHref: 'tel:+916372239985',
    icon: 'bi-telephone-fill',
    color: '#38ef7d'
  },
  {
    title: 'Core Stack',
    value: 'ASP.NET Core MVC | C# | SQL Server',
    linkText: 'Available for Opportunities',
    linkHref: '#contact',
    icon: 'bi-code-slash',
    color: '#f39c12'
  }
];
