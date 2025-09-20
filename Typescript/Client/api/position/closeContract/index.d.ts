import { type CloseContractPositionRequest, type ClosePositionResponse } from '../../../models/index.js';
import { type BaseRequestBuilder, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Position/closeContract
 */
export interface CloseContractRequestBuilder extends BaseRequestBuilder<CloseContractRequestBuilder> {
    /**
     * Closes a contract position based on the provided request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ClosePositionResponse>}
     */
    post(body: CloseContractPositionRequest, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<ClosePositionResponse | undefined>;
    /**
     * Closes a contract position based on the provided request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: CloseContractPositionRequest, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const CloseContractRequestBuilderUriTemplate = "{+baseurl}/api/Position/closeContract";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const CloseContractRequestBuilderRequestsMetadata: RequestsMetadata;
//# sourceMappingURL=index.d.ts.map