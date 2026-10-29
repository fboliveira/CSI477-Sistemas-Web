import type { Request, Response } from "express";

export default interface Controller<T> {

    getAll(request : Request, response: Response): Promise<T[]>
    create(request : Request, response: Response) : Promise<T>;

}