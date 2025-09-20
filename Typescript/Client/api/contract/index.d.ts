import { type AvailableRequestBuilder } from './available/index.js';
import { type SearchRequestBuilder } from './search/index.js';
import { type SearchByIdRequestBuilder } from './searchById/index.js';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Contract
 */
export interface ContractRequestBuilder extends BaseRequestBuilder<ContractRequestBuilder> {
    /**
     * The available property
     */
    get available(): AvailableRequestBuilder;
    /**
     * The search property
     */
    get search(): SearchRequestBuilder;
    /**
     * The searchById property
     */
    get searchById(): SearchByIdRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export declare const ContractRequestBuilderUriTemplate = "{+baseurl}/api/Contract";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const ContractRequestBuilderNavigationMetadata: Record<Exclude<keyof ContractRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
//# sourceMappingURL=index.d.ts.map