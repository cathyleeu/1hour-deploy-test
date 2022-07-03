import { useState } from 'react';

const useQuestionCard = () => {
  const [show, setShow] = useState(false);

  const onToggleShow = () => setShow((p) => !p);

  const onToggleBookmark = (id: number) => {
    //TODO: fetch data
  };

  return { show, onToggleShow, onToggleBookmark };
};

export default useQuestionCard;
