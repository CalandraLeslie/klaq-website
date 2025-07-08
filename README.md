# 95.5 KLAQ - Professional Radio Station Website

A modern, professional website for KLAQ 95.5 FM radio station built with Next.js 15, TypeScript, and Tailwind CSS, following best UX practices.

## Features

### 🎵 Live Streaming
- High-quality audio streaming
- Interactive stream player with volume controls
- Real-time "Now Playing" information
- Multiple stream quality options

### 📱 Responsive Design
- Mobile-first responsive layout
- Optimized for all device sizes
- Touch-friendly interface
- Progressive Web App ready

### 🎯 UX Best Practices
- Fast loading times
- High contrast for accessibility
- Smooth animations and transitions
- Intuitive navigation
- Clean, professional design
- No ads or distractions

### 🎙️ DJ Profiles
- Meet the DJs section with detailed profiles
- Show schedules and time slots
- Social media integration
- Interactive DJ modal details

### 📰 News & Content
- Latest rock music news
- Local El Paso content
- Article categorization and filtering
- Newsletter subscription

### ⚡ Performance
- Next.js 15 with App Router
- Server-side rendering
- Optimized images and assets
- SEO-friendly structure

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Date Utilities**: date-fns

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd klaq-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── listen/            # Listen Live page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Header.tsx         # Main navigation
│   ├── Footer.tsx         # Site footer
│   ├── HeroSection.tsx    # Hero banner
│   ├── LiveStreamPlayer.tsx # Audio player
│   ├── NewsSection.tsx    # News articles
│   └── DJSection.tsx      # DJ profiles
└── .github/
    └── copilot-instructions.md # Copilot customization
```

## Design Principles

### Accessibility
- WCAG 2.1 AA compliance
- High contrast ratios
- Keyboard navigation support
- Screen reader friendly
- Focus indicators

### Performance
- Core Web Vitals optimized
- Lazy loading for images
- Minimal JavaScript bundles
- Efficient CSS delivery

### User Experience
- Clean, professional aesthetics
- Consistent spacing and typography
- Intuitive navigation patterns
- Fast, responsive interactions
- Clear content hierarchy

## Customization

### Colors
The design uses a red and gray color palette defined in `globals.css`:
- Primary Red: `#dc2626`
- Dark Red: `#991b1b`
- Text Gray: `#111827`
- Background Gray: `#f9fafb`

### Typography
- Headings: Roboto Condensed
- Body: Inter
- Both fonts are loaded from Google Fonts

### Adding Content
- News articles: Update the `mockArticles` array in `NewsSection.tsx`
- DJ profiles: Update the `djProfiles` array in `DJSection.tsx`
- Stream settings: Modify `LiveStreamPlayer.tsx`

## Deployment

The project is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting provider

### Build for Production
```bash
npm run build
```

## Contributing

1. Follow the existing code style
2. Use TypeScript strictly
3. Follow accessibility guidelines
4. Test on multiple devices
5. Maintain performance standards

## License

This project is proprietary software for 95.5 KLAQ radio station.

## Support

For technical support or questions, contact the development team.
