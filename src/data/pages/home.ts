export const HOME_PAGE = {
  hero: {
    title: 'Transform Your Business with Cutting-Edge Solutions',
    subtitle: 'Empower your team with powerful tools designed for modern businesses. Increase productivity, streamline workflows, and achieve remarkable results.',
    primaryCta: {
      label: 'Start Free Trial',
      href: '/contact',
    },
    secondaryCta: {
      label: 'Watch Demo',
      href: '#demo',
    },
    stats: [
      { value: '10,000+', label: 'Active Users' },
      { value: '99.9%', label: 'Uptime' },
      { value: '4.9/5', label: 'Customer Rating' },
    ],
  },
  features: {
    title: 'Everything You Need to Succeed',
    subtitle: 'Powerful features designed to help your business grow faster and smarter.',
    items: [
      {
        title: 'Lightning Fast Performance',
        description: 'Built for speed with optimized code and modern infrastructure. Experience instant load times and seamless interactions.',
        icon: 'zap',
      },
      {
        title: 'Enterprise-Grade Security',
        description: 'Your data is protected with bank-level encryption, regular security audits, and compliance with industry standards.',
        icon: 'shield',
      },
      {
        title: 'Seamless Integrations',
        description: 'Connect with your favorite tools and services. Works perfectly with your existing workflow and tech stack.',
        icon: 'plug',
      },
      {
        title: 'Advanced Analytics',
        description: 'Make data-driven decisions with comprehensive analytics and real-time insights into your business performance.',
        icon: 'chart',
      },
      {
        title: '24/7 Expert Support',
        description: 'Our dedicated support team is always available to help you succeed. Get answers when you need them.',
        icon: 'support',
      },
      {
        title: 'Scalable Infrastructure',
        description: 'Grow without limits. Our platform scales effortlessly from startup to enterprise without compromising performance.',
        icon: 'scale',
      },
    ],
  },
  testimonials: {
    title: 'Trusted by Industry Leaders',
    subtitle: 'See what our customers have to say about their experience.',
    items: [
      {
        quote: 'This platform has completely transformed how we work. The productivity gains have been incredible.',
        author: 'Sarah Johnson',
        role: 'CEO, TechCorp',
        avatar: '/images/testimonials/sarah.jpg',
      },
      {
        quote: 'The best investment we made this year. ROI was positive within the first month.',
        author: 'Michael Chen',
        role: 'CTO, InnovateLabs',
        avatar: '/images/testimonials/michael.jpg',
      },
      {
        quote: 'Outstanding support and a product that actually delivers on its promises. Highly recommended.',
        author: 'Emily Rodriguez',
        role: 'Product Manager, GrowthCo',
        avatar: '/images/testimonials/emily.jpg',
      },
    ],
  },
  cta: {
    title: 'Ready to Get Started?',
    subtitle: 'Join thousands of businesses already using our platform to achieve their goals.',
    primaryButton: {
      label: 'Start Your Free Trial',
      href: '/contact',
    },
    secondaryButton: {
      label: 'Schedule a Demo',
      href: '/contact',
    },
    features: [
      'No credit card required',
      '14-day free trial',
      'Cancel anytime',
    ],
  },
} as const;
