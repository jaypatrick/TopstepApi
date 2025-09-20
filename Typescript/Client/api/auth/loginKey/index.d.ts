import { type LoginApiKeyRequest, type LoginResponse } from '../../../models/index.js';
import { type BaseRequestBuilder, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Auth/loginKey
 */
export interface LoginKeyRequestBuilder extends BaseRequestBuilder<LoginKeyRequestBuilder> {
    /**
     * Login as the specified user using the specified API key.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<LoginResponse>}
     */
    post(body: LoginApiKeyRequest, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<LoginResponse | undefined>;
    /**
     * Login as the specified user using the specified API key.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: LoginApiKeyRequest, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const LoginKeyRequestBuilderUriTemplate = "{+baseurl}/api/Auth/loginKey";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const LoginKeyRequestBuilderRequestsMetadata: RequestsMetadata;
//# sourceMappingURL=index.d.ts.map