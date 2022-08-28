import ProductRepositoryInterface from "../../../domain/product/repository/product.repository.interface";
import ProductDto from "../../../domain/product/value-object/product.dto";

export default class ListProductUseCase {
    private repository: ProductRepositoryInterface;

    constructor(repository: ProductRepositoryInterface) {
        this.repository = repository;
    }

    findAll(): Promise<ProductDto[]> {
        return this.repository.findAll()
    }
}