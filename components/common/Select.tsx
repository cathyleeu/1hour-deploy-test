import React from 'react';



interface SelectForwardRefProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options: CategoryOptionType[];
  placeholder: string;
}

function Select(props: SelectForwardRefProps, ref: React.ForwardedRef<HTMLSelectElement>) {
  return (
    <select {...props} className={props.className} defaultValue="" ref={ref}>
      <option className="hidden" value="">
        {props.placeholder}
      </option>
      {props.options?.map((data, i) => (
        <option label={data.label} value={data.value} key={i} />
      ))}
    </select>
  );
}

export default React.forwardRef<HTMLSelectElement, SelectForwardRefProps>(Select);
