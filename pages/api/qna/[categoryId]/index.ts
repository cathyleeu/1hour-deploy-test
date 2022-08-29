import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/firebase/admin';

export default async (
  req: NextApiRequest, 
  res: NextApiResponse
) => {
  const { categoryId } = req.query
  try {
    const { docs } = await db.collection('questions').where('categoryId', '==', categoryId).get();
    const questions = docs.reduce((acc: any, curr) => {
      acc.push({
        id: curr.id,
        ...curr.data()
      })
      return acc
    }, [])

    res.status(200).json(questions);

  } catch (error) {
    res.status(500)
  } 
}