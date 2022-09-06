import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/firebase/admin';

export default async (
  req: NextApiRequest, 
  res: NextApiResponse
) => {
  try {
    const { docs } = await db.collection('tags').get()
    const result = await docs.reduce(async (init:any, curr) => {
      const { docs:subDocs } = await db.collection('tags').doc(curr.id).collection('tag').get()     
      const tags = subDocs.reduce((acc:TagItemValue[], doc) => {
        const item = {
          id: doc.id,
          categoryId: curr.id,
          ...doc.data(),
        } as TagItemValue
        acc.push(item)
        return acc
      }, []) 
      let res = await init
      res = [...res, ...tags]
      return res
    }, [])
    res.status(200).json(result);
  } catch (error) {
    res.status(500).end()
  } 
}