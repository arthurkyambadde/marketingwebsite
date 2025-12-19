import { Metadata } from 'next';
import { HOME_PAGE } from '@/data/pages/home';
import { generatePageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import styles from './page.module.css';

export const metadata: Metadata = generatePageMetadata(
  'Home',
  HOME_PAGE.hero.subtitle,
  '/'
);

export const revalidate = 3600; // Revalidate every hour

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{HOME_PAGE.hero.title}</h1>
            <p className={styles.heroSubtitle}>{HOME_PAGE.hero.subtitle}</p>
            <div className={styles.heroActions}>
              <Button href={HOME_PAGE.hero.primaryCta.href} size="lg">
                {HOME_PAGE.hero.primaryCta.label}
              </Button>
              <Button href={HOME_PAGE.hero.secondaryCta.href} variant="outline" size="lg">
                {HOME_PAGE.hero.secondaryCta.label}
              </Button>
            </div>
            <div className={styles.heroStats}>
              {HOME_PAGE.hero.stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <Container>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{HOME_PAGE.features.title}</h2>
            <p className={styles.sectionSubtitle}>{HOME_PAGE.features.subtitle}</p>
          </div>
          <div className={styles.featuresGrid}>
            {HOME_PAGE.features.items.map((feature) => (
              <Card key={feature.title} hover>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <Container>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{HOME_PAGE.testimonials.title}</h2>
            <p className={styles.sectionSubtitle}>{HOME_PAGE.testimonials.subtitle}</p>
          </div>
          <div className={styles.testimonialsGrid}>
            {HOME_PAGE.testimonials.items.map((testimonial) => (
              <Card key={testimonial.author}>
                <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>
                <div className={styles.author}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>{testimonial.author}</div>
                    <div className={styles.authorRole}>{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <Container>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>{HOME_PAGE.cta.title}</h2>
            <p className={styles.ctaSubtitle}>{HOME_PAGE.cta.subtitle}</p>
            <div className={styles.ctaActions}>
              <Button href={HOME_PAGE.cta.primaryButton.href} size="lg">
                {HOME_PAGE.cta.primaryButton.label}
              </Button>
              <Button href={HOME_PAGE.cta.secondaryButton.href} variant="outline" size="lg">
                {HOME_PAGE.cta.secondaryButton.label}
              </Button>
            </div>
            <ul className={styles.ctaFeatures}>
              {HOME_PAGE.cta.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
