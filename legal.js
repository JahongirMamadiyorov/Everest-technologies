// =============================================================
// LEGAL PAGE DATA
// =============================================================
const LEGAL_PAGES = {
    'privacy-policy': {
        id: 'privacy-policy',
        title: 'Privacy Policy',
        updated: 'March 2025',
        intro: 'Mount Everest Technologies is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights regarding your data.',
        sections: [
            {
                num: '01',
                heading: 'Information We Collect',
                items: [
                    '<strong>Information you provide directly:</strong> name, email address, company name, and project details when you fill out our contact form.',
                    '<strong>Usage data:</strong> pages visited, time spent on site, browser type, device type, and IP address.',
                    '<strong>Cookies and tracking:</strong> small files stored on your device to improve your experience. See our Cookie Policy for details.',
                ],
            },
            {
                num: '02',
                heading: 'How We Use Your Information',
                items: [
                    'To respond to your project inquiries and contact form submissions.',
                    'To improve our website and understand how visitors use it.',
                    'To send project updates and communications — only to existing clients.',
                    'We <strong>never sell</strong> your data to third parties.',
                    'We <strong>never use</strong> your data for advertising purposes.',
                ],
            },
            {
                num: '03',
                heading: 'Data Storage and Security',
                items: [
                    'Your data is stored securely on servers within the European Union.',
                    'We use industry-standard encryption for all data transmission.',
                    'Access to personal data is restricted to core team members only.',
                    'We retain contact form data for a maximum of 24 months.',
                ],
            },
            {
                num: '04',
                heading: 'Third-Party Services',
                items: [
                    'We use the following third-party services that may process your data: Google Analytics (website usage), Resend (email delivery).',
                    'Each third party has their own privacy policy governing their use of your data.',
                ],
            },
            {
                num: '05',
                heading: 'Your Rights',
                items: [
                    '<strong>Right to access:</strong> you can request a copy of all data we hold about you.',
                    '<strong>Right to deletion:</strong> you can request we delete all your personal data.',
                    '<strong>Right to correction:</strong> you can request we correct inaccurate data.',
                    '<strong>Right to object:</strong> you can object to how we process your data.',
                    'To exercise any right contact us at: <a href="mailto:privacy@mounteveresttech.com" class="legal-link">privacy@mounteveresttech.com</a>',
                ],
            },
            {
                num: '06',
                heading: 'Cookies',
                items: [
                    'We use essential cookies required for the website to function and analytics cookies to understand usage. See our full Cookie Policy for details.',
                ],
            },
            {
                num: '07',
                heading: 'Contact',
                items: [
                    'For privacy questions: <a href="mailto:privacy@mounteveresttech.com" class="legal-link">privacy@mounteveresttech.com</a>',
                    'Mount Everest Technologies — Remote-first company, operating globally.',
                ],
            },
        ],
    },

    'terms-of-service': {
        id: 'terms-of-service',
        title: 'Terms of Service',
        updated: 'March 2025',
        intro: 'By accessing or using the Mount Everest Technologies website or engaging our services you agree to these Terms of Service. Please read them carefully.',
        sections: [
            {
                num: '01',
                heading: 'Services',
                items: [
                    'Mount Everest Technologies provides web development, mobile app development, UI/UX design, custom integrations, SaaS product development, and API development services.',
                    'All services are provided under a separate client agreement or statement of work signed before work begins.',
                    'We reserve the right to decline any project at our discretion.',
                ],
            },
            {
                num: '02',
                heading: 'Intellectual Property',
                items: [
                    'Upon full payment, clients receive full ownership of all custom code and designs created specifically for their project.',
                    'We retain the right to display completed work in our portfolio unless the client requests confidentiality in writing.',
                    'Any third-party libraries, frameworks, or tools used remain under their respective open-source licenses.',
                    'Mount Everest Technologies branding, website content, and proprietary tools remain our exclusive property.',
                ],
            },
            {
                num: '03',
                heading: 'Payment Terms',
                items: [
                    'Projects require a 50% deposit before work begins.',
                    'Remaining balance is due upon project completion before final delivery.',
                    'Late payments beyond 14 days may incur a 2% monthly late fee.',
                    'Refunds are not available once development work has commenced.',
                ],
            },
            {
                num: '04',
                heading: 'Project Timeline',
                items: [
                    'Timelines are agreed upon in the project statement of work.',
                    'Delays caused by client feedback or content delivery are not our responsibility.',
                    'We will communicate proactively if any delay occurs on our side.',
                ],
            },
            {
                num: '05',
                heading: 'Limitation of Liability',
                items: [
                    'Mount Everest Technologies is not liable for any indirect, incidental, or consequential damages arising from use of delivered products.',
                    'Our total liability is limited to the amount paid for the specific project in question.',
                    'We are not responsible for third-party service outages (hosting, payment providers, APIs).',
                ],
            },
            {
                num: '06',
                heading: 'Confidentiality',
                items: [
                    'We treat all client project information as strictly confidential.',
                    'We do not share project details, business information, or technical specifications with any third party.',
                    'Clients may request a formal NDA before project discussions begin.',
                ],
            },
            {
                num: '07',
                heading: 'Termination',
                items: [
                    'Either party may terminate a project with 14 days written notice.',
                    'Work completed up to the termination date will be invoiced accordingly.',
                    'All client data and project files will be delivered upon termination.',
                ],
            },
            {
                num: '08',
                heading: 'Governing Law',
                items: [
                    'These terms are governed by applicable international commercial law.',
                    'Any disputes will be resolved through good-faith negotiation before any legal proceedings.',
                ],
            },
            {
                num: '09',
                heading: 'Contact',
                items: [
                    'For terms questions: <a href="mailto:legal@mounteveresttech.com" class="legal-link">legal@mounteveresttech.com</a>',
                ],
            },
        ],
    },

    'cookie-policy': {
        id: 'cookie-policy',
        title: 'Cookie Policy',
        updated: 'March 2025',
        intro: 'This Cookie Policy explains what cookies are, which cookies Mount Everest Technologies uses, and how you can control them.',
        sections: [
            {
                num: '01',
                heading: 'What Are Cookies',
                items: [
                    'Cookies are small text files stored on your device when you visit a website.',
                    'They help websites remember your preferences and understand how you use the site.',
                    'Cookies cannot harm your device or access other files on it.',
                ],
            },
            {
                num: '02',
                heading: 'Cookies We Use',
                subsections: [
                    {
                        label: 'Essential Cookies — always active',
                        items: [
                            '<strong>Session cookie:</strong> keeps you on the correct page during your visit — expires when browser closes.',
                            '<strong>Preference cookie:</strong> remembers your cookie consent choice — expires after 12 months.',
                        ],
                    },
                    {
                        label: 'Analytics Cookies — only with your consent',
                        items: [
                            '<strong>Google Analytics (_ga, _ga_*):</strong> tracks page views, session duration, and traffic sources — expires after 2 years.',
                            'These help us understand which pages are most useful so we can improve the site.',
                        ],
                    },
                ],
            },
            {
                num: '03',
                heading: 'What We Do Not Do',
                items: [
                    'We do not use advertising or targeting cookies.',
                    'We do not sell cookie data to third parties.',
                    'We do not use cookies to track you across other websites.',
                    'We do not use fingerprinting or other invasive tracking methods.',
                ],
            },
            {
                num: '04',
                heading: 'How to Control Cookies',
                items: [
                    'You can withdraw your analytics consent at any time by clicking "Manage Cookies" in the footer.',
                    'You can block or delete all cookies in your browser settings.',
                    'Blocking essential cookies may affect how the website functions.',
                    'Browser cookie guides: Chrome, Firefox, Safari, and Edge all have settings under Privacy and Security.',
                ],
            },
            {
                num: '05',
                heading: 'Cookie Consent Banner',
                items: [
                    'When you first visit our site a cookie banner appears asking for your consent to analytics cookies.',
                    'You can accept all, reject non-essential, or manage individual preferences.',
                    'Your choice is stored for 12 months then asked again.',
                ],
            },
            {
                num: '06',
                heading: 'Updates to This Policy',
                items: [
                    'We may update this Cookie Policy when we change the cookies we use.',
                    'The last updated date at the top of this page will reflect any changes.',
                ],
            },
            {
                num: '07',
                heading: 'Contact',
                items: [
                    'For cookie questions: <a href="mailto:privacy@mounteveresttech.com" class="legal-link">privacy@mounteveresttech.com</a>',
                ],
            },
        ],
    },
};

