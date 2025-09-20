import { type LogoutResponse } from '../../../models/index.js';
import { type BaseRequestBuilder, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Auth/logout
 */
export interface LogoutRequestBuilder extends BaseRequestBuilder<LogoutRequestBuilder> {
    /**
     * Logs out the current authenticated user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<LogoutResponse>}
     */
    post(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<LogoutResponse | undefined>;
    /**
     * Logs out the current authenticated user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const LogoutRequestBuilderUriTemplate = "{+baseurl}/api/Auth/logout";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const LogoutRequestBuilderRequestsMetadata: RequestsMetadata;
//# sourceMappingURL=index.d.ts.map