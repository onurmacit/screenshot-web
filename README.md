# Screenshot API - Landing Page

Modern, responsive landing page for Screenshot API built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✨ Modern, responsive design
- 🎨 Beautiful UI with Shadcn/ui components
- 📧 Email waitlist collection
- 💰 Pricing section
- 🎯 Feature highlights
- 📱 Mobile-first design
- ⚡ Fast performance with Next.js

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** Shadcn/ui
- **Deployment:** Vercel (recommended)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# Backend API URL (when ready)
NEXT_PUBLIC_API_URL=https://api.screenshot.example.com
```

## 📁 Project Structure

```
screenshot-web/
├── app/
│   ├── api/
│   │   └── waitlist/          # Email collection endpoint
│   ├── page.tsx               # Landing page
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Global styles
├── components/
│   └── ui/                    # Shadcn/ui components
├── lib/
│   └── utils.ts               # Utility functions
└── public/                    # Static assets
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

- **Netlify:** `npm run build` → Deploy `out` folder
- **Railway:** Connect GitHub repo
- **DigitalOcean App Platform:** Connect GitHub repo

## 🔗 Backend Integration

When the backend API is ready, update the waitlist endpoint:

```typescript
// app/api/waitlist/route.ts
const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/waitlist`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email }),
});
```

## 📝 TODO

- [ ] Connect to backend API
- [ ] Add analytics (Google Analytics / Plausible)
- [ ] Add SEO optimization
- [ ] Add blog section
- [ ] Add documentation link
- [ ] Add demo section

## 📄 License

MIT License - see LICENSE file for details.
