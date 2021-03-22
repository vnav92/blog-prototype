import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { Query } from '../../../graphql-types';

import styles from './main-content.module.scss';

type MainContentProps = {
  blogMetaData: Query['contentfulBlogMetaData'];
  children: React.ReactElement | React.ReactElement[];
};
export const MainContent: React.FC<MainContentProps> = ({
  blogMetaData,
  children
}) => (
  <div className={styles.wrapper}>
    <div className={styles.blogHeadingWrapper}>
      <div className={styles.socialLinksWrapper}>
        <Link
          to={blogMetaData.authorGithubLink}
          target="_blank"
          className={styles.socialLink}
        >
          <FontAwesomeIcon
            icon={faGithub}
            className={styles.socialLinkIcon}
          />
        </Link>
        <Link
          to={blogMetaData.authorTwitterLink}
          target="_blank"
          className={styles.socialLink}
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className={styles.socialLinkIcon}
          />
        </Link>
      </div>
      <Img
        className={styles.imageWrapper}
        fixed={blogMetaData.authorPhoto.fixed}
      />
      <div className={styles.blogTitleWrapper}>
        <h2 className={styles.blogTitle}>{blogMetaData.title}</h2>
        <h3 className={styles.blogAuthor}>
          by {blogMetaData.authorName}
        </h3>
      </div>
    </div>
    {children}
  </div>
);
