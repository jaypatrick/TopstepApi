/* eslint-disable */
// ReSharper disable InconsistentNaming

import axios, { AxiosError } from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

export module Trading {
namespace Topstep {

export interface IAccountClient {
    /**
     * Searches for accounts based on the provided request.
     * @param request The request containing search criteria.
     * @return The search account response.
     */
    searchAccounts(request: SearchAccountRequest, signal?: AbortSignal): Promise<SwaggerResponse<SearchAccountResponse>>;
}

export class AccountClient implements IAccountClient {
    protected instance: AxiosInstance;
    protected baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {

        this.instance = instance || axios.create();

        this.baseUrl = baseUrl ?? "https://api.topstepx.com";

    }

    /**
     * Searches for accounts based on the provided request.
     * @param request The request containing search criteria.
     * @return The search account response.
     */
    searchAccounts(request: SearchAccountRequest, signal?: AbortSignal): Promise<SwaggerResponse<SearchAccountResponse>> {
        let url_ = this.baseUrl + "/api/Account/search";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processSearchAccounts(_response);
        });
    }

    protected processSearchAccounts(response: AxiosResponse): Promise<SwaggerResponse<SearchAccountResponse>> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (const k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = SearchAccountResponse.fromJS(resultData200, _mappings);
            return Promise.resolve<SwaggerResponse<SearchAccountResponse>>(new SwaggerResponse<SearchAccountResponse>(status, _headers, result200));

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<SwaggerResponse<SearchAccountResponse>>(new SwaggerResponse(status, _headers, null as any));
    }
}

export interface IAuthClient {
    /**
     * Login as the specified user using the specified application.
     * @param request The login request.
     */
    loginApp(request: LoginAppRequest, signal?: AbortSignal): Promise<SwaggerResponse<LoginResponse>>;
    /**
     * Login as the specified user using the specified API key.
     * @param request The login request.
     */
    loginKey(request: LoginApiKeyRequest, signal?: AbortSignal): Promise<SwaggerResponse<LoginResponse>>;
    /**
     * Logs out the current authenticated user.
     */
    logout(signal?: AbortSignal): Promise<SwaggerResponse<LogoutResponse>>;
    /**
     * Validates the current user's session.
     */
    validate(signal?: AbortSignal): Promise<SwaggerResponse<ValidateResponse>>;
}

export class AuthClient implements IAuthClient {
    protected instance: AxiosInstance;
    protected baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {

        this.instance = instance || axios.create();

        this.baseUrl = baseUrl ?? "https://api.topstepx.com";

    }

    /**
     * Login as the specified user using the specified application.
     * @param request The login request.
     */
    loginApp(request: LoginAppRequest, signal?: AbortSignal): Promise<SwaggerResponse<LoginResponse>> {
        let url_ = this.baseUrl + "/api/Auth/loginApp";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processLoginApp(_response);
        });
    }

    protected processLoginApp(response: AxiosResponse): Promise<SwaggerResponse<LoginResponse>> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (const k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = LoginResponse.fromJS(resultData200, _mappings);
            return Promise.resolve<SwaggerResponse<LoginResponse>>(new SwaggerResponse<LoginResponse>(status, _headers, result200));

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<SwaggerResponse<LoginResponse>>(new SwaggerResponse(status, _headers, null as any));
    }

    /**
     * Login as the specified user using the specified API key.
     * @param request The login request.
     */
    loginKey(request: LoginApiKeyRequest, signal?: AbortSignal): Promise<SwaggerResponse<LoginResponse>> {
        let url_ = this.baseUrl + "/api/Auth/loginKey";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processLoginKey(_response);
        });
    }

    protected processLoginKey(response: AxiosResponse): Promise<SwaggerResponse<LoginResponse>> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (const k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = LoginResponse.fromJS(resultData200, _mappings);
            return Promise.resolve<SwaggerResponse<LoginResponse>>(new SwaggerResponse<LoginResponse>(status, _headers, result200));

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<SwaggerResponse<LoginResponse>>(new SwaggerResponse(status, _headers, null as any));
    }

    /**
     * Logs out the current authenticated user.
     */
    logout(signal?: AbortSignal): Promise<SwaggerResponse<LogoutResponse>> {
        let url_ = this.baseUrl + "/api/Auth/logout";
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "POST",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processLogout(_response);
        });
    }

    protected processLogout(response: AxiosResponse): Promise<SwaggerResponse<LogoutResponse>> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (const k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = LogoutResponse.fromJS(resultData200, _mappings);
            return Promise.resolve<SwaggerResponse<LogoutResponse>>(new SwaggerResponse<LogoutResponse>(status, _headers, result200));

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<SwaggerResponse<LogoutResponse>>(new SwaggerResponse(status, _headers, null as any));
    }

    /**
     * Validates the current user's session.
     */
    validate(signal?: AbortSignal): Promise<SwaggerResponse<ValidateResponse>> {
        let url_ = this.baseUrl + "/api/Auth/validate";
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "POST",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processValidate(_response);
        });
    }

    protected processValidate(response: AxiosResponse): Promise<SwaggerResponse<ValidateResponse>> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (const k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = ValidateResponse.fromJS(resultData200, _mappings);
            return Promise.resolve<SwaggerResponse<ValidateResponse>>(new SwaggerResponse<ValidateResponse>(status, _headers, result200));

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<SwaggerResponse<ValidateResponse>>(new SwaggerResponse(status, _headers, null as any));
    }
}

export interface IContractClient {
    /**
     * Searches for contracts based on the provided search criteria.
     * @param request The search criteria for finding contracts.
     * @return A response containing the search results, including any matching contracts.
     */
    searchContracts(request: SearchContractRequest, signal?: AbortSignal): Promise<SwaggerResponse<SearchContractResponse>>;
    /**
     * Searches for a contract by its ID.
     * @param request The request containing the contract ID.
     * @return A response containing the search result, including the matching contract if found.
     */
    searchContractById(request: SearchContractByIdRequest, signal?: AbortSignal): Promise<SwaggerResponse<SearchContractByIdResponse>>;
    /**
     * Lists available contracts based on the provided request parameters.
     * @param request The listing criteria for available contracts.
     * @return A response containing the list of available contracts.
     */
    availableContracts(request: ListAvailableContractRequest, signal?: AbortSignal): Promise<SwaggerResponse<ListAvailableContractResponse>>;
}

export class ContractClient implements IContractClient {
    protected instance: AxiosInstance;
    protected baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {

        this.instance = instance || axios.create();

        this.baseUrl = baseUrl ?? "https://api.topstepx.com";

    }

    /**
     * Searches for contracts based on the provided search criteria.
     * @param request The search criteria for finding contracts.
     * @return A response containing the search results, including any matching contracts.
     */
    searchContracts(request: SearchContractRequest, signal?: AbortSignal): Promise<SwaggerResponse<SearchContractResponse>> {
        let url_ = this.baseUrl + "/api/Contract/search";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processSearchContracts(_response);
        });
    }

    protected processSearchContracts(response: AxiosResponse): Promise<SwaggerResponse<SearchContractResponse>> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (const k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = SearchContractResponse.fromJS(resultData200, _mappings);
            return Promise.resolve<SwaggerResponse<SearchContractResponse>>(new SwaggerResponse<SearchContractResponse>(status, _headers, result200));

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<SwaggerResponse<SearchContractResponse>>(new SwaggerResponse(status, _headers, null as any));
    }

    /**
     * Searches for a contract by its ID.
     * @param request The request containing the contract ID.
     * @return A response containing the search result, including the matching contract if found.
     */
    searchContractById(request: SearchContractByIdRequest, signal?: AbortSignal): Promise<SwaggerResponse<SearchContractByIdResponse>> {
        let url_ = this.baseUrl + "/api/Contract/searchById";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processSearchContractById(_response);
        });
    }

    protected processSearchContractById(response: AxiosResponse): Promise<SwaggerResponse<SearchContractByIdResponse>> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (const k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = SearchContractByIdResponse.fromJS(resultData200, _mappings);
            return Promise.resolve<SwaggerResponse<SearchContractByIdResponse>>(new SwaggerResponse<SearchContractByIdResponse>(status, _headers, result200));

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<SwaggerResponse<SearchContractByIdResponse>>(new SwaggerResponse(status, _headers, null as any));
    }

    /**
     * Lists available contracts based on the provided request parameters.
     * @param request The listing criteria for available contracts.
     * @return A response containing the list of available contracts.
     */
    availableContracts(request: ListAvailableContractRequest, signal?: AbortSignal): Promise<SwaggerResponse<ListAvailableContractResponse>> {
        let url_ = this.baseUrl + "/api/Contract/available";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processAvailableContracts(_response);
        });
    }

    protected processAvailableContracts(response: AxiosResponse): Promise<SwaggerResponse<ListAvailableContractResponse>> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (const k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = ListAvailableContractResponse.fromJS(resultData200, _mappings);
            return Promise.resolve<SwaggerResponse<ListAvailableContractResponse>>(new SwaggerResponse<ListAvailableContractResponse>(status, _headers, result200));

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<SwaggerResponse<ListAvailableContractResponse>>(new SwaggerResponse(status, _headers, null as any));
    }
}

export interface IHistoryClient {
    /**
     * Retrieves historical bars based on the specified request parameters.
     * @param request The request containing parameters for retrieving historical bars.
     * @return The response with the retrieved bars.
     */
    getBars(request: RetrieveBarRequest, signal?: AbortSignal): Promise<SwaggerResponse<RetrieveBarResponse>>;
}

export class HistoryClient implements IHistoryClient {
    protected instance: AxiosInstance;
    protected baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {

        this.instance = instance || axios.create();

        this.baseUrl = baseUrl ?? "https://api.topstepx.com";

    }

