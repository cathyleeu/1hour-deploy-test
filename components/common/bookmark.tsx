import { memo } from 'react';

const BookmarkIcon = ({ isChecked }: { isChecked: boolean }) => {
  return isChecked ? (
    <svg width="19" height="26" viewBox="0 0 19 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.5833 1H2.41667C1.63426 1 1 1.62716 1 2.40079V23.5969C1 24.7157 2.26104 25.383 3.20249 24.7624L8.71417 21.1291C9.19003 20.8154 9.80997 20.8154 10.2858 21.1291L15.7975 24.7624C16.739 25.383 18 24.7157 18 23.5969V2.40079C18 1.62716 17.3657 1 16.5833 1Z"
        fill="#267FF5"
        stroke="#267FF5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg width="19" height="27" viewBox="0 0 19 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.5833 1.25H2.41667C1.63426 1.25 1 1.87716 1 2.65079V23.8469C1 24.9657 2.26104 25.633 3.20249 25.0124L8.71417 21.3791C9.19003 21.0654 9.80997 21.0654 10.2858 21.3791L15.7975 25.0124C16.739 25.633 18 24.9657 18 23.8469V2.65079C18 1.87716 17.3657 1.25 16.5833 1.25Z"
        stroke="#7A8593"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(BookmarkIcon);
