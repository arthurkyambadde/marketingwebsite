export const ABOUT_PAGE = {
  hero: {
    title: 'Building the Future of Business Software',
    subtitle: 'We\'re on a mission to empower businesses with tools that make work more productive, collaborative, and enjoyable.',
  },
  story: {
    title: 'Our Story',
    content: [
      'Founded in 2020, Nexus started with a simple observation: businesses were struggling with fragmented tools that didn\'t work well together. We set out to build a unified platform that would solve this problem.',
      'Today, we serve over 10,000 businesses worldwide, from startups to Fortune 500 companies. Our platform has processed over 1 billion transactions and helped teams save countless hours of work.',
      'But we\'re just getting started. Every day, we\'re working to make our platform better, faster, and more powerful for our customers.',
    ],
  },
  mission: {
    title: 'Our Mission',
    content: 'To empower every business with software that\'s powerful enough for enterprises yet simple enough for anyone to use. We believe great software should be accessible, intuitive, and delightful.',
  },
  values: [
    {
      title: 'Customer First',
      description: 'Every decision we make starts with our customers. Their success is our success.',
    },
    {
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new technologies to stay ahead.',
    },
    {
      title: 'Transparency',
      description: 'We believe in open communication, honest pricing, and clear documentation.',
    },
    {
      title: 'Excellence',
      description: 'We set high standards for ourselves and strive for excellence in everything we do.',
    },
  ],
  team: {
    title: 'Leadership Team',
    members: [
      {
        name: 'Alex Thompson',
        role: 'CEO & Co-Founder',
        bio: 'Former VP of Engineering at TechGiant. 15+ years building scalable platforms.',
        image: '/images/team/alex.jpg',
      },
      {
        name: 'Jordan Lee',
        role: 'CTO & Co-Founder',
        bio: 'Ex-Google engineer with expertise in distributed systems and cloud architecture.',
        image: '/images/team/jordan.jpg',
      },
      {
        name: 'Sam Rivera',
        role: 'Head of Product',
        bio: 'Product leader with a track record of launching successful B2B SaaS products.',
        image: '/images/team/sam.jpg',
      },
      {
        name: 'Casey Morgan',
        role: 'Head of Customer Success',
        bio: 'Passionate about helping customers achieve their goals and maximize value.',
        image: '/images/team/casey.jpg',
      },
    ],
  },
  stats: [
    { value: '10,000+', label: 'Customers' },
    { value: '50+', label: 'Team Members' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '4.9/5', label: 'Customer Rating' },
  ],
} as const;
