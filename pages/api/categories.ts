import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/firebase/admin';

export default async (
  req: NextApiRequest, 
  res: NextApiResponse
) => {
  try {
    // TODO add Type
    const { docs } = await db.collection('categories').get()
    // {[key CategoryKey]: Category}
    const result = docs.reduce((acc, curr) => {
      const data = curr.data()
      acc = {
        ...acc,
        [data.pathname] : {
          id: curr.id,
          ...data
        }
      }
      return acc
    }, {})
    res.status(200).json(result);
  } catch (error) {
    res.status(500)
  }
}