import { type RetrieveBarRequest, type RetrieveBarResponse } from '../../../models/index.js';
import { type BaseRequestBuilder, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/History/retrieveBars
 */
export interface RetrieveBarsRequestBuilder extends BaseRequestBuilder<RetrieveBarsRequestBuilder> {
    /**
     * Retrieves historical bars based on the specified request parameters.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<RetrieveBarResponse>}
     */
    post(body: RetrieveBarRequest, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<RetrieveBarResponse | undefined>;
    /**
     * Retrieves historical bars based on the specified request parameters.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: RetrieveBarRequest, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const RetrieveBarsRequestBuilderUriTemplate = "{+baseurl}/api/History/retrieveBars";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const RetrieveBarsRequestBuilderRequestsMetadata: RequestsMetadata;
//# sourceMappingURL=index.d.ts.map