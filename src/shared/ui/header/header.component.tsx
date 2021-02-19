import React from "react";
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

import styles from "./header.module.scss"

const useThemedStyles = createUseStyles(theme => ({
  headerWrapper: {
    background: theme.primaryColor
  }
}))

type HeaderProps = {
  title: string;
  // TODO remove optional from prop when image serving will be handled
  logoImageSrc?: string;
  onThemeModeChange: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  logoImageSrc,
  onThemeModeChange
}) => {
  const themedStyles = useThemedStyles();
  // const themedStyles = useThemedStyles({theme});
  return (
    <div className={classNames(themedStyles.headerWrapper, styles.headerWrapper)}>
      <div className={styles.titleSection}>
        {logoImageSrc && <img src={logoImageSrc} alt="blog logo image" />}
        <h1>{title}</h1>
      </div>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <a>Blog</a>
        </li>
        <li>
          About me
        <a></a>
        </li>
      </ul>
      <button onClick={onThemeModeChange}
      >
        toggle theme
      </button>
    </div>
  )
}

