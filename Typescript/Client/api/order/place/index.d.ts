import { type PlaceOrderRequest, type PlaceOrderResponse } from '../../../models/index.js';
import { type BaseRequestBuilder, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Order/place
 */
export interface PlaceRequestBuilder extends BaseRequestBuilder<PlaceRequestBuilder> {
    /**
     * Places a new order based on the provided request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PlaceOrderResponse>}
     */
    post(body: PlaceOrderRequest, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<PlaceOrderResponse | undefined>;
    /**
     * Places a new order based on the provided request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: PlaceOrderRequest, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const PlaceRequestBuilderUriTemplate = "{+baseurl}/api/Order/place";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const PlaceRequestBuilderRequestsMetadata: RequestsMetadata;
//# sourceMappingURL=index.d.ts.map