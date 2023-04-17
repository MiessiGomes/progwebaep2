import { ProductTypes } from './ProductTypes/product.types';
import ProductModel from './productSchema'
import { writeFile, readFile } from 'fs/promises'

export class ProductService {

    async createProduct(product: ProductTypes){
        const createdProduct = await ProductModel.create(product)

        return createdProduct
    }

    async listProduct(product: ProductTypes){
        const listedProduct = await ProductModel.find(product)

        return listedProduct
    }

    async findProduct(id: ProductTypes){
        const findedProduct = await ProductModel.findById(id)

        return findedProduct
    }

    async updateProduct(product: ProductTypes){
        const updatedProduct = await ProductModel.update(product)

        return updatedProduct
    }

    async productsWriteFile() {
        const list = await this.listProducts()
        writeFile('allProducts.json', JSON.stringify(list, null, 2))
        .then(() => { return { success: true }})
        .catch(() => {return { success: false }})
    }
    
    async productsReadFile() {
        var a = []
        const t = readFile('allProducts.json', 'utf8').then(x => {
            a = JSON.parse(x)
        })
        console.log(a)
        return a
    }

}

export default new ProductService()