    /**
     * Retrieves historical bars based on the specified request parameters.
     * @param request The request containing parameters for retrieving historical bars.
     * @return The response with the retrieved bars.
     */
    getBars(request: RetrieveBarRequest, signal?: AbortSignal): Promise<SwaggerResponse<RetrieveBarResponse>> {
        let url_ = this.baseUrl + "/api/History/retrieveBars";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processGetBars(_response);
        });
    }

    protected processGetBars(response: AxiosResponse): Promise<SwaggerResponse<RetrieveBarResponse>> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (const k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = RetrieveBarResponse.fromJS(resultData200, _mappings);
            return Promise.resolve<SwaggerResponse<RetrieveBarResponse>>(new SwaggerResponse<RetrieveBarResponse>(status, _headers, result200));

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<SwaggerResponse<RetrieveBarResponse>>(new SwaggerResponse(status, _headers, null as any));
    }
}

export interface IOrderClient {
    /**
     * Searches for orders based on the provided request.
     * @param request A request containing search criteria.
     * @return A response with search results.
     */
    searchOrders(request: SearchOrderRequest, signal?: AbortSignal): Promise<SwaggerResponse<SearchOrderResponse>>;
    /**
     * Searches for open (working/active) orders based on the provided request.
     * @param request A request containing search criteria.
     * @return A response with search results.
     */
    searchOpenOrders(request: SearchOpenOrderRequest, signal?: AbortSignal): Promise<SwaggerResponse<SearchOrderResponse>>;
    /**
     * Places a new order based on the provided request.
     * @param request A request containing order details.
     * @return A response with order placement details.
     */
    placeOrder(request: PlaceOrderRequest, signal?: AbortSignal): Promise<SwaggerResponse<PlaceOrderResponse>>;
    /**
     * Cancels an existing order based on the provided request.
     * @param request A request containing order cancellation details.
     * @return A response with order cancellation details.
     */
    cancelOrder(request: CancelOrderRequest, signal?: AbortSignal): Promise<SwaggerResponse<CancelOrderResponse>>;
    /**
     * Modifies an existing order based on the provided request.
     * @param request A request containing order modification details.
     * @return A response with order modification details.
     */
    modifyOrder(request: ModifyOrderRequest, signal?: AbortSignal): Promise<SwaggerResponse<ModifyOrderResponse>>;
}

export class OrderClient implements IOrderClient {
    protected instance: AxiosInstance;
    protected baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {

        this.instance = instance || axios.create();

        this.baseUrl = baseUrl ?? "https://api.topstepx.com";

    }

    /**
     * Searches for orders based on the provided request.
     * @param request A request containing search criteria.
     * @return A response with search results.
     */
    searchOrders(request: SearchOrderRequest, signal?: AbortSignal): Promise<SwaggerResponse<SearchOrderResponse>> {
        let url_ = this.baseUrl + "/api/Order/search";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processSearchOrders(_response);
        });
    }

    protected processSearchOrders(response: AxiosResponse): Promise<SwaggerResponse<SearchOrderResponse>> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (const k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = SearchOrderResponse.fromJS(resultData200, _mappings);
            return Promise.resolve<SwaggerResponse<SearchOrderResponse>>(new SwaggerResponse<SearchOrderResponse>(status, _headers, result200));

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<SwaggerResponse<SearchOrderResponse>>(new SwaggerResponse(status, _headers, null as any));
    }

    /**
     * Searches for open (working/active) orders based on the provided request.
     * @param request A request containing search criteria.
     * @return A response with search results.
     */
    searchOpenOrders(request: SearchOpenOrderRequest, signal?: AbortSignal): Promise<SwaggerResponse<SearchOrderResponse>> {
        let url_ = this.baseUrl + "/api/Order/searchOpen";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processSearchOpenOrders(_response);
        });
    }

    protected processSearchOpenOrders(response: AxiosResponse): Promise<SwaggerResponse<SearchOrderResponse>> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (const k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = SearchOrderResponse.fromJS(resultData200, _mappings);
            return Promise.resolve<SwaggerResponse<SearchOrderResponse>>(new SwaggerResponse<SearchOrderResponse>(status, _headers, result200));

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<SwaggerResponse<SearchOrderResponse>>(new SwaggerResponse(status, _headers, null as any));
    }

    /**
     * Places a new order based on the provided request.
     * @param request A request containing order details.
     * @return A response with order placement details.
     */
    placeOrder(request: PlaceOrderRequest, signal?: AbortSignal): Promise<SwaggerResponse<PlaceOrderResponse>> {
        let url_ = this.baseUrl + "/api/Order/place";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processPlaceOrder(_response);
        });
    }

    protected processPlaceOrder(response: AxiosResponse): Promise<SwaggerResponse<PlaceOrderResponse>> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (const k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = PlaceOrderResponse.fromJS(resultData200, _mappings);
            return Promise.resolve<SwaggerResponse<PlaceOrderResponse>>(new SwaggerResponse<PlaceOrderResponse>(status, _headers, result200));

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<SwaggerResponse<PlaceOrderResponse>>(new SwaggerResponse(status, _headers, null as any));
    }

    /**
     * Cancels an existing order based on the provided request.
     * @param request A request containing order cancellation details.
     * @return A response with order cancellation details.
     */
    cancelOrder(request: CancelOrderRequest, signal?: AbortSignal): Promise<SwaggerResponse<CancelOrderResponse>> {
        let url_ = this.baseUrl + "/api/Order/cancel";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processCancelOrder(_response);
        });
    }

    protected processCancelOrder(response: AxiosResponse): Promise<SwaggerResponse<CancelOrderResponse>> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (const k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = CancelOrderResponse.fromJS(resultData200, _mappings);
            return Promise.resolve<SwaggerResponse<CancelOrderResponse>>(new SwaggerResponse<CancelOrderResponse>(status, _headers, result200));

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<SwaggerResponse<CancelOrderResponse>>(new SwaggerResponse(status, _headers, null as any));
    }

    /**
     * Modifies an existing order based on the provided request.
     * @param request A request containing order modification details.
     * @return A response with order modification details.
     */
    modifyOrder(request: ModifyOrderRequest, signal?: AbortSignal): Promise<SwaggerResponse<ModifyOrderResponse>> {
        let url_ = this.baseUrl + "/api/Order/modify";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processModifyOrder(_response);
        });
    }

    protected processModifyOrder(response: AxiosResponse): Promise<SwaggerResponse<ModifyOrderResponse>> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (const k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = ModifyOrderResponse.fromJS(resultData200, _mappings);
            return Promise.resolve<SwaggerResponse<ModifyOrderResponse>>(new SwaggerResponse<ModifyOrderResponse>(status, _headers, result200));

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<SwaggerResponse<ModifyOrderResponse>>(new SwaggerResponse(status, _headers, null as any));
    }
}

export interface IPositionClient {
    /**
     * Searches for open positions based on the provided request.
     * @param request A request containing search criteria.
     * @return A response with search results.
     */
    searchOpenPositions(request: SearchPositionRequest, signal?: AbortSignal): Promise<SwaggerResponse<SearchPositionResponse>>;
    /**
     * Closes a contract position based on the provided request.
     * @param request A request containing the account ID and contract ID to close.
     * @return A response indicating the success or failure of the close operation.
     */
    closeContractPosition(request: CloseContractPositionRequest, signal?: AbortSignal): Promise<SwaggerResponse<ClosePositionResponse>>;
    /**
     * Partially closes a contract position based on the provided request.
     * @param request A request containing the account ID, contract ID, and size to close.
     * @return A response indicating the success or failure of the partial close operation.
     */
    partialCloseContractPosition(request: PartialCloseContractPositionRequest, signal?: AbortSignal): Promise<SwaggerResponse<PartialClosePositionResponse>>;
}

export class PositionClient implements IPositionClient {
    protected instance: AxiosInstance;
    protected baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {

        this.instance = instance || axios.create();

        this.baseUrl = baseUrl ?? "https://api.topstepx.com";

    }

    /**
     * Searches for open positions based on the provided request.
     * @param request A request containing search criteria.
     * @return A response with search results.
     */
    searchOpenPositions(request: SearchPositionRequest, signal?: AbortSignal): Promise<SwaggerResponse<SearchPositionResponse>> {
        let url_ = this.baseUrl + "/api/Position/searchOpen";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processSearchOpenPositions(_response);
        });
    }

    protected processSearchOpenPositions(response: AxiosResponse): Promise<SwaggerResponse<SearchPositionResponse>> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (const k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = SearchPositionResponse.fromJS(resultData200, _mappings);
            return Promise.resolve<SwaggerResponse<SearchPositionResponse>>(new SwaggerResponse<SearchPositionResponse>(status, _headers, result200));

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<SwaggerResponse<SearchPositionResponse>>(new SwaggerResponse(status, _headers, null as any));
    }

    /**
     * Closes a contract position based on the provided request.
     * @param request A request containing the account ID and contract ID to close.
     * @return A response indicating the success or failure of the close operation.
     */
    closeContractPosition(request: CloseContractPositionRequest, signal?: AbortSignal): Promise<SwaggerResponse<ClosePositionResponse>> {
        let url_ = this.baseUrl + "/api/Position/closeContract";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processCloseContractPosition(_response);
        });
    }

    protected processCloseContractPosition(response: AxiosResponse): Promise<SwaggerResponse<ClosePositionResponse>> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (const k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = ClosePositionResponse.fromJS(resultData200, _mappings);
            return Promise.resolve<SwaggerResponse<ClosePositionResponse>>(new SwaggerResponse<ClosePositionResponse>(status, _headers, result200));

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<SwaggerResponse<ClosePositionResponse>>(new SwaggerResponse(status, _headers, null as any));
    }

    /**
     * Partially closes a contract position based on the provided request.
     * @param request A request containing the account ID, contract ID, and size to close.
     * @return A response indicating the success or failure of the partial close operation.
     */
    partialCloseContractPosition(request: PartialCloseContractPositionRequest, signal?: AbortSignal): Promise<SwaggerResponse<PartialClosePositionResponse>> {
        let url_ = this.baseUrl + "/api/Position/partialCloseContract";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processPartialCloseContractPosition(_response);
        });
    }

    protected processPartialCloseContractPosition(response: AxiosResponse): Promise<SwaggerResponse<PartialClosePositionResponse>> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (const k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = PartialClosePositionResponse.fromJS(resultData200, _mappings);
            return Promise.resolve<SwaggerResponse<PartialClosePositionResponse>>(new SwaggerResponse<PartialClosePositionResponse>(status, _headers, result200));

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<SwaggerResponse<PartialClosePositionResponse>>(new SwaggerResponse(status, _headers, null as any));
    }
}

