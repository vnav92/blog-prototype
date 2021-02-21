import React from 'react';

import { graphql } from 'gatsby';
import { Query } from '../../graphql-types';

import { PageLayout, MainContent } from '../components';

type AppProps ={
  data: {
    allContentfulBlogMetaData: Query['allContentfulBlogMetaData']
  }
}

const App: React.FC<AppProps>= ({ data }) => {
  const { author, title } = data.allContentfulBlogMetaData.nodes[0];
  return (
    <PageLayout title={title}>
      <MainContent blogTitle={title} blogAuthor={author}>
        <p>main content here</p>
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
  }
`
