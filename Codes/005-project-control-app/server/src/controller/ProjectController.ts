import type { Request, Response } from "express";
import type { Prisma } from "../generated/prisma/client.js";
import { prisma } from "../repository/prisma.js";
import type Controller from "./inter.js";

export default class ProjectController implements Controller<Prisma.ProjectModel> {

    async getAll(request : Request, response: Response): Promise<Prisma.ProjectModel[]> {

        return prisma.project.findMany();
    }

     async create(request : Request, response: Response): Promise<Prisma.ProjectModel> {

        const { name } = request.body

        return prisma.project.create({
            data: {
                name
            }
        })

    }
}