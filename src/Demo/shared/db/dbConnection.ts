import { Sequelize } from "sequelize-typescript";
import config from "./dbConfig";

const sequelize = new Sequelize({
  ...config.getDatabaseConfig(),
  dialect: "postgres",
  models: [__dirname + "/models"],
});

export default sequelize;
