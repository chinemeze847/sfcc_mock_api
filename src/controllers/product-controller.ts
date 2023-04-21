import { Request , Response} from "express";
import {getProductsService, getProductService}  from "../services/product-service";



export const getProducts = (req: Request, res: Response) => {
    try {
      // const products = await getProductsService()
      res.send(getProductsService());
    } catch (error) {
      //This error is sent if either owner name or repo name is not correct
      return error
  }
}

export const getProduct = (req: Request, res: Response) => {
  try {
    // const products = await getProductsService()
    res.send(getProductService(req.params.id));
  } catch (error) {
    //This error is sent if either owner name or repo name is not correct
    return error
}
}