// =============================================================
// CASE STUDY DATA
// =============================================================
const CASES = {
  'case-trading-dashboard': {
    id: 'case-trading-dashboard',
    badge: 'SaaS Platform',
    title: 'Trading Analytics Dashboard',
    subtitle: 'A high-frequency real-time analytics platform processing millions of market events per second with sub-10ms latency',
    stats: [
      { value: '2.8M', label: 'events/day' },
      { value: '10ms', label: 'latency' },
      { value: '3,000+', label: 'active traders' },
      { value: '99.9%', label: 'uptime' },
    ],
    challenge: 'A fintech startup needed a professional trading journal and analytics platform that could handle thousands of concurrent users, process live market data, and deliver real-time analytics without lag. Existing solutions were either too expensive or lacked the depth of analytics their trader community demanded.',
    built: [
      'Real-time trade journal with instant P&L calculation',
      'Advanced analytics engine with 20+ performance metrics',
      'AI-powered weekly trade summaries and pattern recognition',
      'Live chart analysis with TradingView integration',
      'Automated EA sync from MetaTrader 5 via custom API',
      'Subscription billing system with Stripe',
      'Multi-account support with role-based access',
    ],
    techStack: [
      { category: 'Frontend', items: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Recharts'] },
      { category: 'Backend', items: ['Supabase', 'PostgreSQL', 'Row Level Security'] },
      { category: 'Integrations', items: ['Stripe', 'OpenAI', 'TradingView', 'MT5 EA'] },
      { category: 'Infrastructure', items: ['Vercel', 'Supabase Edge Functions'] },
    ],
    results: [
      { value: 3000, suffix: '+', label: 'Registered traders' },
      { value: 2.4, prefix: '$', suffix: 'M+', label: 'In trades tracked' },
      { value: 99.9, suffix: '%', label: 'Platform uptime' },
      { value: 4.9, suffix: '/5', label: 'Average user rating' },
    ],
    illustration: `
        <svg viewBox="0 0 900 480" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <!-- Sidebar -->
          <rect x="0" y="0" width="160" height="480" fill="rgba(139,92,246,0.05)" stroke="rgba(139,92,246,0.12)" stroke-width="1"/>
          <circle cx="80" cy="40" r="20" fill="rgba(139,92,246,0.2)" stroke="rgba(139,92,246,0.4)" stroke-width="1"/>
          <rect x="28" y="75" width="104" height="8" rx="4" fill="rgba(255,255,255,0.15)"/>
          <rect x="16" y="108" width="128" height="32" rx="6" fill="rgba(139,92,246,0.2)" stroke="rgba(139,92,246,0.4)" stroke-width="1"/>
          <rect x="28" y="119" width="60" height="10" rx="5" fill="rgba(255,255,255,0.5)"/>
          <rect x="16" y="150" width="128" height="32" rx="6" fill="rgba(255,255,255,0.03)"/>
          <rect x="28" y="161" width="70" height="10" rx="5" fill="rgba(255,255,255,0.2)"/>
          <rect x="16" y="192" width="128" height="32" rx="6" fill="rgba(255,255,255,0.03)"/>
          <rect x="28" y="203" width="55" height="10" rx="5" fill="rgba(255,255,255,0.2)"/>
          <rect x="16" y="234" width="128" height="32" rx="6" fill="rgba(255,255,255,0.03)"/>
          <rect x="28" y="245" width="80" height="10" rx="5" fill="rgba(255,255,255,0.2)"/>
          <rect x="16" y="276" width="128" height="32" rx="6" fill="rgba(255,255,255,0.03)"/>
          <rect x="28" y="287" width="65" height="10" rx="5" fill="rgba(255,255,255,0.2)"/>
          <!-- Top stat cards -->
          <rect x="180" y="16" width="160" height="80" rx="10" fill="rgba(59,130,246,0.06)" stroke="rgba(59,130,246,0.15)" stroke-width="1"/>
          <rect x="196" y="32" width="70" height="8" rx="4" fill="rgba(255,255,255,0.18)"/>
          <rect x="196" y="52" width="90" height="18" rx="5" fill="rgba(59,130,246,0.3)"/>
          <rect x="196" y="78" width="50" height="6" rx="3" fill="rgba(255,255,255,0.12)"/>
          <rect x="360" y="16" width="160" height="80" rx="10" fill="rgba(139,92,246,0.06)" stroke="rgba(139,92,246,0.15)" stroke-width="1"/>
          <rect x="376" y="32" width="60" height="8" rx="4" fill="rgba(255,255,255,0.18)"/>
          <rect x="376" y="52" width="100" height="18" rx="5" fill="rgba(139,92,246,0.3)"/>
          <rect x="376" y="78" width="55" height="6" rx="3" fill="rgba(255,255,255,0.12)"/>
          <rect x="540" y="16" width="160" height="80" rx="10" fill="rgba(217,70,239,0.06)" stroke="rgba(217,70,239,0.15)" stroke-width="1"/>
          <rect x="556" y="32" width="75" height="8" rx="4" fill="rgba(255,255,255,0.18)"/>
          <rect x="556" y="52" width="85" height="18" rx="5" fill="rgba(217,70,239,0.3)"/>
          <rect x="556" y="78" width="60" height="6" rx="3" fill="rgba(255,255,255,0.12)"/>
          <rect x="720" y="16" width="160" height="80" rx="10" fill="rgba(34,197,94,0.06)" stroke="rgba(34,197,94,0.15)" stroke-width="1"/>
          <rect x="736" y="32" width="65" height="8" rx="4" fill="rgba(255,255,255,0.18)"/>
          <rect x="736" y="52" width="90" height="18" rx="5" fill="rgba(34,197,94,0.3)"/>
          <rect x="736" y="78" width="50" height="6" rx="3" fill="rgba(255,255,255,0.12)"/>
          <!-- Main chart -->
          <rect x="180" y="116" width="540" height="240" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
          <rect x="196" y="130" width="100" height="10" rx="5" fill="rgba(255,255,255,0.2)"/>
          <path d="M196 300 L240 260 L284 280 L328 220 L372 240 L416 180 L460 200 L504 150 L548 170 L592 130 L636 145 L680 110 L700 105" stroke="url(#cg1)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M196 300 L240 260 L284 280 L328 220 L372 240 L416 180 L460 200 L504 150 L548 170 L592 130 L636 145 L680 110 L700 105 L700 340 L196 340 Z" fill="url(#cg2)" opacity="0.3"/>
          <line x1="196" y1="340" x2="700" y2="340" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
          <line x1="196" y1="280" x2="700" y2="280" stroke="rgba(255,255,255,0.04)" stroke-width="1" stroke-dasharray="4 4"/>
          <line x1="196" y1="220" x2="700" y2="220" stroke="rgba(255,255,255,0.04)" stroke-width="1" stroke-dasharray="4 4"/>
          <line x1="196" y1="160" x2="700" y2="160" stroke="rgba(255,255,255,0.04)" stroke-width="1" stroke-dasharray="4 4"/>
          <!-- Trade log -->
          <rect x="740" y="116" width="140" height="240" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
          <rect x="752" y="130" width="70" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
          <rect x="752" y="150" width="116" height="24" rx="5" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.2)" stroke-width="1"/>
          <rect x="758" y="158" width="40" height="8" rx="4" fill="rgba(34,197,94,0.4)"/>
          <rect x="808" y="158" width="30" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
          <rect x="752" y="182" width="116" height="24" rx="5" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.2)" stroke-width="1"/>
          <rect x="758" y="190" width="40" height="8" rx="4" fill="rgba(239,68,68,0.4)"/>
          <rect x="808" y="190" width="30" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
          <rect x="752" y="214" width="116" height="24" rx="5" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.2)" stroke-width="1"/>
          <rect x="758" y="222" width="40" height="8" rx="4" fill="rgba(34,197,94,0.4)"/>
          <rect x="808" y="222" width="30" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
          <rect x="752" y="246" width="116" height="24" rx="5" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.2)" stroke-width="1"/>
          <rect x="758" y="254" width="40" height="8" rx="4" fill="rgba(34,197,94,0.4)"/>
          <rect x="808" y="254" width="30" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
          <rect x="752" y="278" width="116" height="24" rx="5" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.2)" stroke-width="1"/>
          <rect x="758" y="286" width="40" height="8" rx="4" fill="rgba(239,68,68,0.4)"/>
          <rect x="808" y="286" width="30" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
          <!-- Bottom bar chart -->
          <rect x="180" y="374" width="540" height="92" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
          <rect x="196" y="386" width="60" height="7" rx="3" fill="rgba(255,255,255,0.18)"/>
          <rect x="196" y="404" width="24" height="50" rx="4" fill="rgba(139,92,246,0.3)"/>
          <rect x="228" y="420" width="24" height="34" rx="4" fill="rgba(139,92,246,0.3)"/>
          <rect x="260" y="410" width="24" height="44" rx="4" fill="rgba(139,92,246,0.3)"/>
          <rect x="292" y="395" width="24" height="59" rx="4" fill="rgba(59,130,246,0.5)"/>
          <rect x="324" y="415" width="24" height="39" rx="4" fill="rgba(139,92,246,0.3)"/>
          <rect x="356" y="400" width="24" height="54" rx="4" fill="rgba(59,130,246,0.5)"/>
          <rect x="388" y="408" width="24" height="46" rx="4" fill="rgba(139,92,246,0.3)"/>
          <rect x="420" y="393" width="24" height="61" rx="4" fill="rgba(59,130,246,0.5)"/>
          <rect x="452" y="404" width="24" height="50" rx="4" fill="rgba(139,92,246,0.3)"/>
          <rect x="484" y="398" width="24" height="56" rx="4" fill="rgba(59,130,246,0.5)"/>
          <defs>
            <linearGradient id="cg1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#3b82f6"/>
              <stop offset="50%" stop-color="#8b5cf6"/>
              <stop offset="100%" stop-color="#d946ef"/>
            </linearGradient>
            <linearGradient id="cg2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.4"/>
              <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>`,
  },

  'case-logistics-app': {
    id: 'case-logistics-app',
    badge: 'Mobile App',
    title: 'FleetTrack — Logistics and Delivery App',
    subtitle: 'A cross-platform mobile application for real-time fleet tracking, route optimization, and delivery management',
    stats: [
      { value: '500+', label: 'drivers' },
      { value: '12,000', label: 'deliveries/month' },
      { value: '40%', label: 'faster routing' },
      { value: 'iOS + Android', label: 'platforms' },
    ],
    challenge: 'A regional logistics company was managing 500+ drivers using WhatsApp and spreadsheets. They needed a professional mobile solution that worked offline in remote areas, tracked locations in real time, and gave dispatchers a live overview of all active deliveries.',
    built: [
      'Real-time GPS tracking for all drivers on a live map',
      'Smart route optimization reducing fuel costs by 40%',
      'Offline-first architecture — works without internet connection',
      'Dispatcher dashboard with live fleet overview',
      'Automated delivery notifications to customers via SMS',
      'Digital proof of delivery with photo capture and signature',
      'Analytics dashboard for management with route reports',
    ],
    techStack: [
      { category: 'Mobile', items: ['React Native', 'Expo', 'TypeScript'] },
      { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'Redis'] },
      { category: 'Maps', items: ['Google Maps API', 'Mapbox'] },
      { category: 'Infrastructure', items: ['AWS', 'Docker', 'Expo Push Notifications'] },
    ],
    results: [
      { value: 40, suffix: '%', label: 'Reduction in fuel costs' },
      { value: 60, suffix: '%', label: 'Faster dispatch time' },
      { value: 500, suffix: '+', label: 'Drivers onboarded in month 1' },
      { value: 4.8, suffix: '/5', label: 'App Store rating' },
    ],
    illustration: `
        <svg viewBox="0 0 900 480" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <!-- Map background grid -->
          <rect width="900" height="480" fill="rgba(59,130,246,0.03)" rx="12"/>
          <line x1="0" y1="80" x2="900" y2="80" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
          <line x1="0" y1="160" x2="900" y2="160" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
          <line x1="0" y1="240" x2="900" y2="240" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
          <line x1="0" y1="320" x2="900" y2="320" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
          <line x1="0" y1="400" x2="900" y2="400" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
          <line x1="100" y1="0" x2="100" y2="480" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
          <line x1="200" y1="0" x2="200" y2="480" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
          <line x1="300" y1="0" x2="300" y2="480" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
          <line x1="400" y1="0" x2="400" y2="480" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
          <line x1="500" y1="0" x2="500" y2="480" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
          <line x1="600" y1="0" x2="600" y2="480" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
          <line x1="700" y1="0" x2="700" y2="480" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
          <line x1="800" y1="0" x2="800" y2="480" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
          <!-- Road paths -->
          <path d="M50 240 Q200 200 350 240 Q500 280 650 220 Q800 160 900 180" stroke="rgba(255,255,255,0.08)" stroke-width="12" stroke-linecap="round"/>
          <path d="M50 240 Q200 200 350 240 Q500 280 650 220 Q800 160 900 180" stroke="rgba(255,255,255,0.04)" stroke-width="2" stroke-linecap="round" stroke-dasharray="20 10"/>
          <path d="M0 380 Q150 340 300 360 Q450 380 550 320 Q650 260 750 300 Q850 340 900 330" stroke="rgba(255,255,255,0.06)" stroke-width="10" stroke-linecap="round"/>
          <!-- Route highlight -->
          <path d="M120 340 Q220 280 320 250 Q420 220 520 200 Q620 180 720 160" stroke="url(#lg1)" stroke-width="4" stroke-linecap="round" stroke-dasharray="12 6"/>
          <!-- Driver markers -->
          <circle cx="280" cy="260" r="18" fill="rgba(139,92,246,0.15)" stroke="rgba(139,92,246,0.5)" stroke-width="2"/>
          <path d="M280 252 L286 268 L280 265 L274 268 Z" fill="rgba(139,92,246,0.8)"/>
          <circle cx="480" cy="208" r="18" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.5)" stroke-width="2"/>
          <path d="M480 200 L486 216 L480 213 L474 216 Z" fill="rgba(59,130,246,0.8)"/>
          <circle cx="660" cy="175" r="18" fill="rgba(217,70,239,0.15)" stroke="rgba(217,70,239,0.5)" stroke-width="2"/>
          <path d="M660 167 L666 183 L660 180 L654 183 Z" fill="rgba(217,70,239,0.8)"/>
          <circle cx="820" cy="155" r="18" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.5)" stroke-width="2"/>
          <path d="M820 147 L826 163 L820 160 L814 163 Z" fill="rgba(34,197,94,0.8)"/>
          <!-- Delivery pins -->
          <rect x="155" y="305" width="50" height="26" rx="6" fill="white"/>
          <text x="180" y="323" text-anchor="middle" fill="#111" font-size="11" font-weight="700" font-family="Inter,sans-serif">DLV-04</text>
          <rect x="380" y="185" width="58" height="26" rx="6" fill="white"/>
          <text x="409" y="203" text-anchor="middle" fill="#111" font-size="11" font-weight="700" font-family="Inter,sans-serif">DLV-17</text>
          <!-- Dispatcher Panel -->
          <rect x="16" y="16" width="220" height="300" rx="14" fill="rgba(10,10,20,0.92)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="28" y="28" width="80" height="10" rx="5" fill="rgba(255,255,255,0.3)"/>
          <rect x="28" y="48" width="120" height="8" rx="4" fill="rgba(255,255,255,0.12)"/>
          <!-- driver rows -->
          <rect x="28" y="70" width="196" height="44" rx="8" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.25)" stroke-width="1"/>
          <circle cx="48" cy="92" r="12" fill="rgba(139,92,246,0.3)"/>
          <rect x="66" y="84" width="60" height="8" rx="4" fill="rgba(255,255,255,0.3)"/>
          <rect x="66" y="97" width="40" height="6" rx="3" fill="rgba(255,255,255,0.15)"/>
          <rect x="180" y="86" width="36" height="12" rx="6" fill="rgba(34,197,94,0.2)" stroke="rgba(34,197,94,0.4)" stroke-width="1"/>
          <rect x="28" y="122" width="196" height="44" rx="8" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.2)" stroke-width="1"/>
          <circle cx="48" cy="144" r="12" fill="rgba(59,130,246,0.3)"/>
          <rect x="66" y="136" width="55" height="8" rx="4" fill="rgba(255,255,255,0.3)"/>
          <rect x="66" y="149" width="45" height="6" rx="3" fill="rgba(255,255,255,0.15)"/>
          <rect x="180" y="138" width="36" height="12" rx="6" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.35)" stroke-width="1"/>
          <rect x="28" y="174" width="196" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
          <circle cx="48" cy="196" r="12" fill="rgba(217,70,239,0.3)"/>
          <rect x="66" y="188" width="70" height="8" rx="4" fill="rgba(255,255,255,0.25)"/>
          <rect x="66" y="201" width="35" height="6" rx="3" fill="rgba(255,255,255,0.12)"/>
          <rect x="180" y="190" width="36" height="12" rx="6" fill="rgba(245,158,11,0.15)" stroke="rgba(245,158,11,0.3)" stroke-width="1"/>
          <rect x="28" y="226" width="196" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
          <circle cx="48" cy="248" r="12" fill="rgba(34,197,94,0.3)"/>
          <rect x="66" y="240" width="62" height="8" rx="4" fill="rgba(255,255,255,0.25)"/>
          <rect x="66" y="253" width="42" height="6" rx="3" fill="rgba(255,255,255,0.12)"/>
          <rect x="180" y="242" width="36" height="12" rx="6" fill="rgba(34,197,94,0.2)" stroke="rgba(34,197,94,0.4)" stroke-width="1"/>
          <rect x="28" y="276" width="80" height="10" rx="5" fill="rgba(255,255,255,0.15)"/>
          <rect x="28" y="294" width="60" height="10" rx="5" fill="rgba(255,255,255,0.08)"/>
          <defs>
            <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#8b5cf6"/>
              <stop offset="100%" stop-color="#d946ef"/>
            </linearGradient>
          </defs>
        </svg>`,
  },

  'case-ecommerce': {
    id: 'case-ecommerce',
    badge: 'E-Commerce',
    title: 'LuxeStore — Premium E-Commerce Platform',
    subtitle: 'A fully custom e-commerce storefront with advanced filtering, multi-currency support, and seamless third-party integrations',
    stats: [
      { value: '$1.2M', label: 'revenue in first year' },
      { value: '15,000', label: 'monthly visitors' },
      { value: '3.8%', label: 'conversion rate' },
      { value: '8', label: 'currencies supported' },
    ],
    challenge: 'A premium fashion brand was running on a generic Shopify template and hitting its limits — they needed custom product filtering, a unique brand experience, integration with their warehouse management system, and support for 8 currencies across European markets.',
    built: [
      'Fully custom storefront with unique brand identity',
      'Advanced product filtering and search with Algolia',
      'Multi-currency and multi-language support',
      'Custom checkout flow with Stripe and PayPal',
      'Warehouse management system integration via custom API',
      'Automated inventory sync across 3 warehouses',
      'Marketing integrations: Klaviyo email, Meta Pixel, Google Analytics 4',
    ],
    techStack: [
      { category: 'Frontend', items: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
      { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'Algolia'] },
      { category: 'Integrations', items: ['Stripe', 'PayPal', 'Klaviyo', 'Meta Pixel', 'WMS API'] },
      { category: 'Infrastructure', items: ['Vercel', 'AWS S3'] },
    ],
    results: [
      { value: 1.2, prefix: '$', suffix: 'M', label: 'Revenue in first 12 months' },
      { value: 3.8, suffix: '%', label: 'Conversion rate (avg: 2.1%)' },
      { value: 70, suffix: '%', label: 'Returning customer rate' },
      { value: 15000, suffix: '', label: 'Monthly active visitors' },
    ],
    illustration: `
        <svg viewBox="0 0 900 480" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <!-- Browser chrome -->
          <rect x="0" y="0" width="900" height="480" rx="12" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
          <rect x="0" y="0" width="900" height="44" rx="12" fill="rgba(255,255,255,0.04)"/>
          <circle cx="22" cy="22" r="6" fill="rgba(239,68,68,0.5)"/>
          <circle cx="42" cy="22" r="6" fill="rgba(245,158,11,0.5)"/>
          <circle cx="62" cy="22" r="6" fill="rgba(34,197,94,0.5)"/>
          <rect x="180" y="12" width="540" height="22" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="196" y="18" width="200" height="10" rx="5" fill="rgba(255,255,255,0.15)"/>
          <!-- Navbar -->
          <rect x="0" y="44" width="900" height="50" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
          <rect x="24" y="58" width="80" height="20" rx="4" fill="rgba(255,255,255,0.1)"/>
          <rect x="380" y="62" width="40" height="10" rx="5" fill="rgba(255,255,255,0.12)"/>
          <rect x="432" y="62" width="52" height="10" rx="5" fill="rgba(255,255,255,0.12)"/>
          <rect x="496" y="62" width="44" height="10" rx="5" fill="rgba(255,255,255,0.12)"/>
          <rect x="552" y="62" width="36" height="10" rx="5" fill="rgba(255,255,255,0.12)"/>
          <rect x="804" y="57" width="72" height="22" rx="7" fill="rgba(139,92,246,0.3)" stroke="rgba(139,92,246,0.5)" stroke-width="1"/>
          <!-- Filter sidebar -->
          <rect x="0" y="94" width="180" height="386" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
          <rect x="16" y="110" width="60" height="9" rx="4" fill="rgba(255,255,255,0.2)"/>
          <rect x="16" y="130" width="130" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
          <rect x="24" y="138" width="80" height="7" rx="3" fill="rgba(255,255,255,0.15)"/>
          <rect x="16" y="162" width="80" height="9" rx="4" fill="rgba(255,255,255,0.15)"/>
          <rect x="16" y="178" width="50" height="9" rx="4" fill="rgba(255,255,255,0.08)"/>
          <rect x="16" y="196" width="66" height="9" rx="4" fill="rgba(255,255,255,0.08)"/>
          <rect x="16" y="214" width="44" height="9" rx="4" fill="rgba(255,255,255,0.08)"/>
          <rect x="16" y="240" width="70" height="9" rx="4" fill="rgba(255,255,255,0.15)"/>
          <rect x="16" y="258" width="148" height="8" rx="4" fill="rgba(139,92,246,0.2)" stroke="rgba(139,92,246,0.3)" stroke-width="1"/>
          <rect x="16" y="274" width="148" height="6" rx="3" fill="rgba(255,255,255,0.05)"/>
          <circle cx="100" cy="277" r="7" fill="rgba(139,92,246,0.6)" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
          <rect x="16" y="296" width="65" height="9" rx="4" fill="rgba(255,255,255,0.15)"/>
          <rect x="16" y="314" width="30" height="30" rx="6" fill="rgba(255,255,255,0.08)"/>
          <rect x="52" y="314" width="30" height="30" rx="6" fill="rgba(255,255,255,0.08)"/>
          <rect x="88" y="314" width="30" height="30" rx="6" fill="rgba(139,92,246,0.2)" stroke="rgba(139,92,246,0.4)" stroke-width="1"/>
          <rect x="124" y="314" width="30" height="30" rx="6" fill="rgba(255,255,255,0.08)"/>
          <!-- Product grid -->
          <rect x="196" y="110" width="220" height="270" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
          <rect x="204" y="118" width="204" height="180" rx="6" fill="rgba(255,255,255,0.04)"/>
          <rect x="204" y="305" width="120" height="9" rx="4" fill="rgba(255,255,255,0.2)"/>
          <rect x="204" y="320" width="70" height="8" rx="4" fill="rgba(255,255,255,0.12)"/>
          <rect x="204" y="338" width="60" height="18" rx="5" fill="rgba(139,92,246,0.25)"/>
          <rect x="430" y="110" width="220" height="270" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
          <rect x="438" y="118" width="204" height="180" rx="6" fill="rgba(255,255,255,0.04)"/>
          <rect x="438" y="305" width="110" height="9" rx="4" fill="rgba(255,255,255,0.2)"/>
          <rect x="438" y="320" width="75" height="8" rx="4" fill="rgba(255,255,255,0.12)"/>
          <rect x="438" y="338" width="60" height="18" rx="5" fill="rgba(139,92,246,0.25)"/>
          <rect x="664" y="110" width="220" height="270" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
          <rect x="672" y="118" width="204" height="180" rx="6" fill="rgba(255,255,255,0.04)"/>
          <rect x="672" y="305" width="130" height="9" rx="4" fill="rgba(255,255,255,0.2)"/>
          <rect x="672" y="320" width="65" height="8" rx="4" fill="rgba(255,255,255,0.12)"/>
          <rect x="672" y="338" width="60" height="18" rx="5" fill="rgba(139,92,246,0.25)"/>
          <!-- Mini product row -->
          <rect x="196" y="396" width="688" height="68" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
          <rect x="208" y="408" width="50" height="44" rx="6" fill="rgba(255,255,255,0.04)"/>
          <rect x="268" y="414" width="80" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
          <rect x="268" y="428" width="50" height="6" rx="3" fill="rgba(255,255,255,0.12)"/>
          <rect x="268" y="440" width="38" height="14" rx="5" fill="rgba(217,70,239,0.2)"/>
          <rect x="600" y="416" width="80" height="26" rx="7" fill="rgba(139,92,246,0.25)" stroke="rgba(139,92,246,0.4)" stroke-width="1"/>
          <rect x="608" y="423" width="64" height="12" rx="4" fill="rgba(255,255,255,0.1)"/>
          <defs>
            <linearGradient id="eg1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#3b82f6"/>
              <stop offset="100%" stop-color="#8b5cf6"/>
            </linearGradient>
          </defs>
        </svg>`,
  },
};

