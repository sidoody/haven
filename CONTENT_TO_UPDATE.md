# Content to Update - Quick Reference

This document lists all placeholder content that needs to be replaced with real information.

## 🔎 Global Search & Replace

Use your code editor's "Find in Files" or "Search & Replace" feature for these:

### 1. Physician Name
**Search for:** `[Your Name]`  
**Replace with:** Full physician name (e.g., "Dr. Sarah Johnson")  
**Files affected:** homepage, about page, FAQ, pricing

**Search for:** `[Last Name]`  
**Replace with:** Physician's last name only (e.g., "Johnson")  
**Files affected:** about page, FAQ

### 2. Pricing
**Search for:** `$___`  
**Replace with:** Actual prices (e.g., "$250", "$400", "$2,100")  
**Files affected:** homepage, pricing page

**Suggested Pricing Structure:**
- Initial medical evaluation: $250-350
- Single ketamine infusion: $400-600
- 6-infusion series package: $2,100-3,200 (discounted)
- IV vitamin add-ons: $75-200
- NAD+ infusions: $300-600

### 3. Contact Information

**Phone Number:**
- Search for: `+1-XXX-XXX-XXXX` (in JSON-LD)
- Search for: `(Coming soon)` (in contact page)
- Replace with: `(949) 555-1234` (your actual number)

**Email:**
- Search for: `contact@havenketamine.com` (in JSON-LD)
- Search for: `(Coming soon)` (in contact page)
- Replace with: Your actual email

**Address:**
- Search for: `TBD` (in JSON-LD and contact page)
- Replace with: Your actual address
  - Street address
  - Suite/unit number (if applicable)
  - City: Irvine
  - State: CA
  - Zip: 92618 (or your actual zip)

**GPS Coordinates:**
- File: `app/page.tsx` (lines 38-39)
- Current: `latitude: 33.7175, longitude: -117.8311`
- Replace with: Your clinic's actual coordinates
- Find coordinates: Google Maps → Right-click location → Click coordinates to copy

## 📄 File-by-File Updates

### Homepage (`app/page.tsx`)

**Line 26:** Phone number in JSON-LD
```typescript
telephone: '+1-XXX-XXX-XXXX', // TODO: Add actual phone number
```

**Line 27:** Email in JSON-LD
```typescript
email: 'contact@havenketamine.com', // TODO: Add actual email
```

**Lines 30-33:** Address in JSON-LD
```typescript
address: {
  '@type': 'PostalAddress',
  streetAddress: 'TBD', // TODO: Add actual address
  addressLocality: 'Irvine',
  addressRegion: 'CA',
  postalCode: '92618', // TODO: Add actual postal code
  addressCountry: 'US',
},
```

**Lines 38-40:** GPS coordinates in JSON-LD
```typescript
geo: {
  '@type': 'GeoCoordinates',
  latitude: 33.7175, // TODO: Add actual coordinates
  longitude: -117.8311,
},
```

**Lines 192-196:** Pricing placeholder
```typescript
{ item: 'Initial medical evaluation', price: '$___' },
{ item: 'Single ketamine infusion', price: '$___' },
{ item: '6-infusion series (discounted package)', price: '$___' },
{ item: 'Optional IV vitamin or NAD+ add-ons', price: 'from $___' },
```

### About Page (`app/about/page.tsx`)

**Lines 41-43, 49-51, 56-57, etc.:** Physician references
- Replace `[Your Name]` with full name
- Replace `[Last Name]` with last name only

**Lines 66-71:** Add physician's credentials
```typescript
Dr. [Your Name] is a board-certified emergency medicine physician...
He completed [medical school] and [residency program], and has 
practiced emergency medicine for [X] years.
```

**Example replacement:**
```typescript
Dr. Michael Chen is a board-certified emergency medicine physician...
He completed UCLA School of Medicine and his emergency medicine 
residency at Stanford, and has practiced emergency medicine for 8 years.
```

**Lines 87-92:** Update credentials list
```typescript
<li>• [Medical School Name]</li>
<li>• [Residency Program Name]</li>
```

### Pricing Page (`app/pricing/page.tsx`)

**Line 64:** Initial evaluation price
```typescript
<div className="text-4xl font-bold text-sky-600 mb-4">$___</div>
```

**Line 91:** Single infusion price
```typescript
<div className="text-4xl font-bold text-sky-600 mb-4">$___</div>
```