export interface IStatusClient {
    /**
     * Handles the ping request to check the status of the API.
     * @return Returns a "pong" to indicate the API is responsive.
     */
    ping(signal?: AbortSignal): Promise<SwaggerResponse<string>>;
}

export class StatusClient implements IStatusClient {
    protected instance: AxiosInstance;
    protected baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {

        this.instance = instance || axios.create();

        this.baseUrl = baseUrl ?? "https://api.topstepx.com";

    }

    /**
     * Handles the ping request to check the status of the API.
     * @return Returns a "pong" to indicate the API is responsive.
     */
    ping(signal?: AbortSignal): Promise<SwaggerResponse<string>> {
        let url_ = this.baseUrl + "/api/Status/ping";
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processPing(_response);
        });
    }

    protected processPing(response: AxiosResponse): Promise<SwaggerResponse<string>> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (const k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
                result200 = resultData200 !== undefined ? resultData200 : null as any;
    
            return Promise.resolve<SwaggerResponse<string>>(new SwaggerResponse<string>(status, _headers, result200));

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<SwaggerResponse<string>>(new SwaggerResponse(status, _headers, null as any));
    }
}

export interface ITradeClient {
    /**
     * Searches for half-turn trades based on the provided request parameters.
     * @param request A request containing search criteria.
     * @return A response with the search results.
     */
    searchHalfTurnTrades(request: SearchTradeRequest, signal?: AbortSignal): Promise<SwaggerResponse<SearchHalfTradeResponse>>;
}

export class TradeClient implements ITradeClient {
    protected instance: AxiosInstance;
    protected baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {

        this.instance = instance || axios.create();

        this.baseUrl = baseUrl ?? "https://api.topstepx.com";

    }

    /**
     * Searches for half-turn trades based on the provided request parameters.
     * @param request A request containing search criteria.
     * @return A response with the search results.
     */
    searchHalfTurnTrades(request: SearchTradeRequest, signal?: AbortSignal): Promise<SwaggerResponse<SearchHalfTradeResponse>> {
        let url_ = this.baseUrl + "/api/Trade/search";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processSearchHalfTurnTrades(_response);
        });
    }

    protected processSearchHalfTurnTrades(response: AxiosResponse): Promise<SwaggerResponse<SearchHalfTradeResponse>> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (const k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = SearchHalfTradeResponse.fromJS(resultData200, _mappings);
            return Promise.resolve<SwaggerResponse<SearchHalfTradeResponse>>(new SwaggerResponse<SearchHalfTradeResponse>(status, _headers, result200));

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<SwaggerResponse<SearchHalfTradeResponse>>(new SwaggerResponse(status, _headers, null as any));
    }
}

export class SearchAccountResponse implements ISearchAccountResponse {
    success!: boolean;
    errorCode!: SearchAccountErrorCode;
    errorMessage?: string | undefined;
    accounts?: TradingAccountModel[] | undefined;

    constructor(data?: ISearchAccountResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
            if (data.accounts) {
                this.accounts = [];
                for (let i = 0; i < data.accounts.length; i++) {
                    let item = data.accounts[i];
                    this.accounts[i] = item && !(item as any).toJSON ? new TradingAccountModel(item) : item as TradingAccountModel;
                }
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.success = _data["success"];
            this.errorCode = _data["errorCode"];
            this.errorMessage = _data["errorMessage"];
            if (Array.isArray(_data["accounts"])) {
                this.accounts = [] as any;
                for (let item of _data["accounts"])
                    this.accounts!.push(TradingAccountModel.fromJS(item, _mappings));
            }
        }
    }

    static fromJS(data: any, _mappings?: any): SearchAccountResponse | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<SearchAccountResponse>(data, _mappings, SearchAccountResponse);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["success"] = this.success;
        data["errorCode"] = this.errorCode;
        data["errorMessage"] = this.errorMessage;
        if (Array.isArray(this.accounts)) {
            data["accounts"] = [];
            for (let item of this.accounts)
                data["accounts"].push(item ? item.toJSON() : undefined as any);
        }
        return data;
    }

    clone(): SearchAccountResponse {
        const json = this.toJSON();
        let result = new SearchAccountResponse();
        result.init(json);
        return result;
    }
}

export interface ISearchAccountResponse {
    success: boolean;
    errorCode: SearchAccountErrorCode;
    errorMessage?: string | undefined;
    accounts?: ITradingAccountModel[] | undefined;
}

/** 0 = Success */
export enum SearchAccountErrorCode {
    Success = 0,
}

export class TradingAccountModel implements ITradingAccountModel {
    id!: number;
    name!: string;
    balance!: number;
    canTrade!: boolean;
    isVisible!: boolean;
    simulated!: boolean;

    constructor(data?: ITradingAccountModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.balance = _data["balance"];
            this.canTrade = _data["canTrade"];
            this.isVisible = _data["isVisible"];
            this.simulated = _data["simulated"];
        }
    }

    static fromJS(data: any, _mappings?: any): TradingAccountModel | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<TradingAccountModel>(data, _mappings, TradingAccountModel);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["balance"] = this.balance;
        data["canTrade"] = this.canTrade;
        data["isVisible"] = this.isVisible;
        data["simulated"] = this.simulated;
        return data;
    }

    clone(): TradingAccountModel {
        const json = this.toJSON();
        let result = new TradingAccountModel();
        result.init(json);
        return result;
    }
}

export interface ITradingAccountModel {
    id: number;
    name: string;
    balance: number;
    canTrade: boolean;
    isVisible: boolean;
    simulated: boolean;
}

export class SearchAccountRequest implements ISearchAccountRequest {
    onlyActiveAccounts!: boolean;

    constructor(data?: ISearchAccountRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.onlyActiveAccounts = _data["onlyActiveAccounts"];
        }
    }

    static fromJS(data: any, _mappings?: any): SearchAccountRequest | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<SearchAccountRequest>(data, _mappings, SearchAccountRequest);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["onlyActiveAccounts"] = this.onlyActiveAccounts;
        return data;
    }

    clone(): SearchAccountRequest {
        const json = this.toJSON();
        let result = new SearchAccountRequest();
        result.init(json);
        return result;
    }
}

export interface ISearchAccountRequest {
    onlyActiveAccounts: boolean;
}

export class LoginResponse implements ILoginResponse {
    success!: boolean;
    errorCode!: LoginErrorCode;
    errorMessage?: string | undefined;
    token?: string | undefined;

    constructor(data?: ILoginResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.success = _data["success"];
            this.errorCode = _data["errorCode"];
            this.errorMessage = _data["errorMessage"];
            this.token = _data["token"];
        }
    }

    static fromJS(data: any, _mappings?: any): LoginResponse | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<LoginResponse>(data, _mappings, LoginResponse);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["success"] = this.success;
        data["errorCode"] = this.errorCode;
        data["errorMessage"] = this.errorMessage;
        data["token"] = this.token;
        return data;
    }

    clone(): LoginResponse {
        const json = this.toJSON();
        let result = new LoginResponse();
        result.init(json);
        return result;
    }
}

export interface ILoginResponse {
    success: boolean;
    errorCode: LoginErrorCode;
    errorMessage?: string | undefined;
    token?: string | undefined;
}

/** 0 = Success 1 = UserNotFound 2 = PasswordVerificationFailed 3 = InvalidCredentials 4 = AppNotFound 5 = AppVerificationFailed 6 = InvalidDevice 7 = AgreementsNotSigned 8 = UnknownError 9 = ApiSubscriptionNotFound 10 = ApiKeyAuthenticationDisabled */
export enum LoginErrorCode {
    Success = 0,
    UserNotFound = 1,
    PasswordVerificationFailed = 2,
    InvalidCredentials = 3,
    AppNotFound = 4,
    AppVerificationFailed = 5,
    InvalidDevice = 6,
    AgreementsNotSigned = 7,
    UnknownError = 8,
    ApiSubscriptionNotFound = 9,
    ApiKeyAuthenticationDisabled = 10,
}

export class LoginAppRequest implements ILoginAppRequest {
    userName!: string;
    password!: string;
    deviceId!: string;
    appId!: string;
    verifyKey!: string;

    constructor(data?: ILoginAppRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.userName = _data["userName"];
            this.password = _data["password"];
            this.deviceId = _data["deviceId"];
            this.appId = _data["appId"];
            this.verifyKey = _data["verifyKey"];
        }
    }

    static fromJS(data: any, _mappings?: any): LoginAppRequest | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<LoginAppRequest>(data, _mappings, LoginAppRequest);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userName"] = this.userName;
        data["password"] = this.password;
        data["deviceId"] = this.deviceId;
        data["appId"] = this.appId;
        data["verifyKey"] = this.verifyKey;
        return data;
    }

    clone(): LoginAppRequest {
        const json = this.toJSON();
        let result = new LoginAppRequest();
        result.init(json);
        return result;
    }
}

