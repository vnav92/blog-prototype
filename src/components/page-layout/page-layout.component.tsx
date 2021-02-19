import React, { useState } from "react";
import { ThemeProvider } from 'react-jss';

import { Header, defaultTheme } from "../../shared";

import styles from "./page-layout.module.scss";



export const PageLayout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ThemeProvider theme={isDarkMode ? defaultTheme.darkMode : defaultTheme.regularMode}>
      <div className={styles.pageLayoutWrapper}>
        <Header
          title="test"
          onThemeModeChange={() => setIsDarkMode(isEnabled => !isEnabled)}
        />
        {children}
      </div>
    </ThemeProvider>
  )

}

