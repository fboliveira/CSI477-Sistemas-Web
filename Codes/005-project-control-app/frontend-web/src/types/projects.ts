import type { BaseInterface } from "./base";

// Base: id, timestamp attributes
interface ProjectInterface extends BaseInterface {   
    name: string;
} 

export { type ProjectInterface }