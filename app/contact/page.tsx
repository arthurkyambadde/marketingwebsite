'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SITE_CONFIG } from '@/data/constants';
import styles from './page.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section className={styles.hero}>
        <Container>
          <h1 className={styles.title}>Get in Touch</h1>
          <p className={styles.subtitle}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </Container>
      </section>

      <section className={styles.contact}>
        <Container>
          <div className={styles.grid}>
            <div className={styles.formSection}>
              {submitted ? (
                <Card>
                  <div className={styles.success}>
                    <h2>Thank you for contacting us!</h2>
                    <p>We'll get back to you as soon as possible.</p>
                    <Button onClick={() => setSubmitted(false)}>Send another message</Button>
                  </div>
                </Card>
              ) : (
                <Card>
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.label}>Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.label}>Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="company" className={styles.label}>Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message" className={styles.label}>Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className={styles.textarea}
                      />
                    </div>

                    <Button type="submit" size="lg">Send Message</Button>
                  </form>
                </Card>
              )}
            </div>

            <div className={styles.infoSection}>
              <Card>
                <h2 className={styles.infoTitle}>Contact Information</h2>
                
                <div className={styles.infoItem}>
                  <h3 className={styles.infoLabel}>Email</h3>
                  <a href={`mailto:${SITE_CONFIG.contact.email}`} className={styles.infoValue}>
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>

                <div className={styles.infoItem}>
                  <h3 className={styles.infoLabel}>Phone</h3>
                  <a href={`tel:${SITE_CONFIG.contact.phone}`} className={styles.infoValue}>
                    {SITE_CONFIG.contact.phone}
                  </a>
                </div>

                <div className={styles.infoItem}>
                  <h3 className={styles.infoLabel}>Address</h3>
                  <p className={styles.infoValue}>{SITE_CONFIG.contact.address}</p>
                </div>
              </Card>

              <Card>
                <h2 className={styles.infoTitle}>Office Hours</h2>
                <p className={styles.infoValue}>
                  Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                  Saturday - Sunday: Closed
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