// =============================================================
// CASE TRANSLATIONS (UZ / RU — EN is the base data above)
// =============================================================
const CASE_TRANSLATIONS = {
  uz: {
    'case-trading-dashboard': {
      badge: 'SaaS Platforma',
      title: 'Trading Analytics Dashboard',
      subtitle: "Sekundiga millionlab bozor hodisalarini qayta ishluvchi, 10ms kechikish bilan real vaqt tahlil platformasi",
      stats: [
        { value: '2.8M', label: 'hodisa/kun' },
        { value: '10ms', label: 'kechikish' },
        { value: '3,000+', label: 'faol treyderlar' },
        { value: '99.9%', label: 'ishonchlilik' },
      ],
      challenge: "Fintech startap minglab bir vaqtdagi foydalanuvchilarni qabul qila oladigan, jonli bozor ma'lumotlarini qayta ishlaydigan va real vaqt tahlillarini kechikishsiz yetkazadigan professional savdo jurnali va tahlil platformasiga muhtoj edi. Mavjud yechimlar yoki juda qimmat edi yoki treyderlar jamoasi talab qilgan tahlil chuqurligidan mahrum edi.",
      built: [
        "Lahzali P&L hisoblash bilan real vaqt savdo jurnali",
        "20+ ishlash ko'rsatkichlari bilan kengaytirilgan tahlil mexanizmi",
        "AI asosidagi haftalik savdo xulosalari va naqsh aniqlash",
        "TradingView integratsiyasi bilan jonli grafik tahlili",
        "Maxsus API orqali MetaTrader 5'dan avtomatlashtirilgan EA sinxronizatsiyasi",
        "Stripe bilan obuna billing tizimi",
        "Rolli kirish bilan ko'p akkaunt qo'llab-quvvatlash",
      ],
      results: [
        { value: 3000, suffix: '+', label: "Ro'yxatdan o'tgan treyderlar" },
        { value: 2.4, prefix: '$', suffix: 'M+', label: "Kuzatilgan savdolar" },
        { value: 99.9, suffix: '%', label: "Platforma ishlash muddati" },
        { value: 4.9, suffix: '/5', label: "O'rtacha foydalanuvchi reytingi" },
      ],
    },
    'case-logistics-app': {
      badge: 'Mobil ilova',
      title: "FleetTrack — Logistika va Yetkazib berish ilovasi",
      subtitle: "Real vaqt parki kuzatuvi, marshrutni optimizatsiya qilish va yetkazib berishni boshqarish uchun ko'p platformali mobil ilova",
      stats: [
        { value: '500+', label: 'haydovchilar' },
        { value: '12,000', label: 'yetkazib berish/oy' },
        { value: '40%', label: "tezroq marshrutlash" },
        { value: 'iOS + Android', label: 'platformalar' },
      ],
      challenge: "Mintaqaviy logistika kompaniyasi 500+ haydovchini WhatsApp va jadvallar orqali boshqarmoqda edi. Ular masofaviy joylarda oflayn ishlaydigan, real vaqtda joylashuvni kuzatadigan va dispetcherlarga barcha faol yetkazib berishlarning jonli ko'rinishini beradigan professional mobil yechimga muhtoj edi.",
      built: [
        "Jonli xaritada barcha haydovchilar uchun real vaqt GPS kuzatuvi",
        "Yoqilg'i xarajatlarini 40% kamaytiruvchi aqlli marshrut optimizatsiyasi",
        "Oflayn-birinchi arxitektura — internet aloqasisiz ishlaydi",
        "Jonli park ko'rinishi bilan dispetcher boshqaruv paneli",
        "SMS orqali mijozlarga avtomatlashtirilgan yetkazib berish bildirish nomalari",
        "Foto suratga olish va imzo bilan raqamli yetkazib berish isboti",
        "Marshrut hisobotlari bilan boshqaruv uchun tahlil boshqaruv paneli",
      ],
      results: [
        { value: 40, suffix: '%', label: "Yoqilg'i xarajatlarini kamaytirish" },
        { value: 60, suffix: '%', label: "Tezroq dispetcherlik vaqti" },
        { value: 500, suffix: '+', label: "1-oyda qabul qilingan haydovchilar" },
        { value: 4.8, suffix: '/5', label: "App Store reytingi" },
      ],
    },
    'case-ecommerce': {
      badge: 'E-tijorat',
      title: "LuxeStore — Premium E-tijorat Platformasi",
      subtitle: "Kengaytirilgan filtrlash, ko'p valyuta qo'llab-quvvatlash va uchinchi tomon integratsiyalari bilan to'liq maxsus e-tijorat vitrinasi",
      stats: [
        { value: '$1.2M', label: "birinchi yildagi daromad" },
        { value: '15,000', label: "oylik tashrif buyuruvchilar" },
        { value: '3.8%', label: "konversiya darajasi" },
        { value: '8', label: "qo'llab-quvvatlanadigan valyutalar" },
      ],
      challenge: "Premium moda brendi umumiy Shopify shablonida ishlayotgan edi va chegaralariga duch kelyapti — ularga maxsus mahsulot filtrlash, noyob brend tajribasi, ombor boshqaruv tizimi bilan integratsiya va Yevropa bozorlarida 8 ta valyutani qo'llab-quvvatlash kerak edi.",
      built: [
        "Noyob brend identifikatori bilan to'liq maxsus vitrina",
        "Algolia bilan kengaytirilgan mahsulot filtrlash va qidiruv",
        "Ko'p valyuta va ko'p til qo'llab-quvvatlash",
        "Stripe va PayPal bilan maxsus checkout jarayoni",
        "Maxsus API orqali ombor boshqaruv tizimi integratsiyasi",
        "3 ta ombor bo'ylab avtomatlashtirilgan inventar sinxronizatsiyasi",
        "Marketing integratsiyalari: Klaviyo elektron pochta, Meta Pixel, Google Analytics 4",
      ],
      results: [
        { value: 1.2, prefix: '$', suffix: 'M', label: "Dastlabki 12 oyda daromad" },
        { value: 3.8, suffix: '%', label: "Konversiya darajasi (o'rtacha: 2.1%)" },
        { value: 70, suffix: '%', label: "Qayta keluvchi mijozlar darajasi" },
        { value: 15000, suffix: '', label: "Oylik faol tashrif buyuruvchilar" },
      ],
    },
  },
  ru: {
    'case-trading-dashboard': {
      badge: 'SaaS Платформа',
      title: 'Trading Analytics Dashboard',
      subtitle: "Высокочастотная аналитическая платформа реального времени, обрабатывающая миллионы рыночных событий в секунду с задержкой менее 10 мс",
      stats: [
        { value: '2.8M', label: 'событий/день' },
        { value: '10ms', label: 'задержка' },
        { value: '3,000+', label: 'активных трейдеров' },
        { value: '99.9%', label: 'uptime' },
      ],
      challenge: "Финтех-стартап нуждался в профессиональном торговом журнале и аналитической платформе, способной обслуживать тысячи одновременных пользователей, обрабатывать рыночные данные в реальном времени и выдавать аналитику без задержек. Существующие решения были либо слишком дороги, либо не обладали необходимой глубиной аналитики.",
      built: [
        "Торговый журнал реального времени с мгновенным расчётом P&L",
        "Продвинутый движок аналитики с 20+ метриками производительности",
        "Еженедельные торговые сводки и распознавание паттернов на базе AI",
        "Анализ графиков в реальном времени с интеграцией TradingView",
        "Автоматическая синхронизация EA из MetaTrader 5 через собственный API",
        "Система подписки и биллинга через Stripe",
        "Поддержка нескольких аккаунтов с ролевым доступом",
      ],
      results: [
        { value: 3000, suffix: '+', label: "Зарегистрированных трейдеров" },
        { value: 2.4, prefix: '$', suffix: 'M+', label: "Объём отслеживаемых сделок" },
        { value: 99.9, suffix: '%', label: "Uptime платформы" },
        { value: 4.9, suffix: '/5', label: "Средний рейтинг пользователей" },
      ],
    },
    'case-logistics-app': {
      badge: 'Мобильное приложение',
      title: "FleetTrack — Логистика и доставка",
      subtitle: "Кроссплатформенное мобильное приложение для отслеживания флота, оптимизации маршрутов и управления доставкой в реальном времени",
      stats: [
        { value: '500+', label: 'водителей' },
        { value: '12,000', label: 'доставок/месяц' },
        { value: '40%', label: "быстрее маршрутизация" },
        { value: 'iOS + Android', label: 'платформы' },
      ],
      challenge: "Региональная логистическая компания управляла 500+ водителями через WhatsApp и таблицы. Им требовалось мобильное решение, работающее офлайн в удалённых районах, отслеживающее местоположения в реальном времени и дающее диспетчерам живой обзор всех активных доставок.",
      built: [
        "GPS-отслеживание всех водителей в реальном времени на живой карте",
        "Умная оптимизация маршрутов, снизившая расходы на топливо на 40%",
        "Архитектура offline-first — работает без интернета",
        "Диспетчерская панель с живым обзором флота",
        "Автоматические уведомления о доставке клиентам по SMS",
        "Цифровое подтверждение доставки с фотофиксацией и подписью",
        "Аналитическая панель для руководства с отчётами по маршрутам",
      ],
      results: [
        { value: 40, suffix: '%', label: "Снижение расходов на топливо" },
        { value: 60, suffix: '%', label: "Ускорение диспетчеризации" },
        { value: 500, suffix: '+', label: "Водителей подключено в 1-й месяц" },
        { value: 4.8, suffix: '/5', label: "Рейтинг в App Store" },
      ],
    },
    'case-ecommerce': {
      badge: 'Электронная коммерция',
      title: "LuxeStore — Премиальная E-Commerce платформа",
      subtitle: "Полностью кастомный интернет-магазин с продвинутой фильтрацией, поддержкой мультивалютности и интеграцией сторонних сервисов",
      stats: [
        { value: '$1.2M', label: "выручка за первый год" },
        { value: '15,000', label: "посетителей в месяц" },
        { value: '3.8%', label: "конверсия" },
        { value: '8', label: "валют поддерживается" },
      ],
      challenge: "Премиальный fashion-бренд работал на шаблоне Shopify и упирался в его ограничения — им нужна была кастомная фильтрация товаров, уникальный брендовый опыт, интеграция с системой управления складом и поддержка 8 валют для европейских рынков.",
      built: [
        "Полностью кастомный витрина с уникальной идентичностью бренда",
        "Расширенная фильтрация и поиск товаров с Algolia",
        "Поддержка нескольких валют и языков",
        "Кастомный checkout с интеграцией Stripe и PayPal",
        "Интеграция с системой управления складом через собственный API",
        "Автоматическая синхронизация инвентаря между 3 складами",
        "Маркетинговые интеграции: Klaviyo email, Meta Pixel, Google Analytics 4",
      ],
      results: [
        { value: 1.2, prefix: '$', suffix: 'M', label: "Выручка за первые 12 месяцев" },
        { value: 3.8, suffix: '%', label: "Конверсия (среднее: 2.1%)" },
        { value: 70, suffix: '%', label: "Доля возвращающихся клиентов" },
        { value: 15000, suffix: '', label: "Активных посетителей в месяц" },
      ],
    },
  },
};

