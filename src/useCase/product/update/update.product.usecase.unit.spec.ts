import UpdateProductUseCase from "./update.product.usecase";

describe('Unit test for update product', () => {

    const dateTest = new Date();

    const input = {
        id: 1,
        name: "Updated name",
        description: "Test description",
        status: "Finish",
        createDate: dateTest,
        createUser: "Daniel",
        modifyDate: dateTest,
        price: 1
    }

    const output = {
        id: 1,
        name: "Updated name",
        description: "Test description",
        status: "Finish",
        createDate: dateTest,
        createUser: "Daniel",
        modifyDate: dateTest,
        price: 1
    }

    const MockRepository = () => {
        return {
            create: jest.fn(),
            update: jest.fn().mockReturnValue(Promise.resolve(output)),
            find: jest.fn(),
            findAll: jest.fn()
        }
    }

    it('should create one product', async () => {

        const repository = MockRepository();
        const createProductUseCase = new UpdateProductUseCase(repository);

        const response = await createProductUseCase.updated(input)

        expect(response).toEqual(output)
    });
})