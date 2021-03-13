import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import styles from './header.module.scss';

type HeaderProps = {
  title: string;
  className?: string;
  // TODO remove optional from prop when image serving will be handled
  logoImageSrc?: string;
  isDarkMode: boolean;
  onThemeModeChange: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  title,
  logoImageSrc,
  isDarkMode,
  onThemeModeChange
}) => (
  <div className={styles.headerWrapper}>
    <div className={styles.titleSection}>
      {logoImageSrc && (
        <img src={logoImageSrc} alt="blog logo image" />
      )}
      <Link to="/" className={styles.blogTitle}>
        {title}
      </Link>
    </div>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" className={styles.subPageLink}>
          Blog
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/about" className={styles.subPageLink}>
          About me
        </Link>
      </li>
    </ul>
    <button
      className={styles.themeSwitchButton}
      onClick={onThemeModeChange}
    >
      <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
    </button>
  </div>
);
