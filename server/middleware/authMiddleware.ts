// @ts-nocheck

import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import expressAsyncHandler from "express-async-handler"

import User, { UserInterface } from "../models/User.model"

const protect = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  let token: string | undefined

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // get token from header
      token = req.headers.authorization.split(" ")[1]

      // verify  token
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET)

      // get user from the token
      req.user = (await User.findById(decoded.id).select("-password")) as UserInterface

      next()
    } catch (error) {
      console.log(error)
      res.status(401) // no authorized
      throw new Error("Not authorized")
    }
  }

  if (!token) {
    res.status(401)
    throw new Error("Not authorized, no token")
  }
})

export default protect
