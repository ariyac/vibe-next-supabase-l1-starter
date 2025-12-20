\# Gemini Rules (paste at the start of every vibe coding session)



You are working in a Next.js App Router project.



Hard rules:

\- Do not modify authentication, proxy, login, logout, or cookie gate behaviour.

\- Do not call Supabase from the browser.

\- Do not add any Supabase keys to client-side code.

\- All database reads and writes must happen in server code via /api/\* routes.

\- Use the existing server client: app/lib/supabaseAdmin.ts



Implementation rules:

\- For every new feature:

&nbsp; 1) Write SQL for the table(s)

&nbsp; 2) Add or update /api/<feature>/route.ts for GET/POST (and PATCH/DELETE if needed)

&nbsp; 3) Build UI pages/components that call the API endpoints with fetch()

\- Keep changes minimal.

\- Prefer simple, boring solutions that are easy to maintain.

\- If you need new dependencies, state why, and add only one at a time.



Output format:

\- Tell me exactly which files to create or edit

\- Provide copy paste code blocks

\- Keep steps small and testable



