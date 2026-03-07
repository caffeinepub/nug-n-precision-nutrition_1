# NUGEN – Precision Nutrition Platform

## Current State
New project. No existing backend or frontend code.

## Requested Changes (Diff)

### Add
- Landing/marketing website for NUGEN, a precision nutrition platform powered by DNA/genetic profiling
- Hero section with strong headline, subheadline, and primary CTA ("Get Started" / "Take the DNA Test")
- How It Works section: 3-step process (Submit DNA sample → Receive genetic analysis → Get personalized nutrition plan)
- Features/Benefits section: nutrigenomics, personalized diet plans, disease prevention, real-time lifestyle data
- Science/Trust section: scientific validation, research backing, lab partnerships
- Testimonials section with sample user stories
- Pricing/Plans section: Basic, Premium, Elite tiers
- FAQ section
- Newsletter signup / waitlist CTA section
- Footer with nav links, social links, and legal links
- Waitlist form: collects name + email, stored in backend
- Backend: waitlist canister storing signups (name, email, timestamp)

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Backend: Motoko canister with `addToWaitlist(name, email)` and `getWaitlistCount()` functions
2. Frontend: Multi-section landing page with navigation, hero, how it works, features, science, testimonials, pricing, FAQ, waitlist CTA, footer
3. Waitlist modal/form wired to backend `addToWaitlist` call
4. Responsive design for all screen sizes
