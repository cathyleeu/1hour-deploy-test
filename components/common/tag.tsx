import { memo } from 'react';

interface Props {
  content: string;
}

const Tag = ({ content }: Props) => {
  return (
    <div className="text-blue px-[9px] py-[6px] w-fit border border-blue rounded-[12px] font-poppins text-[10px] whitespace-nowrap">{`#${content}`}</div>
  );
};

export default memo(Tag);
