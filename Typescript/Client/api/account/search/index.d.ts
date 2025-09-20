import { type SearchAccountRequest, type SearchAccountResponse } from '../../../models/index.js';
import { type BaseRequestBuilder, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Account/search
 */
export interface SearchRequestBuilder extends BaseRequestBuilder<SearchRequestBuilder> {
    /**
     * Searches for accounts based on the provided request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SearchAccountResponse>}
     */
    post(body: SearchAccountRequest, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<SearchAccountResponse | undefined>;
    /**
     * Searches for accounts based on the provided request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: SearchAccountRequest, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const SearchRequestBuilderUriTemplate = "{+baseurl}/api/Account/search";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const SearchRequestBuilderRequestsMetadata: RequestsMetadata;
//# sourceMappingURL=index.d.ts.map