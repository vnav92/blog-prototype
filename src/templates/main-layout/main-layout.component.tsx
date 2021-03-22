import React from 'react';
import { graphql } from 'gatsby';

import {
  MainContent,
  PageLayout,
  BlogPostList
} from '../../components';
import { Pagination } from '../../shared';
import { Query } from '../../../graphql-types';

type MainLayoutProps = {
  data: Query;
  pathContext: {
    limit: number;
    skip: number;
    numPages: number;
    currentPage: number;
    metaData: Query['contentfulBlogMetaData'];
  };
};

const MainLayout: React.FC<MainLayoutProps> = ({
  data,
  pathContext
}) => (
  <PageLayout title={pathContext.metaData.title}>
    <MainContent blogMetaData={pathContext.metaData}>
      <BlogPostList blogPosts={data.allContentfulBlogPost.nodes} />
      <Pagination
        numberOfPages={pathContext.numPages}
        currentPage={pathContext.currentPage}
      />
    </MainContent>
  </PageLayout>
);

export default MainLayout;

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(limit: $limit, skip: $skip) {
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
