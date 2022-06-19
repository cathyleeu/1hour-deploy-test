import { memo } from 'react';

type Props = {
  id: string;
  isChecked: boolean;
  content: string;
  isNotTag?: boolean;
  onClickTag: (tag: string) => void;
};

const Tag = ({ id, content, isChecked, isNotTag = false, onClickTag }: Props) => {
  return (
    <div
      onClick={() => onClickTag(id)}
      className={`cursor-pointer text-[16px] px-[16px] h-[47px] items-center flex w-fit rounded-[12px] whitespace-nowrap ${
        isChecked ? 'bg-blue text-[#202124]' : 'bg-gray-light text-[#dcdee3]'
      } `}
    >
      {!isNotTag && '#'}
      {content}
    </div>
  );
};

export default memo(Tag);
