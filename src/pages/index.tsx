import React from 'react';

import { graphql } from 'gatsby';
import { Query } from '../../graphql-types';

import { PageLayout, MainContent, PostPreview } from '../components';

type AppProps ={
  data: {
    allContentfulBlogMetaData: Query['allContentfulBlogMetaData'],
    allContentfulBlogPost: Query['allContentfulBlogPost']
  }
}

const App: React.FC<AppProps>= ({ data }) => {
  const { author, title } = data.allContentfulBlogMetaData.nodes[0];
  const blogPosts = data.allContentfulBlogPost.nodes;
  return (
    <PageLayout title={title}>
      <MainContent blogTitle={title} blogAuthor={author}>
        {blogPosts.map((post, index) => (
          <PostPreview key={index} postPreview={post}/>
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
        title,
        introduction,
        primaryImage {
          fixed(height: 100) {
            src
          }
        }
      }
    }
  }
`
