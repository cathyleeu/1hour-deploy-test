import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/firebase/admin';

interface TagType {
  id: string;
  name: string;
  [key:string]: any
}

export default async (
  req: NextApiRequest, 
  res: NextApiResponse
) => {
  // 
  // console.log(req.query.category)
  // try {
    
    const { docs } = await db.collection('tags').get()
    // categoryId
    // console.log(docs[0].data())
    const result = docs.reduce(async (acc: any, curr) => {
      // const tag = await db.collection('tags').doc(curr.id).collection('tag').get()
      // tag
      // const tag = curr.get('tag')
      acc = {
        ...acc,
        [curr.id]: {
          ...curr.data(),
          // tag: tag
        }
      }
      return acc
    }, {})
    // console.log(result);
    
    res.status(200).json(result);

    // TODO get tag list by id
  // } catch (error) {
    // res.status(500)
  // } 
}