<div align="center">
  <br />
  <img src="./public/favicon.ico" alt="LavaRápido Logo" width="80" />
  <h1 align="center">LavaRápido</h1>
  <p align="center">
    <strong>Modern Car Wash Booking Platform</strong>
    <br />
    A mobile-first web application for scheduling car wash services online.
    <br />
    Built for the Brazilian market with localized UX.
  </p>

  <p align="center">
    <a href="#-about">About</a> •
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-project-structure">Structure</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-design-system">Design</a> •
    <a href="#-roadmap">Roadmap</a>
  </p>

  <p align="center">
    <a href="./README-pt-br.md">🇧🇷 Português</a>
  </p>

  <br />
</div>

---

## 📋 About

**LavaRápido** is a modern, mobile-first web application that allows customers to schedule car wash services online. Developed initially as a **Phase 1 — Frontend only** project, it features a complete multi-step booking wizard, customer dashboard, and a conversion-focused landing page.

> **Status:** Phase 1 (Frontend with mock data). See [Roadmap](#-roadmap) for upcoming backend integration.

---

## ✨ Features

### Landing Page
- **Hero Section** — Gradient hero with stats, CTA buttons, and value proposition
- **Services & Pricing** — Service cards with categories, descriptions, duration, and pricing in BRL (R$)
- **Testimonials** — Customer reviews with star ratings
- **Booking Wizard** — Integrated booking CTA throughout the page

### Booking Flow (Multi-step Wizard)
| Step | Description |
|---|---|
| **1 — Vehicle** | Select vehicle type: Motorcycle, Hatch/Sedan, or SUV/Pick-up |
| **2 — Service** | Choose a service filtered by vehicle type |
| **3 — Date & Time** | Pick a date (next 7 days) and an available time slot |
| **4 — Customer Details** | Full name, phone/WhatsApp, license plate |
| **5 — Summary & Checkout** | Order summary with mock Pix QR Code or "Pay at Location" option |

### Customer Dashboard (`/dashboard`)
- View upcoming (confirmed) appointments
- View booking history (completed / cancelled)
- Quick link to book a new appointment

---

## 🛠 Tech Stack

<table>
  <thead>
    <tr>
      <th>Layer</th>
      <th>Technology</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Framework</strong></td>
      <td><a href="https://nextjs.org/">Next.js 16</a> (App Router)</td>
      <td>React framework with file-based routing</td>
    </tr>
    <tr>
      <td><strong>Language</strong></td>
      <td><a href="https://www.typescriptlang.org/">TypeScript</a></td>
      <td>Type safety and developer experience</td>
    </tr>
    <tr>
      <td><strong>Styling</strong></td>
      <td><a href="https://tailwindcss.com/">Tailwind CSS 4</a></td>
      <td>Utility-first responsive styling</td>
    </tr>
    <tr>
      <td><strong>Icons</strong></td>
      <td><a href="https://lucide.dev/">Lucide React</a></td>
      <td>Consistent, lightweight icon set</td>
    </tr>
    <tr>
      <td><strong>State Management</strong></td>
      <td>React Context</td>
      <td>Global booking/cart state (Phase 1)</td>
    </tr>
    <tr>
      <td><strong>Font</strong></td>
      <td><a href="https://vercel.com/font">Geist</a></td>
      <td>Modern sans-serif typeface by Vercel</td>
    </tr>
  </tbody>
</table>

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css              # Global styles, Tailwind theme config
│   ├── layout.tsx               # Root layout (Navbar, Footer, BookingProvider)
│   ├── page.tsx                 # Landing page (Hero + Services + Booking + Testimonials)
│   └── dashboard/
│       └── page.tsx             # Customer dashboard
├── components/
│   ├── ui/
│   │   ├── Button.tsx           # Reusable button (primary/outline/ghost/sizes)
│   │   └── Card.tsx             # Reusable card container
│   ├── layout/
│   │   ├── Navbar.tsx           # Responsive sticky navbar with mobile menu
│   │   └── Footer.tsx           # Footer with contact, hours, social links
│   ├── landing/
│   │   ├── Hero.tsx             # Hero section with gradient and CTA
│   │   ├── Services.tsx         # Services/pricing grid
│   │   └── Testimonials.tsx     # Customer testimonial cards
│   └── booking/
│       └── BookingWizardWrapper.tsx  # 5-step booking wizard
├── context/
│   └── BookingContext.tsx       # Global booking state
├── data/
│   └── mock.ts                  # Mock data (services, time slots, testimonials)
└── types/
    └── index.ts                 # TypeScript interfaces and types
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 9+

### Installation

```bash
# Clone or navigate into the project directory
cd "Lava rapido Projeto"

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#0D9488` (teal-600) | Buttons, accents, interactive elements |
| `primary-dark` | `#0F766E` (teal-700) | Hover states |
| `secondary` | `#1E293B` (slate-800) | Headings, text |
| `surface` | `#F8FAFC` (slate-50) | Section backgrounds |
| `muted` | `#94A3B8` (slate-400) | Secondary text |

### Typography

- **Font:** Geist (Vercel) — loaded via `next/font`
- **Scale:** Mobile-first responsive type scale using Tailwind

### Localization (pt-BR)

- Currency: Brazilian Real (R$) with comma decimal separator (e.g., `R$ 49,90`)
- Date format: DD/MM/YYYY (e.g., `25/05/2026`)
- Language: All UI text in Brazilian Portuguese
- Phone: Brazilian mobile format

---

## 🧭 Roadmap

- [x] **Phase 1 — Frontend** (current)
  - Mock data and static UI
  - Multi-step booking wizard
  - Customer dashboard
- [ ] **Phase 2 — Backend Integration**
  - REST API (Next.js API Routes or external)
  - Database integration (PostgreSQL / Supabase)
  - Authentication (customer login)
  - Real payment gateway (Pix API, card)
  - Admin dashboard for business owners
- [ ] **Future Enhancements**
  - Push notifications (WhatsApp reminders)
  - Recurring booking (weekly/monthly wash plans)
  - Loyalty program

---

## 📄 License

This project is for educational and portfolio purposes.

---

<div align="center">
  <p>
    Built with ❤️ for the Brazilian car wash industry.
    <br />
    <a href="./README-pt-br.md">🇧🇷 Leia em Português</a>
  </p>
</div>
