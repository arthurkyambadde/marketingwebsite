import { Metadata } from 'next';
import { ABOUT_PAGE } from '@/data/pages/about';
import { generatePageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import styles from './page.module.css';

export const metadata: Metadata = generatePageMetadata(
  'About Us',
  ABOUT_PAGE.hero.subtitle,
  '/about'
);

export const revalidate = 3600;

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <Container>
          <h1 className={styles.title}>{ABOUT_PAGE.hero.title}</h1>
          <p className={styles.subtitle}>{ABOUT_PAGE.hero.subtitle}</p>
        </Container>
      </section>

      <section className={styles.story}>
        <Container>
          <h2 className={styles.sectionTitle}>{ABOUT_PAGE.story.title}</h2>
          <div className={styles.storyContent}>
            {ABOUT_PAGE.story.content.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.mission}>
        <Container>
          <h2 className={styles.sectionTitle}>{ABOUT_PAGE.mission.title}</h2>
          <p className={styles.missionContent}>{ABOUT_PAGE.mission.content}</p>
        </Container>
      </section>

      <section className={styles.values}>
        <Container>
          <h2 className={styles.sectionTitle}>Our Values</h2>
          <div className={styles.valuesGrid}>
            {ABOUT_PAGE.values.map((value) => (
              <Card key={value.title}>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.team}>
        <Container>
          <h2 className={styles.sectionTitle}>{ABOUT_PAGE.team.title}</h2>
          <div className={styles.teamGrid}>
            {ABOUT_PAGE.team.members.map((member) => (
              <Card key={member.name}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberBio}>{member.bio}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.stats}>
        <Container>
          <div className={styles.statsGrid}>
            {ABOUT_PAGE.stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
