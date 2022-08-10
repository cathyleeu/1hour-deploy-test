import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../firebaseAdmin';

interface CategoriesType {
  id: string;
  [key:string]: any
}

export default async (
  req: NextApiRequest, 
  res: NextApiResponse
) => {
  const { docs } = await db.collection('categories').get()

  const result = docs.reduce((acc: CategoriesType[], curr) => {
    acc.push({
      id: curr.id,
      ...curr.data()
    })
    return acc
  }, [])
  res.status(200).json(result);
}