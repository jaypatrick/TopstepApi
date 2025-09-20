"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAggregateBarModelFromDiscriminatorValue = createAggregateBarModelFromDiscriminatorValue;
exports.createCancelOrderRequestFromDiscriminatorValue = createCancelOrderRequestFromDiscriminatorValue;
exports.createCancelOrderResponseFromDiscriminatorValue = createCancelOrderResponseFromDiscriminatorValue;
exports.createCloseContractPositionRequestFromDiscriminatorValue = createCloseContractPositionRequestFromDiscriminatorValue;
exports.createClosePositionResponseFromDiscriminatorValue = createClosePositionResponseFromDiscriminatorValue;
exports.createContractModelFromDiscriminatorValue = createContractModelFromDiscriminatorValue;
exports.createHalfTradeModelFromDiscriminatorValue = createHalfTradeModelFromDiscriminatorValue;
exports.createListAvailableContractRequestFromDiscriminatorValue = createListAvailableContractRequestFromDiscriminatorValue;
exports.createListAvailableContractResponseFromDiscriminatorValue = createListAvailableContractResponseFromDiscriminatorValue;
exports.createLoginApiKeyRequestFromDiscriminatorValue = createLoginApiKeyRequestFromDiscriminatorValue;
exports.createLoginAppRequestFromDiscriminatorValue = createLoginAppRequestFromDiscriminatorValue;
exports.createLoginResponseFromDiscriminatorValue = createLoginResponseFromDiscriminatorValue;
exports.createLogoutResponseFromDiscriminatorValue = createLogoutResponseFromDiscriminatorValue;
exports.createModifyOrderRequestFromDiscriminatorValue = createModifyOrderRequestFromDiscriminatorValue;
exports.createModifyOrderResponseFromDiscriminatorValue = createModifyOrderResponseFromDiscriminatorValue;
exports.createOrderModelFromDiscriminatorValue = createOrderModelFromDiscriminatorValue;
exports.createPartialCloseContractPositionRequestFromDiscriminatorValue = createPartialCloseContractPositionRequestFromDiscriminatorValue;
exports.createPartialClosePositionResponseFromDiscriminatorValue = createPartialClosePositionResponseFromDiscriminatorValue;
exports.createPlaceOrderBracketFromDiscriminatorValue = createPlaceOrderBracketFromDiscriminatorValue;
exports.createPlaceOrderRequestFromDiscriminatorValue = createPlaceOrderRequestFromDiscriminatorValue;
exports.createPlaceOrderResponseFromDiscriminatorValue = createPlaceOrderResponseFromDiscriminatorValue;
exports.createPositionModelFromDiscriminatorValue = createPositionModelFromDiscriminatorValue;
exports.createRetrieveBarRequestFromDiscriminatorValue = createRetrieveBarRequestFromDiscriminatorValue;
exports.createRetrieveBarResponseFromDiscriminatorValue = createRetrieveBarResponseFromDiscriminatorValue;
exports.createSearchAccountRequestFromDiscriminatorValue = createSearchAccountRequestFromDiscriminatorValue;
exports.createSearchAccountResponseFromDiscriminatorValue = createSearchAccountResponseFromDiscriminatorValue;
exports.createSearchContractByIdRequestFromDiscriminatorValue = createSearchContractByIdRequestFromDiscriminatorValue;
exports.createSearchContractByIdResponseFromDiscriminatorValue = createSearchContractByIdResponseFromDiscriminatorValue;
exports.createSearchContractRequestFromDiscriminatorValue = createSearchContractRequestFromDiscriminatorValue;
exports.createSearchContractResponseFromDiscriminatorValue = createSearchContractResponseFromDiscriminatorValue;
exports.createSearchHalfTradeResponseFromDiscriminatorValue = createSearchHalfTradeResponseFromDiscriminatorValue;
exports.createSearchOpenOrderRequestFromDiscriminatorValue = createSearchOpenOrderRequestFromDiscriminatorValue;
exports.createSearchOrderRequestFromDiscriminatorValue = createSearchOrderRequestFromDiscriminatorValue;
exports.createSearchOrderResponseFromDiscriminatorValue = createSearchOrderResponseFromDiscriminatorValue;
exports.createSearchPositionRequestFromDiscriminatorValue = createSearchPositionRequestFromDiscriminatorValue;
exports.createSearchPositionResponseFromDiscriminatorValue = createSearchPositionResponseFromDiscriminatorValue;
exports.createSearchTradeRequestFromDiscriminatorValue = createSearchTradeRequestFromDiscriminatorValue;
exports.createTradingAccountModelFromDiscriminatorValue = createTradingAccountModelFromDiscriminatorValue;
exports.createValidateResponseFromDiscriminatorValue = createValidateResponseFromDiscriminatorValue;
exports.deserializeIntoAggregateBarModel = deserializeIntoAggregateBarModel;
exports.deserializeIntoCancelOrderRequest = deserializeIntoCancelOrderRequest;
exports.deserializeIntoCancelOrderResponse = deserializeIntoCancelOrderResponse;
exports.deserializeIntoCloseContractPositionRequest = deserializeIntoCloseContractPositionRequest;
exports.deserializeIntoClosePositionResponse = deserializeIntoClosePositionResponse;
exports.deserializeIntoContractModel = deserializeIntoContractModel;
exports.deserializeIntoHalfTradeModel = deserializeIntoHalfTradeModel;
exports.deserializeIntoListAvailableContractRequest = deserializeIntoListAvailableContractRequest;
exports.deserializeIntoListAvailableContractResponse = deserializeIntoListAvailableContractResponse;
exports.deserializeIntoLoginApiKeyRequest = deserializeIntoLoginApiKeyRequest;
exports.deserializeIntoLoginAppRequest = deserializeIntoLoginAppRequest;
exports.deserializeIntoLoginResponse = deserializeIntoLoginResponse;
exports.deserializeIntoLogoutResponse = deserializeIntoLogoutResponse;
exports.deserializeIntoModifyOrderRequest = deserializeIntoModifyOrderRequest;
exports.deserializeIntoModifyOrderResponse = deserializeIntoModifyOrderResponse;
exports.deserializeIntoOrderModel = deserializeIntoOrderModel;
exports.deserializeIntoPartialCloseContractPositionRequest = deserializeIntoPartialCloseContractPositionRequest;
exports.deserializeIntoPartialClosePositionResponse = deserializeIntoPartialClosePositionResponse;
exports.deserializeIntoPlaceOrderBracket = deserializeIntoPlaceOrderBracket;
exports.deserializeIntoPlaceOrderRequest = deserializeIntoPlaceOrderRequest;
exports.deserializeIntoPlaceOrderResponse = deserializeIntoPlaceOrderResponse;
exports.deserializeIntoPositionModel = deserializeIntoPositionModel;
exports.deserializeIntoRetrieveBarRequest = deserializeIntoRetrieveBarRequest;
exports.deserializeIntoRetrieveBarResponse = deserializeIntoRetrieveBarResponse;
exports.deserializeIntoSearchAccountRequest = deserializeIntoSearchAccountRequest;
exports.deserializeIntoSearchAccountResponse = deserializeIntoSearchAccountResponse;
exports.deserializeIntoSearchContractByIdRequest = deserializeIntoSearchContractByIdRequest;
exports.deserializeIntoSearchContractByIdResponse = deserializeIntoSearchContractByIdResponse;
exports.deserializeIntoSearchContractRequest = deserializeIntoSearchContractRequest;
exports.deserializeIntoSearchContractResponse = deserializeIntoSearchContractResponse;
exports.deserializeIntoSearchHalfTradeResponse = deserializeIntoSearchHalfTradeResponse;
exports.deserializeIntoSearchOpenOrderRequest = deserializeIntoSearchOpenOrderRequest;
exports.deserializeIntoSearchOrderRequest = deserializeIntoSearchOrderRequest;
exports.deserializeIntoSearchOrderResponse = deserializeIntoSearchOrderResponse;
exports.deserializeIntoSearchPositionRequest = deserializeIntoSearchPositionRequest;
exports.deserializeIntoSearchPositionResponse = deserializeIntoSearchPositionResponse;
exports.deserializeIntoSearchTradeRequest = deserializeIntoSearchTradeRequest;
exports.deserializeIntoTradingAccountModel = deserializeIntoTradingAccountModel;
exports.deserializeIntoValidateResponse = deserializeIntoValidateResponse;
exports.serializeAggregateBarModel = serializeAggregateBarModel;
exports.serializeCancelOrderRequest = serializeCancelOrderRequest;
exports.serializeCancelOrderResponse = serializeCancelOrderResponse;
exports.serializeCloseContractPositionRequest = serializeCloseContractPositionRequest;
exports.serializeClosePositionResponse = serializeClosePositionResponse;
exports.serializeContractModel = serializeContractModel;
exports.serializeHalfTradeModel = serializeHalfTradeModel;
exports.serializeListAvailableContractRequest = serializeListAvailableContractRequest;
exports.serializeListAvailableContractResponse = serializeListAvailableContractResponse;
exports.serializeLoginApiKeyRequest = serializeLoginApiKeyRequest;
exports.serializeLoginAppRequest = serializeLoginAppRequest;
exports.serializeLoginResponse = serializeLoginResponse;
exports.serializeLogoutResponse = serializeLogoutResponse;
exports.serializeModifyOrderRequest = serializeModifyOrderRequest;
exports.serializeModifyOrderResponse = serializeModifyOrderResponse;
exports.serializeOrderModel = serializeOrderModel;
exports.serializePartialCloseContractPositionRequest = serializePartialCloseContractPositionRequest;
exports.serializePartialClosePositionResponse = serializePartialClosePositionResponse;
exports.serializePlaceOrderBracket = serializePlaceOrderBracket;
exports.serializePlaceOrderRequest = serializePlaceOrderRequest;
exports.serializePlaceOrderResponse = serializePlaceOrderResponse;
exports.serializePositionModel = serializePositionModel;
exports.serializeRetrieveBarRequest = serializeRetrieveBarRequest;
exports.serializeRetrieveBarResponse = serializeRetrieveBarResponse;
exports.serializeSearchAccountRequest = serializeSearchAccountRequest;
exports.serializeSearchAccountResponse = serializeSearchAccountResponse;
exports.serializeSearchContractByIdRequest = serializeSearchContractByIdRequest;
exports.serializeSearchContractByIdResponse = serializeSearchContractByIdResponse;
exports.serializeSearchContractRequest = serializeSearchContractRequest;
exports.serializeSearchContractResponse = serializeSearchContractResponse;
exports.serializeSearchHalfTradeResponse = serializeSearchHalfTradeResponse;
exports.serializeSearchOpenOrderRequest = serializeSearchOpenOrderRequest;
exports.serializeSearchOrderRequest = serializeSearchOrderRequest;
exports.serializeSearchOrderResponse = serializeSearchOrderResponse;
exports.serializeSearchPositionRequest = serializeSearchPositionRequest;
exports.serializeSearchPositionResponse = serializeSearchPositionResponse;
exports.serializeSearchTradeRequest = serializeSearchTradeRequest;
exports.serializeTradingAccountModel = serializeTradingAccountModel;
exports.serializeValidateResponse = serializeValidateResponse;
/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {AggregateBarModel}
 */
