
export default interface ProductDto {
    readonly id: Number | undefined,
    name: String | undefined,
    description: String | undefined,
    status: String | undefined,
    createDate: Date | undefined,
    createUser: String | undefined,
    modifyDate: Date | undefined,
    price: Number | undefined
}