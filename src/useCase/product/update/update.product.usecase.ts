import ProductRepositoryInterface from "../../../domain/product/repository/product.repository.interface";
import ProductDto from "../../../domain/product/value-object/product.dto";

export default class UpdateProductUseCase {
    private repository: ProductRepositoryInterface;

    constructor(repository: ProductRepositoryInterface) {
        this.repository = repository;
    }

    async updated(product: ProductDto) : Promise<ProductDto> {
        this.repository.update(product);
        return product;
    }
}