export interface ILoginAppRequest {
    userName: string;
    password: string;
    deviceId: string;
    appId: string;
    verifyKey: string;
}

export class LoginApiKeyRequest implements ILoginApiKeyRequest {
    userName!: string;
    apiKey!: string;

    constructor(data?: ILoginApiKeyRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.userName = _data["userName"];
            this.apiKey = _data["apiKey"];
        }
    }

    static fromJS(data: any, _mappings?: any): LoginApiKeyRequest | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<LoginApiKeyRequest>(data, _mappings, LoginApiKeyRequest);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userName"] = this.userName;
        data["apiKey"] = this.apiKey;
        return data;
    }

    clone(): LoginApiKeyRequest {
        const json = this.toJSON();
        let result = new LoginApiKeyRequest();
        result.init(json);
        return result;
    }
}

export interface ILoginApiKeyRequest {
    userName: string;
    apiKey: string;
}

export class LogoutResponse implements ILogoutResponse {
    success!: boolean;
    errorCode!: LogoutErrorCode;
    errorMessage?: string | undefined;

    constructor(data?: ILogoutResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.success = _data["success"];
            this.errorCode = _data["errorCode"];
            this.errorMessage = _data["errorMessage"];
        }
    }

    static fromJS(data: any, _mappings?: any): LogoutResponse | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<LogoutResponse>(data, _mappings, LogoutResponse);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["success"] = this.success;
        data["errorCode"] = this.errorCode;
        data["errorMessage"] = this.errorMessage;
        return data;
    }

    clone(): LogoutResponse {
        const json = this.toJSON();
        let result = new LogoutResponse();
        result.init(json);
        return result;
    }
}

export interface ILogoutResponse {
    success: boolean;
    errorCode: LogoutErrorCode;
    errorMessage?: string | undefined;
}

/** 0 = Success 1 = InvalidSession 2 = UnknownError */
export enum LogoutErrorCode {
    Success = 0,
    InvalidSession = 1,
    UnknownError = 2,
}

export class ValidateResponse implements IValidateResponse {
    success!: boolean;
    errorCode!: ValidateErrorCode;
    errorMessage?: string | undefined;
    newToken?: string | undefined;

    constructor(data?: IValidateResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.success = _data["success"];
            this.errorCode = _data["errorCode"];
            this.errorMessage = _data["errorMessage"];
            this.newToken = _data["newToken"];
        }
    }

    static fromJS(data: any, _mappings?: any): ValidateResponse | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<ValidateResponse>(data, _mappings, ValidateResponse);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["success"] = this.success;
        data["errorCode"] = this.errorCode;
        data["errorMessage"] = this.errorMessage;
        data["newToken"] = this.newToken;
        return data;
    }

    clone(): ValidateResponse {
        const json = this.toJSON();
        let result = new ValidateResponse();
        result.init(json);
        return result;
    }
}

export interface IValidateResponse {
    success: boolean;
    errorCode: ValidateErrorCode;
    errorMessage?: string | undefined;
    newToken?: string | undefined;
}

/** 0 = Success 1 = InvalidSession 2 = SessionNotFound 3 = ExpiredToken 4 = UnknownError */
export enum ValidateErrorCode {
    Success = 0,
    InvalidSession = 1,
    SessionNotFound = 2,
    ExpiredToken = 3,
    UnknownError = 4,
}

export class SearchContractResponse implements ISearchContractResponse {
    success!: boolean;
    errorCode!: SearchContractErrorCode;
    errorMessage?: string | undefined;
    contracts?: ContractModel[] | undefined;

    constructor(data?: ISearchContractResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
            if (data.contracts) {
                this.contracts = [];
                for (let i = 0; i < data.contracts.length; i++) {
                    let item = data.contracts[i];
                    this.contracts[i] = item && !(item as any).toJSON ? new ContractModel(item) : item as ContractModel;
                }
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.success = _data["success"];
            this.errorCode = _data["errorCode"];
            this.errorMessage = _data["errorMessage"];
            if (Array.isArray(_data["contracts"])) {
                this.contracts = [] as any;
                for (let item of _data["contracts"])
                    this.contracts!.push(ContractModel.fromJS(item, _mappings));
            }
        }
    }

    static fromJS(data: any, _mappings?: any): SearchContractResponse | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<SearchContractResponse>(data, _mappings, SearchContractResponse);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["success"] = this.success;
        data["errorCode"] = this.errorCode;
        data["errorMessage"] = this.errorMessage;
        if (Array.isArray(this.contracts)) {
            data["contracts"] = [];
            for (let item of this.contracts)
                data["contracts"].push(item ? item.toJSON() : undefined as any);
        }
        return data;
    }

    clone(): SearchContractResponse {
        const json = this.toJSON();
        let result = new SearchContractResponse();
        result.init(json);
        return result;
    }
}

export interface ISearchContractResponse {
    success: boolean;
    errorCode: SearchContractErrorCode;
    errorMessage?: string | undefined;
    contracts?: IContractModel[] | undefined;
}

/** 0 = Success */
export enum SearchContractErrorCode {
    Success = 0,
}

export class ContractModel implements IContractModel {
    id!: string;
    name!: string;
    description!: string;
    tickSize!: number;
    tickValue!: number;
    activeContract!: boolean;
    symbolId!: string;

    constructor(data?: IContractModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.description = _data["description"];
            this.tickSize = _data["tickSize"];
            this.tickValue = _data["tickValue"];
            this.activeContract = _data["activeContract"];
            this.symbolId = _data["symbolId"];
        }
    }

    static fromJS(data: any, _mappings?: any): ContractModel | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<ContractModel>(data, _mappings, ContractModel);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["description"] = this.description;
        data["tickSize"] = this.tickSize;
        data["tickValue"] = this.tickValue;
        data["activeContract"] = this.activeContract;
        data["symbolId"] = this.symbolId;
        return data;
    }

    clone(): ContractModel {
        const json = this.toJSON();
        let result = new ContractModel();
        result.init(json);
        return result;
    }
}

export interface IContractModel {
    id: string;
    name: string;
    description: string;
    tickSize: number;
    tickValue: number;
    activeContract: boolean;
    symbolId: string;
}

export class SearchContractRequest implements ISearchContractRequest {
    searchText?: string | undefined;
    live!: boolean;

    constructor(data?: ISearchContractRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.searchText = _data["searchText"];
            this.live = _data["live"];
        }
    }

    static fromJS(data: any, _mappings?: any): SearchContractRequest | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<SearchContractRequest>(data, _mappings, SearchContractRequest);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["searchText"] = this.searchText;
        data["live"] = this.live;
        return data;
    }

    clone(): SearchContractRequest {
        const json = this.toJSON();
        let result = new SearchContractRequest();
        result.init(json);
        return result;
    }
}

export interface ISearchContractRequest {
    searchText?: string | undefined;
    live: boolean;
}

export class SearchContractByIdResponse implements ISearchContractByIdResponse {
    success!: boolean;
    errorCode!: SearchContractByIdErrorCode;
    errorMessage?: string | undefined;
    contract?: ContractModel | undefined;

    constructor(data?: ISearchContractByIdResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
            this.contract = data.contract && !(data.contract as any).toJSON ? new ContractModel(data.contract) : this.contract as ContractModel;
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.success = _data["success"];
            this.errorCode = _data["errorCode"];
            this.errorMessage = _data["errorMessage"];
            this.contract = _data["contract"] ? ContractModel.fromJS(_data["contract"], _mappings) : undefined as any;
        }
    }

    static fromJS(data: any, _mappings?: any): SearchContractByIdResponse | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<SearchContractByIdResponse>(data, _mappings, SearchContractByIdResponse);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["success"] = this.success;
        data["errorCode"] = this.errorCode;
        data["errorMessage"] = this.errorMessage;
        data["contract"] = this.contract ? this.contract.toJSON() : undefined as any;
        return data;
    }

    clone(): SearchContractByIdResponse {
        const json = this.toJSON();
        let result = new SearchContractByIdResponse();
        result.init(json);
        return result;
    }
}

export interface ISearchContractByIdResponse {
    success: boolean;
    errorCode: SearchContractByIdErrorCode;
    errorMessage?: string | undefined;
    contract?: IContractModel | undefined;
}

/** 0 = Success 1 = ContractNotFound */
export enum SearchContractByIdErrorCode {
    Success = 0,
    ContractNotFound = 1,
}

export class SearchContractByIdRequest implements ISearchContractByIdRequest {
    contractId!: string;

    constructor(data?: ISearchContractByIdRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.contractId = _data["contractId"];
        }
    }

    static fromJS(data: any, _mappings?: any): SearchContractByIdRequest | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<SearchContractByIdRequest>(data, _mappings, SearchContractByIdRequest);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["contractId"] = this.contractId;
        return data;
    }

    clone(): SearchContractByIdRequest {
        const json = this.toJSON();
        let result = new SearchContractByIdRequest();
        result.init(json);
        return result;
    }
}

export interface ISearchContractByIdRequest {
    contractId: string;
}

export class ListAvailableContractResponse implements IListAvailableContractResponse {
    success!: boolean;
    errorCode!: ListAvailableContractErrorCode;
    errorMessage?: string | undefined;
    contracts?: ContractModel[] | undefined;

