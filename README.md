# Arabian Cases & Furniture

A modern, responsive website for Arabian Cases & Furniture - a UAE-based manufacturer of custom flight cases, foam inserts, shipping crates, custom bags, exhibition stands, and bespoke furniture.

## Tech Stack

- **Framework**: TanStack Start (React-based SSR framework)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Language**: TypeScript

## Features

- Fully responsive design with mobile-first approach
- Product catalog with categories and detailed product pages
- Portfolio gallery showcasing completed projects
- Contact form with WhatsApp integration
- SEO optimized with meta tags and JSON-LD structured data
- Optimized images in WebP format for better performance

## Getting Started

### Prerequisites

- Node.js 18+ 
- Bun or npm/yarn/pnpm

### Installation

```bash
# Install dependencies
bun install
# or
npm install
```

### Development

```bash
# Start development server
bun dev
# or
npm run dev
```

### Build

```bash
# Build for production
bun build
# or
npm run build
```

### Preview

```bash
# Preview production build
bun preview
# or
npm run preview
```

## Project Structure

```
src/
├── assets/          # Static assets (images, logos)
├── components/      # Reusable React components
│   └── site/       # Site-specific components
├── data/           # Static data (catalog, portfolio items)
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── routes/         # File-based routing
└── router.tsx      # Router configuration
```

## Deployment

This project is configured for deployment on Vercel.

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the framework and configure build settings
3. Deploy with default settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

## Environment Variables

No environment variables are required for basic functionality. Add any required variables in your Vercel project settings.

## Performance Optimizations

- All images converted to WebP format for better compression
- Lazy loading for images
- Code splitting via TanStack Start
- CSS-in-JS with Tailwind CSS for minimal bundle size

## Contact

For inquiries about custom manufacturing, visit the contact page or use the WhatsApp integration.

## License

© 2024 Arabian Cases & Furniture. All rights reserved.
