# New Homepage Design

This is a redesigned homepage with a modern gradient background, custom styling, and modular component architecture.

## Features

- **Gradient Background**: Uses colors #D29D73 and #BE5F47 (customizable)
- **Modern Antiqua Font**: Applied to headings for a unique look
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion animations throughout
- **Modular Components**: Clean component-based architecture

## Sections

1. **Navigation** - Responsive header with menu
2. **Hero** - Main introduction with CTA buttons
3. **Tech Marquee** - Animated scrolling tech stack
4. **Stats** - Experience, projects, and availability cards
5. **Skills** - Technologies organized by category
6. **About** - Personal introduction with values
7. **Experience** - Professional timeline with achievements

## Component Structure

```
components/new-homepage/
├── navigation.tsx       - Header navigation
├── hero.tsx            - Hero section with image
├── tech-marquee.tsx    - Animated tech stack
├── stats-section.tsx   - Stats cards
├── skills-section.tsx  - Skills grid
├── about-section.tsx   - About me section
└── experience-section.tsx - Timeline
```

## How to Access

Visit: `http://localhost:3000/new-homepage`

## Customization

### Change Gradient Colors

In `app/new-homepage/page.tsx`, update:

```tsx
className = "bg-gradient-to-br from-[#YOUR_COLOR_1] to-[#YOUR_COLOR_2]";
```

### Change Font

The Modern Antiqua font is loaded via Google Fonts in `globals.css`. To use a different font:

1. Update the import in `globals.css`
2. Change `font-['Modern_Antiqua']` to your new font name

### Modify Content

Each component is self-contained. Edit the respective component file to update:

- Text content
- Colors
- Layout
- Data arrays (skills, experience, etc.)

## Dependencies

- Next.js 14
- Framer Motion (for animations)
- Tailwind CSS (for styling)
- Lucide React (for icons)
