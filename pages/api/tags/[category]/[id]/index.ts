import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/firebase/admin';

export default async (
  req: NextApiRequest, 
  res: NextApiResponse
) => {
  const { category, id } = req.query
  try {
    // TODO get tag by id
    const { docs } = await db.collection('tags').get()
    const result = docs.reduce(async (acc: any, curr) => {
      const tag = await db.collection('tags').doc(category as string).collection('tag').get()
      acc = {
        ...acc,
        [curr.id]: {
          ...curr.data(),
          // tag: tag
        }
      }
      return acc
    }, {})
    res.status(200).json(result);

    
  } catch (error) {
    res.status(500)
  } 
}