import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/firebase/admin';

export default async (
  req: NextApiRequest, 
  res: NextApiResponse
) => {
  const { uid } = req.query
  try {
    const doc = await db.collection('favor').doc(uid as string).get()
    const { bookmarks } = doc.data() as any
    if(!doc.exists) {
      console.log('Not exists');
      res.status(204).json([]);
    }

    const result = await bookmarks.reduce(async(acc:any, book:ReferenceItem) => {
      const booked = await book.ref.get()
      const data = await acc
      data.push(booked.data())
      return data
    }, [])
    
    res.status(200).json({
      ids: bookmarks.map((bookmark:ReferenceItem) => bookmark.id),
      questions: result
    });
    
  } catch (error) {
    console.log(error);
    res.status(500).end()
    
  } 
}