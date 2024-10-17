import { Sequelize } from "sequelize-typescript";
import config from "./config";

const sequelize = new Sequelize({
  ...config.getDatabaseConfig(),
  dialect: "postgres",
  models: [__dirname + "/models"],
});

export default sequelize;
