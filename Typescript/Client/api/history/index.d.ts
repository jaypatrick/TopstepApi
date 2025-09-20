import { type RetrieveBarsRequestBuilder } from './retrieveBars/index.js';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/History
 */
export interface HistoryRequestBuilder extends BaseRequestBuilder<HistoryRequestBuilder> {
    /**
     * The retrieveBars property
     */
    get retrieveBars(): RetrieveBarsRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export declare const HistoryRequestBuilderUriTemplate = "{+baseurl}/api/History";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const HistoryRequestBuilderNavigationMetadata: Record<Exclude<keyof HistoryRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
//# sourceMappingURL=index.d.ts.map