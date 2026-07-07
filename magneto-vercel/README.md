# Magneto – Vercel + OpenAI Hook Generator

A GitHub-ready Next.js 14 app that generates 15 punchy marketing hooks using OpenAI.

## Quick Start

1. **Create GitHub repo**
   ```bash
   git init
   git add .
   git commit -m "Initial Magneto Vercel"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/magneto-vercel.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to vercel.com → New Project → Import your GitHub repo
   - Add Environment Variable: `OPENAI_API_KEY` = your OpenAI key
   - Deploy

3. **Local dev**
   ```bash
   npm install
   cp .env.example .env.local
   # add your key to .env.local
   npm run dev
   ```

Visit http://localhost:3000

## API
POST /api/generate
Body: { product, audience, outcome, tone }
Returns: { hooks: string[] }
