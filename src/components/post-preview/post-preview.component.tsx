import React from 'react';
import { Link } from 'gatsby';

import { ContentfulBlogPost } from '../../../graphql-types';

import styles from './post-preview.module.scss';

type PostPreviewProps = {
  postPreview: Pick<
    ContentfulBlogPost,
    'contentful_id' | 'title' | 'introduction'
  >;
};

export const PostPreview: React.FC<PostPreviewProps> = ({
  postPreview
}) => (
  <Link
    to={`posts/${postPreview.contentful_id}`}
    className={styles.postPreviewWrapper}
  >
    <div className={styles.previewContentWrapper}>
      <h3>{postPreview.title}</h3>
      <span className={styles.postIntroduction}>
        {postPreview.introduction}
      </span>
    </div>
  </Link>
);
