import pakriceCover from "../assets/images/work/pakrice-cover.jpg";
import roleyCover from "../assets/images/work/roley-cover.jpg";
import meetmyproCover from "../assets/images/work/meetmypro-cover.jpg";
import rwaiCover from "../assets/images/work/rwai-cover.jpg";
import gvrnCover from "../assets/images/work/gvrn-cover.jpg";
import myhomedocCover from "../assets/images/work/myhomedoc-cover.jpg";
import yoworksCover from "../assets/images/work/yoworks-cover.jpg";
import feenixCover from "../assets/images/work/feenix-cover.jpg";
import backpackCover from "../assets/images/work/backpack-cover.jpg";
import argearCover from "../assets/images/work/argear-cover.jpg";
import meetwiseCover from "../assets/images/work/meetwise-cover.jpg";
import quiziallCover from "../assets/images/work/quiziall-cover.jpg";
import omnigenCover from "../assets/images/work/omnigen-cover.jpg";

/* Selected work.
   ------------------------------------------------------------------
   PakRiceMarket (01) is ALLIANCE TECH work, not Feenix. The Feenix IP deed
   does not apply to it, and Alliance Tech has given permission to show its
   client work — so this is the one case study where specifics, architecture
   and numbers may all be published. Scope wording below is quoted from the
   CEO's signed contribution letter.

   The other four are Feenix Limited deliverables. The signed IP deed permits
   naming Feenix as client and describing "the general nature, purpose and
   technologies" of the Works. It does NOT permit publishing internals
   derived from reading the source — entity counts, migration counts,
   state-machine design, screen counts, route counts, file paths.

   Every line below is product surface, purpose or stack.

   `status.live` and `links` were verified over the network on 2026-09-24,
   not taken from any repo. See ~/.claude/project-knowledge/PORTFOLIO-EVIDENCE.md.
   Do not mark anything live until its URL has actually been checked.
   ------------------------------------------------------------------ */

