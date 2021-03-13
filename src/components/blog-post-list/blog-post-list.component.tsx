import React from 'react';

import { Query } from '../../../graphql-types';
import { PostPreview } from '../post-preview';

type BlogPostListProps = {
  blogPosts: Query['contentfulBlogPost'][];
}

export const BlogPostList: React.FC<BlogPostListProps> = ({
  blogPosts
}) => {
  const sortedBlogPosts = blogPosts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  return (
    <>
      {
        sortedBlogPosts.map((post) => (
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
        ))
      }
    </>
  )
}