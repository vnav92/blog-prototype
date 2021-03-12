const path = require('path');

const TEMPLATE_PATH =
  'src/components/blog-post/blog-post.component.tsx';

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const template = path.resolve(TEMPLATE_PATH);
    resolve(
      graphql(`
        {
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

        result.data.allContentfulBlogPost.nodes.forEach((node) => {
          createPage({
            path: `/posts/${node.contentful_id}`,
            component: template,
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
