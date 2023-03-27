import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

import { authOptions } from "../auth/[...nextauth]";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Inside the API...");
  // const session = await getServerSession(req, res, authOptions)
  // console.log("Session in API is : ", session)
  // if(!session) return res.status(401).json({message: 'Please sign in to make a post.'})

  console.log("Request Body in API is : ", req.body);
  res.status(201).send("post created...");
}
