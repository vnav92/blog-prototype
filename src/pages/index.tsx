import React from 'react';
import { graphql } from 'gatsby';

import { Query } from '../../graphql-types';
import { PageLayout, MainContent, PostPreview } from '../components';

type AppProps = {
  data: {
    allContentfulBlogMetaData: Query['allContentfulBlogMetaData'];
    allContentfulBlogPost: Query['allContentfulBlogPost'];
  };
};

const App: React.FC<AppProps> = ({ data }) => {
  const { author, title } = data.allContentfulBlogMetaData.nodes[0];
  const blogPosts = data.allContentfulBlogPost.nodes;
  return (
    <PageLayout title={title}>
      <MainContent blogTitle={title} blogAuthor={author}>
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
      </MainContent>
    </PageLayout>
  );
};

export default App;

export const query = graphql`
  query BlogMetaData {
    allContentfulBlogMetaData {
      nodes {
        author
        title
      }
    }
    allContentfulBlogPost {
      nodes {
        title
        introduction
        contentful_id
        createdAt
        tags
      }
    }
  }
`;
