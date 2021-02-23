import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

import { ContentfulBlogPost } from '../../../graphql-types';
import { ThemeMode } from '../../shared/theme/theme.type';

import styles from './post-preview.module.scss';

const useThemedStyles = createUseStyles((theme: ThemeMode) => ({
  postPreviewWrapper: {
    borderColor: theme.secondaryColor
  },
  text: {
    color: theme.primaryTextColor
  }
}));

type PostPreviewProps = {
  postPreview: Pick<ContentfulBlogPost, 'title' | 'introduction' | 'primaryImage'>
}
export const PostPreview: React.FC<PostPreviewProps> = ({
  postPreview
}) => {
  const themedStyles = useThemedStyles();
  return (
    <div className={classNames(themedStyles.postPreviewWrapper, styles.postPreviewWrapper)}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={postPreview.primaryImage.fixed.src} />
      </div>
      <div className={styles.previewContentWrapper}>
        <h3 className={themedStyles.text}>{postPreview.title}</h3>
        <span className={classNames(themedStyles.text, styles.postIntroduction)}>{postPreview.introduction}</span>
      </div>
    </div>
  )
}