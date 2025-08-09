export interface NavItem {
  title: string;
  href: string;
  description?: string;
  external?: boolean;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const mainNav: NavItem[] = [
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export const servicesNav: NavItem[] = [
    { title: "Web Design & Development", href: "/services/web-design-development", description: "Crafting stunning, responsive, and high-performing websites." },
    { title: "Digital Marketing", href: "/services/digital-marketing", description: "Driving traffic and conversions through comprehensive online strategies." },
    { title: "SEO Services", href: "/services/seo-services", description: "Improving search engine rankings for organic visibility." },
    { title: "Social Media Marketing", href: "/services/social-media-marketing", description: "Engage your audience and grow your online reach." },
    { title: "Content Creation", href: "/services/content-creation", description: "Producing engaging and valuable content that captivates." },
    { title: "Branding & Identity", href: "/services/branding-identity", description: "Building strong brand identities that stand out." },
    { title: "E-commerce Solutions", href: "/services/e-commerce-solutions", description: "Developing robust and secure online stores." },
    { title: "Mobile App Development", href: "/services/mobile-app-development", description: "Creating intuitive and high-performance mobile applications." },
    { title: "PPC Advertising", href: "/services/ppc-advertising", description: "Managing targeted ad campaigns for immediate traffic." },
];

export const footerNav: NavSection[] = [
  {
    title: "Company",
    items: [
      { title: "About Us", href: "/about" },
      { title: "Our Team", href: "/team" },
      { title: "Careers", href: "/careers" },
      { title: "Contact Us", href: "/contact" },
      { title: "Request a Quote", href: "/request-quote" },
    ],
  },
  {
    title: "Services",
    items: [
      { title: "All Services", href: "/services" },
      { title: "Web Design & Development", href: "/services/web-design-development" },
      { title: "Digital Marketing", href: "/services/digital-marketing" },
      { title: "SEO Services", href: "/services/seo-services" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Blog / Insights", href: "/blog" },
      { title: "Portfolio / Case Studies", href: "/portfolio" },
      { title: "Client Testimonials", href: "/testimonials" },
      { title: "FAQs", href: "/faq" },
    ],
  },
  {
    title: "Legal",
    items: [
      { title: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];