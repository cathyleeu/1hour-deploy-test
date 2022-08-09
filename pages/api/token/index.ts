import { NextApiRequest, NextApiResponse } from 'next';
import { firebaseAuth } from '../../../firebaseAdmin'
import { getAuth } from 'firebase-admin/auth'

export default async (req: NextApiRequest, res: NextApiResponse
) => {  
  if (req.method === "POST") {
      const { idToken } = req.body
      if (!idToken) {
        res.status(401)
        throw new Error('no valid idToken')
      } else {
        req.cookies.token = idToken
        console.log(req.cookies)
        console.log('???')
      }
  }
}