import { memo } from 'react';

const ArrowIcon = ({
  color,
  className,
  height,
  width,
  isToggle,
}: {
  color: string;
  width?: number;
  height?: number;
  className?: string;
  isToggle?: boolean;
}) => {
  return (
    <div className={`${className} ${isToggle ? 'rotate-180' : ''}  grid place-items-center`}>
      <svg
        width={width ? width : 19}
        height={height ? height : 11}
        viewBox="0 0 19 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1.75L9.5 9.75L18 1.75"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default memo(ArrowIcon);
