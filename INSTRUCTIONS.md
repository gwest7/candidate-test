# Restaurant Loader Challenge

Thank you for taking the time to complete our take-home code challenge. We appreciate it!

## Overview

You're building a restaurant discovery page backed by an external API.

**Time limit:** 30-45 minutes

**What we're testing:** Concurrency control, streaming responses, progressive UI updates, and code quality.

**What we're looking for:** Commits that show planning.

**PLEASE:** Read through all the instructions and plan your approach before you start. As you work through your plan, commit after every meaningful code change with detailed commit messages. If you use AI, please take note of your prompts and include them in the submission (a `PROMPTS.md` file in the repo root works well).

---

## Getting Started

### 1. Create Your Own GitHub Repository

1. Go to https://github.com/gwest7/candidate-test
2. Click the green **"Use this template"** button
3. Choose:
   - **Owner:** Your GitHub account
   - **Repository name:** `restaurant-loader-challenge` (or your choice)
   - **Visibility:** Public OR Private
4. Click **"Create repository from template"**

### 2. Clone and Setup Your Repo

```bash
# Clone YOUR repository
git clone https://github.com/YOUR-USERNAME/restaurant-loader-challenge.git
cd restaurant-loader-challenge

# Install dependencies
npm install

# Start development
npm run dev
```

The app should start with:
- Server on `http://localhost:3000`
- Client with hot reload

### 3. Explore what's there

`src/server/restaurants.ts` holds the fixed list of entities (id, name, suburb, vertical) — this is the only data you may treat as already known; everything else comes from the external API.

`src/server/api.ts` exposes `fetchRestaurantDetails(id)` and `fetchRestaurantMenu(menuId)`, which call `api.mrdfood.com` and return typed results.

---

## Your Task

Build a page that lists the restaurants in `restaurants.ts`, then loads and displays each one's logo, name and suburb from `api.mrdfood.com`.

**Hard requirements — these are non-negotiable:**

1. **Never more than 5 requests to `mrdfood.com` in flight at once**, across the whole app (details and menu requests share this limit).
2. **Stream data back to the client as soon as it's ready** — don't make the browser wait for everything to finish before it can show anything.
3. **Don't install any additional npm packages.** Build the solution with what's already in `package.json` plus the language/runtime standard library.

Everything else — endpoint shape and count, request/response payloads, whether menu data is fetched alongside details or separately, how the client tracks progress, module structure — is your design decision. Make reasonable assumptions and note them in your submission.

**Bonus (if time permits):** display the number of items each restaurant currently has on its menu.

Handle failures from the external API gracefully — it's slow and occasionally errors, especially outside business hours.

---

## What We're Evaluating

### Code Quality
- ✅ **Organization:** Is logic clearly separated? Are functions lean and focused?
- ✅ **TypeScript:** Are types used properly? Avoid `any`
- ✅ **Readability:** Can another developer understand your code?
- ✅ **Comments:** Do you explain non-obvious decisions?

### Technical Skill
- ✅ **Concurrency control:** Do you properly limit simultaneous requests?
- ✅ **Streaming:** Do results appear progressively or in batches?
- ✅ **Error handling:** What happens when API calls fail?
- ✅ **Testing:** Is the loader easily testable with automation?

### Process
- ✅ **Commits:** Do they show your thought process?
- ✅ **Prioritization:** Did you get basics working before attempting bonus?
- ✅ **Time management:** Working solution in 30-45 minutes?
- ✅ **LLM:** How well are your prompts (if supplied) worded?

---

## Important Constraints

⏱️ **Time-boxed:** Aim for 30-45 minutes total
📝 **Commit frequently:** We'll review your git history
⚠️ **External API:** The API is slow and occasionally returns errors
📦 **No new dependencies:** Don't `npm install` anything additional
✅ **Working > Perfect:** We value a simple working solution over incomplete perfection

---

## Submission

When you're done (or time is up):

### 1. Make sure it compiles and runs

Please `npm run build && npm run start` to make sure it runs

### 2. Final remarks

Please edit `FINAL.md` and add any information you feel like.

### 3. Push Your Code

Make sure you do not have any untracked or uncommitted files (including `PROMPTS.md`, if you have one). Make sure all your commits are pushed to `origin`.

### 4. Let us have a look

Add `gwest7` as a collaborator. The email from GitHub will be our ping.

- Go to Settings → Collaborators → Add `gwest7`

---

## Questions?

**Unclear requirements?** Make a reasonable assumption and document it in your submission notes.

**API not working?** Let us know in your submission - we can verify and review our access logs. Depending on the time of day, some endpoints will respond negatively.

**Running out of time?** Submit what you have! We value working basics over incomplete advanced features.

---

## Good Luck! 🚀

Remember:
- ⏱️ 30-45 minutes total
- 📝 Commit as you go
- 💬 Comment your code
- ✅ Working > Perfect
- 🎯 Progressive loading is the key challenge

**We're excited to see your approach!**
