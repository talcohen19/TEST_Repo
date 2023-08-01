"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var employee_1 = require("./entity/employee");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345678",
    database: "hr_db",
    synchronize: false,
    logging: false,
    entities: [employee_1.Employee],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map