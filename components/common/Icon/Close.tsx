import { BaseProps } from 'types';

const Close = ({
  className,
  handleClick
}: BaseProps) => {
  return (
    <svg 
      viewBox="0 0 22 22"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={handleClick}
    >
      <path d="M20.9999 20.9999L1.00003 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 1L1 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default Close;