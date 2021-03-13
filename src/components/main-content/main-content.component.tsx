import React from 'react';
import classNames from 'classnames';

import styles from './main-content.module.scss';

type MainContentProps = {
  blogTitle: string;
  blogAuthor: string;
  children: React.ReactElement | React.ReactElement[];
};
export const MainContent: React.FC<MainContentProps> = ({
  blogTitle,
  blogAuthor,
  children
}) => (
  <div className={styles.wrapper}>
    <div className={styles.blogTitleWrapper}>
      <h2 className={styles.blogTitle}>{blogTitle}</h2>
      <h3 className={styles.blogAuthor}>by {blogAuthor}</h3>
    </div>
    {children}
  </div>
);
