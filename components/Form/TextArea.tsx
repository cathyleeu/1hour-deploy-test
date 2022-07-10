import React from 'react';

interface TextAreaForwardRefProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  // children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  error?: string;
}

function TextArea(props: TextAreaForwardRefProps, ref: React.ForwardedRef<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      // 수정 전 by.디노
      // className={`
      // ${ props.error ? 'border-error' : undefined }`}
      className={`${props.error ? 'border-error' : undefined} ${props.className}`}
      ref={ref}
    />
  );
}

export default React.forwardRef<HTMLTextAreaElement, TextAreaForwardRefProps>(TextArea);
