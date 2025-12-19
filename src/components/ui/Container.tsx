import { ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer';
}

export function Container({ 
  children, 
  className = '', 
  as: Component = 'div' 
}: ContainerProps) {
  return (
    <Component className={`${styles.container} ${className}`}>
      {children}
    </Component>
  );
}
