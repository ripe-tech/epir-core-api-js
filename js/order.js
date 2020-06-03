export const OrderAPI = superclass =>
    class extends superclass {
        async getOrder(number) {
            const url = this.baseUrl + `orders/${number}`;
            const contents = await this.get(url);
            return contents;
        }

        async reportOrder(number) {
            const url = this.baseUrl + `orders/${number}/report.pdf`;
            const contents = await this.get(url);
            return contents;
        }
    };

export default ContextAPI;
