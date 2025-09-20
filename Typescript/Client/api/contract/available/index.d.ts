import { type ListAvailableContractRequest, type ListAvailableContractResponse } from '../../../models/index.js';
import { type BaseRequestBuilder, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Contract/available
 */
export interface AvailableRequestBuilder extends BaseRequestBuilder<AvailableRequestBuilder> {
    /**
     * Lists available contracts based on the provided request parameters.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ListAvailableContractResponse>}
     */
    post(body: ListAvailableContractRequest, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<ListAvailableContractResponse | undefined>;
    /**
     * Lists available contracts based on the provided request parameters.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: ListAvailableContractRequest, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const AvailableRequestBuilderUriTemplate = "{+baseurl}/api/Contract/available";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const AvailableRequestBuilderRequestsMetadata: RequestsMetadata;
//# sourceMappingURL=index.d.ts.map