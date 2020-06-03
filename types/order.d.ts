export interface Order {
    readonly number: number,
    readonly ff_order_id: string,
    readonly [index: string]: any;
}

export declare class OrderAPI {
    getOrder(number: number): Order;
    reportOrder(number: number): Blob;
}
