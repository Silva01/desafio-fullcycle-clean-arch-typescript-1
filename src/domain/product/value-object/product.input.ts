
export default interface ProductInput {
    readonly id: Number | null,
    name: String,
    description: String,
    status: String,
    createDate: Date,
    createUser: String,
    modifyDate: Date,
    price: number
}