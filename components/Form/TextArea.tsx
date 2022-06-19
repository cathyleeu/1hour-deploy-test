import React from 'react';

interface TextAreaForwardRefProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  // children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}


function TextArea(
  props: TextAreaForwardRefProps, 
  ref: React.ForwardedRef<HTMLTextAreaElement>
) {
  return (
    <textarea
      {...props}
      ref={ref}
    />
  )
}


export default React.forwardRef<HTMLTextAreaElement, TextAreaForwardRefProps>(TextArea);