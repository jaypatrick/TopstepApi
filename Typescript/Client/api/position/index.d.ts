import { type CloseContractRequestBuilder } from './closeContract/index.js';
import { type PartialCloseContractRequestBuilder } from './partialCloseContract/index.js';
import { type SearchOpenRequestBuilder } from './searchOpen/index.js';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Position
 */
export interface PositionRequestBuilder extends BaseRequestBuilder<PositionRequestBuilder> {
    /**
     * The closeContract property
     */
    get closeContract(): CloseContractRequestBuilder;
    /**
     * The partialCloseContract property
     */
    get partialCloseContract(): PartialCloseContractRequestBuilder;
    /**
     * The searchOpen property
     */
    get searchOpen(): SearchOpenRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export declare const PositionRequestBuilderUriTemplate = "{+baseurl}/api/Position";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const PositionRequestBuilderNavigationMetadata: Record<Exclude<keyof PositionRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
//# sourceMappingURL=index.d.ts.map