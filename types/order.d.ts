export interface Order {
    readonly number: number;
    readonly ff_order_id: string;
    readonly [index: string]: any;
}

export enum ReportFormat {
    pdf = "pdf",
    png = "png",
    jpeg = "jpeg",
}

export declare class OrderAPI {
    getOrder(number: number): Order;
    reportOrder(number: number, format?: keyof typeof ReportFormat): Blob;
}
