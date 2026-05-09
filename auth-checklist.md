# ✅ Better Auth + NestJS Microservice — Progress Tracker

> Tell me when you finish a step and I will tick the checkbox for you!

---

## 🏗️ Phase 1 — Fix & Run the NestJS Server (✅ DONE)

_Goal: Get the server running correctly with a database connection._

- [x] **Step 1** — Add `database: pool` back to `src/auth/better-auth.ts`
- [x] **Step 2** — Update `package.json` scripts to load the `.env` file
- [x] **Step 3** — Stop and restart `npm run start:dev` — make sure it starts without errors
- [x] **Step 4** — Run the database migration to create MySQL tables
- [x] **Step 5** — Confirm the auth route is alive by opening in browser

---

## 🔒 Phase 2 — Protect Routes in NestJS (✅ DONE)

_Goal: Lock API endpoints so only logged-in users can access them._

- [x] **Step 6** — Create a new NestJS controller with a test route (e.g. `GET /me`)
- [x] **Step 7** — Add `@UseGuards(AuthGuard)` to protect that route
- [x] **Step 8** — Use `@Session()` decorator to return the logged-in user's info
- [x] **Step 9** — Test it with an unauthenticated request — it should return `401 Unauthorized`

---

## 🌐 Phase 3 — Connect Next.js Frontend

_Goal: Let your Next.js app sign users up and log them in._

- [x] **Step 10** — Install Better Auth client in your Next.js project:
  ```bash
  npm install better-auth
  ```
- [x] **Step 11** — Create `lib/auth-client.ts` in Next.js pointing to the NestJS URL
- [x] **Step 12** — Build a Sign-Up page in Next.js
- [x] **Step 13** — Build a Sign-In page in Next.js
- [ ] **Step 14** — Test: sign up a user → check MySQL to see if the user was saved

---

## 🍪 Phase 4 — CORS & Cookies (Make them talk to each other)

_Goal: Allow Next.js and NestJS to share authentication cookies securely._

- [ ] **Step 15** — Add CORS settings to NestJS `main.ts` to allow Next.js origin
- [ ] **Step 16** — Make sure `credentials: true` is set (so cookies are sent)
- [ ] **Step 17** — Test the full flow:
  1. Sign up on Next.js
  2. Log in on Next.js
  3. Call the protected `/me` route in NestJS from Next.js
  4. See your user data returned! 🎉

---

## 📍 You are here → **Step 14**
