import { Metadata } from 'next';
import { PRICING_PAGE } from '@/data/pages/pricing';
import { generatePageMetadata } from '@/lib/metadata';
import { generateFAQSchema } from '@/lib/structured-data';
import { StructuredData } from '@/components/seo/StructuredData';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import styles from './page.module.css';

export const metadata: Metadata = generatePageMetadata(
  'Pricing',
  PRICING_PAGE.hero.subtitle,
  '/pricing'
);

export const revalidate = 3600;

export default function PricingPage() {
  const faqSchema = generateFAQSchema(PRICING_PAGE.faq.items);

  return (
    <>
      <StructuredData data={faqSchema} />
      
      <section className={styles.hero}>
        <Container>
          <h1 className={styles.title}>{PRICING_PAGE.hero.title}</h1>
          <p className={styles.subtitle}>{PRICING_PAGE.hero.subtitle}</p>
        </Container>
      </section>

      <section className={styles.pricing}>
        <Container>
          <div className={styles.plansGrid}>
            {PRICING_PAGE.plans.map((plan) => (
              <Card key={plan.name} className={plan.popular ? styles.popularPlan : ''}>
                {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
                <div className={styles.planHeader}>
                  <h2 className={styles.planName}>{plan.name}</h2>
                  <p className={styles.planDescription}>{plan.description}</p>
                  <div className={styles.planPrice}>
                    {plan.price.custom ? (
                      <span className={styles.customPrice}>Custom</span>
                    ) : (
                      <>
                        <span className={styles.price}>${plan.price.monthly}</span>
                        <span className={styles.period}>/month</span>
                      </>
                    )}
                  </div>
                </div>
                <ul className={styles.features}>
                  {plan.features.map((feature) => (
                    <li key={feature} className={styles.feature}>
                      <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button href={plan.cta.href} variant={plan.popular ? 'primary' : 'outline'}>
                  {plan.cta.label}
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.faq}>
        <Container>
          <h2 className={styles.faqTitle}>{PRICING_PAGE.faq.title}</h2>
          <div className={styles.faqGrid}>
            {PRICING_PAGE.faq.items.map((item) => (
              <div key={item.question} className={styles.faqItem}>
                <h3 className={styles.question}>{item.question}</h3>
                <p className={styles.answer}>{item.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
