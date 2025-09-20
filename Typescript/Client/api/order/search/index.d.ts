import { type SearchOrderRequest, type SearchOrderResponse } from '../../../models/index.js';
import { type BaseRequestBuilder, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Order/search
 */
export interface SearchRequestBuilder extends BaseRequestBuilder<SearchRequestBuilder> {
    /**
     * Searches for orders based on the provided request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SearchOrderResponse>}
     */
    post(body: SearchOrderRequest, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<SearchOrderResponse | undefined>;
    /**
     * Searches for orders based on the provided request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: SearchOrderRequest, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const SearchRequestBuilderUriTemplate = "{+baseurl}/api/Order/search";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const SearchRequestBuilderRequestsMetadata: RequestsMetadata;
//# sourceMappingURL=index.d.ts.map