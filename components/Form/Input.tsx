import React from 'react';

interface InputForwardRefProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}


function Input(
  props: InputForwardRefProps, 
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <input 
      {...props}
      ref={ref}
    />
  )
}


export default React.forwardRef<HTMLInputElement, InputForwardRefProps>(Input);