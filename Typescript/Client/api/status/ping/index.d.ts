import { type BaseRequestBuilder, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Status/ping
 */
export interface PingRequestBuilder extends BaseRequestBuilder<PingRequestBuilder> {
    /**
     * Handles the ping request to check the status of the API.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<string>}
     */
    get(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<string | undefined>;
    /**
     * Handles the ping request to check the status of the API.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const PingRequestBuilderUriTemplate = "{+baseurl}/api/Status/ping";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const PingRequestBuilderRequestsMetadata: RequestsMetadata;
//# sourceMappingURL=index.d.ts.map