function getLocalizedCase(caseId, lang) {
  const base = CASES[caseId];
  if (!base) return null;
  if (lang === 'en' || !CASE_TRANSLATIONS[lang] || !CASE_TRANSLATIONS[lang][caseId]) return base;
  const tr = CASE_TRANSLATIONS[lang][caseId];
  return { ...base, badge: tr.badge || base.badge, title: tr.title || base.title, subtitle: tr.subtitle || base.subtitle, stats: tr.stats || base.stats, challenge: tr.challenge || base.challenge, built: tr.built || base.built, results: tr.results || base.results };
}

// =============================================================
// HTML GENERATOR
// =============================================================
function renderCasePage(cs) {
  const t = window.t || function(k) { return k; };
  const statsRow = cs.stats.map(s => `
    <div class="cs-stat-item">
      <div class="cs-stat-value">${s.value}</div>
      <div class="cs-stat-label">${s.label}</div>
    </div>`).join('');

  const builtHTML = cs.built.map(b => `
    <li class="cs-built-item">
      <span class="cs-check-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </span>
      <span>${b}</span>
    </li>`).join('');

  const techHTML = cs.techStack.map(cat => `
    <div class="cs-tech-category">
      <div class="cs-tech-cat-label">${cat.category}</div>
      <div class="cs-tech-pills">${cat.items.map(i => `<span class="sp-tech-pill">${i}</span>`).join('')}</div>
    </div>`).join('');

  const resultsHTML = cs.results.map(r => `
    <div class="cs-result-card section-reveal">
      <div class="cs-result-value">
        ${r.prefix || ''}<span class="cs-counter" data-target="${r.value}" data-suffix="${r.suffix || ''}">${r.prefix || ''}0${r.suffix || ''}</span>
      </div>
      <div class="cs-result-label">${r.label}</div>
    </div>`).join('');

  return `
    <div class="cs-container" id="cs-top">

      <!-- Back button -->
      <div class="sp-back-bar">
        <button class="sp-back-btn" id="cs-back-btn" aria-label="Back to work">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          ${t('cs.back')}
        </button>
      </div>

      <!-- Hero -->
      <section class="cs-hero section-reveal">
        <div class="cs-hero-text">
          <div class="sp-label">${cs.badge}</div>
          <h1 class="sp-title">${cs.title}</h1>
          <p class="cs-subtitle">${cs.subtitle}</p>
          <div class="cs-stats-row">${statsRow}</div>
        </div>
      </section>

      <!-- SVG Illustration -->
      <div class="cs-illustration section-reveal">
        ${cs.illustration}
      </div>

      <!-- The Challenge -->
      <section class="sp-section section-reveal">
        <div class="sp-section-header">
          <h2>${t('cs.challenge')}</h2>
        </div>
        <div class="cs-challenge-card">
          <svg class="cs-quote-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
          </svg>
          <p class="cs-challenge-text">${cs.challenge}</p>
        </div>
      </section>

      <!-- What We Built -->
      <section class="sp-section section-reveal">
        <div class="sp-section-header">
          <h2>${t('cs.built')}</h2>
        </div>
        <ul class="sp-offers-list">${builtHTML}</ul>
      </section>

      <!-- Tech Stack -->
      <section class="sp-section section-reveal">
        <div class="sp-section-header">
          <h2>${t('cs.techstack')}</h2>
          <p>${t('cs.techsubtitle')}</p>
        </div>
        <div class="cs-tech-grid">${techHTML}</div>
      </section>

      <!-- Results -->
      <section class="sp-section">
        <div class="sp-section-header section-reveal">
          <h2>${t('cs.results')}</h2>
          <p>${t('cs.resultssubtitle')}</p>
        </div>
        <div class="cs-results-grid">${resultsHTML}</div>
      </section>

      <!-- CTA -->
      <section class="sp-cta-section section-reveal">
        <h2>${t('cs.ctatext')}</h2>
        <p>${t('cs.ctasubtitle')}</p>
        <a href="#contact" class="btn btn-primary btn-lg" id="cs-bottom-cta">${t('cs.ctabtn')}</a>
      </section>

    </div>
    `;
}