export const WORK = [
  {
    id: "pakrice",
    flagship: true,
    stats: [{ v: "7", k: "chat types" }, { v: "2", k: "languages" }],
    coverShape: "portrait",
    hook: "Bilingual marketplace that never forces a restart",
    lensOverrides: {
      ai: { kicker: "Urdu market-price extraction", defaultGroup: 2 },
    },
    index: "01",
    name: "PakRiceMarket",
    kicker: "Rice trading marketplace",
    role: "Senior Full-Stack Engineer",
    client: "Alliance Tech",
    lenses: ["fullstack", "mobile", "ai"],
    status: { live: true, label: "Live" },
    /* Confirmed by Muntazer 2026-09-24: installs/downloads, not registered
       accounts. Keep the word "downloads" \u2014 "users" would overstate it. */
    metric: { value: "2,000+", label: "downloads in the first 15 days" },
    links: [
      { label: "App Store", href: "https://apps.apple.com/pk/app/pakrice-market/id6754537664" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.pakricemarket" },
      { label: "pakricemarket.com", href: "https://pakricemarket.com/" },
    ],
    summary:
      "Pakistan's rice trade moves on relationships and WhatsApp. PakRiceMarket gives it structure: mill owners, shopkeepers, commission agents, and buyers in one bilingual marketplace, where sellers list lots with photos, video, and spoken descriptions, and buyers browse by variety, bid, and request a physical sample before any money moves. Deals are struck in chat and settled between the parties.",
    ownership:
      "I owned the implementation end to end\u2014from requirements and the React Native app to the Firebase backend, admin console, and launch on both stores.",
    capabilityGroups: [
      { label: "Marketplace", items: [
        { label: "Four distinct roles", text: "Mill owners, shopkeepers, commission agents, buyers — separate onboarding for each. Guests browse without an account." },
        { label: "Bidding and samples", text: "Bid states, highest-bid tracking, seller accept or reject. Physical sample requests before a bulk commitment." },
        { label: "Chat", text: "Seven content types: text, image, video, file, voice note, location pin, product card. One global native audio player is shared across voice bubbles, keeping playback state outside React so a scrubbing bar can't drive a render loop." },
        { label: "Discovery", text: "Category search and filters, seller profiles, ratings and reviews, and a map of nearby mills and shops by radius." },
      ] },
      { label: "Built for its users", items: [
        { label: "Bilingual, without a restart", text: "No I18nManager.forceRTL anywhere — it mirrors the layout and forces a restart, which would drop a trader mid-negotiation. Urdu ships as glyphs inside the existing layout, and a missing key renders a visible token rather than a blank button." },
        { label: "Voice-first listing", text: "A spoken description is a product field, not an attachment. Recording supports pause and resume, and the recorder's path is normalised before upload — some Android builds hand back a bare filesystem path." },
        { label: "Built for a bad connection", text: "Compress at capture, upload sequentially. Location accepts a five-minute cached fix before retrying longer. Reachability is checked, not just connectivity. A missing composite index refetches unordered and sorts in memory." },
      ] },
      { label: "Market data and operations", items: [
        { label: "Parsing a WhatsApp price message", text: "Urdu right-to-left interleaved with Latin variety codes, prices written as word-ranges, moisture levels that are separate goods rather than metadata. The failure that matters is silent collapse, not a parse error — so the prompt repeats the one-row-per-variation rule with worked examples and expected counts. JSON mode, low temperature, and an administrator presses publish." },
        { label: "Rendering Urdu to PDF", text: "jsPDF has no Arabic shaping engine — Urdu comes out disconnected or reversed. The report is built as off-screen HTML, shaped by the browser, rasterised onto A4. The trade is a picture of a table in exchange for correct typography." },
        { label: "Publishing perishable data", text: "A seven-day expiry pinned in three places that must agree: the signed link, a timestamp on the record, metadata on the file. Rows live in the PDF only, so the app fetches a label and a link rather than hundreds of rows." },
        { label: "Admin console and marketing site", text: "Seller approval, featured shops, suspension, product moderation. A public marketing site funnels to both stores." },
      ] },
    ],
    /* Promotional composite, not a screen capture. Alt text must not call it
       a screenshot. Replace with real captures when available. */
    cover: { src: pakriceCover, alt: "PakRiceMarket promotional artwork" },
    stack: ["React Native 0.81", "TypeScript", "Firestore", "Cloud Functions", "FCM", "AWS S3", "Zustand", "GPT-4o-mini"],
    layers: ["App + admin panel", "Cloud Functions", "Firestore + S3"],
  },
  {
    id: "roley",
    flagship: true,
    stats: [{ v: "7", k: "pipeline stages" }, { v: "5", k: "ranking signals" }],
    coverShape: "portrait",
    hook: "Seven-stage prompt pipeline behind a tool recommender",
    index: "02",
    name: "Roley",
    kicker: "AI tool discovery and business stacks",
    role: "Lead Developer",
    client: "Feenix Limited, United Kingdom",
    lenses: ["mobile", "ai"],
    status: { live: true, label: "Live" },
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/roley/id6759582343" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.roley" },
      { label: "roley.app", href: "https://www.roley.app/" },
    ],
    /* Promotional composite, not a screen capture. */
    cover: { src: roleyCover, alt: "Roley promotional artwork" },
    summary:
      "Roley turns AI-tool discovery into a recommendation system rather than a single LLM response. The pipeline parses the user's goal, asks clarifying questions when needed, builds a behavioural profile, scores candidates against budget and experience level, and verifies surviving tools through a defunct-product blocklist and live homepage probes. Recommendations are refined before they reach the user. The same underlying intelligence extends to building and optimising complete business tool stacks.",
    /* Product-surface figures only. Roley is Feenix work, so the IP deed rules
       out counts derived from reading the source — no function, service or
       screen counts here. A user can observe every number below by using the app. */
    figures: [
      { value: "7", label: "pipeline stages" },
      { value: "5", label: "ranking dimensions" },
      { value: "4", label: "discovery feeds" },
      { value: "2", label: "entitlement tiers" },
    ],
    capabilities: [
      { label: "Recommendation engine", text: "A seven-stage prompt pipeline rather than one call: goal parsing, clarifying questions, behavioural profiling, tool identification, scoring, verification, refinement." },
      { label: "Ranking", text: "Candidates scored on relevance, quality, price, feature depth and user fit. Weights shift by profile, so a beginner and an expert get different orders." },
      { label: "Verification", text: "Checked against a defunct-product blocklist and live homepage probes. Unreachable tools are dropped before they reach the user." },
      { label: "Business Stack", text: "Classifies the business, derives categories through a dependency graph, processes them in parallel, optimises for integration and budget. Refine, save, export to PDF." },
      { label: "Proactive picks", text: "A scheduled engine builds picks from saved stacks and delivers them bi-monthly by push, with budget-fit ranking and dismiss-forever. Entitlement is checked server-side, so a lapsed subscriber gets a renewal state." },
      { label: "Discovery and chat", text: "Four home feeds — Trending, Top Sellers, Hot Prospects, Featured — fed by scheduled update functions. Intent-aware chat refines and compares; detail pages deep-link to the store listing." },
      { label: "Subscriptions", text: "RevenueCat and StoreKit across two tiers, enforced in backend middleware and mirrored in Firestore." },
    ],
    stack: ["React Native 0.82", "React 19", "TypeScript", "Firebase", "Cloud Functions", "gpt-5.4-mini", "RevenueCat"],
    layers: ["React Native app", "Cloud Functions", "Firestore + OpenAI"],
  },
  {
    id: "meetmypro",
    flagship: true,
    stats: [{ v: "14", k: "booking states" }, { v: "5%", k: "commission" }],
    coverShape: "portrait",
    hook: "Escrow settlement across a fourteen-state booking",
    index: "03",
    name: "MeetMyPro",
    kicker: "Two-sided home services marketplace",
    role: "Lead Developer",
    client: "Feenix Limited, United Kingdom",
    lenses: ["fullstack", "mobile"],
    /* Not live. Hollow dot, no links — meetmypro.com currently serves an empty
       placeholder and no admin portal is publicly deployed. Add links only
       when a URL actually resolves. */
    status: { live: false, label: "TestFlight-ready" },
    links: [],
    /* Promotional composite. The source carried CUSTOMER/PROVIDER callouts that
       pointed at the wrong phones, and a third party's account name — both
       removed before use. Not a screen capture; alt text must not say so. */
    cover: { src: meetmyproCover, alt: "MeetMyPro promotional artwork" },
    summary: [
      "MeetMyPro connects customers with local service professionals across the UK \u2014 plumbers, electricians, cleaners. I built the mobile app, backend, and operational platform around two distinct booking models: customers can post a job and compare provider quotes, or book a specific service directly.",
      "Payments follow a Stripe-based escrow-style lifecycle, while live tracking, booking-scoped chat, disputes, and provider reliability controls carry each job from request to completion.",
      "It is more than a marketplace interface. The platform includes the financial state machine, moderation workflows, identity-document verification, provider withdrawals, and internal administration required to operate a two-sided service marketplace.",
    ],
    figures: [
      { value: "3", label: "surfaces built" },
      { value: "2", label: "booking flows" },
      { value: "2", label: "marketplace roles" },
      { value: "5%", label: "platform commission" },
    ],
    capabilityGroups: [
      { label: "The transaction", items: [
        { label: "Escrow and settlement", text: "Stripe takes the payment; the backend owns the escrow lifecycle — held, released, refunded, part-refunded — across payment records and wallet ledgers. Release follows visit confirmation, less 5% commission. Refunds are stage-based and automatic for no-shows. Ledgers are append-only; withdrawals reviewed by hand on UK and Pakistan routes." },
        { label: "Two booking flows", text: "Post a job: the customer describes the work, providers quote, the customer accepts one. Direct booking: the customer requests a listing and the provider prices and confirms. Both converge on one lifecycle — confirmed, in progress, completed, cancelled, no-show, refunded." },
      ] },
      { label: "The job", items: [
        { label: "Live service experience", text: "Map and list discovery, trade filters, search-this-area. Once underway: the provider's live location, an ETA, and a shared stepper both sides read from request to completion." },
        { label: "Chat, notifications and trust", text: "Chat is scoped to one booking and locks on completion, cancellation or dispute. Push covers quotes, bookings, payments, messages and no-shows. Reviews, evidence photos and the dispute workflow sit behind it." },
      ] },
      { label: "Running the platform", items: [
        { label: "Provider operations", text: "Onboarding, listings, availability, service-area coverage, quotes, earnings and withdrawals. Identity documents for verification, reusable quote templates, reliability strikes for no-shows." },
        { label: "Admin and dispute operations", text: "A separate Next.js console on its own token audience, every mutating action audit-logged. Dossiers pull profile, documents, bookings and reliability into one view. A dispute case file assembles the complaint, both parties, the booking chat, evidence photos and location proximity." },
      ] },
    ],
    stack: ["React Native 0.83", "React 19", "TypeScript", "NestJS", "TypeORM", "PostgreSQL", "Next.js 15", "Tailwind CSS", "TanStack Query", "Zustand", "Stripe", "Firebase", "Notifee", "AWS S3"],
    notes: { label: "Database discipline", value: "synchronize: false \u00b7 schema changes through migrations" },
    layers: ["App + admin portal", "NestJS REST API", "PostgreSQL + Stripe"],
  },
  {
    id: "rwai",
    flagship: true,
    stats: [{ v: "3", k: "courses" }, { v: "360", k: "narration clips" }],
    hook: "Typed lesson blocks, accessibility gated in CI",
    index: "04",
    name: "Responsible With AI",
    kicker: "Microlearning and certification",
    role: "Lead Developer",
    client: "Feenix Limited, United Kingdom",
    lenses: ["web", "ai"],
    status: { live: true, label: "Live" },
    links: [
      { label: "responsiblewithai.com", href: "https://www.responsiblewithai.com" },
    ],
    summary: [
      "A commercial e-learning platform that trains professionals to use AI accountably. Its thesis is that the skill worth teaching is not prompting but judgement \u2014 what to trust, what to protect, what to verify, when to disclose, and how to evidence a decision.",
      "Content runs as a progressive, role-based pathway of three courses, each pitched at the level of responsibility a learner actually carries. On top of that sit two things a course platform does not usually have: an accessibility programme enforced in continuous integration, and an engine that adapts courses per organisation while keeping regulated content locked.",
    ],
    figures: [
      { value: "3", label: "courses" },
      { value: "24", label: "modules" },
      { value: "28", label: "Playwright accessibility specs in CI" },
      { value: "360", label: "narration clips" },
    ],
    capabilityGroups: [
      { label: "Platform", items: [
        { label: "Role-based pathway", text: "Three courses set by the responsibility a learner carries: Foundation for people using AI, Practitioner for people producing with it, Reviewer for people approving others' AI work. Foundation is free." },
        { label: "Server-side access gating", text: "Unpurchased learners are redirected before content is serialised, so paid material never reaches the server-component payload or the client bundle." },
        { label: "Organisations and seats", text: "Seat subscriptions, invite tokens, an admin dashboard, rosters and CSV export, with one organisation's data walled off from another's." },
        { label: "Lessons that are not reading", text: "Lessons are typed block arrays rendered by content-agnostic components, database-first so the CMS can override without a deploy. Quizzes, card sorts, scenarios, governance-gap and spot-the-assumption exercises, graded server-side against a key the client never receives." },
      ] },
      { label: "Accessibility", items: [
        { label: "An eight-phase programme", text: "Phases 0 to 5 complete: design tokens, an in-product accessibility panel, colour-vision support, and full keyboard and screen-reader support for every interactive exercise — not only the reading pages." },
        { label: "Enforced in continuous integration", text: "A colour-baseline check and a browser accessibility suite run on every pull request. A contrast regression fails the build." },
        { label: "Narration architecture", text: "360 clips across 42,122 words, keyed so editing one sentence invalidates one clip. The voice was chosen from a sampler rendering real course passages, not a demo reel." },
      ] },
      { label: "Bespoke", items: [
        { label: "Context Pack", text: "One diagnostic captures the organisation once — sector, size, roles, tools, use cases, workflows, data rules, regulator — as a pack every adaptation draws from." },
        { label: "Field-level tagging", text: "Every field is tagged adaptable, locked or structural. Inside one block the obligation stays locked while the illustration beside it tailors." },
        { label: "Locked content never reaches the model", text: "Obligations, core principles, cited figures, statutes and case law are excluded before the request is built, not filtered out of the response. They pass through byte-for-byte." },
        { label: "Constrained substitution", text: "Swapping a sector's standards body is limited to a vetted allowlist. With no clear match the engine stays neutral and flags it for a human." },
        { label: "Block-by-block approval", text: "Nothing publishes until an administrator has reviewed every changed block. The model proposes; a person releases." },
        { label: "Two delivery routes", text: "Hosted privately for that organisation's members, or exported as a print-ready pack through a semantic renderer." },
      ] },
      { label: "Operations", items: [
        { label: "Admin console", text: "Users, access grants, allowlists, organisations, affiliates, analytics, content versioning and reviews, behind signed tokens verified at the edge." },
        { label: "Commerce", text: "Stripe checkout for individuals, seat subscriptions for organisations. Pricing is derived in code, with Stripe price IDs overriding per environment." },
        { label: "Monitoring and scheduled work", text: "Error monitoring, transactional email, and scheduled jobs for analytics enrichment and purging." },
      ] },
    ],
    /* Promotional composite. A third-party email address in the dashboard
       chrome was blurred before use. Not a screen capture. */
    cover: { src: rwaiCover, alt: "Responsible With AI promotional artwork" },
    stack: ["Next.js 16", "React 19", "TypeScript", "Prisma 6", "PostgreSQL", "NextAuth v5", "Stripe", "Sanity", "Tailwind 4", "Playwright", "Claude Opus", "Claude Sonnet"],
    layers: ["Next.js App Router", "Prisma + Postgres", "Stripe, Sanity, AI adaptation engine"],
    /* Under the AI lens the same card presents Bespoke: the kicker, status,
       summary and figures change, and "What I built" opens on that group. */
    lensOverrides: {
      ai: {
        kicker: "Bespoke \u2014 per-organisation course engine",
        status: { live: false, label: "In development" },
        defaultGroup: 2,
        summary: [
          "Responsible AI training written for surveyors does not land with an accountancy firm or a law practice \u2014 the examples are wrong, and the examples are what make training stick. Bespoke turns each master course into a per-organisation edition.",
          "A model rewrites only what is safe to rewrite. Everything carrying regulatory weight is excluded before the request is built, and nothing publishes until a person has approved it, block by block.",
        ],
        figures: [
          { value: "0", label: "locked blocks sent to the model" },
          { value: "3", label: "field-level tags" },
          { value: "100%", label: "human-approved before release" },
        ],
      },
    },
  },
  {
    id: "gvrn",
    flagship: true,
    stats: [{ v: "12", k: "registers" }, { v: "3", k: "standards" }],
    hook: "Twelve registers on row-level security",
    index: "04",
    name: "GVRN",
    kicker: "AI governance workspace",
    role: "Lead Developer",
    client: "Feenix Limited, United Kingdom",
    lenses: ["web"],
    status: { live: true, label: "Live" },
    links: [{ label: "Open GVRN", href: "https://vidos-framework.vercel.app" }],
    cover: { src: gvrnCover, alt: "GVRN promotional artwork" },
    summary: [
      "A B2B governance platform for professional firms \u2014 surveyors, valuers, advisors \u2014 that turns everyday AI use into a defensible, standards-aligned record. Every policy, decision, risk and disclosure is mapped clause by clause to RICS conduct requirements, the EU AI Act and ISO/IEC 42001, so a firm can show which specific obligation each piece of evidence answers rather than asserting general compliance.",
      "Two surfaces ship together: a public marketing and legal site, and the authenticated governance portal behind it. The portal's value is not the forms \u2014 it is that governance history is preserved rather than silently rewritten.",
    ],
    figures: [
      { value: "12", label: "registers" },
      { value: "3", label: "standards mapped clause-by-clause" },
      { value: "17", label: "governance documents" },
      { value: "5", label: "named roles" },
    ],
    capabilityGroups: [
      { label: "The registers", items: [
        { label: "Twelve interconnected registers", text: "Decisions, AI risks, AI uses, use-case catalogue, AI decision log, impact assessments, impact tracking, exceptions, approved tools, client disclosure, review schedule, audit trail. Each is filterable, exportable, and able to reference the others." },
        { label: "Decision lifecycle", text: "A decision records the option taken, the rationale and what else was considered, then supersedes rather than edits. The replaced version stays visible with versioned lineage between them." },
        { label: "Risk, linked to decisions", text: "Likelihood and impact on a heatmap, escalation and resolution tracking, linked to the decisions taken against them." },
      ] },
      { label: "Evidence and review", items: [
        { label: "Review horizon", text: "Decisions carry review due dates and triggers, and surface when overdue." },
        { label: "Immutable audit trail", text: "Every write is recorded and nothing is edited in place. The audit view is what makes the rest evidence rather than record-keeping." },
        { label: "Documents and disclosure packs", text: "Seventeen governance assets — policies, RACI matrices, playbooks, templates — with status tracking and Excel or PDF export. Disclosure packs carry their evidence attachments." },
      ] },
      { label: "The firm", items: [
        { label: "Firm configuration, versioned", text: "Size, risk appetite and compliance basis are committed as a versioned snapshot, so last year's evidence reads against last year's posture. A fit-gap view runs per standard." },
        { label: "Roles and training", text: "Sponsor, steward, reviewer, practitioner and viewer, with multiple named people per role and CPD tracked per member." },
      ] },
      { label: "Platform", items: [
        { label: "Tenant isolation in the database", text: "Row-level security on every tenant table, with privileged operations behind stored procedures. A query written wrongly in the app still cannot read another firm's records." },
        { label: "Governance telemetry", text: "Creates, updates, supersessions, reviews, evidence and role changes stream fire-and-forget to a separate analytics store, feeding a maturity score." },
        { label: "Public site and Trust Centre", text: "A marketing and legal surface in its own editorial system, plus a Trust Centre publishing controls, data residency, sub-processors and the DPA. Scoped CSP, sanitised error responses, error monitoring." },
      ] },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Row-level security", "NextAuth", "Vercel", "Sentry"],
    layers: ["Public site + portal", "Supabase with row-level security", "Audit trail + analytics store"],
  },
  {
    id: "meetwise",
    flagship: false,
    lensRank: { ai: 0 },   /* leads the AI lens */
    stats: [{ v: "4", k: "pipeline stages" }, { v: "2", k: "capture paths" }],
    hook: "Headless browser joins, Whisper and Gemini summarise",
    name: "Meetwise",
    kicker: "Autonomous AI meeting assistant",
    role: "Full-Stack Engineer",
    client: "Alliance Tech",
    lenses: ["ai"],
    status: { live: false, label: "Production-ready, not deployed" },
    links: [],
    cover: { src: meetwiseCover, alt: "Meetwise promotional artwork" },
    summary: [
      "Meetwise joins Google Meet calls on your behalf, records the conversation, turns speech into a transcript, and produces a structured meeting summary with decisions and action items.",
      "The interesting part is not the summary. It is everything before it: a browser has to authenticate, enter the meeting, stay out of the conversation, capture the right audio, and hand a clean recording to the AI pipeline. The platform then moves from a pasted meeting link to calendar-driven automation.",
    ],
    figures: [
      { value: "1", label: "meeting pipeline" },
      { value: "2", label: "AI processing stages" },
      { value: "3", label: "meeting outputs" },
      { value: "2", label: "automation entry points" },
    ],
    defaultGroup: 0,
    capabilityGroups: [
      { label: "The AI pipeline", items: [
        { label: "From audio to a meeting document",
          text: "Whisper transcribes, then Gemini repairs spelling, grammar and technical terms before writing key points, decisions and action items. Audio, transcript and summary stay separate outputs." },
        { label: "Transcription first, generation second",
          text: "Audio becomes text before anything is generated, so the intermediate transcript stays inspectable instead of disappearing into one generation call." },
        { label: "The output is a file, not just a chat response",
          text: "Recording, transcript and summary are durable artefacts — storable, reviewable and shareable on their own." },
      ] },
      { label: "Calendar automation", items: [
        { label: "From pasted link to automatic join",
          text: "The first flow takes a Meet URL. The platform reads calendar events, finds the ones carrying Meet links, and the scheduler launches the bot as a meeting approaches." },
        { label: "Google login, saved once",
          text: "The bot checks for an existing Chrome session. If there is none, a one-time login flow opens Chrome and the session persists for later runs." },
        { label: "The bot enters quietly",
          text: "Puppeteer opens Chrome, disables microphone and camera, then handles Join now or the Ask to join waiting room. Participants are captured during the meeting, not reconstructed after." },
      ] },
      { label: "Platform", items: [
        { label: "A prototype that became a platform",
          text: "An Express backend with REST endpoints for auth, calendar, scheduler, bot control and health. The dashboard covers overview, history, calendar, analytics, documents, notifications and settings." },
        { label: "Audio capture was platform-specific",
          text: "FFmpeg records through a virtual audio device — Virtual Audio Cable on Windows, a PulseAudio sink on Linux — so one pipeline serves both." },
        { label: "Deployment was part of the product",
          text: "One script provisions an EC2 Ubuntu host: Node, Python, Chrome, FFmpeg, PostgreSQL, PM2 and nginx." },
      ] },
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "Express", "Puppeteer", "FFmpeg", "Python", "Whisper", "Gemini", "Google APIs", "SQLite", "PostgreSQL", "AWS EC2"],
    layers: ["Browser automation + audio capture", "Whisper transcription", "Gemini \u2192 meeting artefacts"],
  },
  {
    id: "myhomedoc",
    flagship: true,
    stats: [{ v: "$3K", k: "monthly" }, { v: "49", k: "articles" }],
    hook: "Availability computed, double-booking held by the database",
    name: "MyHomeDoc",
    kicker: "Telehealth booking and practice site",
    role: "Lead Developer",
    client: "MyHomeDoc Telehealth, Texas",
    lenses: ["web"],
    status: { live: true, label: "Live" },
    links: [{ label: "Open MyHomeDoc", href: "https://www.myhomedoc.care" }],
    cover: { src: myhomedocCover, alt: "MyHomeDoc promotional artwork" },
    summary: [
      "A self-pay virtual primary-care practice serving patients across Texas \u2014 no insurance in the loop, visits from thirty-nine dollars. The site is the practice's entire front office: twelve service lines, six city pages over an interactive map of all 254 Texas counties, a published blog, the booking engine, and the dashboard the owner runs it all from.",
      "It replaced a hosted platform, so the migration counted as much as the build \u2014 the old service, location and post URLs redirect permanently onto the new structure, and the domain moved to new nameservers without breaking the practice's mail authentication. The booking path is what everything else exists to protect.",
    ],
    figures: [
      { value: "$3K", label: "revenue generated through the site monthly" },
      { value: "12", label: "service lines" },
      { value: "49", label: "articles published" },
      { value: "254", label: "Texas counties mapped" },
    ],
    defaultGroup: 0,
    capabilityGroups: [
      { label: "Booking and payment", items: [
        { label: "Slots are computed, never stored",
          text: "Generated per request from weekly hours, blocked dates and live bookings, in the practice's own timezone. A slot closes four hours before it starts." },
        { label: "The server decides, not the form",
          text: "Submitting re-derives the whole slot list server-side before anything is written, and the price is read from the server's plan table." },
        { label: "Double-booking is a constraint",
          text: "A partial unique index on date and time, cancellations excluded. The violation returns a clean ‘just booked’ rather than a 500." },
        { label: "Payment confirmed twice",
          text: "The webhook verifies its signature against the raw body. The success page repeats the write idempotently, so a dropped webhook cannot strand a paid appointment." },
      ] },
      { label: "The practice's console", items: [
        { label: "One dashboard, five jobs",
          text: "Appointments and payment state, weekly hours, blocked dates, inbound messages and reviews — all owner-managed." },
        { label: "Publishing without a developer",
          text: "A CMS blog with authors, categories and a constrained rich-text model: callouts, required alt text, internal links. Forty-nine articles live." },
        { label: "Reviews that require approval",
          text: "Reviews arrive unapproved and stay invisible until the practice approves them. Private feedback never reaches the public page." },
      ] },
      { label: "Holding the line", items: [
        { label: "A contact form that fails closed",
          text: "reCAPTCHA is verified on the server, never in the browser. A timeout or an error rejects the submission rather than waving it through." },
        { label: "Rate limits on public write endpoints",
          text: "Booking, contact and feedback each carry a per-address limit." },
        { label: "Admin access is an allowlist",
          text: "Every admin route re-checks the caller against an explicit administrators table — per route, not middleware a new page could forget to opt into." },
      ] },
      { label: "Found, and kept", items: [
        { label: "Declared once, referenced everywhere",
          text: "Business, site, physician, offers, breadcrumbs, FAQs and every article declared once in one structured-data graph. Pages reference those entities by @id rather than copying them." },
        { label: "A migration that kept its links",
          text: "Permanent redirects carry the previous platform's service, location and post URLs onto the new structure." },
        { label: "A domain move that kept its mail",
          text: "Nameservers moved to the new deployment with SPF, DKIM and DMARC intact throughout." },
        { label: "No ratings theatre",
          text: "The site-wide aggregate rating was removed from the structured data. There was no defensible source for the number." },
      ] },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Supabase", "PostgreSQL", "Stripe", "Sanity", "Resend", "reCAPTCHA v3", "Vercel"],
    layers: ["Next.js App Router on Vercel", "Postgres + headless CMS", "Stripe, email, bot defence"],
  },
  {
    id: "yoworks",
    flagship: false,
    stats: [{ v: "4", k: "match signals" }, { v: "50", k: "threshold" }],
    hook: "Weighted match score, chat without a socket tier",
    name: "Yo.Works",
    kicker: "Video-first talent marketplace",
    role: "Senior Full-Stack Engineer",
    client: "Alliance Tech",
    lenses: ["web"],
    status: { live: true, label: "Live" },
    links: [{ label: "Open Yo.Works", href: "https://vellena-web-frontend.vercel.app/" }],
    cover: { src: yoworksCover, alt: "Yo.Works promotional artwork" },
    summary: [
      "A two-sided marketplace for short-form fashion and event work, built Italian-first. Talent \u2014 models, hostesses, photographers, promoters \u2014 record a video presentation and an ordered photo portfolio; agencies post dated campaigns and work through applicants as a feed of those videos rather than a list of CVs.",
      "An application is scored against the campaign before a match exists. Below the threshold it is still recorded and the applicant is told why; above it, a pending match waits for the agency. Approval is the only thing that opens a conversation between the two sides.",
    ],
    figures: [
      { value: "4", label: "weighted signals in the match score" },
      { value: "50", label: "score threshold for a match" },
      { value: "3 \u2192 10", label: "portfolio photos, free to Pro" },
      { value: "2", label: "languages, Italian-first" },
    ],
    defaultGroup: 2,
    capabilityGroups: [
      { label: "Talent side", items: [
        { label: "A video instead of a CV",
          text: "A thirty-second presentation plus an ordered photo portfolio, alongside the fields agencies actually filter on: category, city, age, height, gender." },
        { label: "Limits enforced in the database, not the interface",
          text: "Free accounts get three applications a month and three photos; Pro lifts both. The count is recalculated server-side at the moment of applying." },
        { label: "An answer, not silence",
          text: "Applying returns a decision immediately — a confirmation when the score clears, and the reasons when it doesn't." },
      ] },
      { label: "Agency side", items: [
        { label: "Campaigns, not job posts",
          text: "A dated brief: city, dates, pay, headcount, gender preference, deadline, editable afterwards. Registration carries company details, an optional VAT number and a document." },
        { label: "Search, then shortlist",
          text: "Filter by category, location, age and gender. The detail view puts video, gallery and stats together; favourites hold the shortlist." },
        { label: "Approval is the commitment",
          text: "Approving a match is what creates the relationship and opens the chat room. There is no way to message a stranger." },
      ] },
      { label: "Matching", items: [
        { label: "Scored before the match exists",
          text: "Four weighted signals out of a hundred — category 35, city 30, gender requirement 20, video present 15. Exact city scores full, partial scores partial, no city stays neutral." },
        { label: "A threshold, and an honest no",
          text: "Fifty is the line. Below it no match is created, but the application is still recorded and the reasons shown." },
      ] },
      { label: "Platform", items: [
        { label: "Two stores, on purpose",
          text: "Users, profiles, campaigns, applications, matches, favourites and photos in MySQL. Conversations in Firestore, keyed to the participants." },
        { label: "Chat without sockets, deliberately",
          text: "Long polling — a request held about twenty-five seconds, answered the moment something arrives. Trades latency for not running a socket tier in front of a plain REST API." },
        { label: "Role-gated from the middleware out",
          text: "Every protected route verifies the token, then the role behind it. Model-only and agency-only endpoints are separated at the middleware." },
        { label: "Payments and locale from day one",
          text: "Stripe Checkout for the ten-dollar upgrade; a webhook flips the account to Pro on confirmed payment. Italian and English shipped from the first release." },
      ] },
    ],
    stack: ["React 18", "TypeScript", "Vite", "Tailwind", "shadcn/ui", "Zustand", "Node.js", "Express 5", "MySQL", "Firebase", "Stripe", "Vercel", "Render"],
    layers: ["React + Vite on Vercel", "Express API on MySQL", "Firestore chat + Stripe"],
  },
  {
    id: "feenix",
    flagship: false,
    stats: [{ v: "4", k: "practice areas" }, { v: "2", k: "delivery paths" }],
    hook: "A single-page app that serves crawlers real metadata",
    name: "Feenix",
    kicker: "Corporate site for an AI governance consultancy",
    role: "Lead Developer",
    client: "Feenix Limited, United Kingdom",
    lenses: ["web"],
    status: { live: true, label: "Live" },
    links: [{ label: "Open Feenix", href: "https://feenix.tech" }],
    cover: { src: feenixCover, alt: "Feenix promotional artwork" },
    summary: [
      "The corporate site for a consultancy bringing responsible-AI governance to the built environment \u2014 construction, real estate, infrastructure. It is deliberately authority-first: the homepage opens with announcements, research and published positions rather than a product tour, because what is being sold is credibility on a subject most of the industry is still forming a view on.",
      "That positioning sets the engineering problem. A client-rendered application has nothing in its HTML until the JavaScript runs, so a crawler or a social scraper can come away with generic metadata rather than the article it asked for. The site stays a single-page app and answers that at the edge instead.",
    ],
    figures: [
      { value: "4", label: "practice areas the site is built around" },
      { value: "3", label: "published commitments" },
      { value: "2", label: "delivery paths \u2014 people, and crawlers" },
      { value: "2", label: "themes, light and dark" },
    ],
    defaultGroup: 2,
    capabilityGroups: [
      { label: "The site", items: [
        { label: "Authority before product",
          text: "Training, governance, implementation and advisory — the four things the practice sells, and how the site is ordered. Announcements, insights and the published commitments come before any product link." },
        { label: "One publication, many pages",
          text: "The same hero pattern and typographic scale on every page. Motion settles a page in rather than announcing itself." },
        { label: "Light and dark on one token system",
          text: "Both themes resolve from one central token set, so a colour decision is made once and a new page cannot quietly diverge." },
      ] },
      { label: "Content", items: [
        { label: "Two sources, one surface",
          text: "Editorial comes from a headless CMS so the comms team publishes without a deploy. Services, products, team and advisors stay typed in the codebase, where the compiler catches a missing field." },
        { label: "An editor that lives apart",
          text: "The CMS editing environment deploys separately and is reached by redirect, so a content release is never an application release." },
      ] },
      { label: "Crawlers", items: [
        { label: "The problem, stated plainly",
          text: "A client-rendered application serves an empty shell until JavaScript runs. For a publishing-led site that can leave article URLs with generic metadata when crawlers and social scrapers ask for them." },
        { label: "Two answers, neither of them a rewrite",
          text: "A build step pre-renders a static metadata page per article, and edge middleware serves crawlers article-specific HTML while people still get the app." },
      ] },
      { label: "Delivery", items: [
        { label: "Split at the route",
          text: "Routes load on demand, so the first paint carries the page someone asked for rather than the site behind it." },
        { label: "Typed, linted, shipped",
          text: "TypeScript throughout, lint and formatting gates, continuous deployment behind a single-page catch-all." },
      ] },
    ],
    stack: ["React", "TypeScript", "Vite", "React Router", "Framer Motion", "Lottie", "Sanity", "Edge middleware", "Vercel"],
    layers: ["React + Vite SPA on Vercel", "Headless CMS + typed in-repo content", "Edge middleware for crawlers"],
  },
  {
    id: "backpack",
    flagship: false,
    stats: [{ v: "6", k: "message types" }, { v: "2", k: "stores" }],
    coverShape: "portrait",
    hook: "Realtime chat and push triggered by database writes",
    name: "BackPack Buddies",
    kicker: "Travel social network and job board",
    role: "Senior Full-Stack Engineer",
    client: "Alliance Tech",
    lenses: ["mobile"],
    status: { live: true, label: "Live" },
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/backpack-buddies/id6504427462" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.backpackers.app" },
    ],
    cover: { src: backpackCover, alt: "BackPack Buddies promotional artwork" },
    summary: [
      "A cross-platform app for backpackers and long-term travellers, built once in Flutter and shipped to both stores. It answers the three things a traveller actually needs on the road: who else is nearby, how to keep talking to them, and how to earn while moving.",
      "There is no traditional application server to operate. Presence, messaging and connection requests are documents in Firestore, and the notifications that make the app feel alive are functions watching those documents \u2014 not something the client remembers to send.",
    ],
    figures: [
      { value: "2", label: "stores, one codebase" },
      { value: "4", label: "tabs \u2014 explore, buddies, chats, jobs" },
      { value: "6", label: "kinds of message" },
      { value: "4", label: "server-side notification triggers" },
    ],
    defaultGroup: 1,
    capabilityGroups: [
      { label: "Finding people", items: [
        { label: "A map of who is actually near",
          text: "Live location, custom markers for other travellers, real distances between them. Proximity is the ordering, not signup date." },
        { label: "Connection, not following",
          text: "A request has to be sent and accepted before anything opens. Both halves of the handshake are confirmed from the server." },
      ] },
      { label: "Messaging", items: [
        { label: "Six kinds of message",
          text: "Text, image, video, voice notes recorded in the app, documents, and a shared location that renders as a map preview in the thread." },
        { label: "The details that make chat feel finished",
          text: "Sent, delivered and read state, online presence, last-message previews, deletion, a full-screen image and video viewer — one-to-one and group." },
        { label: "Real time without a socket server",
          text: "Messages and presence are database documents, so delivery comes from the store's own listeners rather than a realtime tier somebody has to keep running." },
      ] },
      { label: "Working while travelling", items: [
        { label: "A job board built for someone in motion",
          text: "Browse, read the detail, apply with a CV attached. Several CVs kept on file and chosen per application." },
        { label: "After the application",
          text: "Applied jobs tracked, shifts visible, bank details held for payout." },
      ] },
      { label: "Platform", items: [
        { label: "Notifications that arrive whether or not the app is running",
          text: "Foreground, background and terminated, plus an in-app notification centre and deep links that open the screen the notification is about." },
        { label: "Triggered by the data, not the client",
          text: "Connection requests, acceptances, messages and presence changes are server functions watching database writes. A client that crashes mid-send cannot swallow the notification." },
        { label: "One codebase, two stores",
          text: "One Flutter codebase with signed release builds for Google Play and the App Store." },
      ] },
    ],
    stack: ["Flutter", "Dart", "GetX", "Firebase Auth", "Cloud Firestore", "Firebase Storage", "Cloud Messaging", "Cloud Functions", "Node.js", "Google Maps"],
    layers: ["Flutter app, Android and iOS", "Firestore + Storage", "Cloud Functions + push"],
  },
  {
    id: "argear",
    flagship: false,
    stats: [{ v: "4", k: "effect families" }, { v: "2", k: "render paths" }],
    coverShape: "portrait",
    hook: "A native bridge keeping a render loop off the JS thread",
    name: "ARGear",
    kicker: "Real-time AR camera",
    role: "Senior Full-Stack Engineer",
    client: "Alliance Tech",
    lenses: ["mobile"],
    status: { live: false, label: "Delivered to client" },
    links: [],
    cover: { src: argearCover, alt: "ARGear promotional artwork" },
    summary: [
      "A camera that puts augmented reality on a face in real time \u2014 stickers that track it, colour filters, beauty adjustments and a distortion lens. The product is React Native; every frame is drawn in native code, because a JavaScript thread has no business inside a render loop.",
      "The interesting part is the seam between the two. React owns identity, navigation and profile. The native layer owns the camera surface, the tracking SDK and the GPU. They meet at one purpose-built bridge, and the native side speaks upward in events rather than waiting to be asked.",
    ],
    figures: [
      { value: "4", label: "families of effect" },
      { value: "3", label: "capture ratios" },
      { value: "2", label: "native render paths" },
      { value: "3", label: "telemetry streams" },
    ],
    defaultGroup: 1,
    capabilityGroups: [
      { label: "The camera", items: [
        { label: "No shutter button",
          text: "Effects are swiped and tapped through on a full-screen camera. The viewfinder is the interface, so nothing sits on top of it that does not have to." },
        { label: "Four families of effect",
          text: "Face-tracked AR stickers, colour filters, beauty adjustments, and a bulge distortion. Stickers and filters are fetched from a content server, so the catalogue grows without a release. The full set landed on Android first; iOS was brought up on the bridge, capture, recording and the distortion lens." },
        { label: "Capture in the shape people post in",
          text: "Photo and video at 1:1, 16:9 or 9:16, chosen before the shot rather than cropped after. Built-in viewer and player, system share sheet." },
      ] },
      { label: "The bridge", items: [
        { label: "A seam drawn on purpose",
          text: "React Native holds auth, navigation, profile and the screens around the camera. The native layer holds the camera surface, the tracking SDK and the GPU work." },
        { label: "Events upward, not polling",
          text: "The native side emits camera events as they happen — a photo captured, a recording finished. Nothing on the JavaScript side loops asking." },
        { label: "Two implementations, one interface",
          text: "Kotlin against OpenGL ES, Swift against SceneKit and Metal, presented to JavaScript as one module. The platform difference stops at the bridge." },
      ] },
      { label: "Account and session", items: [
        { label: "Signed in, and stays that way",
          text: "Email and password or Google, with the session persisted on the device so the app opens into the camera rather than a login form." },
        { label: "Profiles behind a service",
          text: "Profile records are reached through one service for create, read and update. No screen touches the database directly." },
      ] },
      { label: "Production posture", items: [
        { label: "Instrumented before launch, not after",
          text: "Analytics, performance monitoring and crash reporting wired from the start, with an error boundary so a component failure costs a screen rather than the app." },
        { label: "Tested, signed, handed over",
          text: "A Jest suite with coverage and CI scripts, built as signed release artefacts for both platforms. Publishing was never the brief — production-ready source was." },
      ] },
    ],
    stack: ["React Native 0.81", "React 19", "TypeScript", "Kotlin", "Swift", "ARGear SDK", "OpenGL ES", "Metal / SceneKit", "Firebase", "Jest"],
    layers: ["React Native UI", "Custom native bridge", "Tracking SDK on the GPU"],
  },
  {
    id: "quiziall",
    flagship: false,
    stats: [{ v: "688", k: "offline tests" }, { v: "0", k: "AI at play" }],
    hook: "Questions verified offline, never generated at play",
    name: "QUIZiALL",
    kicker: "Verified AI quiz engine",
    role: "Lead Developer",
    client: "Contract project",
    lenses: ["ai"],
    status: { live: true, label: "Engine production-ready" },
    links: [],
    cover: { src: quiziallCover, alt: "QUIZiALL promotional artwork" },
    summary: [
      "QUIZiALL generates tiered multiple-choice questions across football, film, TV, music and kids' shows \u2014 but AI never runs when someone is playing. Questions are generated offline, grounded against real sources, verified, quality-gated and stored before they reach the player.",
      "The interesting part is the trust boundary. Models provide breadth and write candidates; structured sources anchor the facts; deterministic gates control duplication, coverage and round shape; model-based critics handle worthiness and distractors without being allowed to judge factual correctness.",
    ],
    figures: [
      { value: "688", label: "offline tests" },
      { value: "5", label: "content categories" },
      { value: "100%", label: "Kids-TV accuracy target" },
      { value: "<$1", label: "per-topic generation cost" },
    ],
    defaultGroup: 0,
    capabilityGroups: [
      { label: "Verification", items: [
        { label: "AI proposes, sources anchor",
          text: "A model proposes facts, then they are grounded against Fandom and Wikipedia infoboxes, TMDB, Wikidata, MusicBrainz and sports data. Reference prose fills in where structured data is thin." },
        { label: "Verification is a gate, not a prompt",
          text: "A fact is not accepted because a model says it is true. Verification checks the answer appears on a real source page, near the subject." },
        { label: "The limit was found, not hidden",
          text: "Co-occurrence does not prove a relationship, so a false one can still pass. Recorded as an explicit trust-layer gap rather than buried under a confidence score." },
      ] },
      { label: "Quality gates", items: [
        { label: "Deterministic where deterministic wins",
          text: "Deduplication, family coverage caps, difficulty balancing, round-shape limits. No more than three of one shape per fifteen-question round, no family over twenty per cent of a bank." },
        { label: "AI critiques without owning the facts",
          text: "Model gates judge worthiness and distractor plausibility. The critic is forbidden from deciding whether the underlying fact is true." },
        { label: "Acceptance has a defined bar",
          text: "A written standard sets accuracy, single-answer correctness, structural thresholds and distractor requirements." },
      ] },
      { label: "Platform", items: [
        { label: "The engine is the product",
          text: "The Python engine is the mature layer — reproducible builds, 688 offline tests. Generation runs before gameplay, so a round costs no inference." },
        { label: "From engine to API",
          text: "A FastAPI backend, a SQLite-to-PostgreSQL importer and Alembic migrations. The Flutter client is early." },
        { label: "Scale has a trust boundary",
          text: "Generation scales from dozens of topics to hundreds; verification and sampling do not yet. Human review stays in the acceptance process until semantic verification is built." },
      ] },
    ],
    notes: { label: "Proven output", value: "Peppa 52 and Bluey 63 signed off \u00b7 Paw Patrol 56 review-ready \u00b7 Gabby 35 source-limited \u00b7 Friends pilot: 220 verified facts, 161 of them narrative" },
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLite", "Alembic", "Flutter", "Dart", "OpenAI", "Fandom", "Wikipedia", "TMDB", "Wikidata", "MusicBrainz"],
    layers: ["Candidate generation + grounding", "Verification + quality gates", "Stored banks \u2192 API + Flutter"],
  },
  {
    id: "omnigen",
    flagship: false,
    stats: [{ v: "5", k: "generators" }, { v: "4", k: "output types" }],
    hook: "Five generators behind one server-enforced usage gate",
    name: "Omnigen.AI",
    kicker: "Five AI generators in one dashboard",
    role: "Full-Stack Engineer",
    client: "Green Touch",
    lenses: ["ai"],
    status: { live: false, label: "Demo build" },
    links: [],
    cover: { src: omnigenCover, alt: "Omnigen.AI promotional artwork" },
    summary: [
      "A single dashboard holding five generators \u2014 conversation, code, image, music and video \u2014 behind one login, one usage counter and one subscription. The product question it answers is not how to call a model; it is what a paid AI tool has to be once the generating part works.",
      "Two providers sit behind the routes: text and images direct from OpenAI, audio and video from hosted community models. The route layer is the only place that knows which is which.",
    ],
    figures: [
      { value: "5", label: "generators in one shell" },
      { value: "4", label: "output types" },
      { value: "2", label: "model providers" },
      { value: "5", label: "free generations before the gate" },
    ],
    defaultGroup: 0,
    capabilityGroups: [
      { label: "The generators", items: [
        { label: "Five tools, one shell",
          text: "Conversation, code, image, music and video behind one authentication, one sidebar and one usage counter." },
        { label: "Code that comes back as code",
          text: "The same chat model as the assistant, with a system prompt forcing markdown code blocks and a renderer that highlights them. The difference is a prompt and a renderer, not a second model." },
        { label: "Two providers, for two reasons",
          text: "Text and images from OpenAI, music and video from hosted community models. Which one answers stops mattering above the route layer." },
      ] },
      { label: "The product shell", items: [
        { label: "Auth at the edge",
          text: "Middleware protects every route except the landing page and the payment webhook, so an unauthenticated request never reaches a generator or the keys behind one." },
        { label: "The paywall is a state machine, not a page",
          text: "Usage tracked per user, the remainder shown in the sidebar, and a 403 at the limit — which is what opens the upgrade modal." },
        { label: "Commerce wired end to end",
          text: "Hosted checkout, a billing portal, a webhook recording creation and renewal, and a schema for usage and subscription state." },
      ] },
      { label: "Real and stubbed", items: [
        { label: "The generators are real; the ledger is not",
          text: "Every generation calls a live model. But the usage counter and the subscription check run on in-memory stores with the database calls commented out — counts reset on restart, and one hardcoded identifier is the only subscriber." },
        { label: "Which makes it a demo, and it says so",
          text: "A complete product surface with a working model layer and a demonstrated payment integration, short of a running business by one unfinished wire." },
      ] },
    ],
    stack: ["Next.js 13", "React 18", "TypeScript", "Tailwind", "shadcn/ui", "Clerk", "OpenAI", "Replicate", "Stripe", "Prisma", "MySQL", "Zustand"],
    layers: ["Next.js App Router", "Auth + usage gate", "OpenAI + hosted models"],
  },
];
