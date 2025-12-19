export const FEATURES_PAGE = {
  hero: {
    title: 'Powerful Features for Modern Teams',
    subtitle: 'Everything you need to build, launch, and scale your business with confidence.',
  },
  features: [
    {
      category: 'Performance',
      title: 'Built for Speed',
      description: 'Experience lightning-fast performance that keeps your team productive.',
      items: [
        {
          title: 'Optimized Infrastructure',
          description: 'Global CDN and edge computing ensure instant load times worldwide.',
        },
        {
          title: 'Smart Caching',
          description: 'Intelligent caching strategies reduce latency and improve responsiveness.',
        },
        {
          title: 'Real-time Updates',
          description: 'See changes instantly with WebSocket-powered real-time synchronization.',
        },
      ],
    },
    {
      category: 'Security',
      title: 'Enterprise-Grade Protection',
      description: 'Your data security is our top priority with multiple layers of protection.',
      items: [
        {
          title: 'End-to-End Encryption',
          description: 'All data is encrypted in transit and at rest using AES-256 encryption.',
        },
        {
          title: 'SOC 2 Compliance',
          description: 'Certified and audited to meet the highest security standards.',
        },
        {
          title: 'Advanced Access Controls',
          description: 'Granular permissions and role-based access control for your team.',
        },
      ],
    },
    {
      category: 'Integration',
      title: 'Connect Everything',
      description: 'Seamlessly integrate with the tools you already use and love.',
      items: [
        {
          title: 'API-First Design',
          description: 'Comprehensive REST and GraphQL APIs for custom integrations.',
        },
        {
          title: 'Pre-built Connectors',
          description: 'Connect with 100+ popular tools out of the box.',
        },
        {
          title: 'Webhooks & Automation',
          description: 'Automate workflows with powerful webhook and event-driven architecture.',
        },
      ],
    },
    {
      category: 'Analytics',
      title: 'Data-Driven Insights',
      description: 'Make informed decisions with comprehensive analytics and reporting.',
      items: [
        {
          title: 'Custom Dashboards',
          description: 'Build personalized dashboards to track the metrics that matter most.',
        },
        {
          title: 'Advanced Reporting',
          description: 'Generate detailed reports with customizable filters and exports.',
        },
        {
          title: 'Predictive Analytics',
          description: 'AI-powered insights help you forecast trends and opportunities.',
        },
      ],
    },
  ],
  cta: {
    title: 'Experience All Features',
    subtitle: 'Start your free trial today and see how our platform can transform your business.',
    button: {
      label: 'Get Started Free',
      href: '/contact',
    },
  },
} as const;
