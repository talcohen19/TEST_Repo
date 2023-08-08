import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Employee } from "../entity/employee"

export class EmployeeController {

    private userRepository = AppDataSource.getRepository(Employee)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const employeeId = parseInt(request.params.id)


        const user = await this.userRepository.findOne({
            where: { employeeId }
        })

        if (!user) {
            return "unregistered user"
        }
        return user
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { firstName, lastName, age } = request.body;

        const user = Object.assign(new Employee(), {
            firstName,
            lastName        })

        return this.userRepository.save(user)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const employeeId = parseInt(request.params.id)

        let userToRemove = await this.userRepository.findOneBy({ employeeId })

        if (!userToRemove) {
            return "this user not exist"
        }

        await this.userRepository.remove(userToRemove)

        return "user has been removed"
    }

}