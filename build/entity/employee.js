"use strict";
// src/entities/Employee.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var typeorm_1 = require("typeorm");
var Employee = /** @class */ (function () {
    function Employee() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'employee_id' }) // Map to the 'EMPLOYEE_ID' column
        ,
        __metadata("design:type", Number)
    ], Employee.prototype, "employeeId", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: 'first_name' }) // Map to the 'FIRST_NAME' column
        ,
        __metadata("design:type", String)
    ], Employee.prototype, "firstName", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: 'last_name' }) // Map to the 'LAST_NAME' column
        ,
        __metadata("design:type", String)
    ], Employee.prototype, "lastName", void 0);
    __decorate([
        (0, typeorm_1.Column)() // No need to specify the name as it matches the column name 'EMAIL'
        ,
        __metadata("design:type", String)
    ], Employee.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: 'phone_number' }) // Map to the 'PHONE_NUMBER' column
        ,
        __metadata("design:type", String)
    ], Employee.prototype, "phoneNumber", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: 'hire_date' }) // Map to the 'HIRE_DATE' column
        ,
        __metadata("design:type", Date)
    ], Employee.prototype, "hireDate", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: 'job_id' }) // Map to the 'JOB_ID' column
        ,
        __metadata("design:type", String)
    ], Employee.prototype, "jobId", void 0);
    __decorate([
        (0, typeorm_1.Column)() // No need to specify the name as it matches the column name 'SALARY'
        ,
        __metadata("design:type", Number)
    ], Employee.prototype, "salary", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: 'commission_pct' }) // Map to the 'COMMISSION_PCT' column
        ,
        __metadata("design:type", Number)
    ], Employee.prototype, "commissionPct", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: 'manager_id' }) // Map to the 'MANAGER_ID' column
        ,
        __metadata("design:type", Number)
    ], Employee.prototype, "managerId", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: 'department_id' }) // Map to the 'DEPARTMENT_ID' column
        ,
        __metadata("design:type", Number)
    ], Employee.prototype, "departmentId", void 0);
    Employee = __decorate([
        (0, typeorm_1.Entity)({ name: 'employees' }) // Specify the table name
    ], Employee);
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map