// =============================================================
// ANIMATED COUNTER
// =============================================================
function animateCounters(container) {
  const counters = container.querySelectorAll('.cs-counter');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const prefix = el.parentElement.querySelector('.cs-counter') ? '' : '';
      const isFloat = target % 1 !== 0;
      const duration = 1600;
      const start = performance.now();
      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = target * eased;
        el.textContent = (isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString()) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = (isFloat ? target.toFixed(1) : target.toLocaleString()) + suffix;
      }
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => obs.observe(el));
}

// =============================================================
// ROUTER
// =============================================================
const casePage = document.getElementById('case-page');
const caseIds = Object.keys(CASES);

// Re-use the same main-visibility helpers from services.js
function showCasePage(caseId) {
  const lang = localStorage.getItem('lang') || 'uz';
  const cs = getLocalizedCase(caseId, lang);
  if (!cs) { showCaseMain(); return; }

  casePage.innerHTML = renderCasePage(cs);

  // Hide main layout  
  setMainVisibility(false);
  // Also hide the service-page if it's showing
  const sp = document.getElementById('service-page');
  if (sp) sp.style.display = 'none';

  casePage.style.display = 'block';
  casePage.removeAttribute('aria-hidden');

  window.scrollTo({ top: 0, behavior: 'instant' });
  document.title = `${cs.title} | Everest Technologies`;

  // Back button
  document.getElementById('cs-back-btn').addEventListener('click', () => {
    history.pushState(null, '', '#work');
    showCaseMain(true);
  });

  // CTA → open contact modal
  casePage.querySelectorAll('a[href="#contact"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      if (window.openContactModal) window.openContactModal();
    });
  });

  // Reveal animations
  setupCaseReveal();
  // Counter animations
  animateCounters(casePage);
}

