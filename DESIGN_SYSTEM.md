# Inbuilt Infra Design System

A comprehensive guide to the design language and components used in the Inbuilt Infra landing page.

---

## 🎨 Color Palette

### Primary Colors
```css
--primary-navy: #0A2A4A      /* Main brand color, headers, CTA backgrounds */
--primary-navy-light: #0d3558 /* Hover states for navy buttons */
--primary-navy-alt: #164a7a   /* Gradient variations */
```

### Accent Colors
```css
--accent-orange: #FFAC03      /* Primary accent, highlights, icons */
--accent-orange-dark: #FF8800 /* Gradient end, hover states */
--accent-orange-hover: #FF9D00 /* Button hover variations */
```

### Neutral Colors
```css
--background-light: #fafafa   /* Light mode background */
--background-dark: #09090b    /* Dark mode background */
--slate-50: #f8fafc
--slate-100: #f1f5f9
--slate-200: #e2e8f0
--slate-600: #475569
--slate-700: #334155
--white: #ffffff
```

### Semantic Colors
```css
--success-green: (CheckCircle icons)
--error-red: #ef4444 (Problem indicators)
```

---

## ✍️ Typography

### Font Families
```css
/* Primary Serif Font */
font-family: 'Instrument Serif', serif;
--font-instrument-serif: var(--font-instrument-serif);

/* Primary Sans-Serif Font */
font-family: 'Inter', sans-serif;
--font-inter: var(--font-inter);
```

### Font Sizes
```css
/* Headings */
--text-8xl: 6rem      /* Hero headlines (96px) */
--text-7xl: 4.5rem    /* Hero headlines (72px) */
--text-6xl: 3.75rem   /* Section headers (60px) */
--text-5xl: 3rem      /* Section headers (48px) */
--text-4xl: 2.25rem   /* Subsection headers (36px) */
--text-3xl: 1.875rem  /* Card headers (30px) */
--text-2xl: 1.5rem    /* Large text (24px) */
--text-xl: 1.25rem    /* Body large (20px) */

/* Body */
--text-base: 1rem     /* Standard body (16px) */
--text-sm: 0.875rem   /* Small text (14px) */
--text-xs: 0.75rem    /* Extra small text (12px) */
```

### Font Weights
```css
--font-normal: 400
--font-medium: 500
--font-semibold: 600
--font-bold: 700
```

### Type Scale Usage
- **Hero Headlines**: `text-6xl md:text-7xl lg:text-8xl` + Instrument Serif
- **Section Titles**: `text-5xl md:text-6xl` + Instrument Serif
- **Card Titles**: `text-xl md:text-2xl` + Instrument Serif
- **Body Text**: `text-base md:text-lg` + Inter
- **Small Text**: `text-sm` + Inter
- **Labels/Captions**: `text-xs` + Inter

---

## 📐 Spacing & Layout

### Container Widths
```css
max-w-7xl: 80rem (1280px)  /* Main content container */
max-w-6xl: 72rem (1152px)  /* Alternate container */
max-w-4xl: 56rem (896px)   /* Narrow content (FAQ, forms) */
max-w-3xl: 48rem (768px)   /* Section intros */
max-w-2xl: 42rem (672px)   /* Tight content */
max-w-xl: 36rem (576px)    /* Forms, cards */
```

### Spacing Scale
```css
--spacing-1: 0.25rem   /* 4px */
--spacing-2: 0.5rem    /* 8px */
--spacing-3: 0.75rem   /* 12px */
--spacing-4: 1rem      /* 16px */
--spacing-5: 1.25rem   /* 20px */
--spacing-6: 1.5rem    /* 24px */
--spacing-8: 2rem      /* 32px */
--spacing-10: 2.5rem   /* 40px */
--spacing-12: 3rem     /* 48px */
--spacing-16: 4rem     /* 64px */
--spacing-20: 5rem     /* 80px */
--spacing-24: 6rem     /* 96px */
--spacing-32: 8rem     /* 128px */
```

### Section Padding
```css
py-16: 4rem     /* Small sections */
py-20: 5rem     /* Medium sections */
py-24: 6rem     /* Standard sections */
py-32: 8rem     /* Large sections */
```

### Grid Systems
```css
/* Standard Grid */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

/* Bento Grid (Testimonials) */
grid-cols-1 md:grid-cols-2 lg:grid-cols-6
auto-rows-[240px]

/* Form Layout */
grid-cols-[1.2fr_1fr]  /* Content-heavy + form */
```

---

## 🧩 Components

### Buttons

