import { type SearchRequestBuilder } from './search/index.js';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Account
 */
export interface AccountRequestBuilder extends BaseRequestBuilder<AccountRequestBuilder> {
    /**
     * The search property
     */
    get search(): SearchRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export declare const AccountRequestBuilderUriTemplate = "{+baseurl}/api/Account";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const AccountRequestBuilderNavigationMetadata: Record<Exclude<keyof AccountRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
//# sourceMappingURL=index.d.ts.map