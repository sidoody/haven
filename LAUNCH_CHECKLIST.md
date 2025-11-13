# Haven Ketamine - Launch Checklist

Use this checklist to prepare your site for launch. Check off items as you complete them.

## 🔧 Technical Setup

- [ ] **Upgrade Node.js to v20.9.0+**
  - Current: Check with `node --version`
  - Upgrade: `nvm install 20 && nvm use 20` or download from nodejs.org

- [ ] **Test build locally**
  - Run `npm run build` to ensure no errors
  - Run `npm run start` to test production build

- [ ] **Set up domain**
  - Purchase domain (e.g., havenketamine.com)
  - Update `metadataBase` URL in `app/layout.tsx` (line 18)
  - Configure DNS settings

## 📝 Content Updates

### Files to Search & Replace

Search for these placeholders and replace throughout the site:

- [ ] **`[Your Name]`** - Replace with physician's full name
- [ ] **`[Last Name]`** - Replace with physician's last name
- [ ] **`$___`** - Replace with actual pricing amounts
- [ ] **Placeholder contact info:**
  - Address: `TBD` in multiple locations
  - Phone: `+1-XXX-XXX-XXXX` and `(Coming soon)`
  - Email: `contact@havenketamine.com` and `(Coming soon)`
  - GPS coordinates: Update in homepage JSON-LD (line ~38-39)
  - Postal code: Update in homepage JSON-LD

### Specific Files to Update

#### 1. Homepage (`app/page.tsx`)
- [ ] Line 26: Add actual phone number
- [ ] Line 27: Add actual email
- [ ] Line 30: Add actual street address
- [ ] Line 32: Add actual postal code
- [ ] Lines 38-39: Add actual GPS coordinates

#### 2. About Page (`app/about/page.tsx`)
- [ ] Replace all instances of `[Your Name]` and `[Last Name]`
- [ ] Add physician's educational background:
  - Medical school name
  - Residency program name
  - Years of experience
- [ ] Add physician's bio and personal story

#### 3. Contact Page (`app/contact/page.tsx`)
- [ ] Add actual address (lines 45-52)
- [ ] Add actual phone number (lines 63-66)
- [ ] Add actual email (lines 77-80)
- [ ] Optional: Add Google Maps embed (line 94-103)

#### 4. FAQ Page (`app/faq/page.tsx`)
- [ ] Replace `[Last Name]` in CTA section (line 188)

#### 5. Pricing Page (`app/pricing/page.tsx`)
- [ ] Add pricing for initial evaluation (line 64)
- [ ] Add pricing for single infusion (line 91)
- [ ] Add pricing for 6-infusion package (line 126)
- [ ] Add pricing for IV vitamin add-ons (line 165)
- [ ] Add pricing for NAD+ infusions (line 173)

## 🔗 Form Integration

- [ ] **Choose a form backend:**
  - Option A: Formspree
  - Option B: Resend
  - Option C: Next.js API route + email service
  - Option D: Other service

- [ ] **Update `WaitlistForm.tsx`** (`app/components/WaitlistForm.tsx`)
  - Currently line 7: `// TODO: Integrate with backend service`
  - Replace `e.preventDefault()` with actual form submission

- [ ] **Test form submissions**
  - Verify emails are received
  - Check spam folders
  - Test from multiple devices

## 🔍 SEO & Analytics

- [ ] **Google Search Console**
  - Add verification meta tag in `app/layout.tsx` (line 48)
  - Submit sitemap after deployment
  - Monitor indexing and errors

- [ ] **Google Analytics**
  - Create GA4 property
  - Add tracking code to `app/layout.tsx`

- [ ] **Update domain in metadata**
  - `app/layout.tsx` line 18: Change from `havenketamine.com` to actual domain

- [ ] **Test structured data**
  - Use Google's Rich Results Test
  - Verify LocalBusiness schema
  - Verify FAQPage schema

## 📄 Legal Pages

- [ ] **Privacy Policy** (`app/privacy-policy/page.tsx`)
  - Draft complete privacy policy
  - Include HIPAA compliance details
  - Add California-specific disclosures (CCPA, CMIA)
  - Get legal review

- [ ] **Terms of Service** (`app/terms/page.tsx`)
  - Draft complete terms
  - Include cancellation policy
  - Include payment terms and refunds
  - Get legal review

## 🎨 Optional Enhancements

- [ ] **Add images**
  - Physician headshot for About page
  - Clinic interior photos
  - Hero background image
  - Treatment room photos

- [ ] **Add patient testimonials**
  - Collect testimonials (with consent)
  - Add testimonials section to homepage

- [ ] **Blog/Resources**
  - Consider adding `/blog` for SEO content
  - Articles about ketamine therapy, mental health, etc.

- [ ] **Google Maps**
  - Embed map on contact page
  - Create Google Business Profile listing

- [ ] **Social media**
  - Create social media accounts
  - Add social links to footer
  - Add social share images (og:image, twitter:image)

## 🚀 Pre-Launch Testing

- [ ] **Cross-browser testing**
  - Chrome ✓
  - Safari ✓
  - Firefox ✓
  - Edge ✓

- [ ] **Mobile testing**
  - iOS Safari ✓
  - Android Chrome ✓
  - Various screen sizes ✓

- [ ] **Accessibility audit**
  - Run Lighthouse accessibility test
  - Test with screen reader
  - Verify keyboard navigation

- [ ] **Performance audit**
  - Run Lighthouse performance test
  - Target: 90+ score
  - Optimize images if needed

- [ ] **Load testing**
  - Test all internal links work
  - Test form submissions
  - Test on slow connections

## 📱 Deployment

- [ ] **Choose hosting platform**
  - Recommended: Vercel (zero-config, Next.js optimized)
  - Alternative: Netlify, self-hosted, etc.

- [ ] **Deploy to production**
  - Connect GitHub repo to hosting platform
  - Set environment variables (if any)
  - Deploy and test live URL

- [ ] **Configure SSL certificate**
  - Should be automatic on Vercel/Netlify
  - Verify HTTPS works

- [ ] **Set up monitoring**
  - Uptime monitoring (UptimeRobot, etc.)
  - Error tracking (Sentry, etc.)

## 🔒 Security & Compliance

- [ ] **HIPAA considerations**
  - Ensure form data is encrypted
  - Sign BAA with any third-party services
  - Review data handling practices

- [ ] **Cookie consent**
  - Add cookie banner if using analytics/tracking
  - California required if using cookies

- [ ] **Content review**
  - Verify all medical claims are accurate
  - Get physician approval on all content
  - Ensure compliance with medical advertising laws

## 📧 Launch Communications

- [ ] **Email existing waitlist** (if any)
  - Announce launch
  - Share link to new website
  - Provide scheduling information

- [ ] **Social media announcement**
  - Post on relevant platforms
  - Share with local community groups

- [ ] **Local SEO**
  - Create Google Business Profile
  - Add to local directories
  - Encourage early patient reviews

---

## Quick Search Commands

Use these to find placeholders quickly:

```bash
# Find all placeholder text that needs updating
grep -r "\[Your Name\]" app/
grep -r "\[Last Name\]" app/
grep -r "TODO:" app/
grep -r "\$___" app/
grep -r "TBD" app/
grep -r "Coming soon" app/
```

## Deployment Commands

```bash
# Local testing
npm run build
npm run start

# Deploy to Vercel
npm install -g vercel
vercel

# Or connect GitHub repo to Vercel dashboard for auto-deployments
```

---

**Need Help?** Refer to README.md for detailed project information and technical documentation.