function showCaseMain(scrollToWork = false) {
  setMainVisibility(true);
  casePage.style.display = 'none';
  casePage.setAttribute('aria-hidden', 'true');
  document.title = "Mount Everest Technologies | We Build What Others Can't";
  if (scrollToWork) {
    setTimeout(() => {
      const workSection = document.getElementById('work');
      if (workSection) workSection.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }
}

function setupCaseReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  casePage.querySelectorAll('.section-reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) el.classList.add('visible');
    else obs.observe(el);
  });
}

function handleCaseRoute() {
  const hash = window.location.hash.replace('#', '');
  if (caseIds.includes(hash)) {
    showCasePage(hash);
    return true;
  }
  if (casePage.style.display === 'block') {
    showCaseMain(false);
  }
  return false;
}

// Wire up portfolio links
document.querySelectorAll('.portfolio-link[data-case]').forEach(link => {
  const caseId = link.getAttribute('data-case');
  link.style.cursor = 'none';

  link.addEventListener('click', () => {
    history.pushState(null, '', `#${caseId}`);
    showCasePage(caseId);
  });

  link.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      history.pushState(null, '', `#${caseId}`);
      showCasePage(caseId);
    }
  });
});

// Integrate with existing popstate / hashchange listeners
const originalHandleRoute = window._handleRoute;
window._handleCaseRoute = handleCaseRoute;

// Override popstate to also handle case routes
window.addEventListener('popstate', () => {
  if (!handleCaseRoute()) {
    // Let the existing service router try
  }
});

// On initial load
handleCaseRoute();
