import { Sequelize } from "sequelize-typescript";

const db = new Sequelize("crudwithsequelize", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

export default db;