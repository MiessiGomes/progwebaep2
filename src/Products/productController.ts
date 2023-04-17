import {Request, Response} from 'express'
import { ProductService } from "./productService"


class ProductController {

    async createProduct(req: Request, res: Response){
        const product = await new ProductService().createProduct(req.body)

        return res.status(200).json(product)
    }

    async listProduct(req: Request, res: Response){
        const product = await new ProductService().listProduct()

        return res.status(200).json(product)
    }
    
    async findProduct(req: Request, res: Response){
        const product = await new ProductService().findProduct()

        return res.status(200).json(product)
    }

    async UpdateProduct(req: Request, res: Response){
        const product = await new ProductService().productUpdateProduct()

        return res.status(200).json(product)
    }

    async writeFile(req: Request, res: Response) {
        const product = await new ProductService().productsWriteFile()

        return res.status(200).json(product)
    }

    async readFile(req: Request, res: Response) {
        const product = await new ProductService().productsReadFile()

        return res.status(200).json(product)
    }

}

export default new ProductController()