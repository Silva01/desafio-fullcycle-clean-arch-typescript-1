import ProductRepositoryInterface from "../../../domain/product/repository/product.repository.interface";
import ProductInput from "../../../domain/product/value-object/product.input";
import ProductOutput from "../../../domain/product/value-object/product.output";

export default class CreateProductUsecase {

    private repository: ProductRepositoryInterface;

    constructor(repository: ProductRepositoryInterface) {
        this.repository = repository;
    }

    async create(input: ProductInput): Promise<ProductOutput> {
        return this.repository.create(input)
    }
}