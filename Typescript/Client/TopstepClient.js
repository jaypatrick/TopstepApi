"use strict";
/* eslint-disable */
// ReSharper disable InconsistentNaming
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trading = void 0;
const axios_1 = __importStar(require("axios"));
var Trading;
(function (Trading) {
    let Topstep;
    (function (Topstep) {
        class AccountClient {
            instance;
            baseUrl;
            jsonParseReviver = undefined;
            constructor(baseUrl, instance) {
                this.instance = instance || axios_1.default.create();
                this.baseUrl = baseUrl ?? "https://api.topstepx.com";
            }
            /**
             * Searches for accounts based on the provided request.
             * @param request The request containing search criteria.
             * @return The search account response.
             */
            searchAccounts(request, signal) {
                let url_ = this.baseUrl + "/api/Account/search";
                url_ = url_.replace(/[?&]$/, "");
                const content_ = JSON.stringify(request);
                let options_ = {
                    data: content_,
                    method: "POST",
                    url: url_,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    signal
                };
                return this.instance.request(options_).catch((_error) => {
                    if (isAxiosError(_error) && _error.response) {
                        return _error.response;
                    }
                    else {
                        throw _error;
                    }
                }).then((_response) => {
                    return this.processSearchAccounts(_response);
                });
            }
            processSearchAccounts(response) {
                const status = response.status;
                let _headers = {};
                if (response.headers && typeof response.headers === "object") {
                    for (const k in response.headers) {
                        if (response.headers.hasOwnProperty(k)) {
                            _headers[k] = response.headers[k];
                        }
                    }
                }
                let _mappings = [];
                if (status === 200) {
                    const _responseText = response.data;
                    let result200 = null;
                    let resultData200 = _responseText;
                    result200 = SearchAccountResponse.fromJS(resultData200, _mappings);
                    return Promise.resolve(new SwaggerResponse(status, _headers, result200));
                }
                else if (status !== 200 && status !== 204) {
                    const _responseText = response.data;
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                }
                return Promise.resolve(new SwaggerResponse(status, _headers, null));
            }
        }
        Topstep.AccountClient = AccountClient;
        class AuthClient {
            instance;
            baseUrl;
            jsonParseReviver = undefined;
            constructor(baseUrl, instance) {
                this.instance = instance || axios_1.default.create();
                this.baseUrl = baseUrl ?? "https://api.topstepx.com";
            }
            /**
             * Login as the specified user using the specified application.
             * @param request The login request.
             */
            loginApp(request, signal) {
                let url_ = this.baseUrl + "/api/Auth/loginApp";
                url_ = url_.replace(/[?&]$/, "");
                const content_ = JSON.stringify(request);
                let options_ = {
                    data: content_,
                    method: "POST",
                    url: url_,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    signal
                };
                return this.instance.request(options_).catch((_error) => {
                    if (isAxiosError(_error) && _error.response) {
                        return _error.response;
                    }
                    else {
                        throw _error;
                    }
                }).then((_response) => {
                    return this.processLoginApp(_response);
                });
            }
            processLoginApp(response) {
                const status = response.status;
                let _headers = {};
                if (response.headers && typeof response.headers === "object") {
                    for (const k in response.headers) {
                        if (response.headers.hasOwnProperty(k)) {
                            _headers[k] = response.headers[k];
                        }
                    }
                }
                let _mappings = [];
                if (status === 200) {
                    const _responseText = response.data;
                    let result200 = null;
                    let resultData200 = _responseText;
                    result200 = LoginResponse.fromJS(resultData200, _mappings);
                    return Promise.resolve(new SwaggerResponse(status, _headers, result200));
                }
                else if (status !== 200 && status !== 204) {
                    const _responseText = response.data;
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                }
                return Promise.resolve(new SwaggerResponse(status, _headers, null));
            }
            /**
             * Login as the specified user using the specified API key.
             * @param request The login request.
             */
            loginKey(request, signal) {
                let url_ = this.baseUrl + "/api/Auth/loginKey";
                url_ = url_.replace(/[?&]$/, "");
                const content_ = JSON.stringify(request);
                let options_ = {
                    data: content_,
                    method: "POST",
                    url: url_,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    signal
                };
                return this.instance.request(options_).catch((_error) => {
                    if (isAxiosError(_error) && _error.response) {
                        return _error.response;
                    }
                    else {
                        throw _error;
                    }
                }).then((_response) => {
                    return this.processLoginKey(_response);
                });
            }
            processLoginKey(response) {
                const status = response.status;
                let _headers = {};
                if (response.headers && typeof response.headers === "object") {
                    for (const k in response.headers) {
                        if (response.headers.hasOwnProperty(k)) {
                            _headers[k] = response.headers[k];
                        }
                    }
                }
                let _mappings = [];
                if (status === 200) {
                    const _responseText = response.data;
                    let result200 = null;
                    let resultData200 = _responseText;
                    result200 = LoginResponse.fromJS(resultData200, _mappings);
                    return Promise.resolve(new SwaggerResponse(status, _headers, result200));
                }
                else if (status !== 200 && status !== 204) {
                    const _responseText = response.data;
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                }
                return Promise.resolve(new SwaggerResponse(status, _headers, null));
            }
            /**
             * Logs out the current authenticated user.
             */
            logout(signal) {
                let url_ = this.baseUrl + "/api/Auth/logout";
                url_ = url_.replace(/[?&]$/, "");
                let options_ = {
                    method: "POST",
                    url: url_,
                    headers: {
                        "Accept": "application/json"
                    },
                    signal
                };
                return this.instance.request(options_).catch((_error) => {
                    if (isAxiosError(_error) && _error.response) {
                        return _error.response;
                    }
                    else {
                        throw _error;
                    }
                }).then((_response) => {
                    return this.processLogout(_response);
                });
            }
            processLogout(response) {
                const status = response.status;
                let _headers = {};
                if (response.headers && typeof response.headers === "object") {
                    for (const k in response.headers) {
                        if (response.headers.hasOwnProperty(k)) {
                            _headers[k] = response.headers[k];
                        }
                    }
                }
                let _mappings = [];
                if (status === 200) {
                    const _responseText = response.data;
                    let result200 = null;
                    let resultData200 = _responseText;
                    result200 = LogoutResponse.fromJS(resultData200, _mappings);
                    return Promise.resolve(new SwaggerResponse(status, _headers, result200));
                }
                else if (status !== 200 && status !== 204) {
                    const _responseText = response.data;
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                }
                return Promise.resolve(new SwaggerResponse(status, _headers, null));
            }
            /**
             * Validates the current user's session.
             */
            validate(signal) {
                let url_ = this.baseUrl + "/api/Auth/validate";
                url_ = url_.replace(/[?&]$/, "");
                let options_ = {
                    method: "POST",
                    url: url_,
                    headers: {
                        "Accept": "application/json"
                    },
                    signal
                };
                return this.instance.request(options_).catch((_error) => {
                    if (isAxiosError(_error) && _error.response) {
                        return _error.response;
                    }
                    else {
                        throw _error;
                    }
                }).then((_response) => {
                    return this.processValidate(_response);
                });
            }
            processValidate(response) {
                const status = response.status;
                let _headers = {};
                if (response.headers && typeof response.headers === "object") {
                    for (const k in response.headers) {
                        if (response.headers.hasOwnProperty(k)) {
                            _headers[k] = response.headers[k];
                        }
                    }
                }
                let _mappings = [];
                if (status === 200) {
                    const _responseText = response.data;
                    let result200 = null;
                    let resultData200 = _responseText;
                    result200 = ValidateResponse.fromJS(resultData200, _mappings);
                    return Promise.resolve(new SwaggerResponse(status, _headers, result200));
                }
                else if (status !== 200 && status !== 204) {
                    const _responseText = response.data;
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                }
                return Promise.resolve(new SwaggerResponse(status, _headers, null));
            }
        }
        Topstep.AuthClient = AuthClient;
        class ContractClient {
            instance;
            baseUrl;
            jsonParseReviver = undefined;
            constructor(baseUrl, instance) {
                this.instance = instance || axios_1.default.create();
                this.baseUrl = baseUrl ?? "https://api.topstepx.com";
            }
            /**
             * Searches for contracts based on the provided search criteria.
             * @param request The search criteria for finding contracts.
             * @return A response containing the search results, including any matching contracts.
             */
            searchContracts(request, signal) {
                let url_ = this.baseUrl + "/api/Contract/search";
                url_ = url_.replace(/[?&]$/, "");
                const content_ = JSON.stringify(request);
                let options_ = {
                    data: content_,
                    method: "POST",
                    url: url_,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    signal
                };
                return this.instance.request(options_).catch((_error) => {
                    if (isAxiosError(_error) && _error.response) {
                        return _error.response;
                    }
                    else {
                        throw _error;
                    }
                }).then((_response) => {
                    return this.processSearchContracts(_response);
                });
            }
            processSearchContracts(response) {
                const status = response.status;
                let _headers = {};
                if (response.headers && typeof response.headers === "object") {
                    for (const k in response.headers) {
                        if (response.headers.hasOwnProperty(k)) {
                            _headers[k] = response.headers[k];
                        }
                    }
                }
                let _mappings = [];
                if (status === 200) {
                    const _responseText = response.data;
                    let result200 = null;
                    let resultData200 = _responseText;
                    result200 = SearchContractResponse.fromJS(resultData200, _mappings);
                    return Promise.resolve(new SwaggerResponse(status, _headers, result200));
                }
                else if (status !== 200 && status !== 204) {
                    const _responseText = response.data;
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                }
                return Promise.resolve(new SwaggerResponse(status, _headers, null));
            }
            /**
             * Searches for a contract by its ID.
             * @param request The request containing the contract ID.
             * @return A response containing the search result, including the matching contract if found.
             */
            searchContractById(request, signal) {
                let url_ = this.baseUrl + "/api/Contract/searchById";
                url_ = url_.replace(/[?&]$/, "");
                const content_ = JSON.stringify(request);
                let options_ = {
                    data: content_,
                    method: "POST",
                    url: url_,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    signal
                };
                return this.instance.request(options_).catch((_error) => {
                    if (isAxiosError(_error) && _error.response) {
                        return _error.response;
                    }
                    else {
                        throw _error;
                    }
                }).then((_response) => {
                    return this.processSearchContractById(_response);
                });
            }
            processSearchContractById(response) {
                const status = response.status;
                let _headers = {};
                if (response.headers && typeof response.headers === "object") {
                    for (const k in response.headers) {
                        if (response.headers.hasOwnProperty(k)) {
                            _headers[k] = response.headers[k];
                        }
                    }
                }
                let _mappings = [];
                if (status === 200) {
                    const _responseText = response.data;
                    let result200 = null;
                    let resultData200 = _responseText;
                    result200 = SearchContractByIdResponse.fromJS(resultData200, _mappings);
                    return Promise.resolve(new SwaggerResponse(status, _headers, result200));
                }
                else if (status !== 200 && status !== 204) {
                    const _responseText = response.data;
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                }
                return Promise.resolve(new SwaggerResponse(status, _headers, null));
            }
            /**
             * Lists available contracts based on the provided request parameters.
             * @param request The listing criteria for available contracts.
             * @return A response containing the list of available contracts.
             */
            availableContracts(request, signal) {
                let url_ = this.baseUrl + "/api/Contract/available";
                url_ = url_.replace(/[?&]$/, "");
                const content_ = JSON.stringify(request);
                let options_ = {
                    data: content_,
                    method: "POST",
                    url: url_,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    signal
                };
                return this.instance.request(options_).catch((_error) => {
                    if (isAxiosError(_error) && _error.response) {
                        return _error.response;
                    }
                    else {
                        throw _error;
                    }
                }).then((_response) => {
                    return this.processAvailableContracts(_response);
                });
            }
            processAvailableContracts(response) {
                const status = response.status;
                let _headers = {};
                if (response.headers && typeof response.headers === "object") {
                    for (const k in response.headers) {
                        if (response.headers.hasOwnProperty(k)) {
                            _headers[k] = response.headers[k];
                        }
                    }
                }
                let _mappings = [];
                if (status === 200) {
                    const _responseText = response.data;
                    let result200 = null;
                    let resultData200 = _responseText;
                    result200 = ListAvailableContractResponse.fromJS(resultData200, _mappings);
                    return Promise.resolve(new SwaggerResponse(status, _headers, result200));
                }
                else if (status !== 200 && status !== 204) {
                    const _responseText = response.data;
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                }
                return Promise.resolve(new SwaggerResponse(status, _headers, null));
            }
        }
        Topstep.ContractClient = ContractClient;
        class HistoryClient {
            instance;
            baseUrl;
            jsonParseReviver = undefined;
            constructor(baseUrl, instance) {
                this.instance = instance || axios_1.default.create();
                this.baseUrl = baseUrl ?? "https://api.topstepx.com";
            }
            /**
             * Retrieves historical bars based on the specified request parameters.
             * @param request The request containing parameters for retrieving historical bars.
             * @return The response with the retrieved bars.
             */
            getBars(request, signal) {
                let url_ = this.baseUrl + "/api/History/retrieveBars";
                url_ = url_.replace(/[?&]$/, "");
                const content_ = JSON.stringify(request);
                let options_ = {
                    data: content_,
                    method: "POST",
                    url: url_,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    signal
                };
                return this.instance.request(options_).catch((_error) => {
                    if (isAxiosError(_error) && _error.response) {
                        return _error.response;
                    }
                    else {
                        throw _error;
                    }
                }).then((_response) => {
                    return this.processGetBars(_response);
                });
            }
            processGetBars(response) {
                const status = response.status;
                let _headers = {};
                if (response.headers && typeof response.headers === "object") {
                    for (const k in response.headers) {
                        if (response.headers.hasOwnProperty(k)) {
                            _headers[k] = response.headers[k];
                        }
                    }
                }
                let _mappings = [];
                if (status === 200) {
                    const _responseText = response.data;
                    let result200 = null;
                    let resultData200 = _responseText;
                    result200 = RetrieveBarResponse.fromJS(resultData200, _mappings);
                    return Promise.resolve(new SwaggerResponse(status, _headers, result200));
                }
                else if (status !== 200 && status !== 204) {
                    const _responseText = response.data;
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                }
                return Promise.resolve(new SwaggerResponse(status, _headers, null));
            }
        }
        Topstep.HistoryClient = HistoryClient;
        class OrderClient {
            instance;
            baseUrl;
            jsonParseReviver = undefined;
            constructor(baseUrl, instance) {
                this.instance = instance || axios_1.default.create();
                this.baseUrl = baseUrl ?? "https://api.topstepx.com";
            }
            /**
             * Searches for orders based on the provided request.
             * @param request A request containing search criteria.
             * @return A response with search results.
             */
            searchOrders(request, signal) {
                let url_ = this.baseUrl + "/api/Order/search";
                url_ = url_.replace(/[?&]$/, "");
                const content_ = JSON.stringify(request);
                let options_ = {
                    data: content_,
                    method: "POST",
                    url: url_,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    signal
                };
                return this.instance.request(options_).catch((_error) => {
                    if (isAxiosError(_error) && _error.response) {
                        return _error.response;
                    }
                    else {
                        throw _error;
                    }
                }).then((_response) => {
                    return this.processSearchOrders(_response);
                });
            }
            processSearchOrders(response) {
                const status = response.status;
                let _headers = {};
                if (response.headers && typeof response.headers === "object") {
                    for (const k in response.headers) {
                        if (response.headers.hasOwnProperty(k)) {
                            _headers[k] = response.headers[k];
                        }
                    }
                }
                let _mappings = [];
                if (status === 200) {
                    const _responseText = response.data;
                    let result200 = null;
                    let resultData200 = _responseText;
                    result200 = SearchOrderResponse.fromJS(resultData200, _mappings);
                    return Promise.resolve(new SwaggerResponse(status, _headers, result200));
                }
                else if (status !== 200 && status !== 204) {
                    const _responseText = response.data;
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                }
                return Promise.resolve(new SwaggerResponse(status, _headers, null));
            }
            /**
             * Searches for open (working/active) orders based on the provided request.
             * @param request A request containing search criteria.
             * @return A response with search results.
             */
            searchOpenOrders(request, signal) {
                let url_ = this.baseUrl + "/api/Order/searchOpen";
                url_ = url_.replace(/[?&]$/, "");
                const content_ = JSON.stringify(request);
                let options_ = {
                    data: content_,
                    method: "POST",
                    url: url_,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    signal
                };
                return this.instance.request(options_).catch((_error) => {
                    if (isAxiosError(_error) && _error.response) {
                        return _error.response;
                    }
                    else {
                        throw _error;
                    }
                }).then((_response) => {
                    return this.processSearchOpenOrders(_response);
                });
            }
            processSearchOpenOrders(response) {
                const status = response.status;
                let _headers = {};
                if (response.headers && typeof response.headers === "object") {
                    for (const k in response.headers) {
                        if (response.headers.hasOwnProperty(k)) {
                            _headers[k] = response.headers[k];
                        }
                    }
                }
                let _mappings = [];
                if (status === 200) {
                    const _responseText = response.data;
                    let result200 = null;
                    let resultData200 = _responseText;
                    result200 = SearchOrderResponse.fromJS(resultData200, _mappings);
                    return Promise.resolve(new SwaggerResponse(status, _headers, result200));
                }
                else if (status !== 200 && status !== 204) {
                    const _responseText = response.data;
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                }
                return Promise.resolve(new SwaggerResponse(status, _headers, null));
            }
            /**
             * Places a new order based on the provided request.
             * @param request A request containing order details.
             * @return A response with order placement details.
             */
            placeOrder(request, signal) {
                let url_ = this.baseUrl + "/api/Order/place";
                url_ = url_.replace(/[?&]$/, "");
                const content_ = JSON.stringify(request);
                let options_ = {
                    data: content_,
                    method: "POST",
                    url: url_,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    signal
                };
                return this.instance.request(options_).catch((_error) => {
                    if (isAxiosError(_error) && _error.response) {
                        return _error.response;
                    }
                    else {
                        throw _error;
                    }
                }).then((_response) => {
                    return this.processPlaceOrder(_response);
                });
            }
            processPlaceOrder(response) {
                const status = response.status;
                let _headers = {};
                if (response.headers && typeof response.headers === "object") {
                    for (const k in response.headers) {
                        if (response.headers.hasOwnProperty(k)) {
                            _headers[k] = response.headers[k];
                        }
                    }
                }
                let _mappings = [];
                if (status === 200) {
                    const _responseText = response.data;
                    let result200 = null;
                    let resultData200 = _responseText;
                    result200 = PlaceOrderResponse.fromJS(resultData200, _mappings);
                    return Promise.resolve(new SwaggerResponse(status, _headers, result200));
                }
                else if (status !== 200 && status !== 204) {
                    const _responseText = response.data;
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                }
                return Promise.resolve(new SwaggerResponse(status, _headers, null));
            }
            /**
             * Cancels an existing order based on the provided request.
             * @param request A request containing order cancellation details.
             * @return A response with order cancellation details.
             */
            cancelOrder(request, signal) {
                let url_ = this.baseUrl + "/api/Order/cancel";
                url_ = url_.replace(/[?&]$/, "");
                const content_ = JSON.stringify(request);
                let options_ = {
                    data: content_,
                    method: "POST",
                    url: url_,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    signal
                };
                return this.instance.request(options_).catch((_error) => {
                    if (isAxiosError(_error) && _error.response) {
                        return _error.response;
                    }
                    else {
                        throw _error;
                    }
                }).then((_response) => {
                    return this.processCancelOrder(_response);
                });
            }
            processCancelOrder(response) {
                const status = response.status;
                let _headers = {};
                if (response.headers && typeof response.headers === "object") {
                    for (const k in response.headers) {
                        if (response.headers.hasOwnProperty(k)) {
                            _headers[k] = response.headers[k];
                        }
                    }
                }
                let _mappings = [];
                if (status === 200) {
                    const _responseText = response.data;
                    let result200 = null;
                    let resultData200 = _responseText;
                    result200 = CancelOrderResponse.fromJS(resultData200, _mappings);
                    return Promise.resolve(new SwaggerResponse(status, _headers, result200));
                }
                else if (status !== 200 && status !== 204) {
                    const _responseText = response.data;
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                }
                return Promise.resolve(new SwaggerResponse(status, _headers, null));
            }
            /**
             * Modifies an existing order based on the provided request.
             * @param request A request containing order modification details.
             * @return A response with order modification details.
             */
            modifyOrder(request, signal) {
                let url_ = this.baseUrl + "/api/Order/modify";
                url_ = url_.replace(/[?&]$/, "");
                const content_ = JSON.stringify(request);
                let options_ = {
                    data: content_,
                    method: "POST",
                    url: url_,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    signal
                };
                return this.instance.request(options_).catch((_error) => {
                    if (isAxiosError(_error) && _error.response) {
                        return _error.response;
                    }
                    else {
                        throw _error;
                    }
                }).then((_response) => {
                    return this.processModifyOrder(_response);
                });
            }
            processModifyOrder(response) {
                const status = response.status;
                let _headers = {};
                if (response.headers && typeof response.headers === "object") {
                    for (const k in response.headers) {
                        if (response.headers.hasOwnProperty(k)) {
                            _headers[k] = response.headers[k];
                        }
                    }
                }
                let _mappings = [];
                if (status === 200) {
                    const _responseText = response.data;
                    let result200 = null;
                    let resultData200 = _responseText;
                    result200 = ModifyOrderResponse.fromJS(resultData200, _mappings);
                    return Promise.resolve(new SwaggerResponse(status, _headers, result200));
                }
                else if (status !== 200 && status !== 204) {
                    const _responseText = response.data;
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                }
                return Promise.resolve(new SwaggerResponse(status, _headers, null));
            }
        }
        Topstep.OrderClient = OrderClient;
        class PositionClient {
            instance;
            baseUrl;
            jsonParseReviver = undefined;
            constructor(baseUrl, instance) {
                this.instance = instance || axios_1.default.create();
                this.baseUrl = baseUrl ?? "https://api.topstepx.com";
            }
            /**
             * Searches for open positions based on the provided request.
             * @param request A request containing search criteria.
             * @return A response with search results.
             */
            searchOpenPositions(request, signal) {
                let url_ = this.baseUrl + "/api/Position/searchOpen";
                url_ = url_.replace(/[?&]$/, "");
                const content_ = JSON.stringify(request);
                let options_ = {
                    data: content_,
                    method: "POST",
                    url: url_,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    signal
                };
                return this.instance.request(options_).catch((_error) => {
                    if (isAxiosError(_error) && _error.response) {
                        return _error.response;
                    }
                    else {
                        throw _error;
                    }
                }).then((_response) => {
                    return this.processSearchOpenPositions(_response);
                });
            }
            processSearchOpenPositions(response) {
                const status = response.status;
                let _headers = {};
                if (response.headers && typeof response.headers === "object") {
                    for (const k in response.headers) {
                        if (response.headers.hasOwnProperty(k)) {
                            _headers[k] = response.headers[k];
                        }
                    }
                }
                let _mappings = [];
                if (status === 200) {
                    const _responseText = response.data;
                    let result200 = null;
                    let resultData200 = _responseText;
                    result200 = SearchPositionResponse.fromJS(resultData200, _mappings);
                    return Promise.resolve(new SwaggerResponse(status, _headers, result200));
                }
                else if (status !== 200 && status !== 204) {
                    const _responseText = response.data;
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                }
                return Promise.resolve(new SwaggerResponse(status, _headers, null));
            }
            /**
             * Closes a contract position based on the provided request.
             * @param request A request containing the account ID and contract ID to close.
             * @return A response indicating the success or failure of the close operation.
             */
            closeContractPosition(request, signal) {
                let url_ = this.baseUrl + "/api/Position/closeContract";
                url_ = url_.replace(/[?&]$/, "");
                const content_ = JSON.stringify(request);
                let options_ = {
                    data: content_,
                    method: "POST",
                    url: url_,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    signal
                };
                return this.instance.request(options_).catch((_error) => {
                    if (isAxiosError(_error) && _error.response) {
                        return _error.response;
                    }
                    else {
                        throw _error;
                    }
                }).then((_response) => {
                    return this.processCloseContractPosition(_response);
                });
            }
            processCloseContractPosition(response) {
                const status = response.status;
                let _headers = {};
                if (response.headers && typeof response.headers === "object") {
                    for (const k in response.headers) {
                        if (response.headers.hasOwnProperty(k)) {
                            _headers[k] = response.headers[k];
                        }
                    }
                }
                let _mappings = [];
                if (status === 200) {
                    const _responseText = response.data;
                    let result200 = null;
                    let resultData200 = _responseText;
                    result200 = ClosePositionResponse.fromJS(resultData200, _mappings);
                    return Promise.resolve(new SwaggerResponse(status, _headers, result200));
                }
                else if (status !== 200 && status !== 204) {
                    const _responseText = response.data;
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                }
                return Promise.resolve(new SwaggerResponse(status, _headers, null));
            }
            /**
             * Partially closes a contract position based on the provided request.
             * @param request A request containing the account ID, contract ID, and size to close.
             * @return A response indicating the success or failure of the partial close operation.
             */
            partialCloseContractPosition(request, signal) {
                let url_ = this.baseUrl + "/api/Position/partialCloseContract";
                url_ = url_.replace(/[?&]$/, "");
                const content_ = JSON.stringify(request);
                let options_ = {
                    data: content_,
                    method: "POST",
                    url: url_,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    signal
                };
                return this.instance.request(options_).catch((_error) => {
                    if (isAxiosError(_error) && _error.response) {
                        return _error.response;
                    }
                    else {
                        throw _error;
                    }
                }).then((_response) => {
                    return this.processPartialCloseContractPosition(_response);
                });
            }
            processPartialCloseContractPosition(response) {
                const status = response.status;
                let _headers = {};
                if (response.headers && typeof response.headers === "object") {
                    for (const k in response.headers) {
                        if (response.headers.hasOwnProperty(k)) {
                            _headers[k] = response.headers[k];
                        }
                    }
                }
                let _mappings = [];
                if (status === 200) {
                    const _responseText = response.data;
                    let result200 = null;
                    let resultData200 = _responseText;
                    result200 = PartialClosePositionResponse.fromJS(resultData200, _mappings);
                    return Promise.resolve(new SwaggerResponse(status, _headers, result200));
                }
                else if (status !== 200 && status !== 204) {
                    const _responseText = response.data;
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                }
                return Promise.resolve(new SwaggerResponse(status, _headers, null));
            }
        }
        Topstep.PositionClient = PositionClient;
        class StatusClient {
            instance;
            baseUrl;
            jsonParseReviver = undefined;
            constructor(baseUrl, instance) {
                this.instance = instance || axios_1.default.create();
                this.baseUrl = baseUrl ?? "https://api.topstepx.com";
            }
            /**
             * Handles the ping request to check the status of the API.
             * @return Returns a "pong" to indicate the API is responsive.
             */
            ping(signal) {
                let url_ = this.baseUrl + "/api/Status/ping";
                url_ = url_.replace(/[?&]$/, "");
                let options_ = {
                    method: "GET",
                    url: url_,
                    headers: {
                        "Accept": "application/json"
                    },
                    signal
                };
                return this.instance.request(options_).catch((_error) => {
                    if (isAxiosError(_error) && _error.response) {
                        return _error.response;
                    }
                    else {
                        throw _error;
                    }
                }).then((_response) => {
                    return this.processPing(_response);
                });
            }
            processPing(response) {
                const status = response.status;
                let _headers = {};
                if (response.headers && typeof response.headers === "object") {
                    for (const k in response.headers) {
                        if (response.headers.hasOwnProperty(k)) {
                            _headers[k] = response.headers[k];
                        }
                    }
                }
                if (status === 200) {
                    const _responseText = response.data;
                    let result200 = null;
                    let resultData200 = _responseText;
                    result200 = resultData200 !== undefined ? resultData200 : null;
                    return Promise.resolve(new SwaggerResponse(status, _headers, result200));
                }
                else if (status !== 200 && status !== 204) {
                    const _responseText = response.data;
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                }
                return Promise.resolve(new SwaggerResponse(status, _headers, null));
            }
        }
        Topstep.StatusClient = StatusClient;
        class TradeClient {
            instance;
            baseUrl;
            jsonParseReviver = undefined;
            constructor(baseUrl, instance) {
                this.instance = instance || axios_1.default.create();
                this.baseUrl = baseUrl ?? "https://api.topstepx.com";
            }
            /**
             * Searches for half-turn trades based on the provided request parameters.
             * @param request A request containing search criteria.
             * @return A response with the search results.
             */
            searchHalfTurnTrades(request, signal) {
                let url_ = this.baseUrl + "/api/Trade/search";
                url_ = url_.replace(/[?&]$/, "");
                const content_ = JSON.stringify(request);
                let options_ = {
                    data: content_,
                    method: "POST",
                    url: url_,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    signal
                };
                return this.instance.request(options_).catch((_error) => {
                    if (isAxiosError(_error) && _error.response) {
                        return _error.response;
                    }
                    else {
                        throw _error;
                    }
                }).then((_response) => {
                    return this.processSearchHalfTurnTrades(_response);
                });
            }
            processSearchHalfTurnTrades(response) {
                const status = response.status;
                let _headers = {};
                if (response.headers && typeof response.headers === "object") {
                    for (const k in response.headers) {
                        if (response.headers.hasOwnProperty(k)) {
                            _headers[k] = response.headers[k];
                        }
                    }
                }
                let _mappings = [];
                if (status === 200) {
                    const _responseText = response.data;
                    let result200 = null;
                    let resultData200 = _responseText;
                    result200 = SearchHalfTradeResponse.fromJS(resultData200, _mappings);
                    return Promise.resolve(new SwaggerResponse(status, _headers, result200));
                }
                else if (status !== 200 && status !== 204) {
                    const _responseText = response.data;
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                }
                return Promise.resolve(new SwaggerResponse(status, _headers, null));
            }
        }
        Topstep.TradeClient = TradeClient;
        class SearchAccountResponse {
            success;
            errorCode;
            errorMessage;
            accounts;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                    if (data.accounts) {
                        this.accounts = [];
                        for (let i = 0; i < data.accounts.length; i++) {
                            let item = data.accounts[i];
                            this.accounts[i] = item && !item.toJSON ? new TradingAccountModel(item) : item;
                        }
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.success = _data["success"];
                    this.errorCode = _data["errorCode"];
                    this.errorMessage = _data["errorMessage"];
                    if (Array.isArray(_data["accounts"])) {
                        this.accounts = [];
                        for (let item of _data["accounts"])
                            this.accounts.push(TradingAccountModel.fromJS(item, _mappings));
                    }
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, SearchAccountResponse);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["success"] = this.success;
                data["errorCode"] = this.errorCode;
                data["errorMessage"] = this.errorMessage;
                if (Array.isArray(this.accounts)) {
                    data["accounts"] = [];
                    for (let item of this.accounts)
                        data["accounts"].push(item ? item.toJSON() : undefined);
                }
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new SearchAccountResponse();
                result.init(json);
                return result;
            }
        }
        Topstep.SearchAccountResponse = SearchAccountResponse;
        /** 0 = Success */
        let SearchAccountErrorCode;
        (function (SearchAccountErrorCode) {
            SearchAccountErrorCode[SearchAccountErrorCode["Success"] = 0] = "Success";
        })(SearchAccountErrorCode = Topstep.SearchAccountErrorCode || (Topstep.SearchAccountErrorCode = {}));
        class TradingAccountModel {
            id;
            name;
            balance;
            canTrade;
            isVisible;
            simulated;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.id = _data["id"];
                    this.name = _data["name"];
                    this.balance = _data["balance"];
                    this.canTrade = _data["canTrade"];
                    this.isVisible = _data["isVisible"];
                    this.simulated = _data["simulated"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, TradingAccountModel);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["id"] = this.id;
                data["name"] = this.name;
                data["balance"] = this.balance;
                data["canTrade"] = this.canTrade;
                data["isVisible"] = this.isVisible;
                data["simulated"] = this.simulated;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new TradingAccountModel();
                result.init(json);
                return result;
            }
        }
        Topstep.TradingAccountModel = TradingAccountModel;
        class SearchAccountRequest {
            onlyActiveAccounts;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.onlyActiveAccounts = _data["onlyActiveAccounts"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, SearchAccountRequest);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["onlyActiveAccounts"] = this.onlyActiveAccounts;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new SearchAccountRequest();
                result.init(json);
                return result;
            }
        }
        Topstep.SearchAccountRequest = SearchAccountRequest;
        class LoginResponse {
            success;
            errorCode;
            errorMessage;
            token;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.success = _data["success"];
                    this.errorCode = _data["errorCode"];
                    this.errorMessage = _data["errorMessage"];
                    this.token = _data["token"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, LoginResponse);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["success"] = this.success;
                data["errorCode"] = this.errorCode;
                data["errorMessage"] = this.errorMessage;
                data["token"] = this.token;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new LoginResponse();
                result.init(json);
                return result;
            }
        }
        Topstep.LoginResponse = LoginResponse;
        /** 0 = Success 1 = UserNotFound 2 = PasswordVerificationFailed 3 = InvalidCredentials 4 = AppNotFound 5 = AppVerificationFailed 6 = InvalidDevice 7 = AgreementsNotSigned 8 = UnknownError 9 = ApiSubscriptionNotFound 10 = ApiKeyAuthenticationDisabled */
        let LoginErrorCode;
        (function (LoginErrorCode) {
            LoginErrorCode[LoginErrorCode["Success"] = 0] = "Success";
            LoginErrorCode[LoginErrorCode["UserNotFound"] = 1] = "UserNotFound";
            LoginErrorCode[LoginErrorCode["PasswordVerificationFailed"] = 2] = "PasswordVerificationFailed";
            LoginErrorCode[LoginErrorCode["InvalidCredentials"] = 3] = "InvalidCredentials";
            LoginErrorCode[LoginErrorCode["AppNotFound"] = 4] = "AppNotFound";
            LoginErrorCode[LoginErrorCode["AppVerificationFailed"] = 5] = "AppVerificationFailed";
            LoginErrorCode[LoginErrorCode["InvalidDevice"] = 6] = "InvalidDevice";
            LoginErrorCode[LoginErrorCode["AgreementsNotSigned"] = 7] = "AgreementsNotSigned";
            LoginErrorCode[LoginErrorCode["UnknownError"] = 8] = "UnknownError";
            LoginErrorCode[LoginErrorCode["ApiSubscriptionNotFound"] = 9] = "ApiSubscriptionNotFound";
            LoginErrorCode[LoginErrorCode["ApiKeyAuthenticationDisabled"] = 10] = "ApiKeyAuthenticationDisabled";
        })(LoginErrorCode = Topstep.LoginErrorCode || (Topstep.LoginErrorCode = {}));
        class LoginAppRequest {
            userName;
            password;
            deviceId;
            appId;
            verifyKey;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.userName = _data["userName"];
                    this.password = _data["password"];
                    this.deviceId = _data["deviceId"];
                    this.appId = _data["appId"];
                    this.verifyKey = _data["verifyKey"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, LoginAppRequest);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["userName"] = this.userName;
                data["password"] = this.password;
                data["deviceId"] = this.deviceId;
                data["appId"] = this.appId;
                data["verifyKey"] = this.verifyKey;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new LoginAppRequest();
                result.init(json);
                return result;
            }
        }
        Topstep.LoginAppRequest = LoginAppRequest;
        class LoginApiKeyRequest {
            userName;
            apiKey;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.userName = _data["userName"];
                    this.apiKey = _data["apiKey"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, LoginApiKeyRequest);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["userName"] = this.userName;
                data["apiKey"] = this.apiKey;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new LoginApiKeyRequest();
                result.init(json);
                return result;
            }
        }
        Topstep.LoginApiKeyRequest = LoginApiKeyRequest;
        class LogoutResponse {
            success;
            errorCode;
            errorMessage;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.success = _data["success"];
                    this.errorCode = _data["errorCode"];
                    this.errorMessage = _data["errorMessage"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, LogoutResponse);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["success"] = this.success;
                data["errorCode"] = this.errorCode;
                data["errorMessage"] = this.errorMessage;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new LogoutResponse();
                result.init(json);
                return result;
            }
        }
        Topstep.LogoutResponse = LogoutResponse;
        /** 0 = Success 1 = InvalidSession 2 = UnknownError */
        let LogoutErrorCode;
        (function (LogoutErrorCode) {
            LogoutErrorCode[LogoutErrorCode["Success"] = 0] = "Success";
            LogoutErrorCode[LogoutErrorCode["InvalidSession"] = 1] = "InvalidSession";
            LogoutErrorCode[LogoutErrorCode["UnknownError"] = 2] = "UnknownError";
        })(LogoutErrorCode = Topstep.LogoutErrorCode || (Topstep.LogoutErrorCode = {}));
        class ValidateResponse {
            success;
            errorCode;
            errorMessage;
            newToken;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.success = _data["success"];
                    this.errorCode = _data["errorCode"];
                    this.errorMessage = _data["errorMessage"];
                    this.newToken = _data["newToken"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, ValidateResponse);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["success"] = this.success;
                data["errorCode"] = this.errorCode;
                data["errorMessage"] = this.errorMessage;
                data["newToken"] = this.newToken;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new ValidateResponse();
                result.init(json);
                return result;
            }
        }
        Topstep.ValidateResponse = ValidateResponse;
        /** 0 = Success 1 = InvalidSession 2 = SessionNotFound 3 = ExpiredToken 4 = UnknownError */
        let ValidateErrorCode;
        (function (ValidateErrorCode) {
            ValidateErrorCode[ValidateErrorCode["Success"] = 0] = "Success";
            ValidateErrorCode[ValidateErrorCode["InvalidSession"] = 1] = "InvalidSession";
            ValidateErrorCode[ValidateErrorCode["SessionNotFound"] = 2] = "SessionNotFound";
            ValidateErrorCode[ValidateErrorCode["ExpiredToken"] = 3] = "ExpiredToken";
            ValidateErrorCode[ValidateErrorCode["UnknownError"] = 4] = "UnknownError";
        })(ValidateErrorCode = Topstep.ValidateErrorCode || (Topstep.ValidateErrorCode = {}));
        class SearchContractResponse {
            success;
            errorCode;
            errorMessage;
            contracts;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                    if (data.contracts) {
                        this.contracts = [];
                        for (let i = 0; i < data.contracts.length; i++) {
                            let item = data.contracts[i];
                            this.contracts[i] = item && !item.toJSON ? new ContractModel(item) : item;
                        }
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.success = _data["success"];
                    this.errorCode = _data["errorCode"];
                    this.errorMessage = _data["errorMessage"];
                    if (Array.isArray(_data["contracts"])) {
                        this.contracts = [];
                        for (let item of _data["contracts"])
                            this.contracts.push(ContractModel.fromJS(item, _mappings));
                    }
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, SearchContractResponse);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["success"] = this.success;
                data["errorCode"] = this.errorCode;
                data["errorMessage"] = this.errorMessage;
                if (Array.isArray(this.contracts)) {
                    data["contracts"] = [];
                    for (let item of this.contracts)
                        data["contracts"].push(item ? item.toJSON() : undefined);
                }
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new SearchContractResponse();
                result.init(json);
                return result;
            }
        }
        Topstep.SearchContractResponse = SearchContractResponse;
        /** 0 = Success */
        let SearchContractErrorCode;
        (function (SearchContractErrorCode) {
            SearchContractErrorCode[SearchContractErrorCode["Success"] = 0] = "Success";
        })(SearchContractErrorCode = Topstep.SearchContractErrorCode || (Topstep.SearchContractErrorCode = {}));
        class ContractModel {
            id;
            name;
            description;
            tickSize;
            tickValue;
            activeContract;
            symbolId;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
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
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, ContractModel);
            }
            toJSON(data) {
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
            clone() {
                const json = this.toJSON();
                let result = new ContractModel();
                result.init(json);
                return result;
            }
        }
        Topstep.ContractModel = ContractModel;
        class SearchContractRequest {
            searchText;
            live;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.searchText = _data["searchText"];
                    this.live = _data["live"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, SearchContractRequest);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["searchText"] = this.searchText;
                data["live"] = this.live;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new SearchContractRequest();
                result.init(json);
                return result;
            }
        }
        Topstep.SearchContractRequest = SearchContractRequest;
        class SearchContractByIdResponse {
            success;
            errorCode;
            errorMessage;
            contract;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                    this.contract = data.contract && !data.contract.toJSON ? new ContractModel(data.contract) : this.contract;
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.success = _data["success"];
                    this.errorCode = _data["errorCode"];
                    this.errorMessage = _data["errorMessage"];
                    this.contract = _data["contract"] ? ContractModel.fromJS(_data["contract"], _mappings) : undefined;
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, SearchContractByIdResponse);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["success"] = this.success;
                data["errorCode"] = this.errorCode;
                data["errorMessage"] = this.errorMessage;
                data["contract"] = this.contract ? this.contract.toJSON() : undefined;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new SearchContractByIdResponse();
                result.init(json);
                return result;
            }
        }
        Topstep.SearchContractByIdResponse = SearchContractByIdResponse;
        /** 0 = Success 1 = ContractNotFound */
        let SearchContractByIdErrorCode;
        (function (SearchContractByIdErrorCode) {
            SearchContractByIdErrorCode[SearchContractByIdErrorCode["Success"] = 0] = "Success";
            SearchContractByIdErrorCode[SearchContractByIdErrorCode["ContractNotFound"] = 1] = "ContractNotFound";
        })(SearchContractByIdErrorCode = Topstep.SearchContractByIdErrorCode || (Topstep.SearchContractByIdErrorCode = {}));
        class SearchContractByIdRequest {
            contractId;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.contractId = _data["contractId"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, SearchContractByIdRequest);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["contractId"] = this.contractId;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new SearchContractByIdRequest();
                result.init(json);
                return result;
            }
        }
        Topstep.SearchContractByIdRequest = SearchContractByIdRequest;
        class ListAvailableContractResponse {
            success;
            errorCode;
            errorMessage;
            contracts;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                    if (data.contracts) {
                        this.contracts = [];
                        for (let i = 0; i < data.contracts.length; i++) {
                            let item = data.contracts[i];
                            this.contracts[i] = item && !item.toJSON ? new ContractModel(item) : item;
                        }
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.success = _data["success"];
                    this.errorCode = _data["errorCode"];
                    this.errorMessage = _data["errorMessage"];
                    if (Array.isArray(_data["contracts"])) {
                        this.contracts = [];
                        for (let item of _data["contracts"])
                            this.contracts.push(ContractModel.fromJS(item, _mappings));
                    }
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, ListAvailableContractResponse);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["success"] = this.success;
                data["errorCode"] = this.errorCode;
                data["errorMessage"] = this.errorMessage;
                if (Array.isArray(this.contracts)) {
                    data["contracts"] = [];
                    for (let item of this.contracts)
                        data["contracts"].push(item ? item.toJSON() : undefined);
                }
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new ListAvailableContractResponse();
                result.init(json);
                return result;
            }
        }
        Topstep.ListAvailableContractResponse = ListAvailableContractResponse;
        /** 0 = Success */
        let ListAvailableContractErrorCode;
        (function (ListAvailableContractErrorCode) {
            ListAvailableContractErrorCode[ListAvailableContractErrorCode["Success"] = 0] = "Success";
        })(ListAvailableContractErrorCode = Topstep.ListAvailableContractErrorCode || (Topstep.ListAvailableContractErrorCode = {}));
        class ListAvailableContractRequest {
            live;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.live = _data["live"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, ListAvailableContractRequest);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["live"] = this.live;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new ListAvailableContractRequest();
                result.init(json);
                return result;
            }
        }
        Topstep.ListAvailableContractRequest = ListAvailableContractRequest;
        class RetrieveBarResponse {
            success;
            errorCode;
            errorMessage;
            bars;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                    if (data.bars) {
                        this.bars = [];
                        for (let i = 0; i < data.bars.length; i++) {
                            let item = data.bars[i];
                            this.bars[i] = item && !item.toJSON ? new AggregateBarModel(item) : item;
                        }
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.success = _data["success"];
                    this.errorCode = _data["errorCode"];
                    this.errorMessage = _data["errorMessage"];
                    if (Array.isArray(_data["bars"])) {
                        this.bars = [];
                        for (let item of _data["bars"])
                            this.bars.push(AggregateBarModel.fromJS(item, _mappings));
                    }
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, RetrieveBarResponse);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["success"] = this.success;
                data["errorCode"] = this.errorCode;
                data["errorMessage"] = this.errorMessage;
                if (Array.isArray(this.bars)) {
                    data["bars"] = [];
                    for (let item of this.bars)
                        data["bars"].push(item ? item.toJSON() : undefined);
                }
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new RetrieveBarResponse();
                result.init(json);
                return result;
            }
        }
        Topstep.RetrieveBarResponse = RetrieveBarResponse;
        /** 0 = Success 1 = ContractNotFound 2 = UnitInvalid 3 = UnitNumberInvalid 4 = LimitInvalid */
        let RetrieveBarErrorCode;
        (function (RetrieveBarErrorCode) {
            RetrieveBarErrorCode[RetrieveBarErrorCode["Success"] = 0] = "Success";
            RetrieveBarErrorCode[RetrieveBarErrorCode["ContractNotFound"] = 1] = "ContractNotFound";
            RetrieveBarErrorCode[RetrieveBarErrorCode["UnitInvalid"] = 2] = "UnitInvalid";
            RetrieveBarErrorCode[RetrieveBarErrorCode["UnitNumberInvalid"] = 3] = "UnitNumberInvalid";
            RetrieveBarErrorCode[RetrieveBarErrorCode["LimitInvalid"] = 4] = "LimitInvalid";
        })(RetrieveBarErrorCode = Topstep.RetrieveBarErrorCode || (Topstep.RetrieveBarErrorCode = {}));
        class AggregateBarModel {
            t;
            o;
            h;
            l;
            c;
            v;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.t = _data["t"] ? new Date(_data["t"].toString()) : undefined;
                    this.o = _data["o"];
                    this.h = _data["h"];
                    this.l = _data["l"];
                    this.c = _data["c"];
                    this.v = _data["v"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, AggregateBarModel);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["t"] = this.t ? this.t.toISOString() : undefined;
                data["o"] = this.o;
                data["h"] = this.h;
                data["l"] = this.l;
                data["c"] = this.c;
                data["v"] = this.v;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new AggregateBarModel();
                result.init(json);
                return result;
            }
        }
        Topstep.AggregateBarModel = AggregateBarModel;
        class RetrieveBarRequest {
            contractId;
            live;
            startTime;
            endTime;
            unit;
            unitNumber;
            limit;
            includePartialBar;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.contractId = _data["contractId"];
                    this.live = _data["live"];
                    this.startTime = _data["startTime"] ? new Date(_data["startTime"].toString()) : undefined;
                    this.endTime = _data["endTime"] ? new Date(_data["endTime"].toString()) : undefined;
                    this.unit = _data["unit"];
                    this.unitNumber = _data["unitNumber"];
                    this.limit = _data["limit"];
                    this.includePartialBar = _data["includePartialBar"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, RetrieveBarRequest);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["contractId"] = this.contractId;
                data["live"] = this.live;
                data["startTime"] = this.startTime ? this.startTime.toISOString() : undefined;
                data["endTime"] = this.endTime ? this.endTime.toISOString() : undefined;
                data["unit"] = this.unit;
                data["unitNumber"] = this.unitNumber;
                data["limit"] = this.limit;
                data["includePartialBar"] = this.includePartialBar;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new RetrieveBarRequest();
                result.init(json);
                return result;
            }
        }
        Topstep.RetrieveBarRequest = RetrieveBarRequest;
        /** 0 = Unspecified 1 = Second 2 = Minute 3 = Hour 4 = Day 5 = Week 6 = Month */
        let AggregateBarUnit;
        (function (AggregateBarUnit) {
            AggregateBarUnit[AggregateBarUnit["Unspecified"] = 0] = "Unspecified";
            AggregateBarUnit[AggregateBarUnit["Second"] = 1] = "Second";
            AggregateBarUnit[AggregateBarUnit["Minute"] = 2] = "Minute";
            AggregateBarUnit[AggregateBarUnit["Hour"] = 3] = "Hour";
            AggregateBarUnit[AggregateBarUnit["Day"] = 4] = "Day";
            AggregateBarUnit[AggregateBarUnit["Week"] = 5] = "Week";
            AggregateBarUnit[AggregateBarUnit["Month"] = 6] = "Month";
        })(AggregateBarUnit = Topstep.AggregateBarUnit || (Topstep.AggregateBarUnit = {}));
        class SearchOrderResponse {
            success;
            errorCode;
            errorMessage;
            orders;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                    if (data.orders) {
                        this.orders = [];
                        for (let i = 0; i < data.orders.length; i++) {
                            let item = data.orders[i];
                            this.orders[i] = item && !item.toJSON ? new OrderModel(item) : item;
                        }
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.success = _data["success"];
                    this.errorCode = _data["errorCode"];
                    this.errorMessage = _data["errorMessage"];
                    if (Array.isArray(_data["orders"])) {
                        this.orders = [];
                        for (let item of _data["orders"])
                            this.orders.push(OrderModel.fromJS(item, _mappings));
                    }
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, SearchOrderResponse);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["success"] = this.success;
                data["errorCode"] = this.errorCode;
                data["errorMessage"] = this.errorMessage;
                if (Array.isArray(this.orders)) {
                    data["orders"] = [];
                    for (let item of this.orders)
                        data["orders"].push(item ? item.toJSON() : undefined);
                }
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new SearchOrderResponse();
                result.init(json);
                return result;
            }
        }
        Topstep.SearchOrderResponse = SearchOrderResponse;
        /** 0 = Success 1 = AccountNotFound */
        let SearchOrderErrorCode;
        (function (SearchOrderErrorCode) {
            SearchOrderErrorCode[SearchOrderErrorCode["Success"] = 0] = "Success";
            SearchOrderErrorCode[SearchOrderErrorCode["AccountNotFound"] = 1] = "AccountNotFound";
        })(SearchOrderErrorCode = Topstep.SearchOrderErrorCode || (Topstep.SearchOrderErrorCode = {}));
        class OrderModel {
            id;
            accountId;
            contractId;
            symbolId;
            creationTimestamp;
            updateTimestamp;
            status;
            type;
            side;
            size;
            limitPrice;
            stopPrice;
            fillVolume;
            filledPrice;
            customTag;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.id = _data["id"];
                    this.accountId = _data["accountId"];
                    this.contractId = _data["contractId"];
                    this.symbolId = _data["symbolId"];
                    this.creationTimestamp = _data["creationTimestamp"] ? new Date(_data["creationTimestamp"].toString()) : undefined;
                    this.updateTimestamp = _data["updateTimestamp"] ? new Date(_data["updateTimestamp"].toString()) : undefined;
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
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, OrderModel);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["id"] = this.id;
                data["accountId"] = this.accountId;
                data["contractId"] = this.contractId;
                data["symbolId"] = this.symbolId;
                data["creationTimestamp"] = this.creationTimestamp ? this.creationTimestamp.toISOString() : undefined;
                data["updateTimestamp"] = this.updateTimestamp ? this.updateTimestamp.toISOString() : undefined;
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
            clone() {
                const json = this.toJSON();
                let result = new OrderModel();
                result.init(json);
                return result;
            }
        }
        Topstep.OrderModel = OrderModel;
        /** 0 = None 1 = Open 2 = Filled 3 = Cancelled 4 = Expired 5 = Rejected 6 = Pending */
        let OrderStatus;
        (function (OrderStatus) {
            OrderStatus[OrderStatus["None"] = 0] = "None";
            OrderStatus[OrderStatus["Open"] = 1] = "Open";
            OrderStatus[OrderStatus["Filled"] = 2] = "Filled";
            OrderStatus[OrderStatus["Cancelled"] = 3] = "Cancelled";
            OrderStatus[OrderStatus["Expired"] = 4] = "Expired";
            OrderStatus[OrderStatus["Rejected"] = 5] = "Rejected";
            OrderStatus[OrderStatus["Pending"] = 6] = "Pending";
        })(OrderStatus = Topstep.OrderStatus || (Topstep.OrderStatus = {}));
        /** 0 = Unknown 1 = Limit 2 = Market 3 = StopLimit 4 = Stop 5 = TrailingStop 6 = JoinBid 7 = JoinAsk */
        let OrderType;
        (function (OrderType) {
            OrderType[OrderType["Unknown"] = 0] = "Unknown";
            OrderType[OrderType["Limit"] = 1] = "Limit";
            OrderType[OrderType["Market"] = 2] = "Market";
            OrderType[OrderType["StopLimit"] = 3] = "StopLimit";
            OrderType[OrderType["Stop"] = 4] = "Stop";
            OrderType[OrderType["TrailingStop"] = 5] = "TrailingStop";
            OrderType[OrderType["JoinBid"] = 6] = "JoinBid";
            OrderType[OrderType["JoinAsk"] = 7] = "JoinAsk";
        })(OrderType = Topstep.OrderType || (Topstep.OrderType = {}));
        /** 0 = Bid 1 = Ask */
        let OrderSide;
        (function (OrderSide) {
            OrderSide[OrderSide["Bid"] = 0] = "Bid";
            OrderSide[OrderSide["Ask"] = 1] = "Ask";
        })(OrderSide = Topstep.OrderSide || (Topstep.OrderSide = {}));
        class SearchOrderRequest {
            accountId;
            startTimestamp;
            endTimestamp;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.accountId = _data["accountId"];
                    this.startTimestamp = _data["startTimestamp"] ? new Date(_data["startTimestamp"].toString()) : undefined;
                    this.endTimestamp = _data["endTimestamp"] ? new Date(_data["endTimestamp"].toString()) : undefined;
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, SearchOrderRequest);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["accountId"] = this.accountId;
                data["startTimestamp"] = this.startTimestamp ? this.startTimestamp.toISOString() : undefined;
                data["endTimestamp"] = this.endTimestamp ? this.endTimestamp.toISOString() : undefined;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new SearchOrderRequest();
                result.init(json);
                return result;
            }
        }
        Topstep.SearchOrderRequest = SearchOrderRequest;
        class SearchOpenOrderRequest {
            accountId;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.accountId = _data["accountId"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, SearchOpenOrderRequest);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["accountId"] = this.accountId;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new SearchOpenOrderRequest();
                result.init(json);
                return result;
            }
        }
        Topstep.SearchOpenOrderRequest = SearchOpenOrderRequest;
        class PlaceOrderResponse {
            success;
            errorCode;
            errorMessage;
            orderId;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.success = _data["success"];
                    this.errorCode = _data["errorCode"];
                    this.errorMessage = _data["errorMessage"];
                    this.orderId = _data["orderId"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, PlaceOrderResponse);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["success"] = this.success;
                data["errorCode"] = this.errorCode;
                data["errorMessage"] = this.errorMessage;
                data["orderId"] = this.orderId;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new PlaceOrderResponse();
                result.init(json);
                return result;
            }
        }
        Topstep.PlaceOrderResponse = PlaceOrderResponse;
        /** 0 = Success 1 = AccountNotFound 2 = OrderRejected 3 = InsufficientFunds 4 = AccountViolation 5 = OutsideTradingHours 6 = OrderPending 7 = UnknownError 8 = ContractNotFound 9 = ContractNotActive 10 = AccountRejected */
        let PlaceOrderErrorCode;
        (function (PlaceOrderErrorCode) {
            PlaceOrderErrorCode[PlaceOrderErrorCode["Success"] = 0] = "Success";
            PlaceOrderErrorCode[PlaceOrderErrorCode["AccountNotFound"] = 1] = "AccountNotFound";
            PlaceOrderErrorCode[PlaceOrderErrorCode["OrderRejected"] = 2] = "OrderRejected";
            PlaceOrderErrorCode[PlaceOrderErrorCode["InsufficientFunds"] = 3] = "InsufficientFunds";
            PlaceOrderErrorCode[PlaceOrderErrorCode["AccountViolation"] = 4] = "AccountViolation";
            PlaceOrderErrorCode[PlaceOrderErrorCode["OutsideTradingHours"] = 5] = "OutsideTradingHours";
            PlaceOrderErrorCode[PlaceOrderErrorCode["OrderPending"] = 6] = "OrderPending";
            PlaceOrderErrorCode[PlaceOrderErrorCode["UnknownError"] = 7] = "UnknownError";
            PlaceOrderErrorCode[PlaceOrderErrorCode["ContractNotFound"] = 8] = "ContractNotFound";
            PlaceOrderErrorCode[PlaceOrderErrorCode["ContractNotActive"] = 9] = "ContractNotActive";
            PlaceOrderErrorCode[PlaceOrderErrorCode["AccountRejected"] = 10] = "AccountRejected";
        })(PlaceOrderErrorCode = Topstep.PlaceOrderErrorCode || (Topstep.PlaceOrderErrorCode = {}));
        class PlaceOrderRequest {
            accountId;
            contractId;
            type;
            side;
            size;
            limitPrice;
            stopPrice;
            trailPrice;
            customTag;
            linkedOrderId;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
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
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, PlaceOrderRequest);
            }
            toJSON(data) {
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
            clone() {
                const json = this.toJSON();
                let result = new PlaceOrderRequest();
                result.init(json);
                return result;
            }
        }
        Topstep.PlaceOrderRequest = PlaceOrderRequest;
        class CancelOrderResponse {
            success;
            errorCode;
            errorMessage;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.success = _data["success"];
                    this.errorCode = _data["errorCode"];
                    this.errorMessage = _data["errorMessage"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, CancelOrderResponse);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["success"] = this.success;
                data["errorCode"] = this.errorCode;
                data["errorMessage"] = this.errorMessage;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new CancelOrderResponse();
                result.init(json);
                return result;
            }
        }
        Topstep.CancelOrderResponse = CancelOrderResponse;
        /** 0 = Success 1 = AccountNotFound 2 = OrderNotFound 3 = Rejected 4 = Pending 5 = UnknownError 6 = AccountRejected */
        let CancelOrderErrorCode;
        (function (CancelOrderErrorCode) {
            CancelOrderErrorCode[CancelOrderErrorCode["Success"] = 0] = "Success";
            CancelOrderErrorCode[CancelOrderErrorCode["AccountNotFound"] = 1] = "AccountNotFound";
            CancelOrderErrorCode[CancelOrderErrorCode["OrderNotFound"] = 2] = "OrderNotFound";
            CancelOrderErrorCode[CancelOrderErrorCode["Rejected"] = 3] = "Rejected";
            CancelOrderErrorCode[CancelOrderErrorCode["Pending"] = 4] = "Pending";
            CancelOrderErrorCode[CancelOrderErrorCode["UnknownError"] = 5] = "UnknownError";
            CancelOrderErrorCode[CancelOrderErrorCode["AccountRejected"] = 6] = "AccountRejected";
        })(CancelOrderErrorCode = Topstep.CancelOrderErrorCode || (Topstep.CancelOrderErrorCode = {}));
        class CancelOrderRequest {
            accountId;
            orderId;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.accountId = _data["accountId"];
                    this.orderId = _data["orderId"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, CancelOrderRequest);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["accountId"] = this.accountId;
                data["orderId"] = this.orderId;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new CancelOrderRequest();
                result.init(json);
                return result;
            }
        }
        Topstep.CancelOrderRequest = CancelOrderRequest;
        class ModifyOrderResponse {
            success;
            errorCode;
            errorMessage;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.success = _data["success"];
                    this.errorCode = _data["errorCode"];
                    this.errorMessage = _data["errorMessage"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, ModifyOrderResponse);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["success"] = this.success;
                data["errorCode"] = this.errorCode;
                data["errorMessage"] = this.errorMessage;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new ModifyOrderResponse();
                result.init(json);
                return result;
            }
        }
        Topstep.ModifyOrderResponse = ModifyOrderResponse;
        /** 0 = Success 1 = AccountNotFound 2 = OrderNotFound 3 = Rejected 4 = Pending 5 = UnknownError 6 = AccountRejected 7 = ContractNotFound */
        let ModifyOrderErrorCode;
        (function (ModifyOrderErrorCode) {
            ModifyOrderErrorCode[ModifyOrderErrorCode["Success"] = 0] = "Success";
            ModifyOrderErrorCode[ModifyOrderErrorCode["AccountNotFound"] = 1] = "AccountNotFound";
            ModifyOrderErrorCode[ModifyOrderErrorCode["OrderNotFound"] = 2] = "OrderNotFound";
            ModifyOrderErrorCode[ModifyOrderErrorCode["Rejected"] = 3] = "Rejected";
            ModifyOrderErrorCode[ModifyOrderErrorCode["Pending"] = 4] = "Pending";
            ModifyOrderErrorCode[ModifyOrderErrorCode["UnknownError"] = 5] = "UnknownError";
            ModifyOrderErrorCode[ModifyOrderErrorCode["AccountRejected"] = 6] = "AccountRejected";
            ModifyOrderErrorCode[ModifyOrderErrorCode["ContractNotFound"] = 7] = "ContractNotFound";
        })(ModifyOrderErrorCode = Topstep.ModifyOrderErrorCode || (Topstep.ModifyOrderErrorCode = {}));
        class ModifyOrderRequest {
            accountId;
            orderId;
            size;
            limitPrice;
            stopPrice;
            trailPrice;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.accountId = _data["accountId"];
                    this.orderId = _data["orderId"];
                    this.size = _data["size"];
                    this.limitPrice = _data["limitPrice"];
                    this.stopPrice = _data["stopPrice"];
                    this.trailPrice = _data["trailPrice"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, ModifyOrderRequest);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["accountId"] = this.accountId;
                data["orderId"] = this.orderId;
                data["size"] = this.size;
                data["limitPrice"] = this.limitPrice;
                data["stopPrice"] = this.stopPrice;
                data["trailPrice"] = this.trailPrice;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new ModifyOrderRequest();
                result.init(json);
                return result;
            }
        }
        Topstep.ModifyOrderRequest = ModifyOrderRequest;
        class SearchPositionResponse {
            success;
            errorCode;
            errorMessage;
            positions;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                    if (data.positions) {
                        this.positions = [];
                        for (let i = 0; i < data.positions.length; i++) {
                            let item = data.positions[i];
                            this.positions[i] = item && !item.toJSON ? new PositionModel(item) : item;
                        }
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.success = _data["success"];
                    this.errorCode = _data["errorCode"];
                    this.errorMessage = _data["errorMessage"];
                    if (Array.isArray(_data["positions"])) {
                        this.positions = [];
                        for (let item of _data["positions"])
                            this.positions.push(PositionModel.fromJS(item, _mappings));
                    }
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, SearchPositionResponse);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["success"] = this.success;
                data["errorCode"] = this.errorCode;
                data["errorMessage"] = this.errorMessage;
                if (Array.isArray(this.positions)) {
                    data["positions"] = [];
                    for (let item of this.positions)
                        data["positions"].push(item ? item.toJSON() : undefined);
                }
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new SearchPositionResponse();
                result.init(json);
                return result;
            }
        }
        Topstep.SearchPositionResponse = SearchPositionResponse;
        /** 0 = Success 1 = AccountNotFound */
        let SearchPositionErrorCode;
        (function (SearchPositionErrorCode) {
            SearchPositionErrorCode[SearchPositionErrorCode["Success"] = 0] = "Success";
            SearchPositionErrorCode[SearchPositionErrorCode["AccountNotFound"] = 1] = "AccountNotFound";
        })(SearchPositionErrorCode = Topstep.SearchPositionErrorCode || (Topstep.SearchPositionErrorCode = {}));
        class PositionModel {
            id;
            accountId;
            contractId;
            creationTimestamp;
            type;
            size;
            averagePrice;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.id = _data["id"];
                    this.accountId = _data["accountId"];
                    this.contractId = _data["contractId"];
                    this.creationTimestamp = _data["creationTimestamp"] ? new Date(_data["creationTimestamp"].toString()) : undefined;
                    this.type = _data["type"];
                    this.size = _data["size"];
                    this.averagePrice = _data["averagePrice"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, PositionModel);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["id"] = this.id;
                data["accountId"] = this.accountId;
                data["contractId"] = this.contractId;
                data["creationTimestamp"] = this.creationTimestamp ? this.creationTimestamp.toISOString() : undefined;
                data["type"] = this.type;
                data["size"] = this.size;
                data["averagePrice"] = this.averagePrice;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new PositionModel();
                result.init(json);
                return result;
            }
        }
        Topstep.PositionModel = PositionModel;
        /** 0 = Undefined 1 = Long 2 = Short */
        let PositionType;
        (function (PositionType) {
            PositionType[PositionType["Undefined"] = 0] = "Undefined";
            PositionType[PositionType["Long"] = 1] = "Long";
            PositionType[PositionType["Short"] = 2] = "Short";
        })(PositionType = Topstep.PositionType || (Topstep.PositionType = {}));
        class SearchPositionRequest {
            accountId;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.accountId = _data["accountId"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, SearchPositionRequest);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["accountId"] = this.accountId;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new SearchPositionRequest();
                result.init(json);
                return result;
            }
        }
        Topstep.SearchPositionRequest = SearchPositionRequest;
        class ClosePositionResponse {
            success;
            errorCode;
            errorMessage;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.success = _data["success"];
                    this.errorCode = _data["errorCode"];
                    this.errorMessage = _data["errorMessage"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, ClosePositionResponse);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["success"] = this.success;
                data["errorCode"] = this.errorCode;
                data["errorMessage"] = this.errorMessage;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new ClosePositionResponse();
                result.init(json);
                return result;
            }
        }
        Topstep.ClosePositionResponse = ClosePositionResponse;
        /** 0 = Success 1 = AccountNotFound 2 = PositionNotFound 3 = ContractNotFound 4 = ContractNotActive 5 = OrderRejected 6 = OrderPending 7 = UnknownError 8 = AccountRejected */
        let ClosePositionErrorCode;
        (function (ClosePositionErrorCode) {
            ClosePositionErrorCode[ClosePositionErrorCode["Success"] = 0] = "Success";
            ClosePositionErrorCode[ClosePositionErrorCode["AccountNotFound"] = 1] = "AccountNotFound";
            ClosePositionErrorCode[ClosePositionErrorCode["PositionNotFound"] = 2] = "PositionNotFound";
            ClosePositionErrorCode[ClosePositionErrorCode["ContractNotFound"] = 3] = "ContractNotFound";
            ClosePositionErrorCode[ClosePositionErrorCode["ContractNotActive"] = 4] = "ContractNotActive";
            ClosePositionErrorCode[ClosePositionErrorCode["OrderRejected"] = 5] = "OrderRejected";
            ClosePositionErrorCode[ClosePositionErrorCode["OrderPending"] = 6] = "OrderPending";
            ClosePositionErrorCode[ClosePositionErrorCode["UnknownError"] = 7] = "UnknownError";
            ClosePositionErrorCode[ClosePositionErrorCode["AccountRejected"] = 8] = "AccountRejected";
        })(ClosePositionErrorCode = Topstep.ClosePositionErrorCode || (Topstep.ClosePositionErrorCode = {}));
        class CloseContractPositionRequest {
            accountId;
            contractId;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.accountId = _data["accountId"];
                    this.contractId = _data["contractId"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, CloseContractPositionRequest);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["accountId"] = this.accountId;
                data["contractId"] = this.contractId;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new CloseContractPositionRequest();
                result.init(json);
                return result;
            }
        }
        Topstep.CloseContractPositionRequest = CloseContractPositionRequest;
        class PartialClosePositionResponse {
            success;
            errorCode;
            errorMessage;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.success = _data["success"];
                    this.errorCode = _data["errorCode"];
                    this.errorMessage = _data["errorMessage"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, PartialClosePositionResponse);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["success"] = this.success;
                data["errorCode"] = this.errorCode;
                data["errorMessage"] = this.errorMessage;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new PartialClosePositionResponse();
                result.init(json);
                return result;
            }
        }
        Topstep.PartialClosePositionResponse = PartialClosePositionResponse;
        /** 0 = Success 1 = AccountNotFound 2 = PositionNotFound 3 = ContractNotFound 4 = ContractNotActive 5 = InvalidCloseSize 6 = OrderRejected 7 = OrderPending 8 = UnknownError 9 = AccountRejected */
        let PartialClosePositionErrorCode;
        (function (PartialClosePositionErrorCode) {
            PartialClosePositionErrorCode[PartialClosePositionErrorCode["Success"] = 0] = "Success";
            PartialClosePositionErrorCode[PartialClosePositionErrorCode["AccountNotFound"] = 1] = "AccountNotFound";
            PartialClosePositionErrorCode[PartialClosePositionErrorCode["PositionNotFound"] = 2] = "PositionNotFound";
            PartialClosePositionErrorCode[PartialClosePositionErrorCode["ContractNotFound"] = 3] = "ContractNotFound";
            PartialClosePositionErrorCode[PartialClosePositionErrorCode["ContractNotActive"] = 4] = "ContractNotActive";
            PartialClosePositionErrorCode[PartialClosePositionErrorCode["InvalidCloseSize"] = 5] = "InvalidCloseSize";
            PartialClosePositionErrorCode[PartialClosePositionErrorCode["OrderRejected"] = 6] = "OrderRejected";
            PartialClosePositionErrorCode[PartialClosePositionErrorCode["OrderPending"] = 7] = "OrderPending";
            PartialClosePositionErrorCode[PartialClosePositionErrorCode["UnknownError"] = 8] = "UnknownError";
            PartialClosePositionErrorCode[PartialClosePositionErrorCode["AccountRejected"] = 9] = "AccountRejected";
        })(PartialClosePositionErrorCode = Topstep.PartialClosePositionErrorCode || (Topstep.PartialClosePositionErrorCode = {}));
        class PartialCloseContractPositionRequest {
            accountId;
            contractId;
            size;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.accountId = _data["accountId"];
                    this.contractId = _data["contractId"];
                    this.size = _data["size"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, PartialCloseContractPositionRequest);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["accountId"] = this.accountId;
                data["contractId"] = this.contractId;
                data["size"] = this.size;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new PartialCloseContractPositionRequest();
                result.init(json);
                return result;
            }
        }
        Topstep.PartialCloseContractPositionRequest = PartialCloseContractPositionRequest;
        class SearchHalfTradeResponse {
            success;
            errorCode;
            errorMessage;
            trades;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                    if (data.trades) {
                        this.trades = [];
                        for (let i = 0; i < data.trades.length; i++) {
                            let item = data.trades[i];
                            this.trades[i] = item && !item.toJSON ? new HalfTradeModel(item) : item;
                        }
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.success = _data["success"];
                    this.errorCode = _data["errorCode"];
                    this.errorMessage = _data["errorMessage"];
                    if (Array.isArray(_data["trades"])) {
                        this.trades = [];
                        for (let item of _data["trades"])
                            this.trades.push(HalfTradeModel.fromJS(item, _mappings));
                    }
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, SearchHalfTradeResponse);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["success"] = this.success;
                data["errorCode"] = this.errorCode;
                data["errorMessage"] = this.errorMessage;
                if (Array.isArray(this.trades)) {
                    data["trades"] = [];
                    for (let item of this.trades)
                        data["trades"].push(item ? item.toJSON() : undefined);
                }
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new SearchHalfTradeResponse();
                result.init(json);
                return result;
            }
        }
        Topstep.SearchHalfTradeResponse = SearchHalfTradeResponse;
        /** 0 = Success 1 = AccountNotFound */
        let SearchTradeErrorCode;
        (function (SearchTradeErrorCode) {
            SearchTradeErrorCode[SearchTradeErrorCode["Success"] = 0] = "Success";
            SearchTradeErrorCode[SearchTradeErrorCode["AccountNotFound"] = 1] = "AccountNotFound";
        })(SearchTradeErrorCode = Topstep.SearchTradeErrorCode || (Topstep.SearchTradeErrorCode = {}));
        class HalfTradeModel {
            id;
            accountId;
            contractId;
            creationTimestamp;
            price;
            profitAndLoss;
            fees;
            side;
            size;
            voided;
            orderId;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.id = _data["id"];
                    this.accountId = _data["accountId"];
                    this.contractId = _data["contractId"];
                    this.creationTimestamp = _data["creationTimestamp"] ? new Date(_data["creationTimestamp"].toString()) : undefined;
                    this.price = _data["price"];
                    this.profitAndLoss = _data["profitAndLoss"];
                    this.fees = _data["fees"];
                    this.side = _data["side"];
                    this.size = _data["size"];
                    this.voided = _data["voided"];
                    this.orderId = _data["orderId"];
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, HalfTradeModel);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["id"] = this.id;
                data["accountId"] = this.accountId;
                data["contractId"] = this.contractId;
                data["creationTimestamp"] = this.creationTimestamp ? this.creationTimestamp.toISOString() : undefined;
                data["price"] = this.price;
                data["profitAndLoss"] = this.profitAndLoss;
                data["fees"] = this.fees;
                data["side"] = this.side;
                data["size"] = this.size;
                data["voided"] = this.voided;
                data["orderId"] = this.orderId;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new HalfTradeModel();
                result.init(json);
                return result;
            }
        }
        Topstep.HalfTradeModel = HalfTradeModel;
        class SearchTradeRequest {
            accountId;
            startTimestamp;
            endTimestamp;
            constructor(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            init(_data, _mappings) {
                if (_data) {
                    this.accountId = _data["accountId"];
                    this.startTimestamp = _data["startTimestamp"] ? new Date(_data["startTimestamp"].toString()) : undefined;
                    this.endTimestamp = _data["endTimestamp"] ? new Date(_data["endTimestamp"].toString()) : undefined;
                }
            }
            static fromJS(data, _mappings) {
                data = typeof data === 'object' ? data : {};
                return createInstance(data, _mappings, SearchTradeRequest);
            }
            toJSON(data) {
                data = typeof data === 'object' ? data : {};
                data["accountId"] = this.accountId;
                data["startTimestamp"] = this.startTimestamp ? this.startTimestamp.toISOString() : undefined;
                data["endTimestamp"] = this.endTimestamp ? this.endTimestamp.toISOString() : undefined;
                return data;
            }
            clone() {
                const json = this.toJSON();
                let result = new SearchTradeRequest();
                result.init(json);
                return result;
            }
        }
        Topstep.SearchTradeRequest = SearchTradeRequest;
        function jsonParse(json, reviver) {
            json = JSON.parse(json, reviver);
            var byid = {};
            var refs = [];
            json = (function recurse(obj, prop, parent) {
                if (typeof obj !== 'object' || !obj)
                    return obj;
                if ("$ref" in obj) {
                    let ref = obj.$ref;
                    if (ref in byid)
                        return byid[ref];
                    refs.push([parent, prop, ref]);
                    return undefined;
                }
                else if ("$id" in obj) {
                    let id = obj.$id;
                    delete obj.$id;
                    if ("$values" in obj)
                        obj = obj.$values;
                    byid[id] = obj;
                }
                if (Array.isArray(obj)) {
                    obj = obj.map((v, i) => recurse(v, i, obj));
                }
                else {
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
        function createInstance(data, mappings, type) {
            if (!mappings)
                mappings = [];
            if (!data)
                return null;
            const mappingIndexName = "__mappingIndex";
            if (data[mappingIndexName])
                return mappings[data[mappingIndexName]].target;
            data[mappingIndexName] = mappings.length;
            let result = new type();
            mappings.push({ source: data, target: result });
            result.init(data, mappings);
            return result;
        }
        class SwaggerResponse {
            status;
            headers;
            result;
            constructor(status, headers, result) {
                this.status = status;
                this.headers = headers;
                this.result = result;
            }
        }
        Topstep.SwaggerResponse = SwaggerResponse;
        class ApiException extends Error {
            message;
            status;
            response;
            headers;
            result;
            constructor(message, status, response, headers, result) {
                super();
                this.message = message;
                this.status = status;
                this.response = response;
                this.headers = headers;
                this.result = result;
            }
            isApiException = true;
            static isApiException(obj) {
                return obj.isApiException === true;
            }
        }
        Topstep.ApiException = ApiException;
        function throwException(message, status, response, headers, result) {
            if (result !== null && result !== undefined)
                throw result;
            else
                throw new ApiException(message, status, response, headers, null);
        }
        function isAxiosError(obj) {
            return obj && obj.isAxiosError === true;
        }
    })(Topstep || (Topstep = {}));
})(Trading || (exports.Trading = Trading = {}));
//# sourceMappingURL=TopstepClient.js.map