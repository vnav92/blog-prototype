import React from 'react';
import { Link } from 'gatsby';

import { ContentfulBlogPost } from '../../../graphql-types';

import styles from './post-preview.module.scss';

type PostPreviewProps = {
  postPreview: Pick<
    ContentfulBlogPost,
    'contentful_id' | 'title' | 'introduction' | 'createdAt' | 'tags'
  >;
};

export const PostPreview: React.FC<PostPreviewProps> = ({
  postPreview
}) => {
  const formattedDate = new Date(
    postPreview.createdAt
  ).toLocaleDateString();
  return (
    <div className={styles.previewContentWrapper}>
      <span className={styles.createdDate}>{formattedDate}</span>
      <Link
        to={`posts/${postPreview.contentful_id}`}
        className={styles.postTitle}
      >
        {postPreview.title}
      </Link>
      <div className={styles.tagsWrapper}>
        {postPreview.tags?.map((tag, index) => (
          <span className={styles.tag} key={index}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
