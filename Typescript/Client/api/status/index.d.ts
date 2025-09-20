import { type PingRequestBuilder } from './ping/index.js';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Status
 */
export interface StatusRequestBuilder extends BaseRequestBuilder<StatusRequestBuilder> {
    /**
     * The ping property
     */
    get ping(): PingRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export declare const StatusRequestBuilderUriTemplate = "{+baseurl}/api/Status";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const StatusRequestBuilderNavigationMetadata: Record<Exclude<keyof StatusRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
//# sourceMappingURL=index.d.ts.map