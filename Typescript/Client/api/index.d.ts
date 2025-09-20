import { type AccountRequestBuilder } from './account/index.js';
import { type AuthRequestBuilder } from './auth/index.js';
import { type ContractRequestBuilder } from './contract/index.js';
import { type HistoryRequestBuilder } from './history/index.js';
import { type OrderRequestBuilder } from './order/index.js';
import { type PositionRequestBuilder } from './position/index.js';
import { type StatusRequestBuilder } from './status/index.js';
import { type TradeRequestBuilder } from './trade/index.js';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api
 */
export interface ApiRequestBuilder extends BaseRequestBuilder<ApiRequestBuilder> {
    /**
     * The Account property
     */
    get account(): AccountRequestBuilder;
    /**
     * The Auth property
     */
    get auth(): AuthRequestBuilder;
    /**
     * The Contract property
     */
    get contract(): ContractRequestBuilder;
    /**
     * The History property
     */
    get history(): HistoryRequestBuilder;
    /**
     * The Order property
     */
    get order(): OrderRequestBuilder;
    /**
     * The Position property
     */
    get position(): PositionRequestBuilder;
    /**
     * The Status property
     */
    get status(): StatusRequestBuilder;
    /**
     * The Trade property
     */
    get trade(): TradeRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export declare const ApiRequestBuilderUriTemplate = "{+baseurl}/api";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const ApiRequestBuilderNavigationMetadata: Record<Exclude<keyof ApiRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
//# sourceMappingURL=index.d.ts.map