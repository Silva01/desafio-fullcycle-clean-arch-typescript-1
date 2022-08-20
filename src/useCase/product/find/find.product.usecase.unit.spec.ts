import FindProductUseCase from "./find.product.usecase";

describe("Unit test for get one product", () => {
    const dateTest = new Date();

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
            create: jest.fn(),
            update: jest.fn(),
            find: jest.fn().mockReturnValue(Promise.resolve(output)),
            findAll: jest.fn()
        }
    }

    it('Should get one product', async () => {
        const repository = MockRepository();
        const findProductUseCase = new FindProductUseCase(repository);

        const response = await findProductUseCase.find(1);

        expect(response).toEqual(output)
    });
})