// =============================================================
// HTML GENERATOR
// =============================================================
function renderLegalPage(page) {
    const sectionsHTML = page.sections.map(section => {
        let bodyHTML = '';
        if (section.subsections) {
            bodyHTML = section.subsections.map(sub => `
            <div class="legal-subsection">
                <div class="legal-sublabel">${sub.label}</div>
                <ul class="legal-list">${sub.items.map(i => `<li>${i}</li>`).join('')}</ul>
            </div>`).join('');
        } else if (section.items) {
            bodyHTML = `<ul class="legal-list">${section.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
        }
        return `
        <div class="legal-section section-reveal">
            <div class="legal-section-header">
                <span class="legal-section-num">${section.num}</span>
                <h2 class="legal-section-title">${section.heading}</h2>
            </div>
            ${bodyHTML}
            <div class="legal-divider"></div>
        </div>`;
    }).join('');

    return `
    <div class="legal-container">
        <div class="sp-back-bar">
            <button class="sp-back-btn" id="legal-back-btn" aria-label="Go back">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Back
            </button>
        </div>
        <header class="legal-hero section-reveal">
            <h1 class="legal-title">${page.title}</h1>
            <p class="legal-updated">Last updated: ${page.updated}</p>
            <p class="legal-intro">${page.intro}</p>
            <div class="legal-divider"></div>
        </header>
        <main class="legal-body">${sectionsHTML}</main>
    </div>
    <button class="legal-top-btn" id="legal-top-btn" aria-label="Back to top">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
    </button>`;
}

// =============================================================
// ROUTER — simple click-based, no hashchange conflicts
// =============================================================
const legalPageEl = document.getElementById('legal-page');

function openLegalPage(pageId) {
    const page = LEGAL_PAGES[pageId];
    if (!page) return;

    // Render content
    legalPageEl.innerHTML = renderLegalPage(page);

    // Hide all other page layers
    window.setMainVisibility(false);
    const sp = document.getElementById('service-page');
    if (sp) sp.style.display = 'none';
    const cp = document.getElementById('case-page');
    if (cp) cp.style.display = 'none';

    // Show legal page
    legalPageEl.style.display = 'block';
    legalPageEl.removeAttribute('aria-hidden');
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = page.title + ' | Everest Technologies';

    // Back button
    const backBtn = document.getElementById('legal-back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', closeLegalPage);
    }

    // Back-to-top button
    const topBtn = document.getElementById('legal-top-btn');
    if (topBtn) {
        const onScroll = () => {
            topBtn.classList.toggle('visible', window.scrollY > 300);
        };
        window.addEventListener('scroll', onScroll);
        topBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Scroll reveal
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });
    legalPageEl.querySelectorAll('.section-reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('visible');
        else obs.observe(el);
    });
}

function closeLegalPage() {
    window.setMainVisibility(true);
    legalPageEl.style.display = 'none';
    legalPageEl.setAttribute('aria-hidden', 'true');
    legalPageEl.innerHTML = '';
    document.title = "Mount Everest Technologies | We Build What Others Can't";
}

// Wire up footer legal links via data-legal attribute (no hash, no hashchange conflicts)
document.querySelectorAll('[data-legal]').forEach(link => {
    link.addEventListener('click', () => {
        const pageId = link.getAttribute('data-legal');
        openLegalPage(pageId);
    });
    link.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openLegalPage(link.getAttribute('data-legal'));
        }
    });
});