    constructor(data?: IListAvailableContractResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
            if (data.contracts) {
                this.contracts = [];
                for (let i = 0; i < data.contracts.length; i++) {
                    let item = data.contracts[i];
                    this.contracts[i] = item && !(item as any).toJSON ? new ContractModel(item) : item as ContractModel;
                }
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.success = _data["success"];
            this.errorCode = _data["errorCode"];
            this.errorMessage = _data["errorMessage"];
            if (Array.isArray(_data["contracts"])) {
                this.contracts = [] as any;
                for (let item of _data["contracts"])
                    this.contracts!.push(ContractModel.fromJS(item, _mappings));
            }
        }
    }

    static fromJS(data: any, _mappings?: any): ListAvailableContractResponse | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<ListAvailableContractResponse>(data, _mappings, ListAvailableContractResponse);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["success"] = this.success;
        data["errorCode"] = this.errorCode;
        data["errorMessage"] = this.errorMessage;
        if (Array.isArray(this.contracts)) {
            data["contracts"] = [];
            for (let item of this.contracts)
                data["contracts"].push(item ? item.toJSON() : undefined as any);
        }
        return data;
    }

    clone(): ListAvailableContractResponse {
        const json = this.toJSON();
        let result = new ListAvailableContractResponse();
        result.init(json);
        return result;
    }
}

export interface IListAvailableContractResponse {
    success: boolean;
    errorCode: ListAvailableContractErrorCode;
    errorMessage?: string | undefined;
    contracts?: IContractModel[] | undefined;
}

/** 0 = Success */
export enum ListAvailableContractErrorCode {
    Success = 0,
}

export class ListAvailableContractRequest implements IListAvailableContractRequest {
    live!: boolean;

    constructor(data?: IListAvailableContractRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.live = _data["live"];
        }
    }

    static fromJS(data: any, _mappings?: any): ListAvailableContractRequest | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<ListAvailableContractRequest>(data, _mappings, ListAvailableContractRequest);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["live"] = this.live;
        return data;
    }

    clone(): ListAvailableContractRequest {
        const json = this.toJSON();
        let result = new ListAvailableContractRequest();
        result.init(json);
        return result;
    }
}

export interface IListAvailableContractRequest {
    live: boolean;
}

export class RetrieveBarResponse implements IRetrieveBarResponse {
    success!: boolean;
    errorCode!: RetrieveBarErrorCode;
    errorMessage?: string | undefined;
    bars?: AggregateBarModel[] | undefined;

    constructor(data?: IRetrieveBarResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
            if (data.bars) {
                this.bars = [];
                for (let i = 0; i < data.bars.length; i++) {
                    let item = data.bars[i];
                    this.bars[i] = item && !(item as any).toJSON ? new AggregateBarModel(item) : item as AggregateBarModel;
                }
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.success = _data["success"];
            this.errorCode = _data["errorCode"];
            this.errorMessage = _data["errorMessage"];
            if (Array.isArray(_data["bars"])) {
                this.bars = [] as any;
                for (let item of _data["bars"])
                    this.bars!.push(AggregateBarModel.fromJS(item, _mappings));
            }
        }
    }

    static fromJS(data: any, _mappings?: any): RetrieveBarResponse | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<RetrieveBarResponse>(data, _mappings, RetrieveBarResponse);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["success"] = this.success;
        data["errorCode"] = this.errorCode;
        data["errorMessage"] = this.errorMessage;
        if (Array.isArray(this.bars)) {
            data["bars"] = [];
            for (let item of this.bars)
                data["bars"].push(item ? item.toJSON() : undefined as any);
        }
        return data;
    }

    clone(): RetrieveBarResponse {
        const json = this.toJSON();
        let result = new RetrieveBarResponse();
        result.init(json);
        return result;
    }
}

export interface IRetrieveBarResponse {
    success: boolean;
    errorCode: RetrieveBarErrorCode;
    errorMessage?: string | undefined;
    bars?: IAggregateBarModel[] | undefined;
}

/** 0 = Success 1 = ContractNotFound 2 = UnitInvalid 3 = UnitNumberInvalid 4 = LimitInvalid */
export enum RetrieveBarErrorCode {
    Success = 0,
    ContractNotFound = 1,
    UnitInvalid = 2,
    UnitNumberInvalid = 3,
    LimitInvalid = 4,
}

export class AggregateBarModel implements IAggregateBarModel {
    t!: Date;
    o!: number;
    h!: number;
    l!: number;
    c!: number;
    v!: number;

    constructor(data?: IAggregateBarModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.t = _data["t"] ? new Date(_data["t"].toString()) : undefined as any;
            this.o = _data["o"];
            this.h = _data["h"];
            this.l = _data["l"];
            this.c = _data["c"];
            this.v = _data["v"];
        }
    }

    static fromJS(data: any, _mappings?: any): AggregateBarModel | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<AggregateBarModel>(data, _mappings, AggregateBarModel);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["t"] = this.t ? this.t.toISOString() : undefined as any;
        data["o"] = this.o;
        data["h"] = this.h;
        data["l"] = this.l;
        data["c"] = this.c;
        data["v"] = this.v;
        return data;
    }

    clone(): AggregateBarModel {
        const json = this.toJSON();
        let result = new AggregateBarModel();
        result.init(json);
        return result;
    }
}

export interface IAggregateBarModel {
    t: Date;
    o: number;
    h: number;
    l: number;
    c: number;
    v: number;
}

export class RetrieveBarRequest implements IRetrieveBarRequest {
    contractId!: string;
    live!: boolean;
    startTime!: Date;
    endTime!: Date;
    unit!: AggregateBarUnit;
    unitNumber!: number;
    limit!: number;
    includePartialBar!: boolean;

    constructor(data?: IRetrieveBarRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.contractId = _data["contractId"];
            this.live = _data["live"];
            this.startTime = _data["startTime"] ? new Date(_data["startTime"].toString()) : undefined as any;
            this.endTime = _data["endTime"] ? new Date(_data["endTime"].toString()) : undefined as any;
            this.unit = _data["unit"];
            this.unitNumber = _data["unitNumber"];
            this.limit = _data["limit"];
            this.includePartialBar = _data["includePartialBar"];
        }
    }

    static fromJS(data: any, _mappings?: any): RetrieveBarRequest | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<RetrieveBarRequest>(data, _mappings, RetrieveBarRequest);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["contractId"] = this.contractId;
        data["live"] = this.live;
        data["startTime"] = this.startTime ? this.startTime.toISOString() : undefined as any;
        data["endTime"] = this.endTime ? this.endTime.toISOString() : undefined as any;
        data["unit"] = this.unit;
        data["unitNumber"] = this.unitNumber;
        data["limit"] = this.limit;
        data["includePartialBar"] = this.includePartialBar;
        return data;
    }

    clone(): RetrieveBarRequest {
        const json = this.toJSON();
        let result = new RetrieveBarRequest();
        result.init(json);
        return result;
    }
}

export interface IRetrieveBarRequest {
    contractId: string;
    live: boolean;
    startTime: Date;
    endTime: Date;
    unit: AggregateBarUnit;
    unitNumber: number;
    limit: number;
    includePartialBar: boolean;
}

/** 0 = Unspecified 1 = Second 2 = Minute 3 = Hour 4 = Day 5 = Week 6 = Month */
export enum AggregateBarUnit {
    Unspecified = 0,
    Second = 1,
    Minute = 2,
    Hour = 3,
    Day = 4,
    Week = 5,
    Month = 6,
}

export class SearchOrderResponse implements ISearchOrderResponse {
    success!: boolean;
    errorCode!: SearchOrderErrorCode;
    errorMessage?: string | undefined;
    orders?: OrderModel[] | undefined;

    constructor(data?: ISearchOrderResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
            if (data.orders) {
                this.orders = [];
                for (let i = 0; i < data.orders.length; i++) {
                    let item = data.orders[i];
                    this.orders[i] = item && !(item as any).toJSON ? new OrderModel(item) : item as OrderModel;
                }
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.success = _data["success"];
            this.errorCode = _data["errorCode"];
            this.errorMessage = _data["errorMessage"];
            if (Array.isArray(_data["orders"])) {
                this.orders = [] as any;
                for (let item of _data["orders"])
                    this.orders!.push(OrderModel.fromJS(item, _mappings));
            }
        }
    }

    static fromJS(data: any, _mappings?: any): SearchOrderResponse | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<SearchOrderResponse>(data, _mappings, SearchOrderResponse);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["success"] = this.success;
        data["errorCode"] = this.errorCode;
        data["errorMessage"] = this.errorMessage;
        if (Array.isArray(this.orders)) {
            data["orders"] = [];
            for (let item of this.orders)
                data["orders"].push(item ? item.toJSON() : undefined as any);
        }
        return data;
    }

    clone(): SearchOrderResponse {
        const json = this.toJSON();
        let result = new SearchOrderResponse();
        result.init(json);
        return result;
    }
}

export interface ISearchOrderResponse {
    success: boolean;
    errorCode: SearchOrderErrorCode;
    errorMessage?: string | undefined;
    orders?: IOrderModel[] | undefined;
}

/** 0 = Success 1 = AccountNotFound */
export enum SearchOrderErrorCode {
    Success = 0,
    AccountNotFound = 1,
}

export class OrderModel implements IOrderModel {
    id!: number;
    accountId!: number;
    contractId!: string;
    symbolId!: string;
    creationTimestamp!: Date;
    updateTimestamp?: Date | undefined;
    status!: OrderStatus;
    type!: OrderType;
    side!: OrderSide;
    size!: number;
    limitPrice?: number | undefined;
    stopPrice?: number | undefined;
    fillVolume!: number;
    filledPrice?: number | undefined;
    customTag?: string | undefined;

