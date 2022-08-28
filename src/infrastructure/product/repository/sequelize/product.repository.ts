import ProductRepositoryInterface from "../../../../domain/product/repository/product.repository.interface";
import ProductDto from "../../../../domain/product/value-object/product.dto";
import ProductModel from "./product.model";

export default class ProductRepository implements ProductRepositoryInterface {

    async create(product: ProductDto): Promise<void> {
        await ProductModel.create({
            id: product.id,
            name: product.name,
            description: product.description,
            status: product.status,
            createDate: product.createDate,
            createUser: product.createUser,
            modifyDate: product.modifyDate,
            price: product.price
        })
    }

    async find(id: number): Promise<ProductDto> {
        const model = await ProductModel.findOne({ where: {id} });
        return {
            id: model?.id,
            name: model?.name,
            description: model?.description,
            status: model?.status,
            createDate: model?.createDate,
            createUser: model?.createUser,
            modifyDate: model?.modifyDate,
            price: model?.price
        }
    }

    async findAll(): Promise<ProductDto[]> {
        const products = await ProductModel.findAll();
        return products.map((productModel) => {
            return {
                id: productModel?.id,
                name: productModel?.name,
                description: productModel?.description,
                status: productModel?.status,
                createDate: productModel?.createDate,
                createUser: productModel?.createUser,
                modifyDate: productModel?.modifyDate,
                price: productModel?.price
            }
        })
    }

    async update(product: ProductDto): Promise<void> {
        await ProductModel.update(
    {
            name: product.name,
            description: product.description,
            status: product.status,
            createDate: product.createDate,
            createUser: product.createUser,
            modifyDate: product.modifyDate,
            price: product.price
           }, {
                where: {
                    id: product.id
                }
            }
        )
    }

}