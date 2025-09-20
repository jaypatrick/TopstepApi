import { type SearchContractRequest, type SearchContractResponse } from '../../../models/index.js';
import { type BaseRequestBuilder, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Contract/search
 */
export interface SearchRequestBuilder extends BaseRequestBuilder<SearchRequestBuilder> {
    /**
     * Searches for contracts based on the provided search criteria.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SearchContractResponse>}
     */
    post(body: SearchContractRequest, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<SearchContractResponse | undefined>;
    /**
     * Searches for contracts based on the provided search criteria.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: SearchContractRequest, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const SearchRequestBuilderUriTemplate = "{+baseurl}/api/Contract/search";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const SearchRequestBuilderRequestsMetadata: RequestsMetadata;
//# sourceMappingURL=index.d.ts.map