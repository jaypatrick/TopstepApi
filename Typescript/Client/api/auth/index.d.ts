import { type LoginAppRequestBuilder } from './loginApp/index.js';
import { type LoginKeyRequestBuilder } from './loginKey/index.js';
import { type LogoutRequestBuilder } from './logout/index.js';
import { type ValidateRequestBuilder } from './validate/index.js';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /api/Auth
 */
export interface AuthRequestBuilder extends BaseRequestBuilder<AuthRequestBuilder> {
    /**
     * The loginApp property
     */
    get loginApp(): LoginAppRequestBuilder;
    /**
     * The loginKey property
     */
    get loginKey(): LoginKeyRequestBuilder;
    /**
     * The logout property
     */
    get logout(): LogoutRequestBuilder;
    /**
     * The validate property
     */
    get validate(): ValidateRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export declare const AuthRequestBuilderUriTemplate = "{+baseurl}/api/Auth";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const AuthRequestBuilderNavigationMetadata: Record<Exclude<keyof AuthRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
//# sourceMappingURL=index.d.ts.map