// @ts-ignore
function createAggregateBarModelFromDiscriminatorValue(parseNode) {
    return deserializeIntoAggregateBarModel;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CancelOrderRequest}
 */
// @ts-ignore
function createCancelOrderRequestFromDiscriminatorValue(parseNode) {
    return deserializeIntoCancelOrderRequest;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CancelOrderResponse}
 */
// @ts-ignore
function createCancelOrderResponseFromDiscriminatorValue(parseNode) {
    return deserializeIntoCancelOrderResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CloseContractPositionRequest}
 */
// @ts-ignore
function createCloseContractPositionRequestFromDiscriminatorValue(parseNode) {
    return deserializeIntoCloseContractPositionRequest;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ClosePositionResponse}
 */
// @ts-ignore
function createClosePositionResponseFromDiscriminatorValue(parseNode) {
    return deserializeIntoClosePositionResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ContractModel}
 */
// @ts-ignore
function createContractModelFromDiscriminatorValue(parseNode) {
    return deserializeIntoContractModel;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {HalfTradeModel}
 */
// @ts-ignore
function createHalfTradeModelFromDiscriminatorValue(parseNode) {
    return deserializeIntoHalfTradeModel;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ListAvailableContractRequest}
 */
// @ts-ignore
function createListAvailableContractRequestFromDiscriminatorValue(parseNode) {
    return deserializeIntoListAvailableContractRequest;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ListAvailableContractResponse}
 */
// @ts-ignore
function createListAvailableContractResponseFromDiscriminatorValue(parseNode) {
    return deserializeIntoListAvailableContractResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {LoginApiKeyRequest}
 */
// @ts-ignore
function createLoginApiKeyRequestFromDiscriminatorValue(parseNode) {
    return deserializeIntoLoginApiKeyRequest;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {LoginAppRequest}
 */
// @ts-ignore
function createLoginAppRequestFromDiscriminatorValue(parseNode) {
    return deserializeIntoLoginAppRequest;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {LoginResponse}
 */
// @ts-ignore
function createLoginResponseFromDiscriminatorValue(parseNode) {
    return deserializeIntoLoginResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {LogoutResponse}
 */
// @ts-ignore
function createLogoutResponseFromDiscriminatorValue(parseNode) {
    return deserializeIntoLogoutResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ModifyOrderRequest}
 */
// @ts-ignore
function createModifyOrderRequestFromDiscriminatorValue(parseNode) {
    return deserializeIntoModifyOrderRequest;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ModifyOrderResponse}
 */
// @ts-ignore
function createModifyOrderResponseFromDiscriminatorValue(parseNode) {
    return deserializeIntoModifyOrderResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {OrderModel}
 */
// @ts-ignore
function createOrderModelFromDiscriminatorValue(parseNode) {
    return deserializeIntoOrderModel;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {PartialCloseContractPositionRequest}
 */
// @ts-ignore
function createPartialCloseContractPositionRequestFromDiscriminatorValue(parseNode) {
    return deserializeIntoPartialCloseContractPositionRequest;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {PartialClosePositionResponse}
 */
// @ts-ignore
function createPartialClosePositionResponseFromDiscriminatorValue(parseNode) {
    return deserializeIntoPartialClosePositionResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {PlaceOrderBracket}
 */
// @ts-ignore
function createPlaceOrderBracketFromDiscriminatorValue(parseNode) {
    return deserializeIntoPlaceOrderBracket;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {PlaceOrderRequest}
 */
// @ts-ignore
function createPlaceOrderRequestFromDiscriminatorValue(parseNode) {
    return deserializeIntoPlaceOrderRequest;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {PlaceOrderResponse}
 */
// @ts-ignore
function createPlaceOrderResponseFromDiscriminatorValue(parseNode) {
    return deserializeIntoPlaceOrderResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {PositionModel}
 */
// @ts-ignore
function createPositionModelFromDiscriminatorValue(parseNode) {
    return deserializeIntoPositionModel;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {RetrieveBarRequest}
 */
// @ts-ignore
function createRetrieveBarRequestFromDiscriminatorValue(parseNode) {
    return deserializeIntoRetrieveBarRequest;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {RetrieveBarResponse}
 */
// @ts-ignore
function createRetrieveBarResponseFromDiscriminatorValue(parseNode) {
    return deserializeIntoRetrieveBarResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchAccountRequest}
 */
// @ts-ignore
function createSearchAccountRequestFromDiscriminatorValue(parseNode) {
    return deserializeIntoSearchAccountRequest;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchAccountResponse}
 */
// @ts-ignore
function createSearchAccountResponseFromDiscriminatorValue(parseNode) {
    return deserializeIntoSearchAccountResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchContractByIdRequest}
 */
// @ts-ignore
function createSearchContractByIdRequestFromDiscriminatorValue(parseNode) {
    return deserializeIntoSearchContractByIdRequest;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchContractByIdResponse}
 */
// @ts-ignore
function createSearchContractByIdResponseFromDiscriminatorValue(parseNode) {
    return deserializeIntoSearchContractByIdResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchContractRequest}
 */
// @ts-ignore
function createSearchContractRequestFromDiscriminatorValue(parseNode) {
    return deserializeIntoSearchContractRequest;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchContractResponse}
 */
// @ts-ignore
function createSearchContractResponseFromDiscriminatorValue(parseNode) {
    return deserializeIntoSearchContractResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchHalfTradeResponse}
 */
// @ts-ignore
function createSearchHalfTradeResponseFromDiscriminatorValue(parseNode) {
    return deserializeIntoSearchHalfTradeResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchOpenOrderRequest}
 */
// @ts-ignore
function createSearchOpenOrderRequestFromDiscriminatorValue(parseNode) {
    return deserializeIntoSearchOpenOrderRequest;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchOrderRequest}
 */
// @ts-ignore
function createSearchOrderRequestFromDiscriminatorValue(parseNode) {
    return deserializeIntoSearchOrderRequest;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchOrderResponse}
 */
// @ts-ignore
function createSearchOrderResponseFromDiscriminatorValue(parseNode) {
    return deserializeIntoSearchOrderResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchPositionRequest}
 */
// @ts-ignore
function createSearchPositionRequestFromDiscriminatorValue(parseNode) {
    return deserializeIntoSearchPositionRequest;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchPositionResponse}
 */
// @ts-ignore
function createSearchPositionResponseFromDiscriminatorValue(parseNode) {
    return deserializeIntoSearchPositionResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchTradeRequest}
 */
// @ts-ignore
function createSearchTradeRequestFromDiscriminatorValue(parseNode) {
    return deserializeIntoSearchTradeRequest;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {TradingAccountModel}
 */
// @ts-ignore
function createTradingAccountModelFromDiscriminatorValue(parseNode) {
    return deserializeIntoTradingAccountModel;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ValidateResponse}
 */
// @ts-ignore
function createValidateResponseFromDiscriminatorValue(parseNode) {
    return deserializeIntoValidateResponse;
}
/**
 * The deserialization information for the current model
 * @param AggregateBarModel The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoAggregateBarModel(aggregateBarModel = {}) {
    return {
        "c": n => { aggregateBarModel.c = n.getNumberValue(); },
        "h": n => { aggregateBarModel.h = n.getNumberValue(); },
        "l": n => { aggregateBarModel.l = n.getNumberValue(); },
        "o": n => { aggregateBarModel.o = n.getNumberValue(); },
        "t": n => { aggregateBarModel.t = n.getDateValue(); },
        "v": n => { aggregateBarModel.v = n.getNumberValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param CancelOrderRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoCancelOrderRequest(cancelOrderRequest = {}) {
    return {
        "accountId": n => { cancelOrderRequest.accountId = n.getNumberValue(); },
        "orderId": n => { cancelOrderRequest.orderId = n.getNumberValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param CancelOrderResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoCancelOrderResponse(cancelOrderResponse = {}) {
    return {
        "errorCode": n => { cancelOrderResponse.errorCode = n.getNumberValue(); },
        "errorMessage": n => { cancelOrderResponse.errorMessage = n.getStringValue(); },
        "success": n => { cancelOrderResponse.success = n.getBooleanValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param CloseContractPositionRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoCloseContractPositionRequest(closeContractPositionRequest = {}) {
    return {
        "accountId": n => { closeContractPositionRequest.accountId = n.getNumberValue(); },
        "contractId": n => { closeContractPositionRequest.contractId = n.getStringValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param ClosePositionResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoClosePositionResponse(closePositionResponse = {}) {
    return {
        "errorCode": n => { closePositionResponse.errorCode = n.getNumberValue(); },
        "errorMessage": n => { closePositionResponse.errorMessage = n.getStringValue(); },
        "success": n => { closePositionResponse.success = n.getBooleanValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param ContractModel The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoContractModel(contractModel = {}) {
    return {
        "activeContract": n => { contractModel.activeContract = n.getBooleanValue(); },
        "description": n => { contractModel.description = n.getStringValue(); },
        "id": n => { contractModel.id = n.getStringValue(); },
        "name": n => { contractModel.name = n.getStringValue(); },
        "symbolId": n => { contractModel.symbolId = n.getStringValue(); },
        "tickSize": n => { contractModel.tickSize = n.getNumberValue(); },
        "tickValue": n => { contractModel.tickValue = n.getNumberValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param HalfTradeModel The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoHalfTradeModel(halfTradeModel = {}) {
    return {
        "accountId": n => { halfTradeModel.accountId = n.getNumberValue(); },
        "contractId": n => { halfTradeModel.contractId = n.getStringValue(); },
        "creationTimestamp": n => { halfTradeModel.creationTimestamp = n.getDateValue(); },
        "fees": n => { halfTradeModel.fees = n.getNumberValue(); },
        "id": n => { halfTradeModel.id = n.getNumberValue(); },
        "orderId": n => { halfTradeModel.orderId = n.getNumberValue(); },
        "price": n => { halfTradeModel.price = n.getNumberValue(); },
        "profitAndLoss": n => { halfTradeModel.profitAndLoss = n.getNumberValue(); },
        "side": n => { halfTradeModel.side = n.getNumberValue(); },
        "size": n => { halfTradeModel.size = n.getNumberValue(); },
        "voided": n => { halfTradeModel.voided = n.getBooleanValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param ListAvailableContractRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoListAvailableContractRequest(listAvailableContractRequest = {}) {
    return {
        "live": n => { listAvailableContractRequest.live = n.getBooleanValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param ListAvailableContractResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoListAvailableContractResponse(listAvailableContractResponse = {}) {
    return {
        "contracts": n => { listAvailableContractResponse.contracts = n.getCollectionOfObjectValues(createContractModelFromDiscriminatorValue); },
        "errorCode": n => { listAvailableContractResponse.errorCode = n.getNumberValue(); },
        "errorMessage": n => { listAvailableContractResponse.errorMessage = n.getStringValue(); },
        "success": n => { listAvailableContractResponse.success = n.getBooleanValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param LoginApiKeyRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoLoginApiKeyRequest(loginApiKeyRequest = {}) {
    return {
        "apiKey": n => { loginApiKeyRequest.apiKey = n.getStringValue(); },
        "userName": n => { loginApiKeyRequest.userName = n.getStringValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param LoginAppRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoLoginAppRequest(loginAppRequest = {}) {
    return {
        "appId": n => { loginAppRequest.appId = n.getStringValue(); },
        "deviceId": n => { loginAppRequest.deviceId = n.getStringValue(); },
        "password": n => { loginAppRequest.password = n.getStringValue(); },
        "userName": n => { loginAppRequest.userName = n.getStringValue(); },
        "verifyKey": n => { loginAppRequest.verifyKey = n.getStringValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param LoginResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoLoginResponse(loginResponse = {}) {
    return {
        "errorCode": n => { loginResponse.errorCode = n.getNumberValue(); },
        "errorMessage": n => { loginResponse.errorMessage = n.getStringValue(); },
        "success": n => { loginResponse.success = n.getBooleanValue(); },
        "token": n => { loginResponse.token = n.getStringValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param LogoutResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoLogoutResponse(logoutResponse = {}) {
    return {
        "errorCode": n => { logoutResponse.errorCode = n.getNumberValue(); },
        "errorMessage": n => { logoutResponse.errorMessage = n.getStringValue(); },
        "success": n => { logoutResponse.success = n.getBooleanValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param ModifyOrderRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoModifyOrderRequest(modifyOrderRequest = {}) {
    return {
        "accountId": n => { modifyOrderRequest.accountId = n.getNumberValue(); },
        "limitPrice": n => { modifyOrderRequest.limitPrice = n.getNumberValue(); },
        "orderId": n => { modifyOrderRequest.orderId = n.getNumberValue(); },
        "size": n => { modifyOrderRequest.size = n.getNumberValue(); },
        "stopPrice": n => { modifyOrderRequest.stopPrice = n.getNumberValue(); },
        "trailPrice": n => { modifyOrderRequest.trailPrice = n.getNumberValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param ModifyOrderResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoModifyOrderResponse(modifyOrderResponse = {}) {
    return {
        "errorCode": n => { modifyOrderResponse.errorCode = n.getNumberValue(); },
        "errorMessage": n => { modifyOrderResponse.errorMessage = n.getStringValue(); },
        "success": n => { modifyOrderResponse.success = n.getBooleanValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param OrderModel The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoOrderModel(orderModel = {}) {
    return {
        "accountId": n => { orderModel.accountId = n.getNumberValue(); },
        "contractId": n => { orderModel.contractId = n.getStringValue(); },
        "creationTimestamp": n => { orderModel.creationTimestamp = n.getDateValue(); },
        "customTag": n => { orderModel.customTag = n.getStringValue(); },
        "filledPrice": n => { orderModel.filledPrice = n.getNumberValue(); },
        "fillVolume": n => { orderModel.fillVolume = n.getNumberValue(); },
        "id": n => { orderModel.id = n.getNumberValue(); },
        "limitPrice": n => { orderModel.limitPrice = n.getNumberValue(); },
        "side": n => { orderModel.side = n.getNumberValue(); },
        "size": n => { orderModel.size = n.getNumberValue(); },
        "status": n => { orderModel.status = n.getNumberValue(); },
        "stopPrice": n => { orderModel.stopPrice = n.getNumberValue(); },
        "symbolId": n => { orderModel.symbolId = n.getStringValue(); },
        "type": n => { orderModel.type = n.getNumberValue(); },
        "updateTimestamp": n => { orderModel.updateTimestamp = n.getDateValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param PartialCloseContractPositionRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoPartialCloseContractPositionRequest(partialCloseContractPositionRequest = {}) {
    return {
        "accountId": n => { partialCloseContractPositionRequest.accountId = n.getNumberValue(); },
        "contractId": n => { partialCloseContractPositionRequest.contractId = n.getStringValue(); },
        "size": n => { partialCloseContractPositionRequest.size = n.getNumberValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param PartialClosePositionResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoPartialClosePositionResponse(partialClosePositionResponse = {}) {
    return {
        "errorCode": n => { partialClosePositionResponse.errorCode = n.getNumberValue(); },
        "errorMessage": n => { partialClosePositionResponse.errorMessage = n.getStringValue(); },
        "success": n => { partialClosePositionResponse.success = n.getBooleanValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param PlaceOrderBracket The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoPlaceOrderBracket(placeOrderBracket = {}) {
    return {
        "ticks": n => { placeOrderBracket.ticks = n.getNumberValue(); },
        "type": n => { placeOrderBracket.type = n.getNumberValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param PlaceOrderRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoPlaceOrderRequest(placeOrderRequest = {}) {
    return {
        "accountId": n => { placeOrderRequest.accountId = n.getNumberValue(); },
        "contractId": n => { placeOrderRequest.contractId = n.getStringValue(); },
        "customTag": n => { placeOrderRequest.customTag = n.getStringValue(); },
        "limitPrice": n => { placeOrderRequest.limitPrice = n.getNumberValue(); },
        "side": n => { placeOrderRequest.side = n.getNumberValue(); },
        "size": n => { placeOrderRequest.size = n.getNumberValue(); },
        "stopLossBracket": n => { placeOrderRequest.stopLossBracket = n.getObjectValue(createPlaceOrderBracketFromDiscriminatorValue); },
        "stopPrice": n => { placeOrderRequest.stopPrice = n.getNumberValue(); },
        "takeProfitBracket": n => { placeOrderRequest.takeProfitBracket = n.getObjectValue(createPlaceOrderBracketFromDiscriminatorValue); },
        "trailPrice": n => { placeOrderRequest.trailPrice = n.getNumberValue(); },
        "type": n => { placeOrderRequest.type = n.getNumberValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param PlaceOrderResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoPlaceOrderResponse(placeOrderResponse = {}) {
    return {
        "errorCode": n => { placeOrderResponse.errorCode = n.getNumberValue(); },
        "errorMessage": n => { placeOrderResponse.errorMessage = n.getStringValue(); },
        "orderId": n => { placeOrderResponse.orderId = n.getNumberValue(); },
        "success": n => { placeOrderResponse.success = n.getBooleanValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param PositionModel The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoPositionModel(positionModel = {}) {
    return {
        "accountId": n => { positionModel.accountId = n.getNumberValue(); },
        "averagePrice": n => { positionModel.averagePrice = n.getNumberValue(); },
        "contractId": n => { positionModel.contractId = n.getStringValue(); },
        "creationTimestamp": n => { positionModel.creationTimestamp = n.getDateValue(); },
        "id": n => { positionModel.id = n.getNumberValue(); },
        "size": n => { positionModel.size = n.getNumberValue(); },
        "type": n => { positionModel.type = n.getNumberValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param RetrieveBarRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoRetrieveBarRequest(retrieveBarRequest = {}) {
    return {
        "contractId": n => { retrieveBarRequest.contractId = n.getStringValue(); },
        "endTime": n => { retrieveBarRequest.endTime = n.getDateValue(); },
        "includePartialBar": n => { retrieveBarRequest.includePartialBar = n.getBooleanValue(); },
        "limit": n => { retrieveBarRequest.limit = n.getNumberValue(); },
        "live": n => { retrieveBarRequest.live = n.getBooleanValue(); },
        "startTime": n => { retrieveBarRequest.startTime = n.getDateValue(); },
        "unit": n => { retrieveBarRequest.unit = n.getNumberValue(); },
        "unitNumber": n => { retrieveBarRequest.unitNumber = n.getNumberValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param RetrieveBarResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoRetrieveBarResponse(retrieveBarResponse = {}) {
    return {
        "bars": n => { retrieveBarResponse.bars = n.getCollectionOfObjectValues(createAggregateBarModelFromDiscriminatorValue); },
        "errorCode": n => { retrieveBarResponse.errorCode = n.getNumberValue(); },
        "errorMessage": n => { retrieveBarResponse.errorMessage = n.getStringValue(); },
        "success": n => { retrieveBarResponse.success = n.getBooleanValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param SearchAccountRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoSearchAccountRequest(searchAccountRequest = {}) {
    return {
        "onlyActiveAccounts": n => { searchAccountRequest.onlyActiveAccounts = n.getBooleanValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param SearchAccountResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoSearchAccountResponse(searchAccountResponse = {}) {
    return {
        "accounts": n => { searchAccountResponse.accounts = n.getCollectionOfObjectValues(createTradingAccountModelFromDiscriminatorValue); },
        "errorCode": n => { searchAccountResponse.errorCode = n.getNumberValue(); },
        "errorMessage": n => { searchAccountResponse.errorMessage = n.getStringValue(); },
        "success": n => { searchAccountResponse.success = n.getBooleanValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param SearchContractByIdRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoSearchContractByIdRequest(searchContractByIdRequest = {}) {
    return {
        "contractId": n => { searchContractByIdRequest.contractId = n.getStringValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param SearchContractByIdResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoSearchContractByIdResponse(searchContractByIdResponse = {}) {
    return {
        "contract": n => { searchContractByIdResponse.contract = n.getObjectValue(createContractModelFromDiscriminatorValue); },
        "errorCode": n => { searchContractByIdResponse.errorCode = n.getNumberValue(); },
        "errorMessage": n => { searchContractByIdResponse.errorMessage = n.getStringValue(); },
        "success": n => { searchContractByIdResponse.success = n.getBooleanValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param SearchContractRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoSearchContractRequest(searchContractRequest = {}) {
    return {
        "live": n => { searchContractRequest.live = n.getBooleanValue(); },
        "searchText": n => { searchContractRequest.searchText = n.getStringValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param SearchContractResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoSearchContractResponse(searchContractResponse = {}) {
    return {
        "contracts": n => { searchContractResponse.contracts = n.getCollectionOfObjectValues(createContractModelFromDiscriminatorValue); },
        "errorCode": n => { searchContractResponse.errorCode = n.getNumberValue(); },
        "errorMessage": n => { searchContractResponse.errorMessage = n.getStringValue(); },
        "success": n => { searchContractResponse.success = n.getBooleanValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param SearchHalfTradeResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoSearchHalfTradeResponse(searchHalfTradeResponse = {}) {
    return {
        "errorCode": n => { searchHalfTradeResponse.errorCode = n.getNumberValue(); },
        "errorMessage": n => { searchHalfTradeResponse.errorMessage = n.getStringValue(); },
        "success": n => { searchHalfTradeResponse.success = n.getBooleanValue(); },
        "trades": n => { searchHalfTradeResponse.trades = n.getCollectionOfObjectValues(createHalfTradeModelFromDiscriminatorValue); },
    };
}
/**
 * The deserialization information for the current model
 * @param SearchOpenOrderRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoSearchOpenOrderRequest(searchOpenOrderRequest = {}) {
    return {
        "accountId": n => { searchOpenOrderRequest.accountId = n.getNumberValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param SearchOrderRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoSearchOrderRequest(searchOrderRequest = {}) {
    return {
        "accountId": n => { searchOrderRequest.accountId = n.getNumberValue(); },
        "endTimestamp": n => { searchOrderRequest.endTimestamp = n.getDateValue(); },
        "startTimestamp": n => { searchOrderRequest.startTimestamp = n.getDateValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param SearchOrderResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoSearchOrderResponse(searchOrderResponse = {}) {
    return {
        "errorCode": n => { searchOrderResponse.errorCode = n.getNumberValue(); },
        "errorMessage": n => { searchOrderResponse.errorMessage = n.getStringValue(); },
        "orders": n => { searchOrderResponse.orders = n.getCollectionOfObjectValues(createOrderModelFromDiscriminatorValue); },
        "success": n => { searchOrderResponse.success = n.getBooleanValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param SearchPositionRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoSearchPositionRequest(searchPositionRequest = {}) {
    return {
        "accountId": n => { searchPositionRequest.accountId = n.getNumberValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param SearchPositionResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoSearchPositionResponse(searchPositionResponse = {}) {
    return {
        "errorCode": n => { searchPositionResponse.errorCode = n.getNumberValue(); },
        "errorMessage": n => { searchPositionResponse.errorMessage = n.getStringValue(); },
        "positions": n => { searchPositionResponse.positions = n.getCollectionOfObjectValues(createPositionModelFromDiscriminatorValue); },
        "success": n => { searchPositionResponse.success = n.getBooleanValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param SearchTradeRequest The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoSearchTradeRequest(searchTradeRequest = {}) {
    return {
        "accountId": n => { searchTradeRequest.accountId = n.getNumberValue(); },
        "endTimestamp": n => { searchTradeRequest.endTimestamp = n.getDateValue(); },
        "startTimestamp": n => { searchTradeRequest.startTimestamp = n.getDateValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param TradingAccountModel The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoTradingAccountModel(tradingAccountModel = {}) {
    return {
        "balance": n => { tradingAccountModel.balance = n.getNumberValue(); },
        "canTrade": n => { tradingAccountModel.canTrade = n.getBooleanValue(); },
        "id": n => { tradingAccountModel.id = n.getNumberValue(); },
        "isVisible": n => { tradingAccountModel.isVisible = n.getBooleanValue(); },
        "name": n => { tradingAccountModel.name = n.getStringValue(); },
        "simulated": n => { tradingAccountModel.simulated = n.getBooleanValue(); },
    };
}
/**
 * The deserialization information for the current model
 * @param ValidateResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
function deserializeIntoValidateResponse(validateResponse = {}) {
    return {
        "errorCode": n => { validateResponse.errorCode = n.getNumberValue(); },
        "errorMessage": n => { validateResponse.errorMessage = n.getStringValue(); },
        "newToken": n => { validateResponse.newToken = n.getStringValue(); },
        "success": n => { validateResponse.success = n.getBooleanValue(); },
    };
}
/**
 * Serializes information the current object
 * @param AggregateBarModel The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeAggregateBarModel(writer, aggregateBarModel = {}, isSerializingDerivedType = false) {
    if (!aggregateBarModel || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("c", aggregateBarModel.c);
    writer.writeNumberValue("h", aggregateBarModel.h);
    writer.writeNumberValue("l", aggregateBarModel.l);
    writer.writeNumberValue("o", aggregateBarModel.o);
    writer.writeDateValue("t", aggregateBarModel.t);
    writer.writeNumberValue("v", aggregateBarModel.v);
    writer.writeAdditionalData(aggregateBarModel.additionalData);
}
/**
 * Serializes information the current object
 * @param CancelOrderRequest The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeCancelOrderRequest(writer, cancelOrderRequest = {}, isSerializingDerivedType = false) {
    if (!cancelOrderRequest || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("accountId", cancelOrderRequest.accountId);
    writer.writeNumberValue("orderId", cancelOrderRequest.orderId);
    writer.writeAdditionalData(cancelOrderRequest.additionalData);
}
/**
 * Serializes information the current object
 * @param CancelOrderResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeCancelOrderResponse(writer, cancelOrderResponse = {}, isSerializingDerivedType = false) {
    if (!cancelOrderResponse || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("errorCode", cancelOrderResponse.errorCode);
    writer.writeStringValue("errorMessage", cancelOrderResponse.errorMessage);
    writer.writeBooleanValue("success", cancelOrderResponse.success);
    writer.writeAdditionalData(cancelOrderResponse.additionalData);
}
/**
 * Serializes information the current object
 * @param CloseContractPositionRequest The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeCloseContractPositionRequest(writer, closeContractPositionRequest = {}, isSerializingDerivedType = false) {
    if (!closeContractPositionRequest || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("accountId", closeContractPositionRequest.accountId);
    writer.writeStringValue("contractId", closeContractPositionRequest.contractId);
    writer.writeAdditionalData(closeContractPositionRequest.additionalData);
}
/**
 * Serializes information the current object
 * @param ClosePositionResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeClosePositionResponse(writer, closePositionResponse = {}, isSerializingDerivedType = false) {
    if (!closePositionResponse || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("errorCode", closePositionResponse.errorCode);
    writer.writeStringValue("errorMessage", closePositionResponse.errorMessage);
    writer.writeBooleanValue("success", closePositionResponse.success);
    writer.writeAdditionalData(closePositionResponse.additionalData);
}
/**
 * Serializes information the current object
 * @param ContractModel The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeContractModel(writer, contractModel = {}, isSerializingDerivedType = false) {
    if (!contractModel || isSerializingDerivedType) {
        return;
    }
    writer.writeBooleanValue("activeContract", contractModel.activeContract);
    writer.writeStringValue("description", contractModel.description);
    writer.writeStringValue("id", contractModel.id);
    writer.writeStringValue("name", contractModel.name);
    writer.writeStringValue("symbolId", contractModel.symbolId);
    writer.writeNumberValue("tickSize", contractModel.tickSize);
    writer.writeNumberValue("tickValue", contractModel.tickValue);
    writer.writeAdditionalData(contractModel.additionalData);
}
/**
 * Serializes information the current object
 * @param HalfTradeModel The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeHalfTradeModel(writer, halfTradeModel = {}, isSerializingDerivedType = false) {
    if (!halfTradeModel || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("accountId", halfTradeModel.accountId);
    writer.writeStringValue("contractId", halfTradeModel.contractId);
    writer.writeDateValue("creationTimestamp", halfTradeModel.creationTimestamp);
    writer.writeNumberValue("fees", halfTradeModel.fees);
    writer.writeNumberValue("id", halfTradeModel.id);
    writer.writeNumberValue("orderId", halfTradeModel.orderId);
    writer.writeNumberValue("price", halfTradeModel.price);
    writer.writeNumberValue("profitAndLoss", halfTradeModel.profitAndLoss);
    writer.writeNumberValue("side", halfTradeModel.side);
    writer.writeNumberValue("size", halfTradeModel.size);
    writer.writeBooleanValue("voided", halfTradeModel.voided);
    writer.writeAdditionalData(halfTradeModel.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param ListAvailableContractRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeListAvailableContractRequest(writer, listAvailableContractRequest = {}, isSerializingDerivedType = false) {
    if (!listAvailableContractRequest || isSerializingDerivedType) {
        return;
    }
    writer.writeBooleanValue("live", listAvailableContractRequest.live);
    writer.writeAdditionalData(listAvailableContractRequest.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param ListAvailableContractResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeListAvailableContractResponse(writer, listAvailableContractResponse = {}, isSerializingDerivedType = false) {
    if (!listAvailableContractResponse || isSerializingDerivedType) {
        return;
    }
    writer.writeCollectionOfObjectValues("contracts", listAvailableContractResponse.contracts, serializeContractModel);
    writer.writeNumberValue("errorCode", listAvailableContractResponse.errorCode);
    writer.writeStringValue("errorMessage", listAvailableContractResponse.errorMessage);
    writer.writeBooleanValue("success", listAvailableContractResponse.success);
    writer.writeAdditionalData(listAvailableContractResponse.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param LoginApiKeyRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeLoginApiKeyRequest(writer, loginApiKeyRequest = {}, isSerializingDerivedType = false) {
    if (!loginApiKeyRequest || isSerializingDerivedType) {
        return;
    }
    writer.writeStringValue("apiKey", loginApiKeyRequest.apiKey);
    writer.writeStringValue("userName", loginApiKeyRequest.userName);
    writer.writeAdditionalData(loginApiKeyRequest.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param LoginAppRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeLoginAppRequest(writer, loginAppRequest = {}, isSerializingDerivedType = false) {
    if (!loginAppRequest || isSerializingDerivedType) {
        return;
    }
    writer.writeStringValue("appId", loginAppRequest.appId);
    writer.writeStringValue("deviceId", loginAppRequest.deviceId);
    writer.writeStringValue("password", loginAppRequest.password);
    writer.writeStringValue("userName", loginAppRequest.userName);
    writer.writeStringValue("verifyKey", loginAppRequest.verifyKey);
    writer.writeAdditionalData(loginAppRequest.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param LoginResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeLoginResponse(writer, loginResponse = {}, isSerializingDerivedType = false) {
    if (!loginResponse || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("errorCode", loginResponse.errorCode);
    writer.writeStringValue("errorMessage", loginResponse.errorMessage);
    writer.writeBooleanValue("success", loginResponse.success);
    writer.writeStringValue("token", loginResponse.token);
    writer.writeAdditionalData(loginResponse.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param LogoutResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeLogoutResponse(writer, logoutResponse = {}, isSerializingDerivedType = false) {
    if (!logoutResponse || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("errorCode", logoutResponse.errorCode);
    writer.writeStringValue("errorMessage", logoutResponse.errorMessage);
    writer.writeBooleanValue("success", logoutResponse.success);
    writer.writeAdditionalData(logoutResponse.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param ModifyOrderRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeModifyOrderRequest(writer, modifyOrderRequest = {}, isSerializingDerivedType = false) {
    if (!modifyOrderRequest || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("accountId", modifyOrderRequest.accountId);
    writer.writeNumberValue("limitPrice", modifyOrderRequest.limitPrice);
    writer.writeNumberValue("orderId", modifyOrderRequest.orderId);
    writer.writeNumberValue("size", modifyOrderRequest.size);
    writer.writeNumberValue("stopPrice", modifyOrderRequest.stopPrice);
    writer.writeNumberValue("trailPrice", modifyOrderRequest.trailPrice);
    writer.writeAdditionalData(modifyOrderRequest.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param ModifyOrderResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeModifyOrderResponse(writer, modifyOrderResponse = {}, isSerializingDerivedType = false) {
    if (!modifyOrderResponse || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("errorCode", modifyOrderResponse.errorCode);
    writer.writeStringValue("errorMessage", modifyOrderResponse.errorMessage);
    writer.writeBooleanValue("success", modifyOrderResponse.success);
    writer.writeAdditionalData(modifyOrderResponse.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param OrderModel The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeOrderModel(writer, orderModel = {}, isSerializingDerivedType = false) {
    if (!orderModel || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("accountId", orderModel.accountId);
    writer.writeStringValue("contractId", orderModel.contractId);
    writer.writeDateValue("creationTimestamp", orderModel.creationTimestamp);
    writer.writeStringValue("customTag", orderModel.customTag);
    writer.writeNumberValue("filledPrice", orderModel.filledPrice);
    writer.writeNumberValue("fillVolume", orderModel.fillVolume);
    writer.writeNumberValue("id", orderModel.id);
    writer.writeNumberValue("limitPrice", orderModel.limitPrice);
    writer.writeNumberValue("side", orderModel.side);
    writer.writeNumberValue("size", orderModel.size);
    writer.writeNumberValue("status", orderModel.status);
    writer.writeNumberValue("stopPrice", orderModel.stopPrice);
    writer.writeStringValue("symbolId", orderModel.symbolId);
    writer.writeNumberValue("type", orderModel.type);
    writer.writeDateValue("updateTimestamp", orderModel.updateTimestamp);
    writer.writeAdditionalData(orderModel.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param PartialCloseContractPositionRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializePartialCloseContractPositionRequest(writer, partialCloseContractPositionRequest = {}, isSerializingDerivedType = false) {
    if (!partialCloseContractPositionRequest || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("accountId", partialCloseContractPositionRequest.accountId);
    writer.writeStringValue("contractId", partialCloseContractPositionRequest.contractId);
    writer.writeNumberValue("size", partialCloseContractPositionRequest.size);
    writer.writeAdditionalData(partialCloseContractPositionRequest.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param PartialClosePositionResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializePartialClosePositionResponse(writer, partialClosePositionResponse = {}, isSerializingDerivedType = false) {
    if (!partialClosePositionResponse || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("errorCode", partialClosePositionResponse.errorCode);
    writer.writeStringValue("errorMessage", partialClosePositionResponse.errorMessage);
    writer.writeBooleanValue("success", partialClosePositionResponse.success);
    writer.writeAdditionalData(partialClosePositionResponse.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param PlaceOrderBracket The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializePlaceOrderBracket(writer, placeOrderBracket = {}, isSerializingDerivedType = false) {
    if (!placeOrderBracket || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("ticks", placeOrderBracket.ticks);
    writer.writeNumberValue("type", placeOrderBracket.type);
    writer.writeAdditionalData(placeOrderBracket.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param PlaceOrderRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializePlaceOrderRequest(writer, placeOrderRequest = {}, isSerializingDerivedType = false) {
    if (!placeOrderRequest || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("accountId", placeOrderRequest.accountId);
    writer.writeStringValue("contractId", placeOrderRequest.contractId);
    writer.writeStringValue("customTag", placeOrderRequest.customTag);
    writer.writeNumberValue("limitPrice", placeOrderRequest.limitPrice);
    writer.writeNumberValue("side", placeOrderRequest.side);
    writer.writeNumberValue("size", placeOrderRequest.size);
    writer.writeObjectValue("stopLossBracket", placeOrderRequest.stopLossBracket, serializePlaceOrderBracket);
    writer.writeNumberValue("stopPrice", placeOrderRequest.stopPrice);
    writer.writeObjectValue("takeProfitBracket", placeOrderRequest.takeProfitBracket, serializePlaceOrderBracket);
    writer.writeNumberValue("trailPrice", placeOrderRequest.trailPrice);
    writer.writeNumberValue("type", placeOrderRequest.type);
    writer.writeAdditionalData(placeOrderRequest.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param PlaceOrderResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializePlaceOrderResponse(writer, placeOrderResponse = {}, isSerializingDerivedType = false) {
    if (!placeOrderResponse || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("errorCode", placeOrderResponse.errorCode);
    writer.writeStringValue("errorMessage", placeOrderResponse.errorMessage);
    writer.writeNumberValue("orderId", placeOrderResponse.orderId);
    writer.writeBooleanValue("success", placeOrderResponse.success);
    writer.writeAdditionalData(placeOrderResponse.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param PositionModel The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializePositionModel(writer, positionModel = {}, isSerializingDerivedType = false) {
    if (!positionModel || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("accountId", positionModel.accountId);
    writer.writeNumberValue("averagePrice", positionModel.averagePrice);
    writer.writeStringValue("contractId", positionModel.contractId);
    writer.writeDateValue("creationTimestamp", positionModel.creationTimestamp);
    writer.writeNumberValue("id", positionModel.id);
    writer.writeNumberValue("size", positionModel.size);
    writer.writeNumberValue("type", positionModel.type);
    writer.writeAdditionalData(positionModel.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param RetrieveBarRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeRetrieveBarRequest(writer, retrieveBarRequest = {}, isSerializingDerivedType = false) {
    if (!retrieveBarRequest || isSerializingDerivedType) {
        return;
    }
    writer.writeStringValue("contractId", retrieveBarRequest.contractId);
    writer.writeDateValue("endTime", retrieveBarRequest.endTime);
    writer.writeBooleanValue("includePartialBar", retrieveBarRequest.includePartialBar);
    writer.writeNumberValue("limit", retrieveBarRequest.limit);
    writer.writeBooleanValue("live", retrieveBarRequest.live);
    writer.writeDateValue("startTime", retrieveBarRequest.startTime);
    writer.writeNumberValue("unit", retrieveBarRequest.unit);
    writer.writeNumberValue("unitNumber", retrieveBarRequest.unitNumber);
    writer.writeAdditionalData(retrieveBarRequest.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param RetrieveBarResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeRetrieveBarResponse(writer, retrieveBarResponse = {}, isSerializingDerivedType = false) {
    if (!retrieveBarResponse || isSerializingDerivedType) {
        return;
    }
    writer.writeCollectionOfObjectValues("bars", retrieveBarResponse.bars, serializeAggregateBarModel);
    writer.writeNumberValue("errorCode", retrieveBarResponse.errorCode);
    writer.writeStringValue("errorMessage", retrieveBarResponse.errorMessage);
    writer.writeBooleanValue("success", retrieveBarResponse.success);
    writer.writeAdditionalData(retrieveBarResponse.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchAccountRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeSearchAccountRequest(writer, searchAccountRequest = {}, isSerializingDerivedType = false) {
    if (!searchAccountRequest || isSerializingDerivedType) {
        return;
    }
    writer.writeBooleanValue("onlyActiveAccounts", searchAccountRequest.onlyActiveAccounts);
    writer.writeAdditionalData(searchAccountRequest.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchAccountResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeSearchAccountResponse(writer, searchAccountResponse = {}, isSerializingDerivedType = false) {
    if (!searchAccountResponse || isSerializingDerivedType) {
        return;
    }
    writer.writeCollectionOfObjectValues("accounts", searchAccountResponse.accounts, serializeTradingAccountModel);
    writer.writeNumberValue("errorCode", searchAccountResponse.errorCode);
    writer.writeStringValue("errorMessage", searchAccountResponse.errorMessage);
    writer.writeBooleanValue("success", searchAccountResponse.success);
    writer.writeAdditionalData(searchAccountResponse.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchContractByIdRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeSearchContractByIdRequest(writer, searchContractByIdRequest = {}, isSerializingDerivedType = false) {
    if (!searchContractByIdRequest || isSerializingDerivedType) {
        return;
    }
    writer.writeStringValue("contractId", searchContractByIdRequest.contractId);
    writer.writeAdditionalData(searchContractByIdRequest.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchContractByIdResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeSearchContractByIdResponse(writer, searchContractByIdResponse = {}, isSerializingDerivedType = false) {
    if (!searchContractByIdResponse || isSerializingDerivedType) {
        return;
    }
    writer.writeObjectValue("contract", searchContractByIdResponse.contract, serializeContractModel);
    writer.writeNumberValue("errorCode", searchContractByIdResponse.errorCode);
    writer.writeStringValue("errorMessage", searchContractByIdResponse.errorMessage);
    writer.writeBooleanValue("success", searchContractByIdResponse.success);
    writer.writeAdditionalData(searchContractByIdResponse.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchContractRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeSearchContractRequest(writer, searchContractRequest = {}, isSerializingDerivedType = false) {
    if (!searchContractRequest || isSerializingDerivedType) {
        return;
    }
    writer.writeBooleanValue("live", searchContractRequest.live);
    writer.writeStringValue("searchText", searchContractRequest.searchText);
    writer.writeAdditionalData(searchContractRequest.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchContractResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeSearchContractResponse(writer, searchContractResponse = {}, isSerializingDerivedType = false) {
    if (!searchContractResponse || isSerializingDerivedType) {
        return;
    }
    writer.writeCollectionOfObjectValues("contracts", searchContractResponse.contracts, serializeContractModel);
    writer.writeNumberValue("errorCode", searchContractResponse.errorCode);
    writer.writeStringValue("errorMessage", searchContractResponse.errorMessage);
    writer.writeBooleanValue("success", searchContractResponse.success);
    writer.writeAdditionalData(searchContractResponse.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchHalfTradeResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeSearchHalfTradeResponse(writer, searchHalfTradeResponse = {}, isSerializingDerivedType = false) {
    if (!searchHalfTradeResponse || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("errorCode", searchHalfTradeResponse.errorCode);
    writer.writeStringValue("errorMessage", searchHalfTradeResponse.errorMessage);
    writer.writeBooleanValue("success", searchHalfTradeResponse.success);
    writer.writeCollectionOfObjectValues("trades", searchHalfTradeResponse.trades, serializeHalfTradeModel);
    writer.writeAdditionalData(searchHalfTradeResponse.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchOpenOrderRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeSearchOpenOrderRequest(writer, searchOpenOrderRequest = {}, isSerializingDerivedType = false) {
    if (!searchOpenOrderRequest || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("accountId", searchOpenOrderRequest.accountId);
    writer.writeAdditionalData(searchOpenOrderRequest.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchOrderRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeSearchOrderRequest(writer, searchOrderRequest = {}, isSerializingDerivedType = false) {
    if (!searchOrderRequest || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("accountId", searchOrderRequest.accountId);
    writer.writeDateValue("endTimestamp", searchOrderRequest.endTimestamp);
    writer.writeDateValue("startTimestamp", searchOrderRequest.startTimestamp);
    writer.writeAdditionalData(searchOrderRequest.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchOrderResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeSearchOrderResponse(writer, searchOrderResponse = {}, isSerializingDerivedType = false) {
    if (!searchOrderResponse || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("errorCode", searchOrderResponse.errorCode);
    writer.writeStringValue("errorMessage", searchOrderResponse.errorMessage);
    writer.writeCollectionOfObjectValues("orders", searchOrderResponse.orders, serializeOrderModel);
    writer.writeBooleanValue("success", searchOrderResponse.success);
    writer.writeAdditionalData(searchOrderResponse.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchPositionRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeSearchPositionRequest(writer, searchPositionRequest = {}, isSerializingDerivedType = false) {
    if (!searchPositionRequest || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("accountId", searchPositionRequest.accountId);
    writer.writeAdditionalData(searchPositionRequest.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchPositionResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeSearchPositionResponse(writer, searchPositionResponse = {}, isSerializingDerivedType = false) {
    if (!searchPositionResponse || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("errorCode", searchPositionResponse.errorCode);
    writer.writeStringValue("errorMessage", searchPositionResponse.errorMessage);
    writer.writeCollectionOfObjectValues("positions", searchPositionResponse.positions, serializePositionModel);
    writer.writeBooleanValue("success", searchPositionResponse.success);
    writer.writeAdditionalData(searchPositionResponse.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SearchTradeRequest The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeSearchTradeRequest(writer, searchTradeRequest = {}, isSerializingDerivedType = false) {
    if (!searchTradeRequest || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("accountId", searchTradeRequest.accountId);
    writer.writeDateValue("endTimestamp", searchTradeRequest.endTimestamp);
    writer.writeDateValue("startTimestamp", searchTradeRequest.startTimestamp);
    writer.writeAdditionalData(searchTradeRequest.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param TradingAccountModel The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeTradingAccountModel(writer, tradingAccountModel = {}, isSerializingDerivedType = false) {
    if (!tradingAccountModel || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("balance", tradingAccountModel.balance);
    writer.writeBooleanValue("canTrade", tradingAccountModel.canTrade);
    writer.writeNumberValue("id", tradingAccountModel.id);
    writer.writeBooleanValue("isVisible", tradingAccountModel.isVisible);
    writer.writeStringValue("name", tradingAccountModel.name);
    writer.writeBooleanValue("simulated", tradingAccountModel.simulated);
    writer.writeAdditionalData(tradingAccountModel.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param ValidateResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
function serializeValidateResponse(writer, validateResponse = {}, isSerializingDerivedType = false) {
    if (!validateResponse || isSerializingDerivedType) {
        return;
    }
    writer.writeNumberValue("errorCode", validateResponse.errorCode);
    writer.writeStringValue("errorMessage", validateResponse.errorMessage);
    writer.writeStringValue("newToken", validateResponse.newToken);
    writer.writeBooleanValue("success", validateResponse.success);
    writer.writeAdditionalData(validateResponse.additionalData);
}
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=index.js.map