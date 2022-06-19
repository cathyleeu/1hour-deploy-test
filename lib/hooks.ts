import { useCallback, useEffect, useState } from 'react';

export const useQuestionCard = () => {
  const [show, setShow] = useState(false);

  const onToggleShow = () => setShow((p) => !p);

  const onToggleBookmark = (id: number) => {
    //TODO: fetch data
    console.log('id', id);
  };

  return { show, onToggleShow, onToggleBookmark };
};
