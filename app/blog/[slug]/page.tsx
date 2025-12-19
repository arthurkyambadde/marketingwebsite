import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blog/posts';
import { generateArticleMetadata } from '@/lib/metadata';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/structured-data';
import { StructuredData } from '@/components/seo/StructuredData';
import { Container } from '@/components/ui/Container';
import styles from './page.module.css';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {};
  }

  return generateArticleMetadata(
    post.title,
    post.description,
    `/blog/${post.slug}`,
    post.publishedAt,
    post.updatedAt,
    [post.author.name],
    post.tags,
    post.image
  );
}

export const revalidate = 86400; // Revalidate every 24 hours

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = generateArticleSchema(
    post.title,
    post.description,
    post.image,
    post.publishedAt,
    post.updatedAt,
    post.author.name
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title },
  ]);

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />

      <article className={styles.article}>
        <Container>
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link>
            <span className={styles.separator}>/</span>
            <Link href="/blog">Blog</Link>
            <span className={styles.separator}>/</span>
            <span>{post.title}</span>
          </div>

          <header className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.category}>{post.category}</span>
              <span className={styles.readingTime}>{post.readingTime} min read</span>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.description}>{post.description}</p>
            <div className={styles.author}>
              <div className={styles.authorInfo}>
                <div className={styles.authorName}>{post.author.name}</div>
                <div className={styles.authorRole}>{post.author.role}</div>
              </div>
              <time className={styles.publishDate} dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </header>

          <div className={styles.content}>
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return <h1 key={index}>{paragraph.replace('# ', '')}</h1>;
              } else if (paragraph.startsWith('## ')) {
                return <h2 key={index}>{paragraph.replace('## ', '')}</h2>;
              } else if (paragraph.startsWith('### ')) {
                return <h3 key={index}>{paragraph.replace('### ', '')}</h3>;
              } else if (paragraph.startsWith('- ')) {
                return <li key={index}>{paragraph.replace('- ', '')}</li>;
              } else if (paragraph.trim()) {
                return <p key={index}>{paragraph}</p>;
              }
              return null;
            })}
          </div>

          <footer className={styles.footer}>
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  #{tag}
                </span>
              ))}
            </div>
            <Link href="/blog" className={styles.backLink}>
              ← Back to Blog
            </Link>
          </footer>
        </Container>
      </article>
    </>
  );
}
