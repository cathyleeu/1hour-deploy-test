import { useState, useEffect } from 'react';
import { doc, updateDoc, getDoc, DocumentReference } from 'firebase/firestore'
import { db } from '@/firebase/client'
import { useAuth } from '@components/auth/AuthProvide';

type FavorItemValue = {
  id: string;
  ref: DocumentReference;
}
interface FavorDocs {
  bookmarks: FavorItemValue[];
  likes: FavorItemValue[];
}
const useQuestionCard = (id:string) => {
  const [show, setShow] = useState(false);
  const { user } = useAuth()
  const [isBookmark, setIsBookmark] = useState(false)
  const onToggleShow = () => setShow((p) => !p);

  useEffect(() => {
    if(user?.uid) {
      getFavor(user?.uid)
        .then(({bookmarks}) => {
          const has = bookmarks.find((bookmark:FavorItemValue) => bookmark.id === id)
          setIsBookmark(Boolean(has))
        }) 
    }
  }, [user])

  async function getFavor(uid:string):Promise<FavorDocs> {
    const ref = doc(db, "favor", uid)
    const docsnap = await getDoc(ref) 
    return {
      ...docsnap.data() as FavorDocs
    }
  }
  const onToggleBookmark = async (id: string, uid: string) => {
    const ref = doc(db, "favor", uid)
    const { bookmarks } = await getFavor(uid)
    const has = bookmarks.find((bookmark:FavorItemValue) => bookmark.id === id)
    // FIXME : add notice
    // TODO: add plus bookmarks num
    if(!has) {
      setIsBookmark(true)
      await updateDoc(ref, {
        bookmarks: [
          ...bookmarks,
          {id, ref: doc(db, "questions", id)}
        ]
      })
    } else {
      setIsBookmark(false)
      await updateDoc(ref, {
        bookmarks: bookmarks.filter((bookmark:FavorItemValue) => bookmark.id !== id)
      })
    }
  };
  return { show, onToggleShow, onToggleBookmark, isBookmark };
};

export default useQuestionCard;
