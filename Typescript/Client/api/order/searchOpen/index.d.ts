import { type SearchOpenOrderRequest, type SearchOrderResponse } from '../../../models/index.js';
import { type BaseRequestBuilder, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Order/searchOpen
 */
export interface SearchOpenRequestBuilder extends BaseRequestBuilder<SearchOpenRequestBuilder> {
    /**
     * Searches for open (working/active) orders based on the provided request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SearchOrderResponse>}
     */
    post(body: SearchOpenOrderRequest, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<SearchOrderResponse | undefined>;
    /**
     * Searches for open (working/active) orders based on the provided request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: SearchOpenOrderRequest, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const SearchOpenRequestBuilderUriTemplate = "{+baseurl}/api/Order/searchOpen";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const SearchOpenRequestBuilderRequestsMetadata: RequestsMetadata;
//# sourceMappingURL=index.d.ts.map