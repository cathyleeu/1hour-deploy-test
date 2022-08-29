import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/firebase/admin';

interface TagType {
  id: string;
  name: string;
}

export default async (
  req: NextApiRequest, 
  res: NextApiResponse
) => {
  const { uid } = req.query
  try {
    const doc = await db.collection('favor').doc(uid as string).get()
    if(!doc.exists) {
      res.status(204).json({});
    }
    res.status(200).json(doc.data());
  } catch (error) {
    res.status(500)
  } 
}