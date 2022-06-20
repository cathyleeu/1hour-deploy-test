import React from 'react';

interface TextAreaForwardRefProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  // children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  error?:string;
}


function TextArea(
  props: TextAreaForwardRefProps, 
  ref: React.ForwardedRef<HTMLTextAreaElement>
) {
  return (
    <textarea
      {...props}
      className={`
      ${ props.error ? 'border-error' : undefined }`}
      ref={ref}
    />
  )
}


export default React.forwardRef<HTMLTextAreaElement, TextAreaForwardRefProps>(TextArea);