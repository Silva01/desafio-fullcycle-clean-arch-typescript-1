import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table({
    tableName: "products",
    timestamps: false
})
export default class ProductModel extends Model {

    @PrimaryKey
    @Column
    declare id: Number;

    @Column
    declare name: String;

    @Column
    declare description: String;

    @Column
    declare status: String;

    @Column
    declare createDate: Date;

    @Column
    declare createUser: String;

    @Column
    declare modifyDate: Date;

    @Column
    declare price: Number;
}