import React from 'react';
import { graphql } from 'gatsby';

import { Query } from '../../../graphql-types';
import { PageLayout } from '../page-layout';

type BlogPostProps = {
  data: {
    allContentfulBlogMetaData: Query['allContentfulBlogMetaData'];
  };
};

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const { title } = data.allContentfulBlogMetaData.nodes[0];
  return (
    <PageLayout title={title}>
      <p>this is blog post</p>
    </PageLayout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPostPageMetadata {
    allContentfulBlogMetaData {
      nodes {
        title
      }
    }
  }
`;
