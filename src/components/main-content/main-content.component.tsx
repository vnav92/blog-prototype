import React from 'react';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';

import { ThemeMode } from '../../shared/theme/theme.type';
import styles from './main-content.module.scss';

const useThemedStyles = createUseStyles((theme: ThemeMode) => ({
  titleText: {
    color: theme.primaryContrastColor,
  },
}));

type MainContentProps = {
  blogTitle: string;
  blogAuthor: string;
  children: React.ReactElement | React.ReactElement[];
};
export const MainContent: React.FC<MainContentProps> = ({
  blogTitle,
  blogAuthor,
  children,
}) => {
  const themedStyles = useThemedStyles();
  return (
    <div className={styles.wrapper}>
      <div className={styles.blogTitleWrapper}>
        <h2
          className={classNames(
            themedStyles.titleText,
            styles.blogTitle,
          )}
        >
          {blogTitle}
        </h2>
        <h3
          className={classNames(
            themedStyles.titleText,
            styles.blogAuthor,
          )}
        >
          Blog of {blogAuthor}
        </h3>
      </div>
      {children}
    </div>
  );
};
