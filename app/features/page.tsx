import { Metadata } from 'next';
import { FEATURES_PAGE } from '@/data/pages/features';
import { generatePageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import styles from './page.module.css';

export const metadata: Metadata = generatePageMetadata(
  'Features',
  FEATURES_PAGE.hero.subtitle,
  '/features'
);

export const revalidate = 3600;

export default function FeaturesPage() {
  return (
    <>
      <section className={styles.hero}>
        <Container>
          <h1 className={styles.title}>{FEATURES_PAGE.hero.title}</h1>
          <p className={styles.subtitle}>{FEATURES_PAGE.hero.subtitle}</p>
        </Container>
      </section>

      {FEATURES_PAGE.features.map((section, index) => (
        <section
          key={section.category}
          className={index % 2 === 0 ? styles.section : `${styles.section} ${styles.sectionAlt}`}
        >
          <Container>
            <div className={styles.sectionHeader}>
              <span className={styles.category}>{section.category}</span>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <p className={styles.sectionDescription}>{section.description}</p>
            </div>
            <div className={styles.grid}>
              {section.items.map((item) => (
                <Card key={item.title}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section className={styles.cta}>
        <Container>
          <h2 className={styles.ctaTitle}>{FEATURES_PAGE.cta.title}</h2>
          <p className={styles.ctaSubtitle}>{FEATURES_PAGE.cta.subtitle}</p>
          <Button href={FEATURES_PAGE.cta.button.href} size="lg">
            {FEATURES_PAGE.cta.button.label}
          </Button>
        </Container>
      </section>
    </>
  );
}
