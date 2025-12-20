\# New App Checklist (repeat every time)



\## 1) Create repo (GitHub)

\- Use this template

\- Name the repo

\- Confirm repo exists on GitHub



\## 2) Create database (Supabase)

\- Create a new Supabase project

\- SQL Editor: run your table SQL

\- Copy:

&nbsp; - Project URL

&nbsp; - Service role key (secret)



\## 3) Deploy (Vercel)

\- Import the GitHub repo

\- Add Environment Variables:

&nbsp; - APP\_PASSWORD

&nbsp; - APP\_COOKIE\_NAME = vibe\_app\_auth

&nbsp; - SUPABASE\_URL

&nbsp; - SUPABASE\_SERVICE\_ROLE\_KEY

\- Deploy

\- Test:

&nbsp; - /login works

&nbsp; - Logs page loads

&nbsp; - Create a log, refresh, it persists



\## 4) Run locally

\- Clone repo

\- npm install

\- Create .env.local with:

&nbsp; - APP\_PASSWORD

&nbsp; - APP\_COOKIE\_NAME

&nbsp; - SUPABASE\_URL

&nbsp; - SUPABASE\_SERVICE\_ROLE\_KEY

\- npm run dev

\- Confirm login + logs works locally too



\## 5) Start building

\- Add new tables via SQL

\- Add /api routes for read/write

\- Build UI that calls /api routes

\- Do not touch auth, proxy, login, logout unless you are intentionally upgrading the template



