import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';
export interface AggregateBarModel extends AdditionalDataHolder, Parsable {
    /**
     * The c property
     */
    c?: number | null;
    /**
     * The h property
     */
    h?: number | null;
    /**
     * The l property
     */
    l?: number | null;
    /**
     * The o property
     */
    o?: number | null;
    /**
     * The t property
     */
    t?: Date | null;
    /**
     * The v property
     */
    v?: number | null;
}
export interface CancelOrderRequest extends AdditionalDataHolder, Parsable {
    /**
     * The accountId property
     */
    accountId?: number | null;
    /**
     * The orderId property
     */
    orderId?: number | null;
}
export interface CancelOrderResponse extends AdditionalDataHolder, Parsable {
    /**
     * 0 = Success1 = AccountNotFound2 = OrderNotFound3 = Rejected4 = Pending5 = UnknownError6 = AccountRejected
     */
    errorCode?: number | null;
    /**
     * The errorMessage property
     */
    errorMessage?: string | null;
    /**
     * The success property
     */
    success?: boolean | null;
}
export interface CloseContractPositionRequest extends AdditionalDataHolder, Parsable {
    /**
     * The accountId property
     */
    accountId?: number | null;
    /**
     * The contractId property
     */
    contractId?: string | null;
}
export interface ClosePositionResponse extends AdditionalDataHolder, Parsable {
    /**
     * 0 = Success1 = AccountNotFound2 = PositionNotFound3 = ContractNotFound4 = ContractNotActive5 = OrderRejected6 = OrderPending7 = UnknownError8 = AccountRejected
     */
    errorCode?: number | null;
    /**
     * The errorMessage property
     */
    errorMessage?: string | null;
    /**
     * The success property
     */
    success?: boolean | null;
}
export interface ContractModel extends AdditionalDataHolder, Parsable {
    /**
     * The activeContract property
     */
    activeContract?: boolean | null;
    /**
     * The description property
     */
    description?: string | null;
    /**
     * The id property
     */
    id?: string | null;
    /**
     * The name property
     */
    name?: string | null;
    /**
     * The symbolId property
     */
    symbolId?: string | null;
    /**
     * The tickSize property
     */
    tickSize?: number | null;
    /**
     * The tickValue property
     */
    tickValue?: number | null;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {AggregateBarModel}
 */
export declare function createAggregateBarModelFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CancelOrderRequest}
 */
export declare function createCancelOrderRequestFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CancelOrderResponse}
 */
export declare function createCancelOrderResponseFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CloseContractPositionRequest}
 */
export declare function createCloseContractPositionRequestFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ClosePositionResponse}
 */
export declare function createClosePositionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ContractModel}
 */
export declare function createContractModelFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {HalfTradeModel}
 */
export declare function createHalfTradeModelFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ListAvailableContractRequest}
 */
export declare function createListAvailableContractRequestFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ListAvailableContractResponse}
 */
export declare function createListAvailableContractResponseFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {LoginApiKeyRequest}
 */
export declare function createLoginApiKeyRequestFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {LoginAppRequest}
 */
export declare function createLoginAppRequestFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {LoginResponse}
 */
export declare function createLoginResponseFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {LogoutResponse}
 */
export declare function createLogoutResponseFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ModifyOrderRequest}
 */
export declare function createModifyOrderRequestFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ModifyOrderResponse}
 */
export declare function createModifyOrderResponseFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {OrderModel}
 */
export declare function createOrderModelFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {PartialCloseContractPositionRequest}
 */
export declare function createPartialCloseContractPositionRequestFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {PartialClosePositionResponse}
 */
export declare function createPartialClosePositionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {PlaceOrderBracket}
 */
export declare function createPlaceOrderBracketFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {PlaceOrderRequest}
 */
export declare function createPlaceOrderRequestFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {PlaceOrderResponse}
 */
export declare function createPlaceOrderResponseFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {PositionModel}
 */
export declare function createPositionModelFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {RetrieveBarRequest}
 */
export declare function createRetrieveBarRequestFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {RetrieveBarResponse}
 */
export declare function createRetrieveBarResponseFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchAccountRequest}
 */
export declare function createSearchAccountRequestFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchAccountResponse}
 */
export declare function createSearchAccountResponseFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchContractByIdRequest}
 */
export declare function createSearchContractByIdRequestFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchContractByIdResponse}
 */
export declare function createSearchContractByIdResponseFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchContractRequest}
 */
export declare function createSearchContractRequestFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchContractResponse}
 */
export declare function createSearchContractResponseFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchHalfTradeResponse}
 */
export declare function createSearchHalfTradeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchOpenOrderRequest}
 */
export declare function createSearchOpenOrderRequestFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchOrderRequest}
 */
export declare function createSearchOrderRequestFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchOrderResponse}
 */
export declare function createSearchOrderResponseFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchPositionRequest}
 */
export declare function createSearchPositionRequestFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchPositionResponse}
 */
export declare function createSearchPositionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchTradeRequest}
 */
export declare function createSearchTradeRequestFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {TradingAccountModel}
 */
export declare function createTradingAccountModelFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ValidateResponse}
 */
export declare function createValidateResponseFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * The deserialization information for the current model
 * @param AggregateBarModel The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoAggregateBarModel(aggregateBarModel?: Partial<AggregateBarModel> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param CancelOrderRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoCancelOrderRequest(cancelOrderRequest?: Partial<CancelOrderRequest> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param CancelOrderResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoCancelOrderResponse(cancelOrderResponse?: Partial<CancelOrderResponse> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param CloseContractPositionRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoCloseContractPositionRequest(closeContractPositionRequest?: Partial<CloseContractPositionRequest> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param ClosePositionResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoClosePositionResponse(closePositionResponse?: Partial<ClosePositionResponse> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param ContractModel The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoContractModel(contractModel?: Partial<ContractModel> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param HalfTradeModel The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoHalfTradeModel(halfTradeModel?: Partial<HalfTradeModel> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param ListAvailableContractRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoListAvailableContractRequest(listAvailableContractRequest?: Partial<ListAvailableContractRequest> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param ListAvailableContractResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoListAvailableContractResponse(listAvailableContractResponse?: Partial<ListAvailableContractResponse> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param LoginApiKeyRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoLoginApiKeyRequest(loginApiKeyRequest?: Partial<LoginApiKeyRequest> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param LoginAppRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoLoginAppRequest(loginAppRequest?: Partial<LoginAppRequest> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param LoginResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoLoginResponse(loginResponse?: Partial<LoginResponse> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param LogoutResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoLogoutResponse(logoutResponse?: Partial<LogoutResponse> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param ModifyOrderRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoModifyOrderRequest(modifyOrderRequest?: Partial<ModifyOrderRequest> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param ModifyOrderResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoModifyOrderResponse(modifyOrderResponse?: Partial<ModifyOrderResponse> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param OrderModel The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoOrderModel(orderModel?: Partial<OrderModel> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param PartialCloseContractPositionRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoPartialCloseContractPositionRequest(partialCloseContractPositionRequest?: Partial<PartialCloseContractPositionRequest> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param PartialClosePositionResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoPartialClosePositionResponse(partialClosePositionResponse?: Partial<PartialClosePositionResponse> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param PlaceOrderBracket The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoPlaceOrderBracket(placeOrderBracket?: Partial<PlaceOrderBracket> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param PlaceOrderRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoPlaceOrderRequest(placeOrderRequest?: Partial<PlaceOrderRequest> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param PlaceOrderResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoPlaceOrderResponse(placeOrderResponse?: Partial<PlaceOrderResponse> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param PositionModel The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoPositionModel(positionModel?: Partial<PositionModel> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param RetrieveBarRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoRetrieveBarRequest(retrieveBarRequest?: Partial<RetrieveBarRequest> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param RetrieveBarResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoRetrieveBarResponse(retrieveBarResponse?: Partial<RetrieveBarResponse> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param SearchAccountRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoSearchAccountRequest(searchAccountRequest?: Partial<SearchAccountRequest> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param SearchAccountResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoSearchAccountResponse(searchAccountResponse?: Partial<SearchAccountResponse> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param SearchContractByIdRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoSearchContractByIdRequest(searchContractByIdRequest?: Partial<SearchContractByIdRequest> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param SearchContractByIdResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoSearchContractByIdResponse(searchContractByIdResponse?: Partial<SearchContractByIdResponse> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param SearchContractRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoSearchContractRequest(searchContractRequest?: Partial<SearchContractRequest> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param SearchContractResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoSearchContractResponse(searchContractResponse?: Partial<SearchContractResponse> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param SearchHalfTradeResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoSearchHalfTradeResponse(searchHalfTradeResponse?: Partial<SearchHalfTradeResponse> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param SearchOpenOrderRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoSearchOpenOrderRequest(searchOpenOrderRequest?: Partial<SearchOpenOrderRequest> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param SearchOrderRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoSearchOrderRequest(searchOrderRequest?: Partial<SearchOrderRequest> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param SearchOrderResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoSearchOrderResponse(searchOrderResponse?: Partial<SearchOrderResponse> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param SearchPositionRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoSearchPositionRequest(searchPositionRequest?: Partial<SearchPositionRequest> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param SearchPositionResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoSearchPositionResponse(searchPositionResponse?: Partial<SearchPositionResponse> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param SearchTradeRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoSearchTradeRequest(searchTradeRequest?: Partial<SearchTradeRequest> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param TradingAccountModel The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoTradingAccountModel(tradingAccountModel?: Partial<TradingAccountModel> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @param ValidateResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoValidateResponse(validateResponse?: Partial<ValidateResponse> | undefined): Record<string, (node: ParseNode) => void>;
export interface HalfTradeModel extends AdditionalDataHolder, Parsable {
    /**
     * The accountId property
     */
    accountId?: number | null;
    /**
     * The contractId property
     */
    contractId?: string | null;
    /**
     * The creationTimestamp property
     */
    creationTimestamp?: Date | null;
    /**
     * The fees property
     */
    fees?: number | null;
    /**
     * The id property
     */
    id?: number | null;
    /**
     * The orderId property
     */
    orderId?: number | null;
    /**
     * The price property
     */
    price?: number | null;
    /**
     * The profitAndLoss property
     */
    profitAndLoss?: number | null;
    /**
     * 0 = Bid1 = Ask
     */
    side?: number | null;
    /**
     * The size property
     */
    size?: number | null;
    /**
     * The voided property
     */
    voided?: boolean | null;
}
export interface ListAvailableContractRequest extends AdditionalDataHolder, Parsable {
    /**
     * The live property
     */
    live?: boolean | null;
}
export interface ListAvailableContractResponse extends AdditionalDataHolder, Parsable {
    /**
     * The contracts property
     */
    contracts?: ContractModel[] | null;
    /**
     * 0 = Success
     */
    errorCode?: number | null;
    /**
     * The errorMessage property
     */
    errorMessage?: string | null;
    /**
     * The success property
     */
    success?: boolean | null;
}
export interface LoginApiKeyRequest extends AdditionalDataHolder, Parsable {
    /**
     * The apiKey property
     */
    apiKey?: string | null;
    /**
     * The userName property
     */
    userName?: string | null;
}
export interface LoginAppRequest extends AdditionalDataHolder, Parsable {
    /**
     * The appId property
     */
    appId?: string | null;
    /**
     * The deviceId property
     */
    deviceId?: string | null;
    /**
     * The password property
     */
    password?: string | null;
    /**
     * The userName property
     */
    userName?: string | null;
    /**
     * The verifyKey property
     */
    verifyKey?: string | null;
}
export interface LoginResponse extends AdditionalDataHolder, Parsable {
    /**
     * 0 = Success1 = UserNotFound2 = PasswordVerificationFailed3 = InvalidCredentials4 = AppNotFound5 = AppVerificationFailed6 = InvalidDevice7 = AgreementsNotSigned8 = UnknownError9 = ApiSubscriptionNotFound10 = ApiKeyAuthenticationDisabled
     */
    errorCode?: number | null;
    /**
     * The errorMessage property
     */
    errorMessage?: string | null;
    /**
     * The success property
     */
    success?: boolean | null;
    /**
     * The token property
     */
    token?: string | null;
}
export interface LogoutResponse extends AdditionalDataHolder, Parsable {
    /**
     * 0 = Success1 = InvalidSession2 = UnknownError
     */
    errorCode?: number | null;
    /**
     * The errorMessage property
     */
    errorMessage?: string | null;
    /**
     * The success property
     */
    success?: boolean | null;
}
export interface ModifyOrderRequest extends AdditionalDataHolder, Parsable {
    /**
     * The accountId property
     */
    accountId?: number | null;
    /**
     * The limitPrice property
     */
    limitPrice?: number | null;
    /**
     * The orderId property
     */
    orderId?: number | null;
    /**
     * The size property
     */
    size?: number | null;
    /**
     * The stopPrice property
     */
    stopPrice?: number | null;
    /**
     * The trailPrice property
     */
    trailPrice?: number | null;
}
export interface ModifyOrderResponse extends AdditionalDataHolder, Parsable {
    /**
     * 0 = Success1 = AccountNotFound2 = OrderNotFound3 = Rejected4 = Pending5 = UnknownError6 = AccountRejected7 = ContractNotFound
     */
    errorCode?: number | null;
    /**
     * The errorMessage property
     */
    errorMessage?: string | null;
    /**
     * The success property
     */
    success?: boolean | null;
}
export interface OrderModel extends AdditionalDataHolder, Parsable {
    /**
     * The accountId property
     */
    accountId?: number | null;
    /**
     * The contractId property
     */
    contractId?: string | null;
    /**
     * The creationTimestamp property
     */
    creationTimestamp?: Date | null;
    /**
     * The customTag property
     */
    customTag?: string | null;
    /**
     * The filledPrice property
     */
    filledPrice?: number | null;
    /**
     * The fillVolume property
     */
    fillVolume?: number | null;
    /**
     * The id property
     */
    id?: number | null;
    /**
     * The limitPrice property
     */
    limitPrice?: number | null;
    /**
     * 0 = Bid1 = Ask
     */
    side?: number | null;
    /**
     * The size property
     */
    size?: number | null;
    /**
     * 0 = None1 = Open2 = Filled3 = Cancelled4 = Expired5 = Rejected6 = Pending7 = PendingCancellation8 = Suspended
     */
    status?: number | null;
    /**
     * The stopPrice property
     */
    stopPrice?: number | null;
    /**
     * The symbolId property
     */
    symbolId?: string | null;
    /**
     * 0 = Unknown1 = Limit2 = Market3 = StopLimit4 = Stop5 = TrailingStop6 = JoinBid7 = JoinAsk
     */
    type?: number | null;
    /**
     * The updateTimestamp property
     */
    updateTimestamp?: Date | null;
}
export interface PartialCloseContractPositionRequest extends AdditionalDataHolder, Parsable {
    /**
     * The accountId property
     */
    accountId?: number | null;
    /**
     * The contractId property
     */
    contractId?: string | null;
    /**
     * The size property
     */
    size?: number | null;
}
export interface PartialClosePositionResponse extends AdditionalDataHolder, Parsable {
    /**
     * 0 = Success1 = AccountNotFound2 = PositionNotFound3 = ContractNotFound4 = ContractNotActive5 = InvalidCloseSize6 = OrderRejected7 = OrderPending8 = UnknownError9 = AccountRejected
     */
    errorCode?: number | null;
    /**
     * The errorMessage property
     */
    errorMessage?: string | null;
    /**
     * The success property
     */
    success?: boolean | null;
}
export interface PlaceOrderBracket extends AdditionalDataHolder, Parsable {
    /**
     * The ticks property
     */
    ticks?: number | null;
    /**
     * 0 = Unknown1 = Limit2 = Market3 = StopLimit4 = Stop5 = TrailingStop6 = JoinBid7 = JoinAsk
     */
    type?: number | null;
}
export interface PlaceOrderRequest extends AdditionalDataHolder, Parsable {
    /**
     * The accountId property
     */
    accountId?: number | null;
    /**
     * The contractId property
     */
    contractId?: string | null;
    /**
     * The customTag property
     */
    customTag?: string | null;
    /**
     * The limitPrice property
     */
    limitPrice?: number | null;
    /**
     * 0 = Bid1 = Ask
     */
    side?: number | null;
    /**
     * The size property
     */
    size?: number | null;
    /**
     * The stopLossBracket property
     */
    stopLossBracket?: PlaceOrderBracket | null;
    /**
     * The stopPrice property
     */
    stopPrice?: number | null;
    /**
     * The takeProfitBracket property
     */
    takeProfitBracket?: PlaceOrderBracket | null;
    /**
     * The trailPrice property
     */
    trailPrice?: number | null;
    /**
     * 0 = Unknown1 = Limit2 = Market3 = StopLimit4 = Stop5 = TrailingStop6 = JoinBid7 = JoinAsk
     */
    type?: number | null;
}
export interface PlaceOrderResponse extends AdditionalDataHolder, Parsable {
    /**
     * 0 = Success1 = AccountNotFound2 = OrderRejected3 = InsufficientFunds4 = AccountViolation5 = OutsideTradingHours6 = OrderPending7 = UnknownError8 = ContractNotFound9 = ContractNotActive10 = AccountRejected
     */
    errorCode?: number | null;
    /**
     * The errorMessage property
     */
    errorMessage?: string | null;
    /**
     * The orderId property
     */
    orderId?: number | null;
    /**
     * The success property
     */
    success?: boolean | null;
}
export interface PositionModel extends AdditionalDataHolder, Parsable {
    /**
     * The accountId property
     */
    accountId?: number | null;
    /**
     * The averagePrice property
     */
    averagePrice?: number | null;
    /**
     * The contractId property
     */
    contractId?: string | null;
    /**
     * The creationTimestamp property
     */
    creationTimestamp?: Date | null;
    /**
     * The id property
     */
    id?: number | null;
    /**
     * The size property
     */
    size?: number | null;
    /**
     * 0 = Undefined1 = Long2 = Short
     */
    type?: number | null;
}
export interface RetrieveBarRequest extends AdditionalDataHolder, Parsable {
    /**
     * The contractId property
     */
    contractId?: string | null;
    /**
     * The endTime property
     */
    endTime?: Date | null;
    /**
     * The includePartialBar property
     */
    includePartialBar?: boolean | null;
    /**
     * The limit property
     */
    limit?: number | null;
    /**
     * The live property
     */
    live?: boolean | null;
    /**
     * The startTime property
     */
    startTime?: Date | null;
    /**
     * 0 = Unspecified1 = Second2 = Minute3 = Hour4 = Day5 = Week6 = Month
     */
    unit?: number | null;
    /**
     * The unitNumber property
     */
    unitNumber?: number | null;
}
export interface RetrieveBarResponse extends AdditionalDataHolder, Parsable {
    /**
     * The bars property
     */
    bars?: AggregateBarModel[] | null;
    /**
     * 0 = Success1 = ContractNotFound2 = UnitInvalid3 = UnitNumberInvalid4 = LimitInvalid
     */
    errorCode?: number | null;
    /**
     * The errorMessage property
     */
    errorMessage?: string | null;
    /**
     * The success property
     */
    success?: boolean | null;
}
export interface SearchAccountRequest extends AdditionalDataHolder, Parsable {
    /**
     * The onlyActiveAccounts property
     */
    onlyActiveAccounts?: boolean | null;
}
export interface SearchAccountResponse extends AdditionalDataHolder, Parsable {
    /**
     * The accounts property
     */
    accounts?: TradingAccountModel[] | null;
    /**
     * 0 = Success
     */
    errorCode?: number | null;
    /**
     * The errorMessage property
     */
    errorMessage?: string | null;
    /**
     * The success property
     */
    success?: boolean | null;
}
export interface SearchContractByIdRequest extends AdditionalDataHolder, Parsable {
    /**
     * The contractId property
     */
    contractId?: string | null;
}
export interface SearchContractByIdResponse extends AdditionalDataHolder, Parsable {
    /**
     * The contract property
     */
    contract?: ContractModel | null;
    /**
     * 0 = Success1 = ContractNotFound
     */
    errorCode?: number | null;
    /**
     * The errorMessage property
     */
    errorMessage?: string | null;
    /**
     * The success property
     */
    success?: boolean | null;
}
export interface SearchContractRequest extends AdditionalDataHolder, Parsable {
    /**
     * The live property
     */
    live?: boolean | null;
    /**
     * The searchText property
     */
    searchText?: string | null;
}
export interface SearchContractResponse extends AdditionalDataHolder, Parsable {
    /**
     * The contracts property
     */
    contracts?: ContractModel[] | null;
    /**
     * 0 = Success
     */
    errorCode?: number | null;
    /**
     * The errorMessage property
     */
    errorMessage?: string | null;
    /**
     * The success property
     */
    success?: boolean | null;
}
export interface SearchHalfTradeResponse extends AdditionalDataHolder, Parsable {
    /**
     * 0 = Success1 = AccountNotFound
     */
    errorCode?: number | null;
    /**
     * The errorMessage property
     */
    errorMessage?: string | null;
    /**
     * The success property
     */
    success?: boolean | null;
    /**
     * The trades property
     */
    trades?: HalfTradeModel[] | null;
}
export interface SearchOpenOrderRequest extends AdditionalDataHolder, Parsable {
    /**
     * The accountId property
     */
    accountId?: number | null;
}
export interface SearchOrderRequest extends AdditionalDataHolder, Parsable {
    /**
     * The accountId property
     */
    accountId?: number | null;
    /**
     * The endTimestamp property
     */
    endTimestamp?: Date | null;
    /**
     * The startTimestamp property
     */
    startTimestamp?: Date | null;
}
export interface SearchOrderResponse extends AdditionalDataHolder, Parsable {
    /**
     * 0 = Success1 = AccountNotFound
     */
    errorCode?: number | null;
    /**
     * The errorMessage property
     */
    errorMessage?: string | null;
    /**
     * The orders property
     */
    orders?: OrderModel[] | null;
    /**
     * The success property
     */
    success?: boolean | null;
}
export interface SearchPositionRequest extends AdditionalDataHolder, Parsable {
    /**
     * The accountId property
     */
    accountId?: number | null;
}
export interface SearchPositionResponse extends AdditionalDataHolder, Parsable {
    /**
     * 0 = Success1 = AccountNotFound
     */
    errorCode?: number | null;
    /**
     * The errorMessage property
     */
    errorMessage?: string | null;
    /**
     * The positions property
     */
    positions?: PositionModel[] | null;
    /**
     * The success property
     */
    success?: boolean | null;
}
export interface SearchTradeRequest extends AdditionalDataHolder, Parsable {
    /**
     * The accountId property
     */
    accountId?: number | null;
    /**
     * The endTimestamp property
     */
    endTimestamp?: Date | null;
    /**
     * The startTimestamp property
     */
    startTimestamp?: Date | null;
}
/**
 * Serializes information the current object
 * @param AggregateBarModel The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeAggregateBarModel(writer: SerializationWriter, aggregateBarModel?: Partial<AggregateBarModel> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param CancelOrderRequest The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeCancelOrderRequest(writer: SerializationWriter, cancelOrderRequest?: Partial<CancelOrderRequest> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param CancelOrderResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeCancelOrderResponse(writer: SerializationWriter, cancelOrderResponse?: Partial<CancelOrderResponse> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param CloseContractPositionRequest The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeCloseContractPositionRequest(writer: SerializationWriter, closeContractPositionRequest?: Partial<CloseContractPositionRequest> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param ClosePositionResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeClosePositionResponse(writer: SerializationWriter, closePositionResponse?: Partial<ClosePositionResponse> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param ContractModel The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeContractModel(writer: SerializationWriter, contractModel?: Partial<ContractModel> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param HalfTradeModel The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeHalfTradeModel(writer: SerializationWriter, halfTradeModel?: Partial<HalfTradeModel> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param ListAvailableContractRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeListAvailableContractRequest(writer: SerializationWriter, listAvailableContractRequest?: Partial<ListAvailableContractRequest> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param ListAvailableContractResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeListAvailableContractResponse(writer: SerializationWriter, listAvailableContractResponse?: Partial<ListAvailableContractResponse> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param LoginApiKeyRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeLoginApiKeyRequest(writer: SerializationWriter, loginApiKeyRequest?: Partial<LoginApiKeyRequest> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param LoginAppRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeLoginAppRequest(writer: SerializationWriter, loginAppRequest?: Partial<LoginAppRequest> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param LoginResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeLoginResponse(writer: SerializationWriter, loginResponse?: Partial<LoginResponse> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param LogoutResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeLogoutResponse(writer: SerializationWriter, logoutResponse?: Partial<LogoutResponse> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param ModifyOrderRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeModifyOrderRequest(writer: SerializationWriter, modifyOrderRequest?: Partial<ModifyOrderRequest> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param ModifyOrderResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeModifyOrderResponse(writer: SerializationWriter, modifyOrderResponse?: Partial<ModifyOrderResponse> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param OrderModel The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeOrderModel(writer: SerializationWriter, orderModel?: Partial<OrderModel> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param PartialCloseContractPositionRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializePartialCloseContractPositionRequest(writer: SerializationWriter, partialCloseContractPositionRequest?: Partial<PartialCloseContractPositionRequest> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param PartialClosePositionResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializePartialClosePositionResponse(writer: SerializationWriter, partialClosePositionResponse?: Partial<PartialClosePositionResponse> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param PlaceOrderBracket The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializePlaceOrderBracket(writer: SerializationWriter, placeOrderBracket?: Partial<PlaceOrderBracket> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param PlaceOrderRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializePlaceOrderRequest(writer: SerializationWriter, placeOrderRequest?: Partial<PlaceOrderRequest> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param PlaceOrderResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializePlaceOrderResponse(writer: SerializationWriter, placeOrderResponse?: Partial<PlaceOrderResponse> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param PositionModel The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializePositionModel(writer: SerializationWriter, positionModel?: Partial<PositionModel> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param RetrieveBarRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeRetrieveBarRequest(writer: SerializationWriter, retrieveBarRequest?: Partial<RetrieveBarRequest> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param RetrieveBarResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeRetrieveBarResponse(writer: SerializationWriter, retrieveBarResponse?: Partial<RetrieveBarResponse> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchAccountRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeSearchAccountRequest(writer: SerializationWriter, searchAccountRequest?: Partial<SearchAccountRequest> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchAccountResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeSearchAccountResponse(writer: SerializationWriter, searchAccountResponse?: Partial<SearchAccountResponse> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchContractByIdRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeSearchContractByIdRequest(writer: SerializationWriter, searchContractByIdRequest?: Partial<SearchContractByIdRequest> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchContractByIdResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeSearchContractByIdResponse(writer: SerializationWriter, searchContractByIdResponse?: Partial<SearchContractByIdResponse> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchContractRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeSearchContractRequest(writer: SerializationWriter, searchContractRequest?: Partial<SearchContractRequest> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchContractResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeSearchContractResponse(writer: SerializationWriter, searchContractResponse?: Partial<SearchContractResponse> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchHalfTradeResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeSearchHalfTradeResponse(writer: SerializationWriter, searchHalfTradeResponse?: Partial<SearchHalfTradeResponse> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchOpenOrderRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeSearchOpenOrderRequest(writer: SerializationWriter, searchOpenOrderRequest?: Partial<SearchOpenOrderRequest> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchOrderRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeSearchOrderRequest(writer: SerializationWriter, searchOrderRequest?: Partial<SearchOrderRequest> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchOrderResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeSearchOrderResponse(writer: SerializationWriter, searchOrderResponse?: Partial<SearchOrderResponse> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchPositionRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeSearchPositionRequest(writer: SerializationWriter, searchPositionRequest?: Partial<SearchPositionRequest> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchPositionResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeSearchPositionResponse(writer: SerializationWriter, searchPositionResponse?: Partial<SearchPositionResponse> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchTradeRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeSearchTradeRequest(writer: SerializationWriter, searchTradeRequest?: Partial<SearchTradeRequest> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param TradingAccountModel The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeTradingAccountModel(writer: SerializationWriter, tradingAccountModel?: Partial<TradingAccountModel> | undefined | null, isSerializingDerivedType?: boolean): void;
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param ValidateResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeValidateResponse(writer: SerializationWriter, validateResponse?: Partial<ValidateResponse> | undefined | null, isSerializingDerivedType?: boolean): void;
export interface TradingAccountModel extends AdditionalDataHolder, Parsable {
    /**
     * The balance property
     */
    balance?: number | null;
    /**
     * The canTrade property
     */
    canTrade?: boolean | null;
    /**
     * The id property
     */
    id?: number | null;
    /**
     * The isVisible property
     */
    isVisible?: boolean | null;
    /**
     * The name property
     */
    name?: string | null;
    /**
     * The simulated property
     */
    simulated?: boolean | null;
}
export interface ValidateResponse extends AdditionalDataHolder, Parsable {
    /**
     * 0 = Success1 = InvalidSession2 = SessionNotFound3 = ExpiredToken4 = UnknownError
     */
    errorCode?: number | null;
    /**
     * The errorMessage property
     */
    errorMessage?: string | null;
    /**
     * The newToken property
     */
    newToken?: string | null;
    /**
     * The success property
     */
    success?: boolean | null;
}
//# sourceMappingURL=index.d.ts.map