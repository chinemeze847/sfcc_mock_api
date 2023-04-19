import { Request , Response} from "express";
import {getProductsService}  from "../services/product-service";



export const getProducts = (req: Request, res: Response) => {
    try {
      // const products = await getProductsService()
      res.send({message: "success"});
    } catch (error) {
      //This error is sent if either owner name or repo name is not correct
      return error
  }
}