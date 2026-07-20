import type { BaseInterface } from "./base";
import type { ProjectInterface } from "./projects";

interface TaskInterface extends BaseInterface {

    description: string
    project: ProjectInterface

}

export { type TaskInterface }