"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var EmployeeController_1 = require("./controller/EmployeeController");
exports.Routes = [{
        method: "get",
        route: "/users",
        controller: EmployeeController_1.EmployeeController,
        action: "all"
    }, {
        method: "get",
        route: "/users/:id",
        controller: EmployeeController_1.EmployeeController,
        action: "one"
    }, {
        method: "post",
        route: "/users",
        controller: EmployeeController_1.EmployeeController,
        action: "save"
    }, {
        method: "delete",
        route: "/users/:id",
        controller: EmployeeController_1.EmployeeController,
        action: "remove"
    }];
//# sourceMappingURL=routes.js.map