**Line 126:** Package price
```typescript
<div className="text-4xl font-bold mb-4">$___</div>
```

**Lines 165, 173:** Add-on prices
```typescript
<div className="text-2xl font-bold text-sky-600 mb-3">from $___</div>
```

### Contact Page (`app/contact/page.tsx`)

**Lines 45-52:** Address section
```typescript
<p className="text-slate-600">
  North Irvine, CA<br />
  <span className="text-sm text-slate-500">(Exact address coming soon)</span>
</p>
```

**Replace with:**
```typescript
<p className="text-slate-600">
  123 Main Street, Suite 200<br />
  Irvine, CA 92618
</p>
```

**Lines 63-68:** Phone section
```typescript
<p className="text-slate-600">
  <span className="text-sm text-slate-500">(Coming soon)</span>
</p>
```

**Replace with:**
```typescript
<p className="text-slate-600">
  <a href="tel:+19495551234" className="hover:text-sky-600">
    (949) 555-1234
  </a>
</p>
```

**Lines 77-82:** Email section
```typescript
<p className="text-slate-600">
  <span className="text-sm text-slate-500">(Coming soon)</span>
</p>
```

**Replace with:**
```typescript
<p className="text-slate-600">
  <a href="mailto:info@havenketamine.com" className="hover:text-sky-600">
    info@havenketamine.com
  </a>
</p>
```

### FAQ Page (`app/faq/page.tsx`)

**Line 188:** Physician last name in CTA
```typescript
...or schedule a free 10-minute call with Dr. [Last Name]...
```

**Replace with:**
```typescript
...or schedule a free 10-minute call with Dr. Johnson...
```

### Layout (`app/layout.tsx`)

**Line 18:** Update domain
```typescript
metadataBase: new URL('https://havenketamine.com'),
```

**Replace with your actual domain:**
```typescript
metadataBase: new URL('https://yourdomain.com'),
```

**Line 48:** Add Google Search Console verification (optional)
```typescript
verification: {
  // TODO: Add Google Search Console verification code
},
```

**Replace with:**
```typescript
verification: {
  google: 'your-google-verification-code-here',
},
```

## 🎨 Optional: Add Physician Bio

Consider expanding the "About" page with:

1. **Personal Story:**
   - Why did you become interested in ketamine therapy?
   - What inspired you to open Haven Ketamine?
   - Personal mission or vision

2. **Professional Background:**
   - Years in emergency medicine
   - Number of patients treated with ketamine
   - Any specialized training in mental health or ketamine
   - Publications or speaking engagements

3. **Community Involvement:**
   - Professional associations (ABEM, AMA, etc.)
   - Local medical community involvement
   - Volunteer work or advocacy

## 📸 Images to Add (Optional)

While the site works great without images, consider adding:

1. **Physician headshot** - Professional, friendly photo
2. **Clinic exterior** - Help patients find your location
3. **Treatment room** - Show the calm, spa-like environment
4. **Reception area** - Welcoming, professional space
5. **Hero background** - Subtle, calming abstract or nature image

### How to Add Images:

```typescript
import Image from 'next/image';

<Image 
  src="/images/dr-name.jpg" 
  alt="Dr. [Name], Board-Certified Emergency Physician"
  width={400}
  height={400}
  className="rounded-2xl"
/>
```

Place images in the `/public/images/` folder.

## ✅ Validation Checklist

After making updates, verify:

- [ ] No remaining `[Your Name]` or `[Last Name]` placeholders
- [ ] No remaining `$___` pricing placeholders
- [ ] No remaining `TBD` or `Coming soon` text
- [ ] All contact info is correct and consistent
- [ ] GPS coordinates match your address
- [ ] Domain is updated in metadata
- [ ] Phone/email links work (`tel:` and `mailto:`)

## 🔧 Quick Commands

### Find remaining placeholders:
```bash
cd /Users/saudsiddiqui/haven-ketamine-land
grep -r "\[Your Name\]" app/
grep -r "\[Last Name\]" app/
grep -r "\$___" app/
grep -r "TODO:" app/
grep -r "TBD" app/
```

### Count remaining placeholders:
```bash
grep -r "\[Your Name\]" app/ | wc -l
```

---

**Tip:** Make all these updates before deploying to production. Use version control (git) so you can track changes and revert if needed.

