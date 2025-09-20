import { type SearchRequestBuilder } from './search/index.js';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Trade
 */
export interface TradeRequestBuilder extends BaseRequestBuilder<TradeRequestBuilder> {
    /**
     * The search property
     */
    get search(): SearchRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export declare const TradeRequestBuilderUriTemplate = "{+baseurl}/api/Trade";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const TradeRequestBuilderNavigationMetadata: Record<Exclude<keyof TradeRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
//# sourceMappingURL=index.d.ts.map