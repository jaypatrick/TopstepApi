import { type ValidateResponse } from '../../../models/index.js';
import { type BaseRequestBuilder, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Auth/validate
 */
export interface ValidateRequestBuilder extends BaseRequestBuilder<ValidateRequestBuilder> {
    /**
     * Validates the current user's session.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ValidateResponse>}
     */
    post(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<ValidateResponse | undefined>;
    /**
     * Validates the current user's session.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const ValidateRequestBuilderUriTemplate = "{+baseurl}/api/Auth/validate";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const ValidateRequestBuilderRequestsMetadata: RequestsMetadata;
//# sourceMappingURL=index.d.ts.map