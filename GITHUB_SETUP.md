# GitHub Repository Setup

## Adım 1: GitHub'da Repo Oluştur

1. [GitHub.com](https://github.com) → Sign in
2. Sağ üstteki **"+"** → **"New repository"**
3. Repository name: `screenshot-web`
4. Description: `Landing page for Screenshot API - Built with Next.js`
5. **Public** seç (veya Private)
6. **"Create repository"** tıkla

## Adım 2: Remote Ekle ve Push Et

Aşağıdaki komutları çalıştır (GitHub'dan aldığın URL'i kullan):

```bash
cd /Users/onurmacit/screenshot-web
git remote add origin https://github.com/YOUR_USERNAME/screenshot-web.git
git push -u origin main
```

**Not:** `YOUR_USERNAME` yerine kendi GitHub kullanıcı adını yaz.

## Adım 3: Vercel Deployment

1. [vercel.com](https://vercel.com) → Sign in with GitHub
2. **"Add New..."** → **"Project"**
3. Import `screenshot-web` repository
4. Vercel otomatik olarak Next.js'i algılayacak
5. **"Deploy"** butonuna tıkla
6. 2 dakika içinde siten canlı olacak! 🎉

## Sonraki Adımlar

- Custom domain ekle (opsiyonel)
- Environment variables ekle (backend API URL için)
- Analytics ekle (Google Analytics / Plausible)

