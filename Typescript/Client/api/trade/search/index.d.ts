import { type SearchHalfTradeResponse, type SearchTradeRequest } from '../../../models/index.js';
import { type BaseRequestBuilder, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Trade/search
 */
export interface SearchRequestBuilder extends BaseRequestBuilder<SearchRequestBuilder> {
    /**
     * Searches for half-turn trades based on the provided request parameters.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SearchHalfTradeResponse>}
     */
    post(body: SearchTradeRequest, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<SearchHalfTradeResponse | undefined>;
    /**
     * Searches for half-turn trades based on the provided request parameters.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: SearchTradeRequest, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const SearchRequestBuilderUriTemplate = "{+baseurl}/api/Trade/search";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const SearchRequestBuilderRequestsMetadata: RequestsMetadata;
//# sourceMappingURL=index.d.ts.map