import { memo, useCallback, useEffect, useState } from 'react';
import ArrowIcon from './arrow-icon';
import Tag from './tag';

const TagList = ({ value }: { value: string[] }) => {
  const [selectedTag, setSelectedTag] = useState<string[]>([]);
  const [isFold, setIsFold] = useState(true);

  const onToggleFold = useCallback(() => setIsFold((p) => !p), [setIsFold]);

  const onClickTag = (tag: string) => {
    setSelectedTag((prev) => (prev.includes(tag) ? prev.filter((v) => v !== tag) : [...prev, tag]));
  };

  const onClickAll = () => {
    setSelectedTag([]);
  };

  useEffect(() => {
    setSelectedTag([]);
  }, [value]);

  return (
    <div className="w-full flex justify-between">
      <section
        className={`flex gap-[9px] flex-wrap overflow-hidden ${isFold ? 'h-[47px]' : ''}`}
        style={{ width: 'calc(100% - 47px)' }}
      >
        <Tag onClickTag={onClickAll} content="전체확인" isNotTag id="all" isChecked={selectedTag.length === 0} />
        {value.map((v, i) => (
          <Tag onClickTag={onClickTag} content={v} key={i} id={v} isChecked={selectedTag.includes(v)} />
        ))}
      </section>
      <button
        className="right-0 top-0 grid place-items-center w-[47px] h-[44px] bg-[#A2CAFF] rounded-[12px]"
        onClick={onToggleFold}
      >
        <ArrowIcon color="#0E1217" isToggle={!isFold} />
      </button>
    </div>
  );
};

export default memo(TagList);
