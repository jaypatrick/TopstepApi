import { type CancelOrderRequest, type CancelOrderResponse } from '../../../models/index.js';
import { type BaseRequestBuilder, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Order/cancel
 */
export interface CancelRequestBuilder extends BaseRequestBuilder<CancelRequestBuilder> {
    /**
     * Cancels an existing order based on the provided request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CancelOrderResponse>}
     */
    post(body: CancelOrderRequest, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<CancelOrderResponse | undefined>;
    /**
     * Cancels an existing order based on the provided request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: CancelOrderRequest, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const CancelRequestBuilderUriTemplate = "{+baseurl}/api/Order/cancel";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const CancelRequestBuilderRequestsMetadata: RequestsMetadata;
//# sourceMappingURL=index.d.ts.map