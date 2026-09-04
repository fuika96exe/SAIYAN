/**
 * SAIYAN — Static Stories Data Store
 * Structured for easy future CMS integration or static site rendering.
 */
const SAIYAN_STORIES = [
  {
    slug: 'saiyan-network-launch',
    category: 'NETWORK',
    title: 'Launching a Singapore–Sarawak network for practical AI collaboration',
    excerpt: 'Connecting young builders, organisations, institutions and mentors across borders to turn AI learning into real-world action.',
    date: 'March 2026',
    location: 'Singapore & Sarawak',
    readingTime: '4 min read',
    coverImage: 'assets/img/hero_scene_ultra_wide_21x9.png',
    altText: 'Diverse youth AI builders collaborating in front of Singapore and Sarawak landmarks',
    sections: [
      {
        heading: '1. Introduction',
        paragraphs: [
          'The Singapore–Sarawak AI Youth Ambassador Network (SAIYAN) has officially taken shape as a dedicated cross-border platform designed to bridge education, practical project building, and digital transformation.',
          'Rather than treating AI as a purely theoretical academic subject, SAIYAN creates pathways for young people to gain hands-on experience with real industry tools, understand local contexts, and build collaborative solutions across borders.'
        ]
      },
      {
        heading: '2. What happened',
        paragraphs: [
          'Collaborators from Singapore and Sarawak came together to establish the foundational pillars of the network: SAIYAN Academy, SAIYAN Missions, SAIYAN Build, and the Sailor SAIYAN mobility exchange.',
          'The network unites youth innovators, academic institutions, public bodies, and enterprise challenge hosts into a singular, mutually beneficial innovation ecosystem.'
        ]
      },
      {
        heading: '3. Why it matters',
        paragraphs: [
          'Singapore brings a globally connected digital economy and deep enterprise AI exposure, while Sarawak brings rich community relationships, emerging builder talent, and strong regional demand for practical digital solutions.',
          'SAIYAN operates as a two-way relationship where both regions contribute, learn, build, and grow together.'
        ]
      },
      {
        heading: '4. What comes next',
        paragraphs: [
          'Upcoming cohort applications are opening on a rolling basis, welcoming young builders, participating organisations, and mentors into the inaugural series of masterclasses, hackathons, and bilateral exchange missions.'
        ]
      }
    ],
    takeaway: 'SAIYAN is built to move ideas into action — establishing a two-way bridge where Singapore and Sarawak youth turn practical AI skills into meaningful cross-border impact.',
    relatedSlugs: ['ai-business-design-hackathon', 'cross-border-youth-collaboration', 'from-learning-to-building']
  },
  {
    slug: 'ai-business-design-hackathon',
    category: 'PROJECTS',
    title: 'Turning business challenges into practical AI ideas',
    excerpt: 'How organisations bring real problems to youth cohorts, exploring prototypes and measurable digital outcomes.',
    date: 'February 2026',
    location: 'Kuching & Singapore',
    readingTime: '5 min read',
    coverImage: 'assets/img/card_real_world_projects.jpg',
    altText: 'Youth builders analyzing business challenges on laptop and design boards',
    sections: [
      {
        heading: '1. Introduction',
        paragraphs: [
          'Traditional education often ends at case studies. The SAIYAN challenge methodology begins where textbooks stop: with verified briefs provided by real enterprises, SMEs, and community organisations.',
          'During our practical problem-solving tracks, cross-border cohorts dissect authentic operational bottlenecks and design functional AI prototypes.'
        ]
      },
      {
        heading: '2. The Problem-Solving Process',
        paragraphs: [
          'Participants move through a structured four-stage methodology: UNDERSTAND the core friction point $\\to$ DESIGN the human-centred workflow $\\to$ BUILD the working prototype $\\to$ LAUNCH and test with actual users.',
          'Enterprises gain fresh, unconstrained digital perspectives, while young builders build portfolio-grade proof of their engineering and problem-solving abilities.'
        ]
      },
      {
        heading: '3. Long-term Impact',
        paragraphs: [
          'Successful prototypes do not disappear after a single presentation. Promising solutions transition into SAIYAN Build tracks for further refinement, pilot testing, and deployment.'
        ]
      }
    ],
    takeaway: 'Real challenges drive real learning. By addressing authentic operational briefs, young builders create tangible value for organisations while mastering modern AI implementation.',
    relatedSlugs: ['saiyan-network-launch', 'from-learning-to-building', 'cross-border-youth-collaboration']
  },
  {
    slug: 'cross-border-youth-collaboration',
    category: 'EXCHANGE',
    title: 'Why cross-border exchange matters for emerging builders',
    excerpt: 'Stepping into different ecosystems, exchanging perspectives, and building long-lasting relationships across Singapore and Sarawak.',
    date: 'January 2026',
    location: 'Singapore & Sarawak',
    readingTime: '4 min read',
    coverImage: 'assets/img/card_cross_border_community.jpg',
    altText: 'Young innovators discussing cross-border AI projects',
    sections: [
      {
        heading: '1. More Than a Visit',
        paragraphs: [
          'Mobility initiatives often focus solely on tourism or passive sightseeing. Sailor SAIYAN redefines mobility as an active innovation exchange where builders immerse themselves directly in another region’s ecosystem.',
          'Participants visit forward-thinking tech companies, dialogue with local leaders, and work on collaborative project sprints that continue long after returning home.'
        ]
      },
      {
        heading: '2. Broadening Builder Perspectives',
        paragraphs: [
          'When builders from Singapore collaborate side-by-side with peers from Sarawak, they discover complementary strengths. Solutions become more culturally resilient, technically grounded, and responsive to diverse community needs.',
          'The bonds formed during these exchanges lay the foundation for future regional startups, research alliances, and cross-border careers.'
        ]
      }
    ],
    takeaway: 'True innovation thrives at the intersection of diverse perspectives. Cross-border exchange builds the human relationships that power future regional collaboration.',
    relatedSlugs: ['saiyan-network-launch', 'ai-business-design-hackathon', 'from-learning-to-building']
  },
  {
    slug: 'from-learning-to-building',
    category: 'YOUTH',
    title: 'From learning AI to building something real',
    excerpt: 'How young people develop genuine confidence by shipping functional digital prototypes under experienced mentorship.',
    date: 'December 2025',
    location: 'Singapore & Sarawak',
    readingTime: '3 min read',
    coverImage: 'assets/img/card_build_and_ship.jpg',
    altText: 'Youth coding and deploying AI prototypes on laptop',
    sections: [
      {
        heading: '1. Beyond Passive Prompting',
        paragraphs: [
          'Anyone can type a prompt into an AI chatbot, but building dependable, production-ready software requires understanding data flow, system architecture, user experience, and ethical guardrails.',
          'SAIYAN empowers young people to transition from passive consumers of AI to active builders who create bespoke digital tools.'
        ]
      },
      {
        heading: '2. The Power of Mentorship',
        paragraphs: [
          'Throughout each build cycle, veteran mentors from tech startups and enterprise labs review code, critique design decisions, and provide direct feedback.',
          'This mentorship accelerates skill development and gives young builders the confidence to take on ambitious real-world challenges.'
        ]
      }
    ],
    takeaway: 'Confidence is built through shipping. When young creators build working solutions under experienced guidance, they unlock new career pathways and future possibilities.',
    relatedSlugs: ['saiyan-network-launch', 'ai-business-design-hackathon', 'cross-border-youth-collaboration']
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SAIYAN_STORIES };
}
