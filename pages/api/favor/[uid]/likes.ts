import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/firebase/admin';

export default async (
  req: NextApiRequest, 
  res: NextApiResponse
) => {
  const { uid } = req.query
  try {
    const doc = await db.collection('favor').doc(uid as string).get()
    const data = doc.data() as any
    if(!doc.exists) {
      res.status(204).json([]);
    }
    res.status(200).json(data.likes);
  } catch (error) {
    res.status(500)
  } 
}