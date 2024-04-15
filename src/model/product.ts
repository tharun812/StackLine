import { UUID } from "crypto"

export interface ProductSales{
    weekEnding : string,
    retailSales: number,
    wholesaleSales : number,
    unitsSold: number,
    retailerMargin: number
}

export default interface Product{
    id : string,
    title: string,
    image : string,
    subtitle: string,
    brand: string,
    sales: ProductSales[],
    tags: string[]
}