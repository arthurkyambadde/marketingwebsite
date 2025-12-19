export const PRICING_PAGE = {
  hero: {
    title: 'Simple, Transparent Pricing',
    subtitle: 'Choose the perfect plan for your business. No hidden fees, no surprises.',
  },
  plans: [
    {
      name: 'Starter',
      description: 'Perfect for small teams getting started',
      price: {
        monthly: 29,
        annually: 290,
      },
      features: [
        'Up to 5 team members',
        '10 GB storage',
        'Basic analytics',
        'Email support',
        'Core features',
        'Mobile apps',
      ],
      cta: {
        label: 'Start Free Trial',
        href: '/contact',
      },
      popular: false,
    },
    {
      name: 'Professional',
      description: 'For growing teams that need more power',
      price: {
        monthly: 79,
        annually: 790,
      },
      features: [
        'Up to 20 team members',
        '100 GB storage',
        'Advanced analytics',
        'Priority support',
        'All features',
        'Custom integrations',
        'API access',
        'Advanced security',
      ],
      cta: {
        label: 'Start Free Trial',
        href: '/contact',
      },
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with custom needs',
      price: {
        monthly: null,
        annually: null,
        custom: true,
      },
      features: [
        'Unlimited team members',
        'Unlimited storage',
        'Custom analytics',
        'Dedicated support',
        'Enterprise features',
        'Custom development',
        'SLA guarantee',
        'Advanced compliance',
        'On-premise option',
      ],
      cta: {
        label: 'Contact Sales',
        href: '/contact',
      },
      popular: false,
    },
  ],
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'Can I change plans later?',
        answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we\'ll prorate the difference.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, PayPal, and wire transfers for annual plans. Enterprise customers can arrange custom payment terms.',
      },
      {
        question: 'Is there a free trial?',
        answer: 'Yes! All plans come with a 14-day free trial. No credit card required to start.',
      },
      {
        question: 'What happens when I exceed my limits?',
        answer: 'We\'ll notify you before you reach your limits. You can upgrade your plan or purchase additional resources as needed.',
      },
      {
        question: 'Do you offer discounts for nonprofits?',
        answer: 'Yes, we offer special pricing for nonprofits and educational institutions. Contact our sales team for details.',
      },
    ],
  },
} as const;
