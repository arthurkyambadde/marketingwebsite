'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MAIN_NAV, CTA_BUTTON } from '@/data/navigation';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import styles from './Header.module.css';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav} aria-label="Main navigation">
          <Logo size="md" />

          {/* Desktop Navigation */}
          <ul className={styles.navList}>
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <Button href={CTA_BUTTON.href} size="sm">
              {CTA_BUTTON.label}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={styles.hamburger}></span>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <ul className={styles.mobileNavList}>
              {MAIN_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.mobileActions}>
              <Button href={CTA_BUTTON.href}>
                {CTA_BUTTON.label}
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
