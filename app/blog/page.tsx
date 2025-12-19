import { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blog/posts';
import { generatePageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import styles from './page.module.css';

export const metadata: Metadata = generatePageMetadata(
  'Blog',
  'Insights, tips, and best practices for modern businesses. Learn how to grow and optimize your operations.',
  '/blog'
);

export const revalidate = 3600;

export default function BlogPage() {
  return (
    <>
      <section className={styles.hero}>
        <Container>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.subtitle}>
            Insights, tips, and best practices for modern businesses
          </p>
        </Container>
      </section>

      <section className={styles.posts}>
        <Container>
          <div className={styles.grid}>
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.postLink}>
                <Card hover>
                  <div className={styles.postMeta}>
                    <span className={styles.category}>{post.category}</span>
                    <span className={styles.readingTime}>{post.readingTime} min read</span>
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <p className={styles.postDescription}>{post.description}</p>
                  <div className={styles.postFooter}>
                    <div className={styles.author}>
                      <div className={styles.authorInfo}>
                        <div className={styles.authorName}>{post.author.name}</div>
                        <div className={styles.publishDate}>
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
