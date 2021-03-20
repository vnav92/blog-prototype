import React, { useState } from 'react';
import { graphql } from 'gatsby';

import { Query } from '../../../graphql-types';
import { Pagination } from '../../shared';
import { PostPreview } from '../post-preview';

import styles from './blog-post-list.module.scss';

type BlogPostListProps = {
  blogPosts: Query['contentfulBlogPost'][];
};

export const BlogPostList: React.FC<BlogPostListProps> = ({
  blogPosts
}) => {
  return (
    <div className={styles.blogPostListWrapper}>
      <div className={styles.blogPostList}>
        {blogPosts.map((post) => (
          <PostPreview
            key={post.contentful_id}
            postPreview={{
              contentful_id: post.contentful_id,
              title: post.title,
              introduction: post.introduction,
              createdAt: post.createdAt,
              tags: post.tags
            }}
          />
        ))}
      </div>
    </div>
  );
};
