import { EmployeeController } from "./controller/EmployeeController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: EmployeeController,
    action: "all"
},
{
    method: "get",
    route: "/users/:username",
    controller: EmployeeController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: EmployeeController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: EmployeeController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: EmployeeController,
    action: "remove"
}]