    constructor(data?: IOrderModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.id = _data["id"];
            this.accountId = _data["accountId"];
            this.contractId = _data["contractId"];
            this.symbolId = _data["symbolId"];
            this.creationTimestamp = _data["creationTimestamp"] ? new Date(_data["creationTimestamp"].toString()) : undefined as any;
            this.updateTimestamp = _data["updateTimestamp"] ? new Date(_data["updateTimestamp"].toString()) : undefined as any;
            this.status = _data["status"];
            this.type = _data["type"];
            this.side = _data["side"];
            this.size = _data["size"];
            this.limitPrice = _data["limitPrice"];
            this.stopPrice = _data["stopPrice"];
            this.fillVolume = _data["fillVolume"];
            this.filledPrice = _data["filledPrice"];
            this.customTag = _data["customTag"];
        }
    }

    static fromJS(data: any, _mappings?: any): OrderModel | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<OrderModel>(data, _mappings, OrderModel);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["accountId"] = this.accountId;
        data["contractId"] = this.contractId;
        data["symbolId"] = this.symbolId;
        data["creationTimestamp"] = this.creationTimestamp ? this.creationTimestamp.toISOString() : undefined as any;
        data["updateTimestamp"] = this.updateTimestamp ? this.updateTimestamp.toISOString() : undefined as any;
        data["status"] = this.status;
        data["type"] = this.type;
        data["side"] = this.side;
        data["size"] = this.size;
        data["limitPrice"] = this.limitPrice;
        data["stopPrice"] = this.stopPrice;
        data["fillVolume"] = this.fillVolume;
        data["filledPrice"] = this.filledPrice;
        data["customTag"] = this.customTag;
        return data;
    }

    clone(): OrderModel {
        const json = this.toJSON();
        let result = new OrderModel();
        result.init(json);
        return result;
    }
}

export interface IOrderModel {
    id: number;
    accountId: number;
    contractId: string;
    symbolId: string;
    creationTimestamp: Date;
    updateTimestamp?: Date | undefined;
    status: OrderStatus;
    type: OrderType;
    side: OrderSide;
    size: number;
    limitPrice?: number | undefined;
    stopPrice?: number | undefined;
    fillVolume: number;
    filledPrice?: number | undefined;
    customTag?: string | undefined;
}

/** 0 = None 1 = Open 2 = Filled 3 = Cancelled 4 = Expired 5 = Rejected 6 = Pending */
export enum OrderStatus {
    None = 0,
    Open = 1,
    Filled = 2,
    Cancelled = 3,
    Expired = 4,
    Rejected = 5,
    Pending = 6,
}

/** 0 = Unknown 1 = Limit 2 = Market 3 = StopLimit 4 = Stop 5 = TrailingStop 6 = JoinBid 7 = JoinAsk */
export enum OrderType {
    Unknown = 0,
    Limit = 1,
    Market = 2,
    StopLimit = 3,
    Stop = 4,
    TrailingStop = 5,
    JoinBid = 6,
    JoinAsk = 7,
}

/** 0 = Bid 1 = Ask */
export enum OrderSide {
    Bid = 0,
    Ask = 1,
}

export class SearchOrderRequest implements ISearchOrderRequest {
    accountId!: number;
    startTimestamp!: Date;
    endTimestamp?: Date | undefined;

    constructor(data?: ISearchOrderRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.accountId = _data["accountId"];
            this.startTimestamp = _data["startTimestamp"] ? new Date(_data["startTimestamp"].toString()) : undefined as any;
            this.endTimestamp = _data["endTimestamp"] ? new Date(_data["endTimestamp"].toString()) : undefined as any;
        }
    }

    static fromJS(data: any, _mappings?: any): SearchOrderRequest | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<SearchOrderRequest>(data, _mappings, SearchOrderRequest);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["accountId"] = this.accountId;
        data["startTimestamp"] = this.startTimestamp ? this.startTimestamp.toISOString() : undefined as any;
        data["endTimestamp"] = this.endTimestamp ? this.endTimestamp.toISOString() : undefined as any;
        return data;
    }

    clone(): SearchOrderRequest {
        const json = this.toJSON();
        let result = new SearchOrderRequest();
        result.init(json);
        return result;
    }
}

export interface ISearchOrderRequest {
    accountId: number;
    startTimestamp: Date;
    endTimestamp?: Date | undefined;
}

export class SearchOpenOrderRequest implements ISearchOpenOrderRequest {
    accountId!: number;

    constructor(data?: ISearchOpenOrderRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.accountId = _data["accountId"];
        }
    }

    static fromJS(data: any, _mappings?: any): SearchOpenOrderRequest | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<SearchOpenOrderRequest>(data, _mappings, SearchOpenOrderRequest);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["accountId"] = this.accountId;
        return data;
    }

    clone(): SearchOpenOrderRequest {
        const json = this.toJSON();
        let result = new SearchOpenOrderRequest();
        result.init(json);
        return result;
    }
}

export interface ISearchOpenOrderRequest {
    accountId: number;
}

export class PlaceOrderResponse implements IPlaceOrderResponse {
    success!: boolean;
    errorCode!: PlaceOrderErrorCode;
    errorMessage?: string | undefined;
    orderId?: number | undefined;

    constructor(data?: IPlaceOrderResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.success = _data["success"];
            this.errorCode = _data["errorCode"];
            this.errorMessage = _data["errorMessage"];
            this.orderId = _data["orderId"];
        }
    }

    static fromJS(data: any, _mappings?: any): PlaceOrderResponse | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<PlaceOrderResponse>(data, _mappings, PlaceOrderResponse);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["success"] = this.success;
        data["errorCode"] = this.errorCode;
        data["errorMessage"] = this.errorMessage;
        data["orderId"] = this.orderId;
        return data;
    }

    clone(): PlaceOrderResponse {
        const json = this.toJSON();
        let result = new PlaceOrderResponse();
        result.init(json);
        return result;
    }
}

export interface IPlaceOrderResponse {
    success: boolean;
    errorCode: PlaceOrderErrorCode;
    errorMessage?: string | undefined;
    orderId?: number | undefined;
}

/** 0 = Success 1 = AccountNotFound 2 = OrderRejected 3 = InsufficientFunds 4 = AccountViolation 5 = OutsideTradingHours 6 = OrderPending 7 = UnknownError 8 = ContractNotFound 9 = ContractNotActive 10 = AccountRejected */
export enum PlaceOrderErrorCode {
    Success = 0,
    AccountNotFound = 1,
    OrderRejected = 2,
    InsufficientFunds = 3,
    AccountViolation = 4,
    OutsideTradingHours = 5,
    OrderPending = 6,
    UnknownError = 7,
    ContractNotFound = 8,
    ContractNotActive = 9,
    AccountRejected = 10,
}

export class PlaceOrderRequest implements IPlaceOrderRequest {
    accountId!: number;
    contractId!: string;
    type!: OrderType;
    side!: OrderSide;
    size!: number;
    limitPrice?: number | undefined;
    stopPrice?: number | undefined;
    trailPrice?: number | undefined;
    customTag?: string | undefined;
    linkedOrderId?: number | undefined;

    constructor(data?: IPlaceOrderRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.accountId = _data["accountId"];
            this.contractId = _data["contractId"];
            this.type = _data["type"];
            this.side = _data["side"];
            this.size = _data["size"];
            this.limitPrice = _data["limitPrice"];
            this.stopPrice = _data["stopPrice"];
            this.trailPrice = _data["trailPrice"];
            this.customTag = _data["customTag"];
            this.linkedOrderId = _data["linkedOrderId"];
        }
    }

    static fromJS(data: any, _mappings?: any): PlaceOrderRequest | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<PlaceOrderRequest>(data, _mappings, PlaceOrderRequest);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["accountId"] = this.accountId;
        data["contractId"] = this.contractId;
        data["type"] = this.type;
        data["side"] = this.side;
        data["size"] = this.size;
        data["limitPrice"] = this.limitPrice;
        data["stopPrice"] = this.stopPrice;
        data["trailPrice"] = this.trailPrice;
        data["customTag"] = this.customTag;
        data["linkedOrderId"] = this.linkedOrderId;
        return data;
    }

    clone(): PlaceOrderRequest {
        const json = this.toJSON();
        let result = new PlaceOrderRequest();
        result.init(json);
        return result;
    }
}

export interface IPlaceOrderRequest {
    accountId: number;
    contractId: string;
    type: OrderType;
    side: OrderSide;
    size: number;
    limitPrice?: number | undefined;
    stopPrice?: number | undefined;
    trailPrice?: number | undefined;
    customTag?: string | undefined;
    linkedOrderId?: number | undefined;
}

export class CancelOrderResponse implements ICancelOrderResponse {
    success!: boolean;
    errorCode!: CancelOrderErrorCode;
    errorMessage?: string | undefined;

    constructor(data?: ICancelOrderResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.success = _data["success"];
            this.errorCode = _data["errorCode"];
            this.errorMessage = _data["errorMessage"];
        }
    }

    static fromJS(data: any, _mappings?: any): CancelOrderResponse | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<CancelOrderResponse>(data, _mappings, CancelOrderResponse);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["success"] = this.success;
        data["errorCode"] = this.errorCode;
        data["errorMessage"] = this.errorMessage;
        return data;
    }

    clone(): CancelOrderResponse {
        const json = this.toJSON();
        let result = new CancelOrderResponse();
        result.init(json);
        return result;
    }
}

export interface ICancelOrderResponse {
    success: boolean;
    errorCode: CancelOrderErrorCode;
    errorMessage?: string | undefined;
}

/** 0 = Success 1 = AccountNotFound 2 = OrderNotFound 3 = Rejected 4 = Pending 5 = UnknownError 6 = AccountRejected */
export enum CancelOrderErrorCode {
    Success = 0,
    AccountNotFound = 1,
    OrderNotFound = 2,
    Rejected = 3,
    Pending = 4,
    UnknownError = 5,
    AccountRejected = 6,
}

