import React from 'react';

interface SelectForwardRefProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options: string[];
  placeholder: string;
}

function Select(props: SelectForwardRefProps, ref: React.ForwardedRef<HTMLSelectElement>) {
  return (
    <select {...props} className={props.className} defaultValue="" ref={ref}>
      <option className="hidden" value="">
        {props.placeholder}
      </option>
      {props.options?.map((data, i) => (
        <option value={data} key={i}>
          {data}
        </option>
      ))}
    </select>
  );
}

export default React.forwardRef<HTMLSelectElement, SelectForwardRefProps>(Select);
