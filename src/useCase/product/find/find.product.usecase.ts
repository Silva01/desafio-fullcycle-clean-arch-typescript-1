import ProductRepositoryInterface from "../../../domain/product/repository/product.repository.interface";
import ProductDto from "../../../domain/product/value-object/product.dto";

export default class FindProductUseCase{
    private repository: ProductRepositoryInterface;

    constructor(repository: ProductRepositoryInterface) {
        this.repository = repository;
    }

    async find(id: number): Promise<ProductDto> {
        return this.repository.find(id);
    }
}