export class CancelOrderRequest implements ICancelOrderRequest {
    accountId!: number;
    orderId!: number;

    constructor(data?: ICancelOrderRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.accountId = _data["accountId"];
            this.orderId = _data["orderId"];
        }
    }

    static fromJS(data: any, _mappings?: any): CancelOrderRequest | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<CancelOrderRequest>(data, _mappings, CancelOrderRequest);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["accountId"] = this.accountId;
        data["orderId"] = this.orderId;
        return data;
    }

    clone(): CancelOrderRequest {
        const json = this.toJSON();
        let result = new CancelOrderRequest();
        result.init(json);
        return result;
    }
}

export interface ICancelOrderRequest {
    accountId: number;
    orderId: number;
}

export class ModifyOrderResponse implements IModifyOrderResponse {
    success!: boolean;
    errorCode!: ModifyOrderErrorCode;
    errorMessage?: string | undefined;

    constructor(data?: IModifyOrderResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.success = _data["success"];
            this.errorCode = _data["errorCode"];
            this.errorMessage = _data["errorMessage"];
        }
    }

    static fromJS(data: any, _mappings?: any): ModifyOrderResponse | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<ModifyOrderResponse>(data, _mappings, ModifyOrderResponse);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["success"] = this.success;
        data["errorCode"] = this.errorCode;
        data["errorMessage"] = this.errorMessage;
        return data;
    }

    clone(): ModifyOrderResponse {
        const json = this.toJSON();
        let result = new ModifyOrderResponse();
        result.init(json);
        return result;
    }
}

export interface IModifyOrderResponse {
    success: boolean;
    errorCode: ModifyOrderErrorCode;
    errorMessage?: string | undefined;
}

/** 0 = Success 1 = AccountNotFound 2 = OrderNotFound 3 = Rejected 4 = Pending 5 = UnknownError 6 = AccountRejected 7 = ContractNotFound */
export enum ModifyOrderErrorCode {
    Success = 0,
    AccountNotFound = 1,
    OrderNotFound = 2,
    Rejected = 3,
    Pending = 4,
    UnknownError = 5,
    AccountRejected = 6,
    ContractNotFound = 7,
}

export class ModifyOrderRequest implements IModifyOrderRequest {
    accountId!: number;
    orderId!: number;
    size?: number | undefined;
    limitPrice?: number | undefined;
    stopPrice?: number | undefined;
    trailPrice?: number | undefined;

    constructor(data?: IModifyOrderRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.accountId = _data["accountId"];
            this.orderId = _data["orderId"];
            this.size = _data["size"];
            this.limitPrice = _data["limitPrice"];
            this.stopPrice = _data["stopPrice"];
            this.trailPrice = _data["trailPrice"];
        }
    }

    static fromJS(data: any, _mappings?: any): ModifyOrderRequest | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<ModifyOrderRequest>(data, _mappings, ModifyOrderRequest);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["accountId"] = this.accountId;
        data["orderId"] = this.orderId;
        data["size"] = this.size;
        data["limitPrice"] = this.limitPrice;
        data["stopPrice"] = this.stopPrice;
        data["trailPrice"] = this.trailPrice;
        return data;
    }

    clone(): ModifyOrderRequest {
        const json = this.toJSON();
        let result = new ModifyOrderRequest();
        result.init(json);
        return result;
    }
}

export interface IModifyOrderRequest {
    accountId: number;
    orderId: number;
    size?: number | undefined;
    limitPrice?: number | undefined;
    stopPrice?: number | undefined;
    trailPrice?: number | undefined;
}

export class SearchPositionResponse implements ISearchPositionResponse {
    success!: boolean;
    errorCode!: SearchPositionErrorCode;
    errorMessage?: string | undefined;
    positions?: PositionModel[] | undefined;

    constructor(data?: ISearchPositionResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
            if (data.positions) {
                this.positions = [];
                for (let i = 0; i < data.positions.length; i++) {
                    let item = data.positions[i];
                    this.positions[i] = item && !(item as any).toJSON ? new PositionModel(item) : item as PositionModel;
                }
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.success = _data["success"];
            this.errorCode = _data["errorCode"];
            this.errorMessage = _data["errorMessage"];
            if (Array.isArray(_data["positions"])) {
                this.positions = [] as any;
                for (let item of _data["positions"])
                    this.positions!.push(PositionModel.fromJS(item, _mappings));
            }
        }
    }

    static fromJS(data: any, _mappings?: any): SearchPositionResponse | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<SearchPositionResponse>(data, _mappings, SearchPositionResponse);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["success"] = this.success;
        data["errorCode"] = this.errorCode;
        data["errorMessage"] = this.errorMessage;
        if (Array.isArray(this.positions)) {
            data["positions"] = [];
            for (let item of this.positions)
                data["positions"].push(item ? item.toJSON() : undefined as any);
        }
        return data;
    }

    clone(): SearchPositionResponse {
        const json = this.toJSON();
        let result = new SearchPositionResponse();
        result.init(json);
        return result;
    }
}

export interface ISearchPositionResponse {
    success: boolean;
    errorCode: SearchPositionErrorCode;
    errorMessage?: string | undefined;
    positions?: IPositionModel[] | undefined;
}

/** 0 = Success 1 = AccountNotFound */
export enum SearchPositionErrorCode {
    Success = 0,
    AccountNotFound = 1,
}

export class PositionModel implements IPositionModel {
    id!: number;
    accountId!: number;
    contractId!: string;
    creationTimestamp!: Date;
    type!: PositionType;
    size!: number;
    averagePrice!: number;

    constructor(data?: IPositionModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.id = _data["id"];
            this.accountId = _data["accountId"];
            this.contractId = _data["contractId"];
            this.creationTimestamp = _data["creationTimestamp"] ? new Date(_data["creationTimestamp"].toString()) : undefined as any;
            this.type = _data["type"];
            this.size = _data["size"];
            this.averagePrice = _data["averagePrice"];
        }
    }

    static fromJS(data: any, _mappings?: any): PositionModel | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<PositionModel>(data, _mappings, PositionModel);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["accountId"] = this.accountId;
        data["contractId"] = this.contractId;
        data["creationTimestamp"] = this.creationTimestamp ? this.creationTimestamp.toISOString() : undefined as any;
        data["type"] = this.type;
        data["size"] = this.size;
        data["averagePrice"] = this.averagePrice;
        return data;
    }

    clone(): PositionModel {
        const json = this.toJSON();
        let result = new PositionModel();
        result.init(json);
        return result;
    }
}

export interface IPositionModel {
    id: number;
    accountId: number;
    contractId: string;
    creationTimestamp: Date;
    type: PositionType;
    size: number;
    averagePrice: number;
}

/** 0 = Undefined 1 = Long 2 = Short */
export enum PositionType {
    Undefined = 0,
    Long = 1,
    Short = 2,
}

export class SearchPositionRequest implements ISearchPositionRequest {
    accountId!: number;

    constructor(data?: ISearchPositionRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.accountId = _data["accountId"];
        }
    }

    static fromJS(data: any, _mappings?: any): SearchPositionRequest | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<SearchPositionRequest>(data, _mappings, SearchPositionRequest);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["accountId"] = this.accountId;
        return data;
    }

    clone(): SearchPositionRequest {
        const json = this.toJSON();
        let result = new SearchPositionRequest();
        result.init(json);
        return result;
    }
}

export interface ISearchPositionRequest {
    accountId: number;
}

export class ClosePositionResponse implements IClosePositionResponse {
    success!: boolean;
    errorCode!: ClosePositionErrorCode;
    errorMessage?: string | undefined;

    constructor(data?: IClosePositionResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.success = _data["success"];
            this.errorCode = _data["errorCode"];
            this.errorMessage = _data["errorMessage"];
        }
    }

    static fromJS(data: any, _mappings?: any): ClosePositionResponse | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<ClosePositionResponse>(data, _mappings, ClosePositionResponse);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["success"] = this.success;
        data["errorCode"] = this.errorCode;
        data["errorMessage"] = this.errorMessage;
        return data;
    }

    clone(): ClosePositionResponse {
        const json = this.toJSON();
        let result = new ClosePositionResponse();
        result.init(json);
        return result;
    }
}

export interface IClosePositionResponse {
    success: boolean;
    errorCode: ClosePositionErrorCode;
    errorMessage?: string | undefined;
}

/** 0 = Success 1 = AccountNotFound 2 = PositionNotFound 3 = ContractNotFound 4 = ContractNotActive 5 = OrderRejected 6 = OrderPending 7 = UnknownError 8 = AccountRejected */
export enum ClosePositionErrorCode {
    Success = 0,
    AccountNotFound = 1,
    PositionNotFound = 2,
    ContractNotFound = 3,
    ContractNotActive = 4,
    OrderRejected = 5,
    OrderPending = 6,
    UnknownError = 7,
    AccountRejected = 8,
}

export class CloseContractPositionRequest implements ICloseContractPositionRequest {
    accountId!: number;
    contractId!: string;

    constructor(data?: ICloseContractPositionRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.accountId = _data["accountId"];
            this.contractId = _data["contractId"];
        }
    }

    static fromJS(data: any, _mappings?: any): CloseContractPositionRequest | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<CloseContractPositionRequest>(data, _mappings, CloseContractPositionRequest);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["accountId"] = this.accountId;
        data["contractId"] = this.contractId;
        return data;
    }

    clone(): CloseContractPositionRequest {
        const json = this.toJSON();
        let result = new CloseContractPositionRequest();
        result.init(json);
        return result;
    }
}

