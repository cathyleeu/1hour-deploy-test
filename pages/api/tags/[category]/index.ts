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
  const { category } = req.query
  try {
    const { docs } = await db.collection('tags').doc(category as string).collection('tag').get()
    const tags = docs.reduce((acc: TagType[], curr) => {
      
      acc.push({
        id: curr.id,
        name: curr.data().name
      })
      return acc
    }, [])

    res.status(200).json(tags);

  } catch (error) {
    res.status(500)
  } 
}