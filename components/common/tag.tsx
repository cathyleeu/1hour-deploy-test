import { useTag } from 'lib/hooks';
import { memo } from 'react';

type Props = {
  id: number;
  isChecked: boolean;
  content: string;
  isNotTag?: boolean;
};

const Tag = ({ id, content, isChecked, isNotTag = false }: Props) => {
  const { onToggleTag } = useTag();
  return (
    <div
      onClick={() => onToggleTag(id)}
      className={`cursor-pointer text-[16px] px-[16px] py-[12px] w-fit rounded-[12px] ${
        isChecked ? 'bg-blue text-[#202124]' : 'bg-gray-light text-[#DCDEE3]'
      } `}
    >
      {!isNotTag && '#'}
      {content}
    </div>
  );
};

export default memo(Tag);
