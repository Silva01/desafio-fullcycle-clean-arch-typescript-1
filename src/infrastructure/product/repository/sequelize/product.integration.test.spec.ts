import {Sequelize} from "sequelize-typescript";
import ProductModel from "./product.model";
import ProductRepository from "./product.repository";

describe("Product repository test", () => {
    let sequileze: Sequelize;

    beforeEach(async () => {
        sequileze = new Sequelize({
            dialect: "sqlite",
            storage: ":memory:",
            logging: false,
            sync: { force: true },
        });
        sequileze.addModels([ProductModel]);
        await sequileze.sync();
    });

    afterEach(async () => {
        await sequileze.close();
    });

    it("should create a product", async () => {
        const productRepository = new ProductRepository();
        const createDateTest = new Date();
        const product = {
            id: 1,
            name: "Test",
            description: "Test description",
            status: "Test status",
            createDate: createDateTest,
            createUser: "Daniel",
            modifyDate: createDateTest,
            price: 1
        };

        await productRepository.create(product);

        const productModelTest = await ProductModel.findOne({ where: { id: "1" } });

        expect(productModelTest?.toJSON()).toStrictEqual({
            id: 1,
            name: "Test",
            description: "Test description",
            status: "Test status",
            createDate: createDateTest,
            createUser: "Daniel",
            modifyDate: createDateTest,
            price: 1
        });
    });

    it("should update a product", async () => {
        const productRepository = new ProductRepository();
        const updateDateTest = new Date();
        const createDateTest = new Date();

        const product = {
            id: 1,
            name: "Test",
            description: "Test description",
            status: "Test status",
            createDate: createDateTest,
            createUser: "Daniel",
            modifyDate: createDateTest,
            price: 1
        };

        await productRepository.create(product);

        const productModel = await ProductModel.findOne({ where: { id: "1" } });

        expect(productModel?.toJSON()).toStrictEqual({
            id: 1,
            name: "Test",
            description: "Test description",
            status: "Test status",
            createDate: createDateTest,
            createUser: "Daniel",
            modifyDate: createDateTest,
            price: 1
        });

        product.name = "Product 2";
        product.price = 200;
        product.modifyDate = updateDateTest

        await productRepository.update(product);

        const productModel2 = await ProductModel.findOne({ where: { id: "1" } });

        expect(productModel2?.toJSON()).toStrictEqual({
            id: 1,
            name: "Product 2",
            description: "Test description",
            status: "Test status",
            createDate: createDateTest,
            createUser: "Daniel",
            modifyDate: updateDateTest,
            price: 200
        });
    });

    it("should find a product", async () => {
        const productRepository = new ProductRepository();
        const createDateTest = new Date();
        const product = {
            id: 1,
            name: "Test",
            description: "Test description",
            status: "Test status",
            createDate: createDateTest,
            createUser: "Daniel",
            modifyDate: createDateTest,
            price: 1
        };

        await productRepository.create(product);

        const productModel = await ProductModel.findOne({ where: { id: "1" } });

        const foundProduct = await productRepository.find(1);

        expect(productModel?.toJSON()).toStrictEqual({
            id: foundProduct.id,
            name: foundProduct.name,
            description: foundProduct.description,
            status: foundProduct.status,
            createDate: foundProduct.createDate,
            createUser: foundProduct.createUser,
            modifyDate: foundProduct.modifyDate,
            price: foundProduct.price
        });
    });

    it("should find all products", async () => {
        const productRepository = new ProductRepository();
        const createDateTest = new Date();
        const product = {
            id: 1,
            name: "Test",
            description: "Test description",
            status: "Test status",
            createDate: createDateTest,
            createUser: "Daniel",
            modifyDate: createDateTest,
            price: 1
        };
        await productRepository.create(product);

        const product2 = {
            id: 2,
            name: "Test 2",
            description: "Test description 2",
            status: "Test status 2",
            createDate: createDateTest,
            createUser: "Daniel 2",
            modifyDate: createDateTest,
            price: 1
        };
        await productRepository.create(product2);

        const foundProducts = await productRepository.findAll();
        const products = [product, product2];

        expect(products).toEqual(foundProducts);
    });

});