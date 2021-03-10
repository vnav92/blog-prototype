import React, { useEffect, useState } from 'react';

import { Header } from '../../shared';

import styles from './page-layout.module.scss';

const LOCAL_STORAGE_KEY = 'is-dark-mode-enabled';
const LIGHT_CLASS_NAME = 'light';
const DARK_CLASS_NAME = 'dark'

export const PageLayout = ({ children, title }) => {
  const [isDarkMode, setIsDarkMode] = useState(!!localStorage.getItem('is-dark-mode-enabled'));

  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem(LOCAL_STORAGE_KEY, 'true')
      document.body.classList.add(DARK_CLASS_NAME);
      document.body.classList.remove(LIGHT_CLASS_NAME)
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY)
      document.body.classList.add(LIGHT_CLASS_NAME)
      document.body.classList.remove(DARK_CLASS_NAME);
    }
  }, [isDarkMode])
  return (
    <div className={styles.pageLayoutWrapper}>
      <Header
        title={title}
        onThemeModeChange={() =>
          setIsDarkMode((isEnabled) => !isEnabled)
        }
      />
      <div className={styles.childrenWrapper}>{children}</div>
    </div>
  );
};
