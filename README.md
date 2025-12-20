This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Vibe Next Supabase L1 Starter

A reusable starter for “vibe coded” apps:
- Private behind one password (L1)
- Deployed to a URL (Vercel)
- Stores data in Supabase
- Supabase is server-only (service role key), the browser never talks to Supabase directly

## The new app instance process (do this every time)

### 0) You need
- Git installed
- Node.js installed
- A GitHub account
- A Vercel account
- A Supabase account

---

## Step 1: Create a new repo from the template (GitHub)
1) Open this template repo on GitHub
2) Click **Use this template**
3) Name your new app repo (eg `idea-tracker`)
4) Create the repo

---

## Step 2: Clone the new repo to your computer
```bash
git clone <NEW_REPO_URL>
cd <NEW_REPO_FOLDER>
npm install

