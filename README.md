# Haven Ketamine - Marketing Website

Marketing website for Haven Ketamine, a physician-led ketamine therapy clinic in North Irvine, CA.

## Tech Stack

- **Framework:** Next.js 16.0.3 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first approach)
- **Fonts:** Geist Sans & Geist Mono
- **Node.js:** Requires v20.9.0 or higher

## Requirements

⚠️ **Important:** This project requires Node.js v20.9.0 or higher. If you're running Node 18.x, you'll need to upgrade.

To check your Node version:
```bash
node --version
```

To upgrade Node.js:
- Using nvm: `nvm install 20 && nvm use 20`
- Download directly: https://nodejs.org/

## Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Site navigation
│   ├── Footer.tsx      # Site footer
│   └── WaitlistForm.tsx # Contact/waitlist form
├── about/              # About page
├── contact/            # Contact page
├── faq/                # FAQ page (with JSON-LD)
├── ketamine-therapy/   # Educational page
├── pricing/            # Pricing page
├── privacy-policy/     # Privacy policy placeholder
├── terms/              # Terms of service placeholder
├── page.tsx            # Homepage (with JSON-LD)
├── layout.tsx          # Root layout with metadata
└── globals.css         # Global styles
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Pages

- `/` - Homepage with hero, features, pricing teaser, FAQ preview, and waitlist form
- `/about` - About the clinic and physician
- `/ketamine-therapy` - Educational content about ketamine therapy (SEO-optimized)
- `/pricing` - Transparent pricing information
- `/faq` - Comprehensive FAQ with structured data
- `/contact` - Contact information and waitlist form
- `/privacy-policy` - Privacy policy placeholder
- `/terms` - Terms of service placeholder

## SEO Features

✅ **Optimized for:** "ketamine therapy in Irvine, CA" and related searches

- Unique meta titles and descriptions on every page
- Semantic HTML with proper heading hierarchy
- JSON-LD structured data:
  - LocalBusiness schema on homepage
  - FAQPage schema on FAQ page
- Open Graph and Twitter Card metadata
- Mobile-first responsive design

## Key Features

- **Physician-Led Focus:** Emphasizes board-certified emergency physician oversight
- **Local SEO:** Targets Irvine, Orange County, and surrounding areas
- **Accessibility:** Semantic HTML, proper labels, good contrast ratios
- **Mobile-Responsive:** Works beautifully on all devices
- **Fast Loading:** Optimized with Next.js Image and modern best practices
- **Forms Ready:** Waitlist forms included (TODO: integrate backend)

## TODO Items

Before launch, you'll need to:

1. **Update placeholder content:**
   - Replace `[Your Name]` and `[Last Name]` with actual physician name throughout site
   - Add actual clinic address, phone number, and email
   - Add actual pricing amounts
   - Update GPS coordinates in JSON-LD

2. **Form Integration:**
   - Integrate waitlist form with backend service (Formspree, Resend, custom API, etc.)
   - Currently forms prevent default and log to console

3. **Add Images:**
   - Consider adding hero images, physician headshot, clinic photos
   - All `<Image>` components are ready to use

4. **Domain Setup:**
   - Update `metadataBase` URL in `app/layout.tsx`
   - Set up DNS and SSL certificate

5. **Analytics:**
   - Add Google Analytics or similar tracking
   - Add Google Search Console verification

6. **Legal Pages:**
   - Complete privacy policy
   - Complete terms of service

7. **Optional Enhancements:**
   - Add actual map to contact page (Google Maps embed)
   - Add testimonials section
   - Add blog/resources section

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Design System

**Colors:**
- Primary: Sky Blue (`sky-500`, `sky-600`)
- Neutral: Slate grays (`slate-50` through `slate-900`)
- Background: `slate-50`
- Text: `slate-900`, `slate-700`, `slate-600`

**Typography:**
- Headings: Bold, large scale (3xl-5xl)
- Body: Base size (16px), good line height
- Font: Geist Sans (modern, clean)

**Components:**
- Buttons: Rounded-full, bold text
- Cards: Rounded-2xl, subtle shadows
- Sections: Consistent py-16 to py-24 spacing

## Deployment

This site is ready to deploy to:
- **Vercel** (recommended) - Zero-config deployment
- **Netlify** - Easy setup
- **Any Node.js hosting** - Self-host anywhere

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## Support

For questions or issues, contact the development team.
