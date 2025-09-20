import { type LoginAppRequest, type LoginResponse } from '../../../models/index.js';
import { type BaseRequestBuilder, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Auth/loginApp
 */
export interface LoginAppRequestBuilder extends BaseRequestBuilder<LoginAppRequestBuilder> {
    /**
     * Login as the specified user using the specified application.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<LoginResponse>}
     */
    post(body: LoginAppRequest, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<LoginResponse | undefined>;
    /**
     * Login as the specified user using the specified application.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: LoginAppRequest, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const LoginAppRequestBuilderUriTemplate = "{+baseurl}/api/Auth/loginApp";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const LoginAppRequestBuilderRequestsMetadata: RequestsMetadata;
//# sourceMappingURL=index.d.ts.map