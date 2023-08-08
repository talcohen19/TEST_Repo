import { EmployeeController } from "./controller/EmployeeController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: EmployeeController,
    action: "all"
},
{
    method: "delete",
    route: "/users/:id",
    controller: EmployeeController,
    action: "remove"
}]