#### Primary Button (CTA)
```jsx
className="bg-[#0A2A4A] text-white px-8 py-4 rounded-full font-inter font-bold
           hover:bg-[#0d3558] transition-all shadow-xl shadow-[#0A2A4A]/20
           active:scale-95 flex items-center gap-2"
```

#### Secondary Button (Accent)
```jsx
className="bg-gradient-to-r from-[#FFAC03] to-[#FF8800] text-white px-8 py-4
           rounded-full font-inter font-bold hover:shadow-2xl
           hover:shadow-[#FFAC03]/30 transition-all active:scale-[0.98]"
```

#### Outline Button
```jsx
className="bg-white border-2 border-[#FFAC03] text-[#0A2A4A] px-8 py-4
           rounded-full font-inter font-bold hover:bg-[#FFAC03]/5
           transition-all active:scale-95"
```

#### Navigation Button
```jsx
className="bg-[#FFAC03] text-[#0A2A4A] px-6 py-2.5 rounded-full
           text-sm font-inter font-bold hover:bg-[#FF9D00] transition-all
           shadow-lg shadow-[#FFAC03]/25 active:scale-95"
```

### Cards

#### Standard Card
```jsx
className="bg-white p-8 rounded-2xl border border-slate-200
           hover:border-[#FFAC03]/50 hover:shadow-xl transition-all duration-500"
```

#### Feature Card (Gradient)
```jsx
className="bg-gradient-to-br from-[#0A2A4A] to-[#164a7a] p-12
           rounded-3xl overflow-hidden text-white relative"
```

#### Testimonial Card (Bento)
```jsx
className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200
           hover:border-[#FFAC03]/50 hover:shadow-2xl hover:shadow-[#FFAC03]/5
           transition-all duration-500 flex flex-col overflow-hidden"
```

#### Comparison Card (Problem)
```jsx
className="bg-white p-6 md:p-8 rounded-2xl border-2 border-slate-200
           hover:border-red-200 transition-all duration-500"
```

#### Comparison Card (Solution)
```jsx
className="bg-gradient-to-br from-[#FFAC03]/5 to-[#FF8800]/5 p-6 md:p-8
           rounded-2xl border-2 border-[#FFAC03]/30 hover:border-[#FFAC03]
           hover:shadow-xl hover:shadow-[#FFAC03]/10 transition-all duration-500"
```

### Form Inputs

#### Text Input
```jsx
className="w-full px-4 py-3.5 rounded-lg border border-slate-200
           font-inter text-sm focus:border-[#FFAC03] focus:outline-none
           focus:ring-2 focus:ring-[#FFAC03]/20 transition-all
           placeholder:text-slate-400"
```

#### Select Dropdown
```jsx
className="w-full px-4 py-3.5 rounded-lg border border-slate-200
           font-inter text-sm focus:border-[#FFAC03] focus:outline-none
           focus:ring-2 focus:ring-[#FFAC03]/20 transition-all
           text-slate-600 bg-white"
```

#### Textarea
```jsx
className="w-full px-4 py-3.5 rounded-lg border border-slate-200
           font-inter text-sm focus:border-[#FFAC03] focus:outline-none
           focus:ring-2 focus:ring-[#FFAC03]/20 transition-all
           resize-none placeholder:text-slate-400"
```

### Badges & Pills

#### Status Badge
```jsx
className="inline-flex items-center gap-2 px-4 py-2 rounded-full
           bg-[#FFAC03]/10 border border-[#FFAC03]/30"
```

#### Frosted Glass Badge
```jsx
className="bg-white/20 backdrop-blur-2xl px-6 py-4 rounded-2xl
           shadow-2xl border border-white/30"
```

### Icons

#### Icon Container (Small)
```jsx
className="w-8 h-8 rounded-full bg-[#FFAC03]/10 flex items-center justify-center"
```

#### Icon Container (Medium)
```jsx
className="w-12 h-12 rounded-2xl bg-[#FFAC03] flex items-center justify-center"
```

#### Icon Container (Large)
```jsx
className="w-16 h-16 rounded-2xl bg-[#FFAC03] flex items-center justify-center"
```

---

## 🎭 Animations & Transitions

### Framer Motion Variants

#### Fade Up
```javascript
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
```

#### Fade In
```javascript
const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};
```

#### Scale In
```javascript
const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
```

#### Stagger Container
```javascript
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};
```

### Transition Settings
```css
/* Standard transitions */
transition-all duration-500
transition-all duration-700

/* Custom easing */
ease: [0.22, 1, 0.36, 1]  /* Premium easing curve */

/* Hover transforms */
hover:scale-110           /* Image zoom */
active:scale-95          /* Button press */
active:scale-[0.98]      /* Subtle press */

/* Shadow animations */
hover:shadow-xl
hover:shadow-2xl hover:shadow-[#FFAC03]/30
```