export interface ICloseContractPositionRequest {
    accountId: number;
    contractId: string;
}

export class PartialClosePositionResponse implements IPartialClosePositionResponse {
    success!: boolean;
    errorCode!: PartialClosePositionErrorCode;
    errorMessage?: string | undefined;

    constructor(data?: IPartialClosePositionResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.success = _data["success"];
            this.errorCode = _data["errorCode"];
            this.errorMessage = _data["errorMessage"];
        }
    }

    static fromJS(data: any, _mappings?: any): PartialClosePositionResponse | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<PartialClosePositionResponse>(data, _mappings, PartialClosePositionResponse);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["success"] = this.success;
        data["errorCode"] = this.errorCode;
        data["errorMessage"] = this.errorMessage;
        return data;
    }

    clone(): PartialClosePositionResponse {
        const json = this.toJSON();
        let result = new PartialClosePositionResponse();
        result.init(json);
        return result;
    }
}

export interface IPartialClosePositionResponse {
    success: boolean;
    errorCode: PartialClosePositionErrorCode;
    errorMessage?: string | undefined;
}

/** 0 = Success 1 = AccountNotFound 2 = PositionNotFound 3 = ContractNotFound 4 = ContractNotActive 5 = InvalidCloseSize 6 = OrderRejected 7 = OrderPending 8 = UnknownError 9 = AccountRejected */
export enum PartialClosePositionErrorCode {
    Success = 0,
    AccountNotFound = 1,
    PositionNotFound = 2,
    ContractNotFound = 3,
    ContractNotActive = 4,
    InvalidCloseSize = 5,
    OrderRejected = 6,
    OrderPending = 7,
    UnknownError = 8,
    AccountRejected = 9,
}

export class PartialCloseContractPositionRequest implements IPartialCloseContractPositionRequest {
    accountId!: number;
    contractId!: string;
    size!: number;

    constructor(data?: IPartialCloseContractPositionRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.accountId = _data["accountId"];
            this.contractId = _data["contractId"];
            this.size = _data["size"];
        }
    }

    static fromJS(data: any, _mappings?: any): PartialCloseContractPositionRequest | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<PartialCloseContractPositionRequest>(data, _mappings, PartialCloseContractPositionRequest);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["accountId"] = this.accountId;
        data["contractId"] = this.contractId;
        data["size"] = this.size;
        return data;
    }

    clone(): PartialCloseContractPositionRequest {
        const json = this.toJSON();
        let result = new PartialCloseContractPositionRequest();
        result.init(json);
        return result;
    }
}

export interface IPartialCloseContractPositionRequest {
    accountId: number;
    contractId: string;
    size: number;
}

export class SearchHalfTradeResponse implements ISearchHalfTradeResponse {
    success!: boolean;
    errorCode!: SearchTradeErrorCode;
    errorMessage?: string | undefined;
    trades?: HalfTradeModel[] | undefined;

    constructor(data?: ISearchHalfTradeResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
            if (data.trades) {
                this.trades = [];
                for (let i = 0; i < data.trades.length; i++) {
                    let item = data.trades[i];
                    this.trades[i] = item && !(item as any).toJSON ? new HalfTradeModel(item) : item as HalfTradeModel;
                }
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.success = _data["success"];
            this.errorCode = _data["errorCode"];
            this.errorMessage = _data["errorMessage"];
            if (Array.isArray(_data["trades"])) {
                this.trades = [] as any;
                for (let item of _data["trades"])
                    this.trades!.push(HalfTradeModel.fromJS(item, _mappings));
            }
        }
    }

    static fromJS(data: any, _mappings?: any): SearchHalfTradeResponse | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<SearchHalfTradeResponse>(data, _mappings, SearchHalfTradeResponse);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["success"] = this.success;
        data["errorCode"] = this.errorCode;
        data["errorMessage"] = this.errorMessage;
        if (Array.isArray(this.trades)) {
            data["trades"] = [];
            for (let item of this.trades)
                data["trades"].push(item ? item.toJSON() : undefined as any);
        }
        return data;
    }

    clone(): SearchHalfTradeResponse {
        const json = this.toJSON();
        let result = new SearchHalfTradeResponse();
        result.init(json);
        return result;
    }
}

export interface ISearchHalfTradeResponse {
    success: boolean;
    errorCode: SearchTradeErrorCode;
    errorMessage?: string | undefined;
    trades?: IHalfTradeModel[] | undefined;
}

/** 0 = Success 1 = AccountNotFound */
export enum SearchTradeErrorCode {
    Success = 0,
    AccountNotFound = 1,
}

export class HalfTradeModel implements IHalfTradeModel {
    id!: number;
    accountId!: number;
    contractId!: string;
    creationTimestamp!: Date;
    price!: number;
    profitAndLoss?: number | undefined;
    fees!: number;
    side!: OrderSide;
    size!: number;
    voided!: boolean;
    orderId!: number;

    constructor(data?: IHalfTradeModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.id = _data["id"];
            this.accountId = _data["accountId"];
            this.contractId = _data["contractId"];
            this.creationTimestamp = _data["creationTimestamp"] ? new Date(_data["creationTimestamp"].toString()) : undefined as any;
            this.price = _data["price"];
            this.profitAndLoss = _data["profitAndLoss"];
            this.fees = _data["fees"];
            this.side = _data["side"];
            this.size = _data["size"];
            this.voided = _data["voided"];
            this.orderId = _data["orderId"];
        }
    }

    static fromJS(data: any, _mappings?: any): HalfTradeModel | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<HalfTradeModel>(data, _mappings, HalfTradeModel);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["accountId"] = this.accountId;
        data["contractId"] = this.contractId;
        data["creationTimestamp"] = this.creationTimestamp ? this.creationTimestamp.toISOString() : undefined as any;
        data["price"] = this.price;
        data["profitAndLoss"] = this.profitAndLoss;
        data["fees"] = this.fees;
        data["side"] = this.side;
        data["size"] = this.size;
        data["voided"] = this.voided;
        data["orderId"] = this.orderId;
        return data;
    }

    clone(): HalfTradeModel {
        const json = this.toJSON();
        let result = new HalfTradeModel();
        result.init(json);
        return result;
    }
}

export interface IHalfTradeModel {
    id: number;
    accountId: number;
    contractId: string;
    creationTimestamp: Date;
    price: number;
    profitAndLoss?: number | undefined;
    fees: number;
    side: OrderSide;
    size: number;
    voided: boolean;
    orderId: number;
}

export class SearchTradeRequest implements ISearchTradeRequest {
    accountId!: number;
    startTimestamp?: Date | undefined;
    endTimestamp?: Date | undefined;

    constructor(data?: ISearchTradeRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (this as any)[property] = (data as any)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.accountId = _data["accountId"];
            this.startTimestamp = _data["startTimestamp"] ? new Date(_data["startTimestamp"].toString()) : undefined as any;
            this.endTimestamp = _data["endTimestamp"] ? new Date(_data["endTimestamp"].toString()) : undefined as any;
        }
    }

    static fromJS(data: any, _mappings?: any): SearchTradeRequest | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<SearchTradeRequest>(data, _mappings, SearchTradeRequest);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["accountId"] = this.accountId;
        data["startTimestamp"] = this.startTimestamp ? this.startTimestamp.toISOString() : undefined as any;
        data["endTimestamp"] = this.endTimestamp ? this.endTimestamp.toISOString() : undefined as any;
        return data;
    }

    clone(): SearchTradeRequest {
        const json = this.toJSON();
        let result = new SearchTradeRequest();
        result.init(json);
        return result;
    }
}

export interface ISearchTradeRequest {
    accountId: number;
    startTimestamp?: Date | undefined;
    endTimestamp?: Date | undefined;
}

function jsonParse(json: any, reviver?: any) {
    json = JSON.parse(json, reviver);

    var byid: any = {};
    var refs: any = [];
    json = (function recurse(obj: any, prop?: any, parent?: any) {
        if (typeof obj !== 'object' || !obj)
            return obj;
        
        if ("$ref" in obj) {
            let ref = obj.$ref;
            if (ref in byid)
                return byid[ref];
            refs.push([parent, prop, ref]);
            return undefined;
        } else if ("$id" in obj) {
            let id = obj.$id;
            delete obj.$id;
            if ("$values" in obj)
                obj = obj.$values;
            byid[id] = obj;
        }
        
        if (Array.isArray(obj)) {
            obj = obj.map((v, i) => recurse(v, i, obj));
        } else {
            for (var p in obj) {
                if (obj.hasOwnProperty(p) && obj[p] && typeof obj[p] === 'object')
                    obj[p] = recurse(obj[p], p, obj);
            }
        }

        return obj;
    })(json);

    for (let i = 0; i < refs.length; i++) {
        const ref = refs[i];
        ref[0][ref[1]] = byid[ref[2]];
    }

    return json;
}

function createInstance<T>(data: any, mappings: any, type: any): T | null {
  if (!mappings)
    mappings = [];
  if (!data)
    return null;

  const mappingIndexName = "__mappingIndex";
  if (data[mappingIndexName])
    return <T>mappings[data[mappingIndexName]].target;

  data[mappingIndexName] = mappings.length;

  let result: any = new type();
  mappings.push({ source: data, target: result });
  result.init(data, mappings);
  return result;
}

export class SwaggerResponse<TResult> {
    status: number;
    headers: { [key: string]: any; };
    result: TResult;

    constructor(status: number, headers: { [key: string]: any; }, result: TResult)
    {
        this.status = status;
        this.headers = headers;
        this.result = result;
    }
}

export class ApiException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}

function isAxiosError(obj: any): obj is AxiosError {
    return obj && obj.isAxiosError === true;
}

}
}
