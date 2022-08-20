import ProductRepositoryInterface from "../../../domain/product/repository/product.repository.interface";
import ProductOutput from "../../../domain/product/value-object/product.output";

export default class FindProductUseCase{
    private repository: ProductRepositoryInterface;

    constructor(repository: ProductRepositoryInterface) {
        this.repository = repository;
    }

    async find(id: number): Promise<ProductOutput> {
        return this.repository.find(id);
    }
}