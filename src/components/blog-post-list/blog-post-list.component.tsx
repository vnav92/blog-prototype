import React, { useState } from 'react';

import { Query } from '../../../graphql-types';
import { Pagination } from '../../shared';
import { PostPreview } from '../post-preview';

import styles from './blog-post-list.module.scss';

type BlogPostListProps = {
  blogPosts: Query['contentfulBlogPost'][];
};

const ITEMS_PER_PAGE = 2;

export const BlogPostList: React.FC<BlogPostListProps> = ({
  blogPosts
}) => {
  const sortedBlogPosts = blogPosts.sort(
    (a, b) =>
      new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime()
  );
  const [visiblePosts, setVisiblePosts] = useState(
    sortedBlogPosts.slice(0, ITEMS_PER_PAGE)
  );
  return (
    <div className={styles.blogPostListWrapper}>
      <div className={styles.blogPostList}>
        {visiblePosts.map((post) => (
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
      {sortedBlogPosts.length > ITEMS_PER_PAGE && (
        <Pagination
          itemsPerPage={ITEMS_PER_PAGE}
          allItemsNumber={sortedBlogPosts.length}
          onCurrentPageChange={(currentPage: number) =>
            setVisiblePosts(
              sortedBlogPosts.slice(
                currentPage * ITEMS_PER_PAGE,
                currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
              )
            )
          }
        />
      )}
    </div>
  );
};
