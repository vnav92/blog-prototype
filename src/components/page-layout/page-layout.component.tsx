import React from "react"

import { Header } from "../../shared/ui";

import styles from './page-layout.module.scss';

export const PageLayout = ({ children }) => (
  <div className={styles.pageLayoutWrapper}>
    <Header title="test" />
    {children}
  </div>
)
