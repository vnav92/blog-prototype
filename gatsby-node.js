const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const template = path.resolve(
      'src/components/blog-post/blog-post.component.tsx'
    );
    resolve(
      graphql(`
        {
          allContentfulBlogPost {
            nodes {
              acapitOne {
                raw
              }
              acapitTwo {
                raw
              }
              createdAt
              introduction
              title
              primaryImage {
                fixed {
                  src
                }
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }

        result.data.allContentfulBlogPost.nodes.forEach(
          (node, index) => {
            createPage({
              path: `blog-post-${index + 1}`,
              component: template,
              context: {
                title: 'test'
              }
            });
          }
        );
        return;
      })
    );
  });
};
