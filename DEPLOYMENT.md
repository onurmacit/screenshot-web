# Deployment Guide

## 🚀 Vercel Deployment (Recommended)

### Step 1: Push to GitHub

```bash
# Create a new repository on GitHub
# Then push your code:
git remote add origin https://github.com/yourusername/screenshot-web.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your `screenshot-web` repository
5. Vercel will auto-detect Next.js
6. Click "Deploy"

**That's it!** Your site will be live in ~2 minutes.

### Step 3: Configure Environment Variables (Optional)

If you have a backend API:

1. Go to Project Settings → Environment Variables
2. Add:
   - `NEXT_PUBLIC_API_URL=https://api.screenshot.example.com`

## 🌐 Custom Domain

1. Go to Project Settings → Domains
2. Add your domain (e.g., `screenshotapi.com`)
3. Follow DNS instructions
4. SSL certificate is automatic

## 📊 Analytics (Optional)

### Google Analytics

1. Get GA4 tracking ID
2. Add to `app/layout.tsx`:

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

### Plausible (Privacy-friendly)

1. Sign up at [plausible.io](https://plausible.io)
2. Add domain
3. Add script to `app/layout.tsx`

## 🔄 Continuous Deployment

Vercel automatically deploys:
- Every push to `main` branch → Production
- Every PR → Preview deployment

## 📈 Performance

- **CDN:** Automatic (Vercel Edge Network)
- **Caching:** Automatic
- **Image Optimization:** Next.js Image component
- **Font Optimization:** Automatic

## 🆘 Troubleshooting

### Build Fails

```bash
# Test locally first
npm run build
```

### Environment Variables Not Working

- Make sure they start with `NEXT_PUBLIC_` for client-side
- Redeploy after adding variables

### Domain Not Working

- Check DNS settings
- Wait 24-48 hours for propagation
- Check SSL certificate status

## 📝 Next Steps

1. ✅ Deploy to Vercel
2. ✅ Add custom domain
3. ✅ Set up analytics
4. ✅ Connect backend API
5. ✅ Test email collection
6. ✅ Share with users!

