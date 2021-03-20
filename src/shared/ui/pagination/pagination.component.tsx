import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

import styles from './pagination.module.scss';

type PaginationProps = {
  numberOfPages: number;
  currentPage: number;
};
export const Pagination: React.FC<PaginationProps> = ({
  numberOfPages,
  currentPage
}) => {
  return (
    <div className={styles.paginationWrapper}>
      <Link
        to={
          currentPage === 2
            ? '/'
            : `${process.env.GATSBY_PAGE_ROUTE}/${currentPage - 1}`
        }
        className={classNames(styles.paginationLink, {
          [styles.disabledLink]: currentPage === 1
        })}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={styles.icon}
        />
        Previous page
      </Link>
      <Link
        to={`${process.env.GATSBY_PAGE_ROUTE}/${currentPage + 1}`}
        className={classNames(styles.paginationLink, {
          [styles.disabledLink]: currentPage === numberOfPages
        })}
      >
        Next page
        <FontAwesomeIcon
          icon={faChevronRight}
          className={styles.icon}
        />
      </Link>
    </div>
  );
};
