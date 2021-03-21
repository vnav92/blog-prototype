import React from 'react';
import Img from 'gatsby-image';
import { Query } from '../../../graphql-types';

import styles from './main-content.module.scss';

type MainContentProps = {
  blogTitle: string;
  blogAuthor: string;
  blogAuthorPhoto: Query['contentfulBlogMetaData']['authorPhoto'];
  children: React.ReactElement | React.ReactElement[];
};
export const MainContent: React.FC<MainContentProps> = ({
  blogTitle,
  blogAuthor,
  blogAuthorPhoto,
  children
}) => (
  <div className={styles.wrapper}>
    <div className={styles.blogHeadingWrapper}>
      <Img
        className={styles.imageWrapper}
        fixed={blogAuthorPhoto.fixed}
      />
      <div className={styles.blogTitleWrapper}>
        <h2 className={styles.blogTitle}>{blogTitle}</h2>
        <h3 className={styles.blogAuthor}>by {blogAuthor}</h3>
      </div>
    </div>
    {children}
  </div>
);
