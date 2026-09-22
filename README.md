# ⚡ Shashi Kanta Sahoo - .NET Full-Stack Developer Portfolio

A responsive, high-performance developer portfolio website built with **Angular 21 (Standalone Components)**, **TypeScript**, **Bootstrap 5**, and a sleek **Dark Cyber/Slate Developer Theme**.

---

## 👤 Profile & Context
- **Name**: SHASHI KANTA SAHOO
- **Role**: .NET Full-Stack Developer
- **Stack**: ASP.NET Core MVC | C# | SQL Server | Entity Framework Core | Angular | ADO.NET | Razor Pages
- **Location**: Bhubaneswar, Odisha, India
- **Email**: sashikant3452@gmail.com
- **Phone**: +91-6372239985

---

## 🚀 Key Features
1. **Sticky Header / Navbar**: Smooth scroll navigation, active section tracking, mobile drawer navigation, resume download CTA.
2. **Hero / About Section**: 
   - Dynamic animated typewriter effect cycling through core developer specialties.
   - Interactive C# / ASP.NET Core API IDE terminal preview with syntax highlighting.
   - Quick statistics cards (Projects, Internships, Competencies, Clean Architecture).
3. **Skills Dashboard**:
   - Tabbed filtering (`All`, `Languages`, `Back-End Frameworks`, `Frontend & Web`, `Databases & Tools`).
   - Visual cards with proficiency progress bars and Bootstrap icons.
4. **Project Showcase Grid**:
   - **Team Task Manager** (`teamtaskmanager.runasp.net`) with live status indicator and direct demo link.
   - **Hotel Booking Web Application** with ADO.NET relational data details.
   - **CRUD Operations using Razor Pages**.
   - **Regression Testing Automation Framework** (Selenium WebDriver + Java).
5. **Career & Education Timeline**: Vertical linear timeline tracking internships (Worin Well, Bharat Intern, Salesforce Virtual Intern) and B.Tech degree coursework.
6. **Interactive Contact Block**:
   - Physical contact cards (Location, Email with 1-click clipboard copy, Phone, Availability).
   - Reactive Contact Form with real-time validation (name, email, subject, message) and instant submission feedback.

---

## 🛠️ Project Structure
```
src/
├── app/
│   ├── models/
│   │   └── portfolio.model.ts      # TypeScript interfaces & type definitions
│   ├── data/
│   │   └── portfolio.data.ts       # Structured portfolio data constants
│   ├── app.component.ts            # Standalone root component with reactive state & signals
│   ├── app.component.html          # Semantic HTML layout and sections
│   ├── app.component.css           # Component styles & interactive animations
│   ├── app.config.ts               # Standalone application configuration
│   └── app.spec.ts                 # Unit tests
├── index.html                      # SEO metadata, Google Fonts (Inter, JetBrains Mono)
├── styles.css                      # Global dark theme tokens, glassmorphism, cyan glow
└── main.ts                         # Standalone bootstrap entry point
```

---

## 💻 Getting Started

### Development Server
Run the local dev server:
```bash
npm start
# or
ng serve
```
Navigate to `http://localhost:4200/`. The app will automatically reload when you modify any source files.

### Production Build
Compile the application for production:
```bash
npm run build
# or
ng build
```
The build artifacts will be stored in the `dist/portfolio` directory.

### Run Unit Tests
Execute unit tests via Vitest:
```bash
npm test -- --watch=false
```
