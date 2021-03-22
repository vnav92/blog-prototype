const path = require('path');

const BLOG_POST_TEMPLATE_PATH =
  'src/templates/blog-post/blog-post.component.tsx';
const MAIN_LAYOUT_TEMPLATE_PATH =
  'src/templates/main-layout/main-layout.component.tsx';

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allContentfulBlogMetaData {
            nodes {
              authorName
              title
              authorPhoto {
                fixed {
                  src
                }
              }
              authorGithubLink
              authorTwitterLink
            }
          }
          allContentfulBlogPost {
            nodes {
              title
              introduction
              createdAt
              postContent {
                references {
                  contentful_id
                  fixed {
                    src
                  }
                  title
                }
                raw
              }
              contentful_id
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }

        const blogPosts = result.data.allContentfulBlogPost.nodes;
        const blogMetaData =
          result.data.allContentfulBlogMetaData.nodes[0];
        const postsPerPage = 2;
        const numPages = Math.ceil(blogPosts.length / postsPerPage);

        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path:
              i === 0
                ? '/'
                : `${process.env.GATSBY_PAGE_ROUTE}/${i + 1}`,
            component: path.resolve(MAIN_LAYOUT_TEMPLATE_PATH),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
              metaData: blogMetaData
            }
          });
        });

        result.data.allContentfulBlogPost.nodes.forEach((node) => {
          createPage({
            path: `${process.env.GATSBY_POST_ROUTE}/${node.contentful_id}`,
            component: path.resolve(BLOG_POST_TEMPLATE_PATH),
            context: {
              title: node.title,
              introduction: node.introduction,
              createdAt: node.createdAt,
              postContent: node.postContent
            }
          });
        });
        return;
      })
    );
  });
};
