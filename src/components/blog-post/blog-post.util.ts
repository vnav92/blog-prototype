import { Query } from '../../../graphql-types';

export const getAcapitContent = (
  acapit:
    | Query['contentfulBlogPost']['acapitOne']
    | Query['contentfulBlogPost']['acapitTwo']
) => JSON.parse(acapit.raw).content[0].content[0].value;

export const getImageSrc = (
  image: Query['contentfulBlogPost']['imageAcapitOne']
) => `url('${image.fixed.src}')`;
