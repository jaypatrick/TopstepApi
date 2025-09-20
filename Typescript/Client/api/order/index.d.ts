import { type CancelRequestBuilder } from './cancel/index.js';
import { type ModifyRequestBuilder } from './modify/index.js';
import { type PlaceRequestBuilder } from './place/index.js';
import { type SearchRequestBuilder } from './search/index.js';
import { type SearchOpenRequestBuilder } from './searchOpen/index.js';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Order
 */
export interface OrderRequestBuilder extends BaseRequestBuilder<OrderRequestBuilder> {
    /**
     * The cancel property
     */
    get cancel(): CancelRequestBuilder;
    /**
     * The modify property
     */
    get modify(): ModifyRequestBuilder;
    /**
     * The place property
     */
    get place(): PlaceRequestBuilder;
    /**
     * The search property
     */
    get search(): SearchRequestBuilder;
    /**
     * The searchOpen property
     */
    get searchOpen(): SearchOpenRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export declare const OrderRequestBuilderUriTemplate = "{+baseurl}/api/Order";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const OrderRequestBuilderNavigationMetadata: Record<Exclude<keyof OrderRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
//# sourceMappingURL=index.d.ts.map