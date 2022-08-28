import CreateProductUsecase from "./create.product.usecase";

describe('Unit test for create product', () => {

    const dateTest = new Date();

    const input = {
        id: 1,
        name: "Test",
        description: "Test description",
        status: "Test status",
        createDate: dateTest,
        createUser: "Daniel",
        modifyDate: dateTest,
        price: 1
    }

    const output = {
        id: 1,
        name: "Test",
        description: "Test description",
        status: "Test status",
        createDate: dateTest,
        createUser: "Daniel",
        modifyDate: dateTest,
        price: 1
    }

    const MockRepository = () => {
        return {
            create: jest.fn().mockReturnValue(Promise.resolve(output)),
            update: jest.fn(),
            find: jest.fn(),
            findAll: jest.fn()
        }
    }

    it('should create one product', async () => {

        const repository = MockRepository();
        const createProductUseCase = new CreateProductUsecase(repository);

        const response = await createProductUseCase.create(input)

        expect(response).toEqual(output)
    });
})