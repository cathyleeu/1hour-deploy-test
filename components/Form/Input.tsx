import React from 'react';

interface InputForwardRefProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  error?: boolean;
}


function Input(
  props: InputForwardRefProps, 
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <input 
      {...props}
      className={`
      ${ props.error ? 'border-error' : undefined }`}
      ref={ref}
    />
  )
}


export default React.forwardRef<HTMLInputElement, InputForwardRefProps>(Input);