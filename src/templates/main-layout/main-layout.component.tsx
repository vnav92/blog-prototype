import React from 'react';
import { graphql } from 'gatsby';
import {
  MainContent,
  PageLayout,
  BlogPostList
} from '../../components';
import { Pagination } from '../../shared';

const MainLayout = ({ data, pathContext }) => {
  return (
    <PageLayout title={pathContext.title}>
      <MainContent
        blogTitle={pathContext.title}
        blogAuthor={pathContext.authorName}
        blogAuthorPhoto={pathContext.authorPhoto}
      >
        <BlogPostList blogPosts={data.allContentfulBlogPost.nodes} />
        <Pagination
          numberOfPages={pathContext.numPages}
          currentPage={pathContext.currentPage}
        />
      </MainContent>
    </PageLayout>
  );
};

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
