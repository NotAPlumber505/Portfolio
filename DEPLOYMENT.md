# 🚀 Vercel Deployment Checklist

## ✅ Pre-Deployment Checklist

- [x] All assets moved to `public/assets/` folder
- [x] Asset paths updated in `projects.json` (use `/assets/` not `/src/assets/`)
- [x] `vercel.json` configuration added for SPA routing
- [x] Production build successful (`npm run build`)
- [x] No TypeScript/ESLint errors
- [x] README.md updated with deployment instructions
- [x] All social media links verified (LinkedIn, GitHub)
- [x] Profile picture and favicon in correct locations

## 📋 Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your `Portfolio` repository

3. **Configure Project** (Auto-detected)
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes for build
   - Get your live URL: `https://your-portfolio.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## 🔍 Post-Deployment Verification

After deployment, test these features:

- [ ] Homepage loads correctly with typing effect
- [ ] All navigation links work (About, Experience, Education, Projects, Contact)
- [ ] Mobile navigation appears on small screens
- [ ] Desktop navigation appears on large screens
- [ ] Theme toggle works (dark/light mode)
- [ ] Project logos display correctly
- [ ] Project detail pages load with all content
- [ ] Project videos/demos embed properly
- [ ] External links work (GitHub, LinkedIn, project demos)
- [ ] Contact form/links functional
- [ ] Favicon appears in browser tab
- [ ] Responsive design works on mobile/tablet/desktop

## 🐛 Troubleshooting

### Assets Not Loading
- Check that assets are in `public/assets/`
- Verify paths in JSON use `/assets/` not `/src/assets/`
- Clear browser cache

### Routing Issues (404 on refresh)
- Ensure `vercel.json` exists with SPA rewrite rules
- Redeploy if added after initial deployment

### Build Errors
```bash
# Clear and rebuild
rm -rf dist node_modules
npm install
npm run build
```

## 📱 Custom Domain (Optional)

1. Go to Vercel Dashboard > Your Project > Settings > Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for DNS propagation (up to 48 hours)

## 🎯 Performance Optimization

Your portfolio is already optimized with:
- ✅ Vite production build (minified, tree-shaken)
- ✅ Code splitting with React Router
- ✅ Optimized images (WebP format where possible)
- ✅ Lazy loading for routes
- ✅ CSS purging with Tailwind

## 📊 Analytics (Optional)

Add Vercel Analytics:
```bash
npm install @vercel/analytics
```

Then in `src/main.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

// Add <Analytics /> to your app
```

## 🔐 Environment Variables (If Needed)

For APIs or secrets, add in Vercel Dashboard:
- Settings > Environment Variables
- Add key-value pairs
- Redeploy for changes to take effect

---

**Ready to Deploy!** 🎉

Your portfolio is production-ready. Follow the steps above to go live!
