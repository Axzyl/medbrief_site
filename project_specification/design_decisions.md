# Design Decisions — MedBrief Pitch Website

## Content Strategy
- **Content approach**: Real MedBrief business content from Wharton Startup Competition application
- **Visual assets**: Product mockups, workflow diagrams, comparison tables
- **Tone**: Professional, trustworthy, precise — reflecting the legal/medical audience

## Visual Design
- **Color scheme**: Blue (Trust/Technology/Medical)
  - Primary: Deep professional blue (#1e3a5f or similar)
  - Accent: Lighter blue for CTAs and highlights
  - Neutral: Clean whites and light grays for readability
- **Style**: Clean, minimal, optimized for skimming
- **Typography**: Professional, highly readable (system fonts or Inter/Open Sans)
- **Imagery**:
  - Abstract document/data visualization graphics
  - Clean UI mockups showing the product
  - Professional team photos (if available)
  - Icons for features (document extraction, verification, chat)

## Brand Positioning
- **Key message**: Verifiable, traceable, defensible
- **Emotional appeal**: Trust, precision, confidence
- **Avoid**: Generic AI hype, technical jargon, unsubstantiated claims

## Site Structure
- **Page structure**: Main page only (single scroll)
- **No subpages**: Demo, Technology, Team, Contact integrated into main scroll
- **Sticky header**: Logo + "Request Demo" CTA visible at all times

## Sections (in scroll order)
1. Hero / Above the Fold
2. Problem
3. Solution (3 core capabilities)
4. Product / Demo (Visual Section)
5. Market Opportunity
6. Business Model
7. Competitive Landscape
8. Traction / Validation
9. Team
10. Roadmap & Ask
11. Final CTA / Contact

## Section-Specific Design Notes

### Hero
- Full viewport height
- Large headline with clear value proposition
- Prominent CTA buttons
- Product visual on right (desktop) or below (mobile)

### Problem
- Use icons or illustrations for each pain point
- Consider a simple infographic showing the workflow breakdown
- Stats displayed prominently (20-40% of case prep time)

### Solution
- Three-column layout on desktop for the three capabilities
- Icons for each capability
- Brief bullet points, not paragraphs

### Product/Demo
- Screenshot carousel or grid
- Consider an animated workflow diagram
- Clear labels on each visual

### Competitive Landscape
- Clean comparison table
- MedBrief column highlighted
- Checkmarks/X marks for feature comparison

### Traction
- Large numbers displayed prominently (600+ pages, 70 cases)
- Testimonial-style quotes if available
- Progress indicators or milestone checklist

### Team
- Grid of team member cards
- Photo, role, one-line credential
- Link to LinkedIn (optional)

### Roadmap
- Visual timeline or step progression
- Clear "Ask" section with bullet points

## Technical Stack
- React 18 + Vite
- Tailwind CSS
- React Router (HashRouter for GitHub Pages compatibility)
- GitHub Actions for deployment
- Framer Motion for subtle animations (optional)

## Responsive Design
- Mobile-first approach
- Breakpoints: mobile (<640px), tablet (640-1024px), desktop (>1024px)
- Single column layout on mobile
- Collapsible sections for mobile if needed

## Performance
- Lazy load images below the fold
- Optimize all images (WebP format preferred)
- Minimal JavaScript bundle
- Target: <3s first contentful paint

## Accessibility
- WCAG 2.1 AA compliance
- Sufficient color contrast
- Alt text for all images
- Keyboard navigation support
- Screen reader friendly headings
