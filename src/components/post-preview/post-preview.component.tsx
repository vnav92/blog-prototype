import React from 'react';
import { Link } from 'gatsby';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

import { ContentfulBlogPost } from '../../../graphql-types';
import { ThemeMode } from '../../shared/theme/theme.type';

import styles from './post-preview.module.scss';

type PostPreviewProps = {
  postPreview: Pick<
    ContentfulBlogPost,
    'contentful_id' | 'title' | 'introduction'
  >;
};

const useThemedStyles = createUseStyles((theme: ThemeMode) => ({
  postPreviewWrapper: {
    borderColor: theme.secondaryColor
  },
  text: {
    color: theme.primaryTextColor
  }
}));

export const PostPreview: React.FC<PostPreviewProps> = ({
  postPreview
}) => {
  const themedStyles = useThemedStyles();
  return (
    <Link
      to={`posts/${postPreview.contentful_id}`}
      className={classNames(
        themedStyles.postPreviewWrapper,
        styles.postPreviewWrapper
      )}
    >
      <div className={styles.previewContentWrapper}>
        <h3 className={themedStyles.text}>{postPreview.title}</h3>
        <span
          className={classNames(
            themedStyles.text,
            styles.postIntroduction
          )}
        >
          {postPreview.introduction}
        </span>
      </div>
    </Link>
  );
};
