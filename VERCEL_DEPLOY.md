# Vercel Deployment - Hızlı Başlangıç

## ✅ GitHub Repo Hazır
- **Repo URL:** https://github.com/onurmacit/screenshot-web
- **Status:** ✅ Pushed to main branch

## 🚀 Vercel Deployment (2 Yol)

### Yol 1: Web UI (Önerilen - En Kolay)

1. **Vercel'e Git:**
   - [vercel.com](https://vercel.com) → Sign in with GitHub

2. **Proje Ekle:**
   - **"Add New..."** → **"Project"**
   - **"Import Git Repository"** → `screenshot-web` seç
   - **"Import"** tıkla

3. **Yapılandırma (Otomatik):**
   - Framework Preset: **Next.js** (otomatik algılanır)
   - Root Directory: `./` (bırak)
   - Build Command: `npm run build` (otomatik)
   - Output Directory: `.next` (otomatik)

4. **Deploy:**
   - **"Deploy"** butonuna tıkla
   - 2 dakika içinde canlı olacak! 🎉

5. **URL Al:**
   - Deploy tamamlandıktan sonra URL alacaksın:
   - Örnek: `https://screenshot-web.vercel.app`

---

### Yol 2: Vercel CLI (Terminal)

```bash
cd /Users/onurmacit/screenshot-web

# İlk seferde login (tarayıcı açılacak)
vercel login

# Deploy et
vercel --yes

# Production'a deploy
vercel --prod
```

---

## 🔧 Environment Variables (Opsiyonel)

Backend API hazır olduğunda:

1. Vercel Dashboard → Project Settings → Environment Variables
2. Add:
   - **Name:** `NEXT_PUBLIC_API_URL`
   - **Value:** `https://api.screenshot.example.com`
3. Redeploy

---

## 🌐 Custom Domain (Opsiyonel)

1. Vercel Dashboard → Settings → Domains
2. Add domain: `screenshotapi.com` (veya istediğin domain)
3. DNS ayarlarını yap (Vercel talimat verir)
4. SSL otomatik aktif olur

---

## 📊 Sonraki Adımlar

- [ ] Vercel'e deploy et
- [ ] URL'i test et
- [ ] Custom domain ekle (opsiyonel)
- [ ] Analytics ekle (Google Analytics / Plausible)
- [ ] Backend API'ye bağla

---

## ✅ Deployment Checklist

- [x] GitHub repo oluşturuldu
- [x] Kod push edildi
- [ ] Vercel'e deploy edildi
- [ ] URL test edildi
- [ ] Email formu test edildi

---

**Sorun mu var?** Vercel dokümantasyonu: https://vercel.com/docs

