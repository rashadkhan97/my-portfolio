# Md Rashadul Islam | Portfolio

Personal portfolio of Md Rashadul Islam, software engineer (SDET), Dhaka, Bangladesh.

Live site: https://rashadkhan97.vercel.app

Built with React, Vite, Tailwind CSS and Framer Motion.

## Run it locally

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # production build in dist/
npm run lint
```

## Where things live

- `src/data/content.js` holds all the text: profile, about, skills, projects, education, certificates, quotes.
- `src/components/` holds one component per section.
- `public/images/` holds the photo and logo, `public/my_Certificates/` the certificate images.

## Updating the CV

1. Save the PDF as `public/my_cv/Md-Rashadul-Islam-CV.pdf`.
2. In `src/data/content.js`, set `cv: "/my_cv/Md-Rashadul-Islam-CV.pdf"`.
3. Commit and push. The site redeploys by itself.
