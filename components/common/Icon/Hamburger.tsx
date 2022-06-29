import { BaseProps } from 'types';

const Hamburger = ({
  className,
  handleClick
}: BaseProps) => {
  return (
    <svg 
      viewBox="0 0 23 17" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={handleClick}
    >
      <path d="M1 15.4883H21.2837" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 8.24414H21.2837" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 1H21.2837" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default Hamburger;