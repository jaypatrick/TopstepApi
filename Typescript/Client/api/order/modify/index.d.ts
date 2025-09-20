import { type ModifyOrderRequest, type ModifyOrderResponse } from '../../../models/index.js';
import { type BaseRequestBuilder, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Order/modify
 */
export interface ModifyRequestBuilder extends BaseRequestBuilder<ModifyRequestBuilder> {
    /**
     * Modifies an existing order based on the provided request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ModifyOrderResponse>}
     */
    post(body: ModifyOrderRequest, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<ModifyOrderResponse | undefined>;
    /**
     * Modifies an existing order based on the provided request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: ModifyOrderRequest, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const ModifyRequestBuilderUriTemplate = "{+baseurl}/api/Order/modify";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const ModifyRequestBuilderRequestsMetadata: RequestsMetadata;
//# sourceMappingURL=index.d.ts.map