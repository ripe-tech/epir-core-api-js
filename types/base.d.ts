import { OrderAPI } from "./order";

export declare class API extends OrderAPI {
    constructor(kwargs?: object);
    load(): Promise<void>;
    info(): Promise<object>;
}
