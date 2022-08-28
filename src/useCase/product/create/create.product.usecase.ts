import ProductRepositoryInterface from "../../../domain/product/repository/product.repository.interface";
import ProductDto from "../../../domain/product/value-object/product.dto";

export default class CreateProductUsecase {

    private repository: ProductRepositoryInterface;

    constructor(repository: ProductRepositoryInterface) {
        this.repository = repository;
    }

    async create(input: ProductDto): Promise<ProductDto> {
        await this.repository.create(input)
        return input;
    }
}