### CSS Custom Animations

#### Floating Animation
```css
@keyframes float-asset {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
.animate-float {
  animation: float-asset 6s ease-in-out infinite;
}
```

#### Background Float
```css
@keyframes float-bg {
  0% { transform: scale(1) translate(0, 0); }
  100% { transform: scale(1.1) translate(2%, 2%); }
}
.animate-float-bg {
  animation: float-bg 20s infinite alternate linear;
}
```

#### Marquee Scroll
```css
@keyframes marquee {
  to { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 30s linear infinite;
}
```

#### Spin (CTA Card)
```css
@keyframes spin {
  100% { transform: rotate(360deg); }
}
```

---

## 📱 Responsive Breakpoints

### Tailwind Breakpoints
```css
/* Mobile First */
default: 0-639px      /* Mobile */
sm: 640px            /* Small tablets */
md: 768px            /* Tablets */
lg: 1024px           /* Desktops */
xl: 1280px           /* Large desktops */
2xl: 1536px          /* Extra large screens */
```

### Usage Patterns
```jsx
/* Typography responsive */
text-3xl md:text-4xl lg:text-5xl

/* Spacing responsive */
px-6 md:px-12 lg:px-16
py-12 md:py-16 lg:py-24

/* Grid responsive */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

/* Layout responsive */
flex-col sm:flex-row
```

---

## 🎨 Gradients

### Background Gradients
```css
/* Primary gradient */
bg-gradient-to-r from-[#FFAC03] to-[#FF8800]

/* Navy gradient */
bg-gradient-to-br from-[#0A2A4A] to-[#164a7a]

/* Navy complex gradient */
bg-gradient-to-br from-[#0A2A4A] via-[#164a7a] to-[#0A2A4A]

/* Light gradients */
bg-gradient-to-b from-slate-50 to-white
bg-gradient-to-br from-slate-50 via-white to-[#FFAC03]/5

/* Text gradient */
text-transparent bg-clip-text bg-gradient-to-r from-[#FFAC03] to-[#FF8800]

/* Overlay gradients */
bg-gradient-to-r from-[#0A2A4A]/95 via-[#0A2A4A]/80 to-[#0A2A4A]/40
bg-gradient-to-t from-[#0A2A4A]/60 via-transparent to-transparent
```

### Border Gradients
```css
/* Animated gradient border (comp-new class) */
.comp-new::before {
  background: linear-gradient(135deg, #4f46e5, #06b6d4) border-box;
  opacity: 0.5;
}
```

---

## ✨ Special Effects

### Backdrop Blur (Frosted Glass)
```css
backdrop-blur-xl      /* Navigation, cards */
backdrop-blur-2xl     /* Hero badge, overlays */
bg-white/80           /* Semi-transparent white */
bg-white/20           /* Light glass effect */
```

### Box Shadows
```css
/* Standard */
shadow-lg
shadow-xl
shadow-2xl

/* Colored shadows */
shadow-xl shadow-[#0A2A4A]/20
shadow-2xl shadow-[#FFAC03]/20
hover:shadow-xl hover:shadow-[#FFAC03]/30
```

### Background Patterns
```css
/* Dot pattern */
style={{
  backgroundImage: "radial-gradient(circle, #FFAC03 1px, transparent 1px)",
  backgroundSize: "40px 40px"
}}

/* Smaller dots */
style={{
  backgroundImage: "radial-gradient(circle, #FFAC03 1px, transparent 1px)",
  backgroundSize: "30px 30px"
}}
```

### Gradient Text
```css
className="text-transparent bg-clip-text bg-gradient-to-r
           from-[#FFAC03] to-[#FF8800]"
```

---

## 🔧 Utility Classes

### Custom Utilities (globals.css)

#### Smooth Scrolling
```css
html {
  scroll-behavior: smooth;
}
```

#### Gradient Text Helper
```css
.gradient-text {
  background: linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
```

#### Reveal Animation
```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  filter: blur(8px);
  transition: opacity 0.6s ease, transform 0.6s ease, filter 0.6s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
```

---

## 📋 Component Patterns

### Section Structure
```jsx
<section className="py-32 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <motion.div className="text-center max-w-3xl mx-auto mb-20">
      <span className="text-sm font-inter font-bold tracking-widest
                       text-[#FFAC03] uppercase mb-4 block">
        SECTION LABEL
      </span>
      <h2 className="text-5xl md:text-6xl font-instrument-serif
                     tracking-tight mb-6 text-[#0A2A4A]">
        Section Title
      </h2>
      <p className="text-lg font-inter text-slate-600">
        Section description
      </p>
    </motion.div>

    {/* Section Content */}
    <motion.div variants={staggerContainer}>
      {/* Content here */}
    </motion.div>
  </div>
</section>
```

