import { type SearchContractByIdRequest, type SearchContractByIdResponse } from '../../../models/index.js';
import { type BaseRequestBuilder, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Contract/searchById
 */
export interface SearchByIdRequestBuilder extends BaseRequestBuilder<SearchByIdRequestBuilder> {
    /**
     * Searches for a contract by its ID.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SearchContractByIdResponse>}
     */
    post(body: SearchContractByIdRequest, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<SearchContractByIdResponse | undefined>;
    /**
     * Searches for a contract by its ID.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: SearchContractByIdRequest, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const SearchByIdRequestBuilderUriTemplate = "{+baseurl}/api/Contract/searchById";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const SearchByIdRequestBuilderRequestsMetadata: RequestsMetadata;
//# sourceMappingURL=index.d.ts.map