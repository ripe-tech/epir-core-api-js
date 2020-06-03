import { API as BaseAPI, mix, load, conf } from "yonius";
import { OrderAPI } from "./order";

const EPIR_CORE_BASE_URL = "https://epir-core.platforme.com/api/v1/";

export class API extends mix(BaseAPI).with(OrderAPI) {
    constructor(kwargs = {}) {
        super(kwargs);
        this.baseUrl = conf("EPIR_CORE_BASE_URL", EPIR_CORE_BASE_URL);
        this.token = conf("EPIR_CORE_TOKEN", null);
        this.baseUrl = kwargs.baseUrl === undefined ? this.baseUrl : kwargs.baseUrl;
        this.token = kwargs.token === undefined ? this.token : kwargs.token;
    }

    static async load() {
        await load();
    }

    async build(method, url, options = {}) {
        await super.build(method, url, options);
        options.headers = options.params !== undefined ? options.headers : {};
        options.kwargs = options.kwargs !== undefined ? options.kwargs : {};
        const auth = options.kwargs.auth === undefined ? true : options.kwargs.auth;
        delete options.kwargs.auth;
        if (auth) {
            options.headers.Authorization = `Bearer ${this.token}`;
        }
    }

    async info() {
        const url = this.baseUrl + `info`;
        const contents = await this.get(url);
        return contents;
    }
}

export default API;
