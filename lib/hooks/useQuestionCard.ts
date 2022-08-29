import { useState } from 'react';
import { doc, updateDoc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase/client'

const useQuestionCard = () => {
  const [show, setShow] = useState(false);

  const onToggleShow = () => setShow((p) => !p);

  const onToggleBookmark = async (id: string, uid: string) => {
    //TODO: fetch data
    // TOGGLE_BOOKMARK
    console.log('onToggleBookmark')
    const ref = doc(db, "favor", uid)
    const docsnap = await getDoc(ref)
    const { bookmarks } = docsnap.data() as any
    const has = bookmarks.find((bookmark:any) => bookmark.id === id)
    if(!has) {
      await updateDoc(ref, {
        bookmarks: [
          ...bookmarks,
          {id, ref: doc(db, "questions", id)}
        ]
      })
    } else {
      await updateDoc(ref, {
        bookmarks: bookmarks.filter((bookmark:any) => bookmark.id !== id)
      })
    }
    console.log(bookmarks)
  };
  return { show, onToggleShow, onToggleBookmark };
};

export default useQuestionCard;
