'use client';

import Link from 'next/link';
import styles from './Logo.module.css';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function Logo({ size = 'md', showText = true }: LogoProps) {
  return (
    <Link href="/" className={`${styles.logo} ${styles[size]}`} aria-label="Nexus - Home">
      <svg
        className={styles.icon}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="nexusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        {/* Central hub */}
        <circle cx="20" cy="20" r="4" fill="url(#nexusGradient)" />
        {/* Connecting nodes */}
        <circle cx="8" cy="8" r="3" fill="url(#nexusGradient)" opacity="0.8" />
        <circle cx="32" cy="8" r="3" fill="url(#nexusGradient)" opacity="0.8" />
        <circle cx="8" cy="32" r="3" fill="url(#nexusGradient)" opacity="0.8" />
        <circle cx="32" cy="32" r="3" fill="url(#nexusGradient)" opacity="0.8" />
        {/* Connection lines */}
        <line x1="20" y1="20" x2="8" y2="8" stroke="url(#nexusGradient)" strokeWidth="1.5" opacity="0.6" />
        <line x1="20" y1="20" x2="32" y2="8" stroke="url(#nexusGradient)" strokeWidth="1.5" opacity="0.6" />
        <line x1="20" y1="20" x2="8" y2="32" stroke="url(#nexusGradient)" strokeWidth="1.5" opacity="0.6" />
        <line x1="20" y1="20" x2="32" y2="32" stroke="url(#nexusGradient)" strokeWidth="1.5" opacity="0.6" />
      </svg>
      {showText && <span className={styles.text}>Nexus</span>}
    </Link>
  );
}
