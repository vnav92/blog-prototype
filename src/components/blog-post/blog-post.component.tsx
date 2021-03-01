import React from 'react';
import { graphql } from 'gatsby';

import { Query } from '../../../graphql-types';
import { PageLayout } from '../page-layout';
import { getAcapitContent, getImageSrc } from './blog-post.util';

import styles from './blog-post.module.scss';

type BlogPostProps = {
  pageContext: Query['contentfulBlogPost'];
  data: {
    allContentfulBlogMetaData: Query['allContentfulBlogMetaData'];
  };
};

const BlogPost: React.FC<BlogPostProps> = ({ pageContext, data }) => {
  const pageTitle = data.allContentfulBlogMetaData.nodes[0].title;
  const {
    title,
    primaryImage,
    introduction,
    acapitOne,
    acapitTwo,
    imageAcapitOne,
    imageAcapitOneDescription
  } = pageContext;
  return (
    <PageLayout title={pageTitle}>
      <div className={styles.wrapper}>
        <div
          className={styles.headerWrapper}
          style={{ backgroundImage: getImageSrc(primaryImage) }}
        >
          <h2 className={styles.postTitle}>{title}</h2>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.introductionWrapper}>
            <p className={styles.introduction}>{introduction}</p>
          </div>
          <div className={styles.acapitWrapper}>
            <p className={styles.acapit}>
              {getAcapitContent(acapitOne)}
            </p>
          </div>
          <img
            className={styles.image}
            src={imageAcapitOne.fixed.src}
          />
          <span className={styles.imageDescription}>
            {imageAcapitOneDescription}
          </span>
          <div className={styles.acapitWrapper}>
            <p className={styles.acapit}>
              {getAcapitContent(acapitTwo)}
            </p>
          </div>
        </div>
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
