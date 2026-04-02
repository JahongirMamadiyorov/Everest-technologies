// =============================================================
// SERVICE DATA
// =============================================================
const SERVICES = {
  'web-development': {
    id: 'web-development',
    name: 'Web Development',
    tagline: 'Fast, scalable websites and web apps built to perform',
    heroIllustration: `
      <svg viewBox="0 0 600 320" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <rect x="60" y="40" width="480" height="240" rx="12" stroke="rgba(139,92,246,0.3)" stroke-width="2" fill="rgba(139,92,246,0.04)"/>
        <rect x="60" y="40" width="480" height="36" rx="12" fill="rgba(139,92,246,0.1)"/>
        <circle cx="86" cy="58" r="6" fill="#ef4444" opacity="0.7"/>
        <circle cx="106" cy="58" r="6" fill="#f59e0b" opacity="0.7"/>
        <circle cx="126" cy="58" r="6" fill="#22c55e" opacity="0.7"/>
        <rect x="80" y="96" width="200" height="10" rx="5" fill="rgba(139,92,246,0.4)"/>
        <rect x="80" y="116" width="140" height="8" rx="4" fill="rgba(255,255,255,0.15)"/>
        <rect x="80" y="134" width="160" height="8" rx="4" fill="rgba(255,255,255,0.1)"/>
        <rect x="80" y="152" width="120" height="8" rx="4" fill="rgba(255,255,255,0.1)"/>
        <rect x="80" y="178" width="80" height="32" rx="8" fill="url(#grad1)" opacity="0.9"/>
        <rect x="345" y="90" width="165" height="120" rx="10" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.2)" stroke-width="1.5"/>
        <rect x="355" y="102" width="80" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
        <rect x="355" y="116" width="60" height="6" rx="3" fill="rgba(255,255,255,0.12)"/>
        <rect x="355" y="130" width="145" height="60" rx="6" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.2)" stroke-dasharray="4 2"/>
        <text x="428" y="166" text-anchor="middle" fill="rgba(139,92,246,0.6)" font-size="12">SVG</text>
        <rect x="355" y="197" width="50" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
        <path d="M80 240 Q240 200 400 220 Q500 235 540 250" stroke="url(#grad1)" stroke-width="2" stroke-dasharray="6 3" opacity="0.5"/>
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#3b82f6"/>
            <stop offset="50%" stop-color="#8b5cf6"/>
            <stop offset="100%" stop-color="#d946ef"/>
          </linearGradient>
        </defs>
      </svg>`,
    offers: [
      'Custom website design and development',
      'Next.js and React web applications',
      'E-commerce stores with payment integration',
      'CMS integration (Strapi, Sanity, WordPress)',
      'Performance optimization and Core Web Vitals / SEO',
      'Hosting, deployment setup, and CI/CD pipelines',
    ],
    approach: [
      { title: 'Discovery & Planning', desc: 'We audit your requirements, study your users, and map out the architecture before a single line of code is written.' },
      { title: 'Design & Build', desc: 'Our engineers and designers work in parallel sprints — pixel-perfect UI implemented with clean, maintainable code.' },
      { title: 'Launch & Optimize', desc: 'We handle deployment, performance auditing, and ongoing monitoring so your site stays fast as you grow.' },
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Supabase', 'Vercel', 'Strapi'],
    pricing: {
      starter: { price: '$3,000 – $8,000', features: ['Up to 10 pages', 'Responsive design', 'CMS integration', 'Basic SEO setup', '2 revision rounds'] },
      growth: { price: '$8,000 – $25,000', features: ['Unlimited pages', 'Custom web app features', 'E-commerce integration', 'Performance optimization', 'Analytics setup', '4 revision rounds'] },
    },
  },

  'mobile-apps': {
    id: 'mobile-apps',
    name: 'Mobile Apps',
    tagline: 'Native and cross-platform apps for iOS and Android',
    heroIllustration: `
      <svg viewBox="0 0 600 320" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <rect x="210" y="20" width="100" height="180" rx="16" stroke="rgba(139,92,246,0.4)" stroke-width="2" fill="rgba(139,92,246,0.05)"/>
        <rect x="220" y="36" width="80" height="120" rx="6" fill="rgba(139,92,246,0.08)"/>
        <rect x="230" y="44" width="60" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
        <rect x="230" y="58" width="40" height="6" rx="3" fill="rgba(255,255,255,0.12)"/>
        <rect x="230" y="72" width="56" height="32" rx="6" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.25)" stroke-width="1"/>
        <rect x="230" y="112" width="56" height="6" rx="3" fill="rgba(255,255,255,0.12)"/>
        <rect x="230" y="126" width="32" height="6" rx="3" fill="rgba(255,255,255,0.08)"/>
        <circle cx="260" cy="195" r="5" fill="rgba(255,255,255,0.3)"/>
        <rect x="330" y="60" width="80" height="140" rx="14" stroke="rgba(59,130,246,0.4)" stroke-width="2" fill="rgba(59,130,246,0.05)"/>
        <rect x="338" y="72" width="64" height="96" rx="5" fill="rgba(59,130,246,0.08)"/>
        <rect x="345" y="80" width="50" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
        <rect x="345" y="94" width="36" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>
        <rect x="345" y="105" width="50" height="28" rx="5" fill="rgba(139,92,246,0.12)" stroke="rgba(139,92,246,0.25)" stroke-width="1"/>
        <rect x="345" y="140" width="50" height="5" rx="2" fill="rgba(255,255,255,0.1)"/>
        <circle cx="370" cy="188" r="4" fill="rgba(255,255,255,0.2)"/>
        <path d="M160 160 C180 120 200 100 220 100" stroke="rgba(139,92,246,0.3)" stroke-width="1.5" stroke-dasharray="4 3"/>
        <path d="M440 140 C460 140 480 160 480 180 Q480 200 460 200" stroke="rgba(59,130,246,0.3)" stroke-width="1.5" stroke-dasharray="4 3"/>
        <circle cx="150" cy="165" r="20" fill="rgba(139,92,246,0.08)" stroke="rgba(139,92,246,0.2)" stroke-width="1.5"/>
        <path d="M143 165 L149 171 L157 159" stroke="rgba(139,92,246,0.7)" stroke-width="2" stroke-linecap="round"/>
        <circle cx="460" cy="210" r="20" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.2)" stroke-width="1.5"/>
        <path d="M453 203 L467 217M467 203 L453 217" stroke="rgba(59,130,246,0.4)" stroke-width="1.5" stroke-linecap="round"/>
        <defs>
          <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#3b82f6"/>
            <stop offset="100%" stop-color="#8b5cf6"/>
          </linearGradient>
        </defs>
      </svg>`,
    offers: [
      'Cross-platform apps with React Native or Flutter',
      'Native iOS development with Swift',
      'Native Android development with Kotlin',
      'App Store and Google Play submission support',
      'Push notifications and offline support',
      'Backend API integration and data synchronisation',
    ],
    approach: [
      { title: 'UX Research & Wireframing', desc: 'We define user flows and build interactive prototypes before development begins — no guesswork.' },
      { title: 'Native-Quality Development', desc: 'Whether cross-platform or native, we build apps that feel right on the device — smooth, fast, and reliable.' },
      { title: 'Testing & Store Submission', desc: 'Comprehensive QA across devices, followed by full App Store and Google Play submission and compliance review.' },
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'Firebase', 'Supabase', 'TypeScript'],
    pricing: {
      starter: { price: '$8,000 – $20,000', features: ['Single platform (iOS or Android)', 'Up to 10 screens', 'API integration', 'Basic push notifications', 'Store submission'] },
      growth: { price: '$20,000 – $60,000', features: ['iOS and Android', 'Unlimited screens', 'Custom backend', 'Advanced notifications', 'In-app purchases', 'Analytics dashboard'] },
    },
  },

  'custom-integrations': {
    id: 'custom-integrations',
    name: 'Custom Integrations',
    tagline: 'Connect your tools, automate your workflows',
    heroIllustration: `
      <svg viewBox="0 0 600 320" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <circle cx="100" cy="160" r="44" fill="rgba(139,92,246,0.08)" stroke="rgba(139,92,246,0.3)" stroke-width="2"/>
        <rect x="78" y="148" width="44" height="24" rx="4" fill="rgba(139,92,246,0.2)" stroke="rgba(139,92,246,0.4)" stroke-width="1"/>
        <rect x="84" y="154" width="32" height="4" rx="2" fill="rgba(255,255,255,0.5)"/>
        <rect x="84" y="162" width="20" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
        <circle cx="300" cy="160" r="44" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.4)" stroke-width="2"/>
        <path d="M280 150 L300 130 L320 150 L320 170 L300 190 L280 170 Z" stroke="rgba(59,130,246,0.6)" stroke-width="1.5" fill="rgba(59,130,246,0.1)"/>
        <circle cx="300" cy="160" r="8" fill="rgba(59,130,246,0.4)"/>
        <circle cx="500" cy="160" r="44" fill="rgba(217,70,239,0.08)" stroke="rgba(217,70,239,0.3)" stroke-width="2"/>
        <path d="M484 148 L516 148 M484 160 L516 160 M484 172 L516 172" stroke="rgba(217,70,239,0.6)" stroke-width="2" stroke-linecap="round"/>
        <path d="M145 160 L254 160" stroke="rgba(139,92,246,0.4)" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#arrow1)"/>
        <path d="M346 160 L454 160" stroke="rgba(59,130,246,0.4)" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#arrow2)"/>
        <circle cx="200" cy="160" r="8" fill="rgba(139,92,246,0.3)" stroke="rgba(139,92,246,0.6)" stroke-width="1.5"/>
        <path d="M197 157 L203 163 M197 163 L203 157" stroke="rgba(255,255,255,0.8)" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="400" cy="160" r="8" fill="rgba(59,130,246,0.3)" stroke="rgba(59,130,246,0.6)" stroke-width="1.5"/>
        <path d="M397 157 L403 163 M397 163 L403 157" stroke="rgba(255,255,255,0.8)" stroke-width="1.5" stroke-linecap="round"/>
        <text x="100" y="224" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="11">CRM</text>
        <text x="300" y="224" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="11">Middleware</text>
        <text x="500" y="224" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="11">ERP</text>
        <defs>
          <marker id="arrow1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill="none" stroke="rgba(139,92,246,0.6)" stroke-width="1"/>
          </marker>
          <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill="none" stroke="rgba(59,130,246,0.6)" stroke-width="1"/>
          </marker>
        </defs>
      </svg>`,
    offers: [
      'Third-party API integrations (any service, any protocol)',
      'Payment gateway setup (Stripe, PayPal, Braintree)',
      'CRM and ERP integrations (Salesforce, HubSpot, SAP)',
      'Automation pipelines, webhooks, and scheduled jobs',
      'Real-time data sync between platforms',
      'Custom middleware and adapter development',
    ],
    approach: [
      { title: 'Systems Audit', desc: 'We map your existing stack, data flows, and pain points to design an integration architecture that scales.' },
      { title: 'Build & Test in Isolation', desc: 'Each integration is built and exhaustively tested independently before connecting to your production environment.' },
      { title: 'Deploy & Monitor', desc: 'We deploy with zero-downtime strategies and set up monitoring so you can see every data flow in real time.' },
    ],
    technologies: ['REST APIs', 'GraphQL', 'Stripe', 'Zapier', 'n8n', 'Node.js', 'Python', 'PostgreSQL', 'Redis'],
    pricing: {
      starter: { price: '$2,000 – $6,000', features: ['1–2 integrations', 'Webhook setup', 'Basic data mapping', 'Testing & documentation', 'Handoff to your team'] },
      growth: { price: '$6,000 – $20,000', features: ['Unlimited integrations', 'Custom middleware', 'Automation pipelines', 'Real-time monitoring', 'Ongoing maintenance', 'Priority support'] },
    },
  },

  'ui-ux-design': {
    id: 'ui-ux-design',
    name: 'UI/UX Design',
    tagline: 'Interfaces that convert visitors into loyal customers',
    heroIllustration: `
      <svg viewBox="0 0 600 320" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <rect x="60" y="60" width="200" height="200" rx="12" fill="rgba(139,92,246,0.05)" stroke="rgba(139,92,246,0.2)" stroke-width="1.5"/>
        <rect x="76" y="76" width="168" height="110" rx="6" fill="rgba(139,92,246,0.08)"/>
        <circle cx="106" cy="92" r="10" fill="rgba(139,92,246,0.2)" stroke="rgba(139,92,246,0.4)" stroke-width="1"/>
        <circle cx="130" cy="92" r="10" fill="rgba(59,130,246,0.2)" stroke="rgba(59,130,246,0.4)" stroke-width="1"/>
        <circle cx="154" cy="92" r="10" fill="rgba(217,70,239,0.2)" stroke="rgba(217,70,239,0.4)" stroke-width="1"/>
        <rect x="90" y="112" width="130" height="50" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4 2"/>
        <rect x="76" y="198" width="78" height="8" rx="4" fill="rgba(139,92,246,0.3)"/>
        <rect x="76" y="212" width="56" height="6" rx="3" fill="rgba(255,255,255,0.1)"/>
        <rect x="76" y="224" width="64" height="6" rx="3" fill="rgba(255,255,255,0.1)"/>
        <rect x="76" y="240" width="40" height="20" rx="6" fill="url(#grad3)" opacity="0.8"/>
        <rect x="340" y="60" width="200" height="200" rx="12" fill="rgba(59,130,246,0.05)" stroke="rgba(59,130,246,0.2)" stroke-width="1.5"/>
        <path d="M360 120 L380 100 L400 115 L420 95 L440 110 L520 110" stroke="rgba(59,130,246,0.5)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M360 120 L380 100 L400 115 L420 95 L440 110 L520 110 L520 240 L360 240 Z" fill="rgba(59,130,246,0.06)"/>
        <rect x="360" y="150" width="55" height="16" rx="4" fill="rgba(139,92,246,0.15)" stroke="rgba(139,92,246,0.3)" stroke-width="1"/>
        <rect x="360" y="172" width="42" height="16" rx="4" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.3)" stroke-width="1"/>
        <rect x="360" y="194" width="62" height="16" rx="4" fill="rgba(217,70,239,0.15)" stroke="rgba(217,70,239,0.3)" stroke-width="1"/>
        <path d="M275 160 L330 160" stroke="rgba(255,255,255,0.15)" stroke-width="2" stroke-dasharray="5 3"/>
        <defs>
          <linearGradient id="grad3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#3b82f6"/>
            <stop offset="100%" stop-color="#8b5cf6"/>
          </linearGradient>
        </defs>
      </svg>`,
    offers: [
      'User research and competitor analysis',
      'Wireframing and interactive prototyping',
      'Full UI design in Figma with component library',
      'Design system creation and documentation',
      'Responsive design for all screen sizes',
      'Developer handoff with annotated specs and assets',
    ],
    approach: [
      { title: 'Research & Discovery', desc: 'We interview users, analyse competitors, and identify conversion bottlenecks before designing a single pixel.' },
      { title: 'Prototype & Test', desc: 'Fast wireframes and clickable prototypes let us test assumptions early and iterate before development starts.' },
      { title: 'Final Design & Handoff', desc: 'Pixel-perfect Figma files, a complete component library, and developer specs — everything needed to build.' },
    ],
    technologies: ['Figma', 'Adobe Illustrator', 'Framer', 'Storybook', 'Tailwind CSS'],
    pricing: {
      starter: { price: '$2,500 – $7,000', features: ['Up to 15 screens', 'Wireframes + final UI', 'Responsive layouts', '2 design concepts', 'Figma file delivery'] },
      growth: { price: '$7,000 – $20,000', features: ['Unlimited screens', 'Full design system', 'Prototype testing', 'User research report', 'Interaction animations', 'Dev handoff'] },
    },
  },

  'saas-products': {
    id: 'saas-products',
    name: 'SaaS Products',
    tagline: 'Full-stack SaaS platforms built from zero to launch',
    heroIllustration: `
      <svg viewBox="0 0 600 320" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <rect x="60" y="40" width="480" height="240" rx="12" stroke="rgba(139,92,246,0.2)" stroke-width="1.5" fill="rgba(139,92,246,0.03)"/>
        <rect x="60" y="40" width="120" height="240" rx="12" fill="rgba(139,92,246,0.06)" stroke="rgba(139,92,246,0.15)" stroke-width="1"/>
        <circle cx="120" cy="75" r="16" fill="rgba(139,92,246,0.15)" stroke="rgba(139,92,246,0.3)" stroke-width="1.5"/>
        <path d="M113 75 L117 79 L127 69" stroke="rgba(139,92,246,0.8)" stroke-width="2" stroke-linecap="round"/>
        <rect x="80" y="106" width="60" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
        <rect x="80" y="124" width="60" height="6" rx="3" fill="rgba(255,255,255,0.1)"/>
        <rect x="80" y="142" width="60" height="6" rx="3" fill="rgba(255,255,255,0.1)"/>
        <rect x="80" y="160" width="60" height="6" rx="3" fill="rgba(139,92,246,0.4)"/>
        <rect x="80" y="178" width="60" height="6" rx="3" fill="rgba(255,255,255,0.1)"/>
        <rect x="200" y="56" width="110" height="64" rx="8" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.2)" stroke-width="1"/>
        <rect x="212" y="68" width="50" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
        <rect x="212" y="82" width="70" height="16" rx="4" fill="rgba(59,130,246,0.2)"/>
        <text x="247" y="94" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="10">$12,480</text>
        <rect x="330" y="56" width="110" height="64" rx="8" fill="rgba(217,70,239,0.08)" stroke="rgba(217,70,239,0.2)" stroke-width="1"/>
        <rect x="342" y="68" width="50" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
        <rect x="342" y="82" width="70" height="16" rx="4" fill="rgba(217,70,239,0.2)"/>
        <text x="377" y="94" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="10">1,240 users</text>
        <rect x="200" y="140" width="240" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <path d="M210 230 L240 190 L270 210 L300 170 L330 185 L360 155 L390 160 L420 148 L430 148" stroke="url(#grad4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
          <linearGradient id="grad4" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#3b82f6"/>
            <stop offset="50%" stop-color="#8b5cf6"/>
            <stop offset="100%" stop-color="#d946ef"/>
          </linearGradient>
        </defs>
      </svg>`,
    offers: [
      'Complete SaaS architecture design and technical planning',
      'Authentication and user management (SSO, MFA)',
      'Subscription billing integration with Stripe',
      'Admin dashboard with analytics and reporting',
      'Multi-tenancy support and team workspaces',
      'Scalable cloud infrastructure on AWS or Vercel',
    ],
    approach: [
      { title: 'Architecture First', desc: 'Before writing code we plan the full data model, auth flows, billing logic, and scaling strategy — preventing costly rewrites later.' },
      { title: 'Iterative Build', desc: 'We build in milestone sprints — auth, core product, billing, dashboard — with a live staging environment from day one.' },
      { title: 'Launch-Ready', desc: 'We handle production deployment, monitoring setup, and post-launch support so you can focus on growing your user base.' },
    ],
    technologies: ['Next.js', 'Supabase', 'Stripe', 'PostgreSQL', 'Redis', 'AWS', 'Vercel', 'TypeScript'],
    pricing: {
      starter: { price: '$15,000 – $40,000', features: ['Core SaaS functionality', 'Auth & user management', 'Stripe billing', 'Admin panel', 'Deployment & monitoring'] },
      growth: { price: '$40,000 – $120,000', features: ['Full feature set', 'Multi-tenancy', 'Custom analytics', 'Advanced roles & permissions', 'API access for customers', 'SLA support'] },
    },
  },

  'api-development': {
    id: 'api-development',
    name: 'API Development',
    tagline: 'Robust APIs that power your products at any scale',
    heroIllustration: `
      <svg viewBox="0 0 600 320" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <rect x="60" y="80" width="480" height="160" rx="12" fill="rgba(59,130,246,0.03)" stroke="rgba(59,130,246,0.15)" stroke-width="1.5"/>
        <rect x="80" y="100" width="180" height="24" rx="6" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.2)" stroke-width="1"/>
        <rect x="88" y="108" width="30" height="8" rx="3" fill="rgba(59,130,246,0.5)"/>
        <rect x="126" y="110" width="80" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
        <rect x="80" y="134" width="180" height="24" rx="6" fill="rgba(139,92,246,0.08)" stroke="rgba(139,92,246,0.2)" stroke-width="1"/>
        <rect x="88" y="142" width="38" height="8" rx="3" fill="rgba(139,92,246,0.5)"/>
        <rect x="134" y="144" width="70" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
        <rect x="80" y="168" width="180" height="24" rx="6" fill="rgba(217,70,239,0.08)" stroke="rgba(217,70,239,0.2)" stroke-width="1"/>
        <rect x="88" y="176" width="50" height="8" rx="3" fill="rgba(217,70,239,0.5)"/>
        <rect x="146" y="178" width="60" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
        <rect x="80" y="202" width="180" height="24" rx="6" fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.2)" stroke-width="1"/>
        <rect x="88" y="210" width="42" height="8" rx="3" fill="rgba(245,158,11,0.5)"/>
        <rect x="138" y="212" width="65" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
        <rect x="340" y="96" width="180" height="140" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <rect x="350" y="108" width="60" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
        <rect x="350" y="124" width="160" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
        <rect x="350" y="136" width="140" height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
        <rect x="350" y="148" width="150" height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
        <rect x="350" y="164" width="60" height="6" rx="3" fill="rgba(59,130,246,0.3)"/>
        <rect x="350" y="180" width="140" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
        <rect x="350" y="192" width="100" height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
        <rect x="350" y="204" width="120" height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
        <path d="M264 112 L336 112" stroke="rgba(59,130,246,0.3)" stroke-width="1" stroke-dasharray="4 2"/>
        <path d="M264 146 L336 146" stroke="rgba(139,92,246,0.3)" stroke-width="1" stroke-dasharray="4 2"/>
        <path d="M264 180 L336 180" stroke="rgba(217,70,239,0.3)" stroke-width="1" stroke-dasharray="4 2"/>
        <path d="M264 214 L336 214" stroke="rgba(245,158,11,0.3)" stroke-width="1" stroke-dasharray="4 2"/>
      </svg>`,
    offers: [
      'RESTful API design and development following best practices',
      'GraphQL API implementation with schema-first design',
      'Comprehensive API documentation with Swagger / OpenAPI',
      'Authentication and authorisation (JWT, OAuth2, API keys)',
      'Rate limiting, caching, and security hardening',
      'API versioning strategy and long-term maintenance',
    ],
    approach: [
      { title: 'Design the Contract', desc: 'We define the API spec in OpenAPI before writing code — giving you a clear contract clients can build against from day one.' },
      { title: 'Build & Secure', desc: 'Endpoints are built with security at the core — input validation, rate limiting, auth, and logging from the first commit.' },
      { title: 'Document & Deliver', desc: 'Full Swagger docs, SDK examples, and a postman collection are delivered alongside the API ready for your team or customers.' },
    ],
    technologies: ['Node.js', 'Express', 'FastAPI', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Swagger'],
    pricing: {
      starter: { price: '$4,000 – $10,000', features: ['Up to 20 endpoints', 'JWT authentication', 'OpenAPI documentation', 'Basic rate limiting', 'Testing suite'] },
      growth: { price: '$10,000 – $40,000', features: ['Unlimited endpoints', 'OAuth2 / SSO', 'Versioning strategy', 'GraphQL layer', 'Advanced monitoring', 'SDK generation'] },
    },
  },
};

// =============================================================
// SERVICE TRANSLATIONS (UZ / RU — EN is the base data above)
// =============================================================
const SERVICE_TRANSLATIONS = {
  uz: {
    'web-development': {
      name: 'Veb-ishlanma',
      tagline: 'Tez va kengaytiriladigan veb-saytlar va veb-ilovalar',
      offers: [
        "Maxsus veb-sayt dizayni va ishlanmasi",
        "Next.js va React veb-ilovalari",
        "To'lov integratsiyali e-tijorat do'konlari",
        "CMS integratsiyasi (Strapi, Sanity, WordPress)",
        "Ishlash optimizatsiyasi va Core Web Vitals / SEO",
        "Hosting, joylashtirish sozlamasi va CI/CD quvurlari",
      ],
      approach: [
        { title: "Kashfiyot va rejalashtirish", desc: "Talablaringizni o'rganamiz, foydalanuvchilaringizni tahlil qilamiz va bitta kod yozilmasdan oldin arxitekturani rejalashtramiz." },
        { title: "Dizayn va qurilish", desc: "Muhandislarimiz va dizaynerlarimiz parallel sprintlarda ishlaydi — toza, qo'llab-quvvatlanadigan kod bilan amalga oshirilgan piksel-perfect interfeys." },
        { title: "Ishga tushirish va optimizatsiya", desc: "Joylashtirish, ishlash auditini va doimiy monitoringni biz boshqaramiz, shunda saytingiz o'sgan sari tez ishlaydi." },
      ],
    },
    'mobile-apps': {
      name: 'Mobil ilovalar',
      tagline: "iOS va Android uchun mahalliy va ko'p platformali ilovalar",
      offers: [
        "React Native yoki Flutter bilan ko'p platformali ilovalar",
        "Swift bilan mahalliy iOS ishlanmasi",
        "Kotlin bilan mahalliy Android ishlanmasi",
        "App Store va Google Play joylashtirishda yordam",
        "Push bildirishnomalar va oflayn qo'llab-quvvatlash",
        "Backend API integratsiyasi va ma'lumotlarni sinxronlashtirish",
      ],
      approach: [
        { title: "UX tadqiqot va wireframing", desc: "Foydalanuvchi oqimlarini aniqlaymiz va ishlanma boshlashdan oldin interaktiv prototiplar yaratamiz — hech qanday tahmin yo'q." },
        { title: "Mahalliy sifatli ishlanma", desc: "Ko'p platformali yoki mahalliy bo'lishidan qat'iy nazar, qurilmada to'g'ri his qiladigan ilovalar yaratamiz — silliq, tez va ishonchli." },
        { title: "Sinov va do'kon topshirish", desc: "Qurilmalar bo'ylab keng QA, so'ng to'liq App Store va Google Play topshirish va muvofiqlik tekshiruvi." },
      ],
    },
    'custom-integrations': {
      name: 'Maxsus integratsiyalar',
      tagline: "Vositalaringizni ulang, ish oqimlaringizni avtomatlashtiring",
      offers: [
        "Uchinchi tomon API integratsiyalari (har qanday xizmat, har qanday protokol)",
        "To'lov shlyuzi sozlamasi (Stripe, PayPal, Braintree)",
        "CRM va ERP integratsiyalari (Salesforce, HubSpot, SAP)",
        "Avtomatlashtirish quvurlari, webhooklar va rejalashtirilgan vazifalar",
        "Platformalar o'rtasida real vaqt ma'lumotlar sinxronlashuvi",
        "Maxsus middleware va adapter ishlanmasi",
      ],
      approach: [
        { title: "Tizimlar auditi", desc: "Mavjud stekingizni, ma'lumot oqimlarini va muammolarni xaritalab, kengaytiriladigan integratsiya arxitekturasini loyihaymiz." },
        { title: "Alohida qurilish va sinov", desc: "Har bir integratsiya ishlab chiqarish muhitiga ulashdan oldin mustaqil ravishda quriladi va to'liq sinovdan o'tkaziladi." },
        { title: "Joylashtirish va monitoring", desc: "Nol ishlamay qolish strategiyalari bilan joylashtramiz va monitoring o'rnatamiz, shunda har bir ma'lumot oqimini real vaqtda ko'rasiz." },
      ],
    },
    'ui-ux-design': {
      name: 'UI/UX Dizayn',
      tagline: "Tashrif buyuruvchilarni sodiq mijozlarga aylantiruvchi interfeys",
      offers: [
        "Foydalanuvchi tadqiqoti va raqobat tahlili",
        "Wireframing va interaktiv prototiplash",
        "Komponent kutubxonasi bilan Figmada to'liq UI dizayn",
        "Dizayn tizimini yaratish va hujjatlashtirish",
        "Barcha ekran o'lchamlari uchun responsiv dizayn",
        "Izohli spetsifikatsiyalar va aktivlar bilan ishlanmachiga topshirish",
      ],
      approach: [
        { title: "Tadqiqot va kashfiyot", desc: "Bitta piksel dizayn qilishdan oldin foydalanuvchilar bilan suhbatlashamiz, raqobatchilarni tahlil qilamiz va konversiya to'siqlarini aniqlaymiz." },
        { title: "Prototip va sinov", desc: "Tez wireframe va bosish mumkin bo'lgan prototiplar taxminlarni ishlanma boshlashdan oldin erta sinab ko'rish va takrorlash imkonini beradi." },
        { title: "Yakuniy dizayn va topshirish", desc: "Piksel-perfect Figma fayllari, to'liq komponent kutubxonasi va ishlanmachi spetsifikatsiyalari — qurilish uchun zarur hamma narsa." },
      ],
    },
    'saas-products': {
      name: 'SaaS mahsulotlar',
      tagline: "Noldan ishga tushirishgacha qurilgan to'liq SaaS platformalari",
      offers: [
        "To'liq SaaS arxitekturasi dizayni va texnik rejalashtirish",
        "Autentifikatsiya va foydalanuvchi boshqaruvi (SSO, MFA)",
        "Stripe bilan obuna to'lov integratsiyasi",
        "Tahlil va hisobotlar bilan admin boshqaruv paneli",
        "Ko'p ijarachilik qo'llab-quvvatlash va jamoa ish joylari",
        "AWS yoki Vercel-da kengaytiriladigan bulut infratuzilmasi",
      ],
      approach: [
        { title: "Birinchi arxitektura", desc: "Kod yozishdan oldin to'liq ma'lumot modelini, autentifikatsiya oqimlarini, billing mantiqini va kengayish strategiyasini rejalashtramiz." },
        { title: "Iterativ qurilish", desc: "Milestone sprintlarda quramiz — autentifikatsiya, asosiy mahsulot, billing, boshqaruv paneli — birinchi kundan boshlab jonli staging muhiti bilan." },
        { title: "Ishga tushirishga tayyor", desc: "Ishlab chiqarish joylashtirish, monitoring sozlash va ishga tushirgandan keyin qo'llab-quvvatlashni biz boshqaramiz." },
      ],
    },
    'api-development': {
      name: 'API ishlanma',
      tagline: "Har qanday ko'lamda mahsulotlaringizni quvvatlovchi mustahkam APIlar",
      offers: [
        "Eng yaxshi amaliyotlar asosida RESTful API dizayni va ishlanmasi",
        "Schema-first dizayn bilan GraphQL API amalga oshirishi",
        "Swagger / OpenAPI bilan keng API hujjatlari",
        "Autentifikatsiya va avtorizatsiya (JWT, OAuth2, API kalitlar)",
        "Tezlikni cheklash, keshlash va xavfsizlikni mustahkamlash",
        "API versiyalash strategiyasi va uzoq muddatli texnik xizmat",
      ],
      approach: [
        { title: "Kontraktni loyihalash", desc: "Kod yozishdan oldin API spetsifikatsiyasini OpenAPI'da aniqlaymiz — mijozlar birinchi kundan qurishlari mumkin bo'lgan aniq kontrakt." },
        { title: "Qurilish va himoya", desc: "Endpointlar xavfsizlikni asosida quradi — kirish tekshiruvi, tezlikni cheklash, autentifikatsiya va birinchi commitdan logging." },
        { title: "Hujjatlashtirish va yetkazish", desc: "To'liq Swagger hujjatlari, SDK misollari va postman to'plami API bilan birga jamoangiz yoki mijozlaringiz uchun tayyor holda yetkaziladi." },
      ],
    },
  },
  ru: {
    'web-development': {
      name: 'Веб-разработка',
      tagline: 'Быстрые и масштабируемые сайты и веб-приложения',
      offers: [
        'Разработка и дизайн сайта под ключ',
        'Веб-приложения на Next.js и React',
        'Интернет-магазины с интеграцией оплаты',
        'Интеграция CMS (Strapi, Sanity, WordPress)',
        'Оптимизация производительности и SEO',
        'Хостинг, настройка деплоя и CI/CD',
      ],
      approach: [
        { title: 'Исследование и планирование', desc: 'Изучаем требования, анализируем пользователей и проектируем архитектуру до написания первой строки кода.' },
        { title: 'Дизайн и разработка', desc: 'Инженеры и дизайнеры работают параллельными спринтами — пиксельно точный UI с чистым, поддерживаемым кодом.' },
        { title: 'Запуск и оптимизация', desc: 'Берём на себя деплой, аудит производительности и мониторинг, чтобы сайт оставался быстрым по мере роста.' },
      ],
    },
    'mobile-apps': {
      name: 'Мобильные приложения',
      tagline: 'Нативные и кроссплатформенные приложения для iOS и Android',
      offers: [
        'Кроссплатформенные приложения на React Native или Flutter',
        'Нативная разработка для iOS на Swift',
        'Нативная разработка для Android на Kotlin',
        'Публикация в App Store и Google Play',
        'Push-уведомления и поддержка офлайн',
        'Интеграция backend API и синхронизация данных',
      ],
      approach: [
        { title: 'UX-исследование и вайрфреймы', desc: 'Определяем пользовательские сценарии и создаём интерактивные прототипы до начала разработки — без догадок.' },
        { title: 'Разработка нативного качества', desc: 'Кроссплатформенные или нативные — строим приложения, которые правильно ощущаются на устройстве: плавные, быстрые, надёжные.' },
        { title: 'Тестирование и публикация', desc: 'Комплексное QA на всех устройствах, затем полная публикация в App Store и Google Play с проверкой соответствия.' },
      ],
    },
    'custom-integrations': {
      name: 'Индивидуальные интеграции',
      tagline: 'Объединяйте инструменты, автоматизируйте процессы',
      offers: [
        'Интеграция с любыми сторонними API',
        'Настройка платёжных шлюзов (Stripe, PayPal, Braintree)',
        'Интеграция CRM и ERP (Salesforce, HubSpot, SAP)',
        'Пайплайны автоматизации, вебхуки и планировщики',
        'Синхронизация данных между платформами в реальном времени',
        'Разработка middleware и адаптеров под заказ',
      ],
      approach: [
        { title: 'Аудит систем', desc: 'Картируем ваш стек, потоки данных и узкие места, чтобы спроектировать интеграционную архитектуру с запасом масштабирования.' },
        { title: 'Разработка и тестирование изолированно', desc: 'Каждая интеграция разрабатывается и тщательно тестируется отдельно, прежде чем подключается к prod-среде.' },
        { title: 'Деплой и мониторинг', desc: 'Разворачиваем без простоев и настраиваем мониторинг, чтобы вы видели каждый поток данных в реальном времени.' },
      ],
    },
    'ui-ux-design': {
      name: 'UI/UX Дизайн',
      tagline: 'Интерфейсы, превращающие посетителей в лояльных клиентов',
      offers: [
        'Пользовательское исследование и анализ конкурентов',
        'Вайрфреймы и интерактивные прототипы',
        'Полный UI-дизайн в Figma с библиотекой компонентов',
        'Создание и документирование дизайн-системы',
        'Адаптивный дизайн для всех размеров экранов',
        'Передача разработчикам с аннотированными спецификациями',
      ],
      approach: [
        { title: 'Исследование и обнаружение', desc: 'Интервьюируем пользователей, анализируем конкурентов и выявляем барьеры конверсии до начала дизайна.' },
        { title: 'Прототипирование и тестирование', desc: 'Быстрые вайрфреймы и кликабельные прототипы позволяют проверить гипотезы до начала разработки.' },
        { title: 'Финальный дизайн и передача', desc: 'Пиксельно точные файлы Figma, полная библиотека компонентов и спецификации разработчика — всё необходимое для сборки.' },
      ],
    },
    'saas-products': {
      name: 'SaaS-продукты',
      tagline: 'Полноценные SaaS-платформы с нуля до запуска',
      offers: [
        'Проектирование архитектуры SaaS и техническое планирование',
        'Аутентификация и управление пользователями (SSO, MFA)',
        'Интеграция подписочной оплаты через Stripe',
        'Административная панель с аналитикой и отчётами',
        'Поддержка мультитенантности и командных рабочих пространств',
        'Масштабируемая облачная инфраструктура на AWS или Vercel',
      ],
      approach: [
        { title: 'Сначала архитектура', desc: 'До написания кода планируем полную модель данных, потоки аутентификации, логику биллинга и стратегию масштабирования.' },
        { title: 'Итеративная разработка', desc: 'Строим по milestone-спринтам: auth, ядро продукта, биллинг, dashboard — с живой staging-средой с первого дня.' },
        { title: 'Готово к запуску', desc: 'Берём на себя production-деплой, настройку мониторинга и поддержку после запуска, чтобы вы сосредоточились на росте пользовательской базы.' },
      ],
    },
    'api-development': {
      name: 'Разработка API',
      tagline: 'Надёжные API для ваших продуктов в любом масштабе',
      offers: [
        'Проектирование и разработка RESTful API по лучшим практикам',
        'Реализация GraphQL API с подходом schema-first',
        'Полная документация API на Swagger / OpenAPI',
        'Аутентификация и авторизация (JWT, OAuth2, API-ключи)',
        'Ограничение запросов, кэширование и защита',
        'Стратегия версионирования и долгосрочное обслуживание',
      ],
      approach: [
        { title: 'Проектирование контракта', desc: 'Определяем спецификацию API в OpenAPI до написания кода — чёткий контракт, по которому клиенты могут строить с первого дня.' },
        { title: 'Разработка и защита', desc: 'Эндпоинты создаются с фокусом на безопасность: валидация входных данных, ограничение запросов, авторизация и логирование.' },
        { title: 'Документация и передача', desc: 'Полная документация Swagger, примеры SDK и коллекция Postman поставляются вместе с API, готовые для вашей команды или клиентов.' },
      ],
    },
  },
};

function getLocalizedService(serviceId, lang) {
  const base = SERVICES[serviceId];
  if (!base) return null;
  if (lang === 'en' || !SERVICE_TRANSLATIONS[lang] || !SERVICE_TRANSLATIONS[lang][serviceId]) return base;
  const tr = SERVICE_TRANSLATIONS[lang][serviceId];
  return { ...base, name: tr.name || base.name, tagline: tr.tagline || base.tagline, offers: tr.offers || base.offers, approach: tr.approach || base.approach };
}

// =============================================================
// HTML GENERATOR
// =============================================================
function renderServicePage(service) {
  const offersHTML = service.offers.map(o => `
    <li class="sp-offer-item">
      <span class="sp-check-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </span>
      <span>${o}</span>
    </li>`).join('');

  const approachHTML = service.approach.map((step, i) => `
    <div class="sp-step section-reveal">
      <div class="sp-step-num">${String(i + 1).padStart(2, '0')}</div>
      <div class="sp-step-body">
        <h4>${step.title}</h4>
        <p>${step.desc}</p>
      </div>
    </div>`).join('');

  const techHTML = service.technologies.map(t => `
    <span class="sp-tech-pill">${t}</span>`).join('');

  const t = window.t || function(k) { return k; };
  const whyCards = [
    { title: t('sp.why1.title'), desc: t('sp.why1.desc'), icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' },
    { title: t('sp.why2.title'), desc: t('sp.why2.desc'), icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>' },
    { title: t('sp.why3.title'), desc: t('sp.why3.desc'), icon: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.16 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>' },
  ];

  const whyHTML = whyCards.map(card => `
    <div class="sp-why-card section-reveal">
      <div class="sp-why-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${card.icon}</svg>
      </div>
      <h4>${card.title}</h4>
      <p>${card.desc}</p>
    </div>`).join('');

  return `
    <div class="sp-container" id="sp-top">

      <!-- Back button -->
      <div class="sp-back-bar">
        <button class="sp-back-btn" id="sp-back-btn" aria-label="Back to services">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          ${t('sp.back')}
        </button>
      </div>

      <!-- Hero -->
      <section class="sp-hero section-reveal">
        <div class="sp-hero-text">
          <div class="sp-label">${t('sp.label')}</div>
          <h1 class="sp-title">${service.name}</h1>
          <p class="sp-tagline">${service.tagline}</p>
          <a href="#contact" class="btn btn-primary btn-lg sp-hero-cta" id="sp-hero-cta">${t('sp.ctabtn')}</a>
        </div>
        <div class="sp-hero-illustration">
          ${service.heroIllustration}
        </div>
      </section>

      <!-- What We Offer -->
      <section class="sp-section section-reveal">
        <div class="sp-section-header">
          <h2>${t('sp.whatweoffer')}</h2>
          <p>${t('sp.offersubtitle')}</p>
        </div>
        <ul class="sp-offers-list">
          ${offersHTML}
        </ul>
      </section>

      <!-- Our Approach -->
      <section class="sp-section section-reveal">
        <div class="sp-section-header">
          <h2>${t('sp.approach')}</h2>
          <p>${t('sp.approachsubtitle')}</p>
        </div>
        <div class="sp-steps">
          ${approachHTML}
        </div>
      </section>

      <!-- Technologies -->
      <section class="sp-section section-reveal">
        <div class="sp-section-header">
          <h2>${t('sp.techstack')}</h2>
          <p>${t('sp.techsubtitle')}</p>
        </div>
        <div class="sp-tech-grid">
          ${techHTML}
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="sp-section section-reveal">
        <div class="sp-section-header">
          <h2>${t('sp.whychoose')}</h2>
          <p>${t('sp.whysubtitle')}</p>
        </div>
        <div class="sp-why-grid">
          ${whyHTML}
        </div>
      </section>

      <!-- CTA -->
      <section class="sp-cta-section section-reveal">
        <h2>${t('sp.ctatext')}</h2>
        <p>${t('sp.ctasubtitle')}</p>
        <a href="#contact" class="btn btn-primary btn-lg" id="sp-bottom-cta">${t('sp.ctabtn')}</a>
      </section>

    </div>
  `;
}

// Elements to hide when showing a service page (everything outside <main>)
const mainContent = document.querySelector('main');
const servicePage = document.getElementById('service-page');
const spNavbar = document.getElementById('navbar');
const spMobileMenu = document.querySelector('.mobile-menu');
const siteFooter = document.querySelector('footer');
const serviceIds = Object.keys(SERVICES);

function setMainVisibility(visible) {
  const display = visible ? '' : 'none';
  mainContent.style.display = display;
  if (spNavbar) spNavbar.style.display = display;
  if (spMobileMenu) spMobileMenu.style.display = display;
  if (siteFooter) siteFooter.style.display = display;
}
// Expose for use in cases.js which loads after this file
window.setMainVisibility = setMainVisibility;


function showServicePage(serviceId) {
  const lang = localStorage.getItem('lang') || 'uz';
  const service = getLocalizedService(serviceId, lang);
  if (!service) return showMain();

  // Build and inject HTML
  servicePage.innerHTML = renderServicePage(service);

  // Hide everything from the main layout, show service page
  setMainVisibility(false);
  servicePage.style.display = 'block';
  servicePage.removeAttribute('aria-hidden');

  // Scroll to very top
  window.scrollTo({ top: 0, behavior: 'instant' });
  document.title = `${service.name} | Everest Technologies`;

  // Wire up back button
  document.getElementById('sp-back-btn').addEventListener('click', () => {
    history.pushState(null, '', '#services');
    showMain(true);
  });

  // Wire up CTA links to open contact modal
  servicePage.querySelectorAll('a[href="#contact"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      if (window.openContactModal) window.openContactModal();
    });
  });

  // Trigger scroll reveal on newly injected elements
  setupRevealObserver();
}

function showMain(scrollToServices = false) {
  setMainVisibility(true);
  servicePage.style.display = 'none';
  servicePage.setAttribute('aria-hidden', 'true');
  document.title = "Mount Everest Technologies | We Build What Others Can't";

  if (scrollToServices) {
    setTimeout(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) servicesSection.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }
}

function handleRoute() {
  const hash = window.location.hash.replace('#', '');
  if (serviceIds.includes(hash)) {
    showServicePage(hash);
  } else {
    // Only hide service page if it's showing, don't reset main layout
    if (servicePage.style.display === 'block') {
      showMain(false);
    }
  }
}

// Setup IntersectionObserver for service page reveal animations
function setupRevealObserver() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  servicePage.querySelectorAll('.section-reveal').forEach(el => obs.observe(el));

  // Immediately show any in-viewport elements
  servicePage.querySelectorAll('.section-reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) el.classList.add('visible');
  });
}

// Wire up service cards
document.querySelectorAll('.service-card[data-service]').forEach(card => {
  const serviceId = card.getAttribute('data-service');
  card.style.cursor = 'none';

  card.addEventListener('click', () => {
    history.pushState(null, '', `#${serviceId}`);
    showServicePage(serviceId);
  });

  // Keyboard support
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      history.pushState(null, '', `#${serviceId}`);
      showServicePage(serviceId);
    }
  });
});

// Hash routing (browser back/forward)
window.addEventListener('popstate', handleRoute);
window.addEventListener('hashchange', handleRoute);

// Expose for cross-script use (cases.js, footer links)
window.handleRoute = handleRoute;
window.showMain = showMain;

// On load, check if we're landing on a service URL
handleRoute();
