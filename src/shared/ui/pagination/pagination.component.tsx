import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

import styles from './pagination.module.scss';

type PaginationProps = {
  itemsPerPage: number;
  allItemsNumber: number;
  onCurrentPageChange: (currentPage: number) => void;
};
export const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  allItemsNumber,
  onCurrentPageChange
}) => {
  const paginationButtonsNumber = Math.ceil(
    allItemsNumber / itemsPerPage
  );
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    onCurrentPageChange(currentPage);
  }, [currentPage]);

  return (
    <div className={styles.paginationWrapper}>
      <button
        className={styles.arrowButton}
        disabled={currentPage === 0}
        onClick={() => setCurrentPage((page) => page - 1)}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={styles.icon}
        />
        Previous page
      </button>
      <button
        className={styles.arrowButton}
        disabled={currentPage === paginationButtonsNumber}
        onClick={() => setCurrentPage((page) => page + 1)}
      >
        Next page
        <FontAwesomeIcon
          icon={faChevronRight}
          className={styles.icon}
        />
      </button>
    </div>
  );
};
