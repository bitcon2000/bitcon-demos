# Gibson's Janitorial Service

A premium, modern website for Gibson's Commercial Cleaning Services in Waterloo, Ontario.

## Features

- ✨ Modern, responsive design with Tailwind CSS
- 🎯 Multiple service showcases with hover animations
- 💬 Client testimonials section
- 📋 Integrated contact form for quote requests
- 📱 Fully mobile-responsive
- ⚡ Next.js for optimal performance
- 🌐 Google Places API integration ready
- 🎨 Smooth scroll animations and transitions

## Tech Stack

- **Framework:** Next.js 16+
- **Styling:** Tailwind CSS 4+
- **Language:** TypeScript
- **Deployment:** GitHub Pages

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see the site in development.

### Production Build

```bash
npm run build
npm start
```

### Export (Static Export for GitHub Pages)

```bash
npm run export
```

This generates static HTML files in the `out/` directory ready for deployment.

## Sections

1. **Hero** - Eye-catching banner with gradient background and CTA buttons
2. **Services** - Grid of premium services with icons and features
3. **Why Choose Us** - 6 numbered benefits highlighting company strengths
4. **Testimonials** - Client quotes with ratings on dark background
5. **Contact** - Quote request form with business information
6. **Footer** - Navigation, links, and social media

## Customization

- Edit company details in `components/Contact.tsx`
- Update testimonials in `components/Testimonials.tsx`
- Modify colors in `tailwind.config.js`
- Add new pages in the `app/` directory

## Environment Variables

Set in `.env.local`:

```
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your_api_key_here
```

## License

MIT - Feel free to use this as a template for other service businesses.

---

Built with ❤️ for Gibson's Cleaning Services
