const path = require('path');

const TEMPLATE_PATH =
  'src/components/blog-post/blog-post.component.tsx';

const getPageContext = (data) => ({
  title: data.title,
  introduction: data.introduction,
  primaryImage: data.primaryImage,
  imageAcapitOne: data.imageAcapitOne,
  createdAt: data.createdAt,
  acapitOne: data.acapitOne,
  imageAcapitOne: data.imageAcapitOne,
  imageAcapitOneDescription: data.imageAcapitOneDescription,
  acapitTwo: data.acapitTwo
});

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const template = path.resolve(TEMPLATE_PATH);
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
              imageAcapitOne {
                fixed {
                  src
                }
              }
              imageAcapitOneDescription
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
            context: getPageContext(node)
          });
        });
        return;
      })
    );
  });
};
