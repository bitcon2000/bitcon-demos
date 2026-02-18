# Bob's Gun Store - Website

Professional website for Bob's Gun Store in Waterloo, Ontario.

## Pages

- **index.html** - Home page with hero section and featured services
- **about.html** - About page with company story and team info
- **booking.html** - Range time booking form with pricing and hours
- **membership.html** - Membership plans (Bronze, Silver, Gold) with features

## Setup

All pages use Tailwind CSS via CDN — no build process needed.

### Local Testing
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Or use Live Server in VS Code
```

Then open `http://localhost:8000` in your browser.

### Deployment

1. **Static host** - Upload all HTML files to any web host (GitHub Pages, Netlify, etc.)
2. **Domain** - Point your domain to the hosting service
3. **Contact form** - The booking form currently submits locally. For production, integrate with:
   - Formspree (free, no backend needed)
   - Firebase
   - Your own backend service

## Contact Info (Fake)

- **Phone:** 519-999-9191
- **Email:** info@bobsgunstore.ca
- **Address:** 1247 King Street West, Waterloo, ON N2J 4Z1
- **Hours:** Mon-Fri 10am-9pm, Sat-Sun 11am-6pm

## Colors

- Primary: Amber (`#f59e0b`)
- Background: Slate gray (`#0f172a`)
- Borders: Slate 700 (`#334155`)

## Notes

- Tailwind utility classes make it fully responsive
- Dark mode optimized for modern aesthetics
- All fake contact details for demo purposes