### Hero Badge Pattern
```jsx
<div className="inline-flex items-center gap-2 px-4 py-2
                rounded-full bg-[#FFAC03]/10 border border-[#FFAC03]/30">
  <Icon className="w-4 h-4 text-[#FFAC03]" />
  <span className="text-sm font-inter font-bold text-[#0A2A4A] uppercase">
    Badge Text
  </span>
</div>
```

### Stat Counter Pattern
```jsx
<div className="text-center">
  <div className="text-6xl lg:text-7xl font-instrument-serif mb-4
                  text-[#FFAC03]">
    <AnimatedCounter end={150} suffix="+" />
  </div>
  <div className="text-lg font-inter text-white/80">
    Label Text
  </div>
</div>
```

---

## 🎯 Best Practices

### Do's ✅
- Use Instrument Serif for all headings and display text
- Use Inter for all body text, labels, and UI elements
- Maintain consistent spacing using Tailwind's spacing scale
- Always add hover states to interactive elements
- Use the accent color (#FFAC03) sparingly for emphasis
- Implement smooth transitions (300-700ms)
- Add proper focus states for accessibility
- Use responsive typography scales
- Maintain consistent border radius (rounded-lg, rounded-xl, rounded-2xl, rounded-3xl)
- Use frosted glass effects for overlays

### Don'ts ❌
- Don't mix font families within the same text block
- Don't use custom colors outside the defined palette
- Avoid using pure black (#000000) - use navy (#0A2A4A) instead
- Don't stack too many animations on a single element
- Avoid inconsistent spacing patterns
- Don't use abrupt transitions (use easing functions)
- Avoid overly bright or saturated colors
- Don't use fixed pixel values - use Tailwind classes
- Avoid using too many accent colors in one section

---

## 📦 Implementation Notes

### Font Loading
```javascript
// layout.tsx
import { Inter, Instrument_Serif } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
```

### CSS Variables Setup
```css
/* globals.css */
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-accent-indigo: #4f46e5;
  --color-accent-cyan: #06b6d4;
  --font-family-inter: var(--font-inter);
  --font-family-instrument-serif: var(--font-instrument-serif);
}

:root {
  --background: #09090b;
  --foreground: #ffffff;
  --ease-premium: cubic-bezier(0.22, 1, 0.36, 1);
  --duration-std: 0.6s;
}
```

### Framer Motion Setup
```javascript
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// Use throughout components for animations
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
>
```

---

## 🌐 Accessibility

### Focus States
```css
focus:border-[#FFAC03]
focus:outline-none
focus:ring-2
focus:ring-[#FFAC03]/20
```

### Color Contrast
- Navy (#0A2A4A) on White: AAA compliant
- Orange (#FFAC03) on Navy: AA compliant
- White on Navy: AAA compliant

### Interactive Elements
- All buttons have hover states
- All links have transition effects
- Form inputs have clear focus indicators
- Icons have descriptive labels

---

## 📄 File Structure

```
app/
├── page.tsx           # Main landing page
├── not-found.tsx      # 404 page (follows design system)
├── layout.tsx         # Root layout with fonts
└── globals.css        # Global styles & utilities

public/
├── ini.png           # Logo
└── Inbuilt_infra_Landing_Page_Assets/
    └── [images]      # Portfolio & hero images
```

---

## 🚀 Quick Reference

### Common Color Combos
```css
/* Primary CTA */
bg-[#0A2A4A] text-white hover:bg-[#0d3558]

/* Accent CTA */
bg-gradient-to-r from-[#FFAC03] to-[#FF8800] text-white

/* Card */
bg-white border-slate-200 hover:border-[#FFAC03]/50

/* Badge */
bg-[#FFAC03]/10 border-[#FFAC03]/30 text-[#0A2A4A]

/* Icon Circle */
bg-[#FFAC03] text-white
```

### Common Spacing
```css
/* Section padding */
py-32 px-6

/* Card padding */
p-6 md:p-8

/* Button padding */
px-8 py-4

/* Input padding */
px-4 py-3.5

/* Gap spacing */
gap-4 md:gap-6 lg:gap-8
```

---

*Last updated: 2026-02-23*
*Design System Version: 1.0*
*Framework: Next.js 15 + Tailwind CSS v4 + Framer Motion*
