import { type PartialCloseContractPositionRequest, type PartialClosePositionResponse } from '../../../models/index.js';
import { type BaseRequestBuilder, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Position/partialCloseContract
 */
export interface PartialCloseContractRequestBuilder extends BaseRequestBuilder<PartialCloseContractRequestBuilder> {
    /**
     * Partially closes a contract position based on the provided request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PartialClosePositionResponse>}
     */
    post(body: PartialCloseContractPositionRequest, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<PartialClosePositionResponse | undefined>;
    /**
     * Partially closes a contract position based on the provided request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: PartialCloseContractPositionRequest, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const PartialCloseContractRequestBuilderUriTemplate = "{+baseurl}/api/Position/partialCloseContract";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const PartialCloseContractRequestBuilderRequestsMetadata: RequestsMetadata;
//# sourceMappingURL=index.d.ts.map