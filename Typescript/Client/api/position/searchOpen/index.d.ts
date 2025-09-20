import { type SearchPositionRequest, type SearchPositionResponse } from '../../../models/index.js';
import { type BaseRequestBuilder, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Position/searchOpen
 */
export interface SearchOpenRequestBuilder extends BaseRequestBuilder<SearchOpenRequestBuilder> {
    /**
     * Searches for open positions based on the provided request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SearchPositionResponse>}
     */
    post(body: SearchPositionRequest, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<SearchPositionResponse | undefined>;
    /**
     * Searches for open positions based on the provided request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: SearchPositionRequest, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const SearchOpenRequestBuilderUriTemplate = "{+baseurl}/api/Position/searchOpen";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const SearchOpenRequestBuilderRequestsMetadata: RequestsMetadata;
//# sourceMappingURL=index.d.ts.map