# Relay — Websites & AI Voice Agents for Growing Businesses

Production-ready digital services agency website built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 1. Project Overview

Relay is a high-performance agency website tailored to small and medium-sized businesses in the United States and globally. The platform allows prospective clients to:
- Learn about modern website development & redesign services.
- Explore planned capabilities for inbound AI voice agents.
- Inspect original concept projects across healthcare, legal, hospitality, and real estate niches.
- Submit inquiries via a secure contact form.
- Request a zero-obligation manual website audit.

---

## 2. Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Validation & Security**: Server-side URL/email validation, honeypot spam protection, rate limiting, and SSRF prevention
- **Form Delivery**: Safe dev mock mode + optional production integration with [Resend](https://resend.com) and [Supabase](https://supabase.com)
- **Testing**: Node.js native test runner via `tsx --test`

---

## 3. Brand Customization

All company names, taglines, contact emails, brand colors, service availability badges, and geographic notices are centrally managed in a single file:

```
src/config/site.ts
```

To rebrand or update company details, simply modify `src/config/site.ts`.

---

## 4. Getting Started

### Prerequisites
- Node.js `20.x` or `22.x+` (Developed and verified on Node.js v26)
- npm `10.x+`

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd relay

# Install dependencies
npm install
```

### Local Development
```bash
# Start local development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 5. Automated Tests & Quality Checks

Run the automated test suite and linter:

```bash
# Run unit and integration tests
npm test

# Run ESLint checks
npm run lint

# Build production bundle
npm run build
```

---

## 6. Environment Variables & Form Integration

Copy the example environment file:
```bash
cp .env.example .env.local
```

### Form Modes:
1. **Mock Mode (Default)**: If `RESEND_API_KEY` is not provided, submissions are saved to server memory and logged securely to the console. No external services or accounts are required for local testing.
2. **Production Email Notifications**: Provide your `RESEND_API_KEY` and `NOTIFICATION_EMAIL` to automatically forward all client messages and audit requests to your inbox.
3. **Optional Database Persistence**: Set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` to sync submissions to PostgreSQL.

---

## 7. Deployment Instructions (Vercel)

1. Push your repository to GitHub or GitLab.
2. Log in to [Vercel](https://vercel.com) and click **"New Project"**.
3. Import your `relay` repository.
4. Set Build Command to: `npm run build`
5. Under **Environment Variables**, optionally add:
   - `NOTIFICATION_EMAIL`: `your-inbox@your-domain.com`
   - `RESEND_API_KEY`: `re_xxxxxxxxx`
6. Click **Deploy**.

---

## 8. Reference Designs

Original design references are stored under `docs/references/`:
- `intro.pdf` (Homepage)
- `Services — Relay.pdf`
- `Portfolio — Relay.pdf`
- `About — Relay.pdf`
- `Contact — Relay.pdf`
- `Free Website Audit — Relay.pdf`
