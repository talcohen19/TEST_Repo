// src/entities/Employee.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'employees' }) // Specify the table name
export class Employee {
  @PrimaryGeneratedColumn({ name: 'employee_id' }) // Map to the 'EMPLOYEE_ID' column
  employeeId: number;

  @Column({ name: 'first_name' }) // Map to the 'FIRST_NAME' column
  firstName: string;

  @Column({ name: 'last_name' }) // Map to the 'LAST_NAME' column
  lastName: string;

  @Column() // No need to specify the name as it matches the column name 'EMAIL'
  email: string;

  @Column({ name: 'phone_number' }) // Map to the 'PHONE_NUMBER' column
  phoneNumber: string;

  @Column({ name: 'hire_date' }) // Map to the 'HIRE_DATE' column
  hireDate: Date;

  @Column({ name: 'job_id' }) // Map to the 'JOB_ID' column
  jobId: string;

  @Column() // No need to specify the name as it matches the column name 'SALARY'
  salary: number;

  @Column({ name: 'commission_pct' }) // Map to the 'COMMISSION_PCT' column
  commissionPct: number;

  @Column({ name: 'manager_id' }) // Map to the 'MANAGER_ID' column
  managerId: number;

  @Column({ name: 'department_id' }) // Map to the 'DEPARTMENT_ID' column
  departmentId: number;
}
