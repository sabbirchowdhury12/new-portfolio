# New Homepage Components

This folder contains all the modular components for the new homepage design.

## Components Overview

### 1. `navigation.tsx`

**Purpose**: Site header and navigation menu

- Logo/name on the left
- Navigation links (About, Skills, Experience, Projects, Contact)
- Search icon
- "Learn" CTA button
- Responsive: Desktop menu / Mobile simplified version

### 2. `hero.tsx`

**Purpose**: Main hero section with introduction

- Two-column layout (text + illustration)
- Main heading with Modern Antiqua font
- Description paragraph
- Two CTA buttons (Download Resume, Contact me)
- Framer Motion animations
- Responsive: Stacks on mobile

### 3. `tech-marquee.tsx`

**Purpose**: Animated scrolling tech stack display

- Infinite horizontal scroll
- Tech logos/icons with labels
- Semi-transparent background with blur
- CSS animation for smooth scrolling

### 4. `stats-section.tsx`

**Purpose**: Highlight key statistics

- Three stat cards:
  - Years of Experience (3+)
  - Client Projects (10+)
  - Hours Available (24/7) with contact info
- Cream background container
- Circular badge with numbers
- Responsive grid

### 5. `skills-section.tsx`

**Purpose**: Display technical skills by category

- Section header with title and description
- Six skill categories with icons:
  - Frontend (Code icon)
  - Backend (Server icon)
  - Language (TS text)
  - Database (Database icon)
  - Cloud & Tools (Cloud icon)
  - Payment Integration (CreditCard icon)
- White cards on cream background
- Scroll-triggered animations
- Responsive grid (1 col mobile, 2 cols desktop)

### 6. `about-section.tsx`

**Purpose**: Personal introduction and values

- Section header
- Two-column layout:
  - Left: Professional photo in white card
  - Right: Bio text with three paragraphs
- Three value cards at bottom:
  - Trust
  - Commitment
  - Excellence
- Scroll animations
- Responsive layout

### 7. `experience-section.tsx`

**Purpose**: Professional timeline

- Section header
- Vertical timeline with center line (desktop)
- Four experience entries:
  - Tech Lead at EYWINK
  - Full-Stack Developer at REMOVEQ
  - Web Development Course
  - BSS (Hons)
- Each entry includes:
  - Icon
  - Title
  - Company/Institution
  - Period badge
  - Achievement bullet points
- Alternating left/right on desktop
- Stacked on mobile
- Scroll animations

## Usage

Import and use in your page:

```tsx
import Navigation from "@/components/new-homepage/navigation";
import Hero from "@/components/new-homepage/hero";
import TechMarquee from "@/components/new-homepage/tech-marquee";
import StatsSection from "@/components/new-homepage/stats-section";
import SkillsSection from "@/components/new-homepage/skills-section";
import AboutSection from "@/components/new-homepage/about-section";
import ExperienceSection from "@/components/new-homepage/experience-section";

export default function Page() {
  return (
    <div>
      <Navigation />
      <Hero />
      <TechMarquee />
      <StatsSection />
      <SkillsSection />
      <AboutSection />
      <ExperienceSection />
    </div>
  );
}
```

## Customization

Each component is self-contained and can be customized independently:

- **Colors**: Update Tailwind classes (e.g., `bg-[#BE5F47]`)
- **Content**: Edit text, arrays, and data directly in the component
- **Layout**: Modify grid columns, spacing, and responsive breakpoints
- **Animations**: Adjust Framer Motion properties

## Dependencies

- `framer-motion` - For scroll animations
- `lucide-react` - For icons
- `next/image` - For optimized images
- Tailwind CSS - For styling

## Notes

- All components are client-side (`"use client"`)
- Fully responsive with mobile-first approach
- TypeScript typed
- No external API calls
- Self-contained with no prop drilling
