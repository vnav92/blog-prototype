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
              primaryImage: node.primaryImage,
              createdAt: node.createdAt,
              acapitOne: node.acapitOne,
              imageAcapitOne: node.imageAcapitOne,
              acapitTwo: node.acapitTwo
            }
          });
        });
        return;
      })
    );
  });
};
