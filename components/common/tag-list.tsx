import { Dispatch, memo, SetStateAction, useCallback, useEffect, useState } from 'react';
import ArrowIcon from './arrow-icon';
import Tag from './tag';

interface Props {
  tags: Tag[];
  // 바깥으로 선택된 태그 리스트 배열을 빼려고 setState 함수를
  // props로 추가했습니다. by 디노
  setTags?: Dispatch<SetStateAction<Tag[]>>;
}

const TagList = ({ tags, setTags }: Props) => {
  const [selectedTag, setSelectedTag] = useState<Tag[]>([]);
  const [isFold, setIsFold] = useState(true);

  const onToggleFold = useCallback(() => setIsFold((p) => !p), [setIsFold]);

  const onClickTag = (tag: Tag) => {
    setSelectedTag((prev) => (prev.includes(tag) ? prev.filter((v) => v !== tag) : [...prev, tag]));
    setTags ? setTags((prev: Tag[]) => (prev.includes(tag) ? prev.filter((v) => v !== tag) : [...prev, tag])) : [];
  };

  const onClickAll = () => {
    setSelectedTag([]);
  };

  useEffect(() => {
    setSelectedTag([]);
  }, [tags]);

  return (
    <div className="w-full flex justify-between">
      <section
        className={`flex gap-[9px] flex-wrap overflow-hidden ${isFold ? 'h-[47px]' : ''}`}
        style={{ width: 'calc(100% - 47px)' }}
      >
        <Tag onClickTag={onClickAll} content="전체확인" isNotTag id="all" isChecked={selectedTag.length === 0} />
        {tags.map((tag, i) => (
          <Tag onClickTag={() => onClickTag(tag)} content={tag.name} key={i} id={tag.id} isChecked={selectedTag.includes(tag)} />
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
