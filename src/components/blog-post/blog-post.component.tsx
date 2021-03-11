import React from 'react';
import { graphql } from 'gatsby';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Query } from '../../../graphql-types';
import { PageLayout } from '../page-layout';

import styles from './blog-post.module.scss';

type BlogPostProps = {
  pageContext: Query['contentfulBlogPost'];
  data: {
    allContentfulBlogMetaData: Query['allContentfulBlogMetaData'];
  };
};

const BlogPost: React.FC<BlogPostProps> = ({ pageContext, data }) => {
  let rendererOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const image = pageContext.postContent.references.find(
          (reference) =>
            reference.contentful_id === node.data.target.sys.id
        );
        return <img src={image.fixed.src} />;
      }
    }
  };
  const pageTitle = data.allContentfulBlogMetaData.nodes[0].title;
  const { title, introduction, postContent } = pageContext;
  return (
    <PageLayout title={pageTitle}>
      <div className={styles.wrapper}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.title}>{title}</h1>
          <span className={styles.introduction}>{introduction}</span>
        </div>
        {documentToReactComponents(
          JSON.parse(postContent.raw),
          rendererOptions
        )}
      </div>
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
