import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';

import { ThemeMode } from '../../theme/theme.type';

import styles from './header.module.scss';

const useThemedStyles = createUseStyles((theme: ThemeMode) => ({
  headerWrapper: {
    background: theme.primaryColor,
  },
}));

type HeaderProps = {
  title: string;
  className?: string;
  // TODO remove optional from prop when image serving will be handled
  logoImageSrc?: string;
  onThemeModeChange: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  title,
  logoImageSrc,
  onThemeModeChange,
}) => {
  const themedStyles = useThemedStyles();
  return (
    <div
      className={classNames(
        themedStyles.headerWrapper,
        styles.headerWrapper,
      )}
    >
      <div className={styles.titleSection}>
        {logoImageSrc && (
          <img src={logoImageSrc} alt="blog logo image" />
        )}
        <h1>
          <Link to="/">{title}</Link>
        </h1>
      </div>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/about">About me</Link>
        </li>
      </ul>
      <button onClick={onThemeModeChange}>toggle theme</button>
    </div>
  );
};
