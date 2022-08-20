import ListProductUseCase from "./list.product.usecase";

describe("Unit test for list products", () => {

    const dateTest = new Date();

    const productsMock =
        {
            id: 1,
            name: "Updated name",
            description: "Test description",
            status: "Finish",
            createDate: dateTest,
            createUser: "Daniel",
            modifyDate: dateTest,
            price: 1
        };

    const MockRepository = () => {
        return {
            create: jest.fn(),
            update: jest.fn(),
            find: jest.fn(),
            findAll: jest.fn().mockReturnValue(Promise.resolve([productsMock]))
        }
    }

    it('should get all products created', () => {
        const repository = MockRepository();
        const listProductUseCase = new ListProductUseCase(repository);

        const response = listProductUseCase.findAll();

        expect(response).toEqual(Promise.resolve([productsMock]))
    });
})