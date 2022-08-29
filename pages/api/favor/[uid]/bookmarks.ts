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
      res.status(204).json([]);
    }

    const result = await bookmarks.reduce(async(acc:any, book:any) => {
      const booked = await book.ref.get()
      acc.push(booked.data())
      return acc
    }, [])

    res.status(200).json({
      ids: bookmarks,
      questions: result
    });
  } catch (error) {
    res.status(500)
  } 
}