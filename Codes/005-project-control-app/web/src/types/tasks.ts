import type { ProjectInterface } from "./projects";

interface TaskInterface {

    id: number;
    description: string;
    done: boolean
    created_at: string;
    updated_at: string;
    project: ProjectInterface
    
}

export { type TaskInterface }