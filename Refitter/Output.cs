
using Refit;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using System.Threading;
using System.Threading.Tasks;

#nullable enable annotations

namespace GeneratedCode
{
    /// <summary>ProjectX Gateway API</summary>
    [System.CodeDom.Compiler.GeneratedCode("Refitter", "1.6.3.0")]
    public partial interface IProjectXGatewayAPI
    {
        /// <summary>Searches for accounts based on the provided request.</summary>
        /// <param name="request">The request containing search criteria.</param>
        /// <returns>
        /// A <see cref="Task"/> representing the <see cref="IApiResponse"/> instance containing the result:
        /// <list type="table">
        /// <listheader>
        /// <term>Status</term>
        /// <description>Description</description>
        /// </listheader>
        /// <item>
        /// <term>200</term>
        /// <description>The search account response.</description>
        /// </item>
        /// </list>
        /// </returns>
        [Post("/api/Account/search")]
        Task<IApiResponse<SearchAccountResponse>> SearchAccounts([Body] SearchAccountRequest request, CancellationToken cancellationToken = default);

        /// <summary>Login as the specified user using the specified application.</summary>
        /// <param name="request">The login request.</param>
        /// <returns>
        /// A <see cref="Task"/> representing the <see cref="IApiResponse"/> instance containing the result:
        /// <list type="table">
        /// <listheader>
        /// <term>Status</term>
        /// <description>Description</description>
        /// </listheader>
        /// <item>
        /// <term>200</term>
        /// <description>A server side error occurred.</description>
        /// </item>
        /// </list>
        /// </returns>
        [Post("/api/Auth/loginApp")]
        Task<IApiResponse<LoginResponse>> LoginApp([Body] LoginAppRequest request, CancellationToken cancellationToken = default);

        /// <summary>Login as the specified user using the specified API key.</summary>
        /// <param name="request">The login request.</param>
        /// <returns>
        /// A <see cref="Task"/> representing the <see cref="IApiResponse"/> instance containing the result:
        /// <list type="table">
        /// <listheader>
        /// <term>Status</term>
        /// <description>Description</description>
        /// </listheader>
        /// <item>
        /// <term>200</term>
        /// <description>A server side error occurred.</description>
        /// </item>
        /// </list>
        /// </returns>
        [Post("/api/Auth/loginKey")]
        Task<IApiResponse<LoginResponse>> LoginKey([Body] LoginApiKeyRequest request, CancellationToken cancellationToken = default);

        /// <summary>Logs out the current authenticated user.</summary>
        /// <returns>
        /// A <see cref="Task"/> representing the <see cref="IApiResponse"/> instance containing the result:
        /// <list type="table">
        /// <listheader>
        /// <term>Status</term>
        /// <description>Description</description>
        /// </listheader>
        /// <item>
        /// <term>200</term>
        /// <description>A server side error occurred.</description>
        /// </item>
        /// </list>
        /// </returns>
        [Post("/api/Auth/logout")]
        Task<IApiResponse<LogoutResponse>> Logout(CancellationToken cancellationToken = default);

        /// <summary>Validates the current user's session.</summary>
        /// <returns>
        /// A <see cref="Task"/> representing the <see cref="IApiResponse"/> instance containing the result:
        /// <list type="table">
        /// <listheader>
        /// <term>Status</term>
        /// <description>Description</description>
        /// </listheader>
        /// <item>
        /// <term>200</term>
        /// <description>A server side error occurred.</description>
        /// </item>
        /// </list>
        /// </returns>
        [Post("/api/Auth/validate")]
        Task<IApiResponse<ValidateResponse>> Validate(CancellationToken cancellationToken = default);

        /// <summary>Searches for contracts based on the provided search criteria.</summary>
        /// <param name="request">The search criteria for finding contracts.</param>
        /// <returns>
        /// A <see cref="Task"/> representing the <see cref="IApiResponse"/> instance containing the result:
        /// <list type="table">
        /// <listheader>
        /// <term>Status</term>
        /// <description>Description</description>
        /// </listheader>
        /// <item>
        /// <term>200</term>
        /// <description>A response containing the search results, including any matching contracts.</description>
        /// </item>
        /// </list>
        /// </returns>
        [Post("/api/Contract/search")]
        Task<IApiResponse<SearchContractResponse>> SearchContracts([Body] SearchContractRequest request, CancellationToken cancellationToken = default);

        /// <summary>Searches for a contract by its ID.</summary>
        /// <param name="request">The request containing the contract ID.</param>
        /// <returns>
        /// A <see cref="Task"/> representing the <see cref="IApiResponse"/> instance containing the result:
        /// <list type="table">
        /// <listheader>
        /// <term>Status</term>
        /// <description>Description</description>
        /// </listheader>
        /// <item>
        /// <term>200</term>
        /// <description>A response containing the search result, including the matching contract if found.</description>
        /// </item>
        /// </list>
        /// </returns>
        [Post("/api/Contract/searchById")]
        Task<IApiResponse<SearchContractByIdResponse>> SearchContractById([Body] SearchContractByIdRequest request, CancellationToken cancellationToken = default);

        /// <summary>Lists available contracts based on the provided request parameters.</summary>
        /// <param name="request">The listing criteria for available contracts.</param>
        /// <returns>
        /// A <see cref="Task"/> representing the <see cref="IApiResponse"/> instance containing the result:
        /// <list type="table">
        /// <listheader>
        /// <term>Status</term>
        /// <description>Description</description>
        /// </listheader>
        /// <item>
        /// <term>200</term>
        /// <description>A response containing the list of available contracts.</description>
        /// </item>
        /// </list>
        /// </returns>
        [Post("/api/Contract/available")]
        Task<IApiResponse<ListAvailableContractResponse>> AvailableContracts([Body] ListAvailableContractRequest request, CancellationToken cancellationToken = default);

        /// <summary>Retrieves historical bars based on the specified request parameters.</summary>
        /// <param name="request">The request containing parameters for retrieving historical bars.</param>
        /// <returns>
        /// A <see cref="Task"/> representing the <see cref="IApiResponse"/> instance containing the result:
        /// <list type="table">
        /// <listheader>
        /// <term>Status</term>
        /// <description>Description</description>
        /// </listheader>
        /// <item>
        /// <term>200</term>
        /// <description>The response with the retrieved bars.</description>
        /// </item>
        /// </list>
        /// </returns>
        [Post("/api/History/retrieveBars")]
        Task<IApiResponse<RetrieveBarResponse>> GetBars([Body] RetrieveBarRequest request, CancellationToken cancellationToken = default);

        /// <summary>Searches for orders based on the provided request.</summary>
        /// <param name="request">A request containing search criteria.</param>
        /// <returns>
        /// A <see cref="Task"/> representing the <see cref="IApiResponse"/> instance containing the result:
        /// <list type="table">
        /// <listheader>
        /// <term>Status</term>
        /// <description>Description</description>
        /// </listheader>
        /// <item>
        /// <term>200</term>
        /// <description>A response with search results.</description>
        /// </item>
        /// </list>
        /// </returns>
        [Post("/api/Order/search")]
        Task<IApiResponse<SearchOrderResponse>> SearchOrders([Body] SearchOrderRequest request, CancellationToken cancellationToken = default);

        /// <summary>Searches for open (working/active) orders based on the provided request.</summary>
        /// <param name="request">A request containing search criteria.</param>
        /// <returns>
        /// A <see cref="Task"/> representing the <see cref="IApiResponse"/> instance containing the result:
        /// <list type="table">
        /// <listheader>
        /// <term>Status</term>
        /// <description>Description</description>
        /// </listheader>
        /// <item>
        /// <term>200</term>
        /// <description>A response with search results.</description>
        /// </item>
        /// </list>
        /// </returns>
        [Post("/api/Order/searchOpen")]
        Task<IApiResponse<SearchOrderResponse>> SearchOpenOrders([Body] SearchOpenOrderRequest request, CancellationToken cancellationToken = default);

        /// <summary>Places a new order based on the provided request.</summary>
        /// <param name="request">A request containing order details.</param>
        /// <returns>
        /// A <see cref="Task"/> representing the <see cref="IApiResponse"/> instance containing the result:
        /// <list type="table">
        /// <listheader>
        /// <term>Status</term>
        /// <description>Description</description>
        /// </listheader>
        /// <item>
        /// <term>200</term>
        /// <description>A response with order placement details.</description>
        /// </item>
        /// </list>
        /// </returns>
        [Post("/api/Order/place")]
        Task<IApiResponse<PlaceOrderResponse>> PlaceOrder([Body] PlaceOrderRequest request, CancellationToken cancellationToken = default);

        /// <summary>Cancels an existing order based on the provided request.</summary>
        /// <param name="request">A request containing order cancellation details.</param>
        /// <returns>
        /// A <see cref="Task"/> representing the <see cref="IApiResponse"/> instance containing the result:
        /// <list type="table">
        /// <listheader>
        /// <term>Status</term>
        /// <description>Description</description>
        /// </listheader>
        /// <item>
        /// <term>200</term>
        /// <description>A response with order cancellation details.</description>
        /// </item>
        /// </list>
        /// </returns>
        [Post("/api/Order/cancel")]
        Task<IApiResponse<CancelOrderResponse>> CancelOrder([Body] CancelOrderRequest request, CancellationToken cancellationToken = default);

        /// <summary>Modifies an existing order based on the provided request.</summary>
        /// <param name="request">A request containing order modification details.</param>
        /// <returns>
        /// A <see cref="Task"/> representing the <see cref="IApiResponse"/> instance containing the result:
        /// <list type="table">
        /// <listheader>
        /// <term>Status</term>
        /// <description>Description</description>
        /// </listheader>
        /// <item>
        /// <term>200</term>
        /// <description>A response with order modification details.</description>
        /// </item>
        /// </list>
        /// </returns>
        [Post("/api/Order/modify")]
        Task<IApiResponse<ModifyOrderResponse>> ModifyOrder([Body] ModifyOrderRequest request, CancellationToken cancellationToken = default);

        /// <summary>Searches for open positions based on the provided request.</summary>
        /// <param name="request">A request containing search criteria.</param>
        /// <returns>
        /// A <see cref="Task"/> representing the <see cref="IApiResponse"/> instance containing the result:
        /// <list type="table">
        /// <listheader>
        /// <term>Status</term>
        /// <description>Description</description>
        /// </listheader>
        /// <item>
        /// <term>200</term>
        /// <description>A response with search results.</description>
        /// </item>
        /// </list>
        /// </returns>
        [Post("/api/Position/searchOpen")]
        Task<IApiResponse<SearchPositionResponse>> SearchOpenPositions([Body] SearchPositionRequest request, CancellationToken cancellationToken = default);

        /// <summary>Closes a contract position based on the provided request.</summary>
        /// <param name="request">A request containing the account ID and contract ID to close.</param>
        /// <returns>
        /// A <see cref="Task"/> representing the <see cref="IApiResponse"/> instance containing the result:
        /// <list type="table">
        /// <listheader>
        /// <term>Status</term>
        /// <description>Description</description>
        /// </listheader>
        /// <item>
        /// <term>200</term>
        /// <description>A response indicating the success or failure of the close operation.</description>
        /// </item>
        /// </list>
        /// </returns>
        [Post("/api/Position/closeContract")]
        Task<IApiResponse<ClosePositionResponse>> CloseContractPosition([Body] CloseContractPositionRequest request, CancellationToken cancellationToken = default);

        /// <summary>Partially closes a contract position based on the provided request.</summary>
        /// <param name="request">A request containing the account ID, contract ID, and size to close.</param>
        /// <returns>
        /// A <see cref="Task"/> representing the <see cref="IApiResponse"/> instance containing the result:
        /// <list type="table">
        /// <listheader>
        /// <term>Status</term>
        /// <description>Description</description>
        /// </listheader>
        /// <item>
        /// <term>200</term>
        /// <description>A response indicating the success or failure of the partial close operation.</description>
        /// </item>
        /// </list>
        /// </returns>
        [Post("/api/Position/partialCloseContract")]
        Task<IApiResponse<PartialClosePositionResponse>> PartialCloseContractPosition([Body] PartialCloseContractPositionRequest request, CancellationToken cancellationToken = default);

        /// <summary>Handles the ping request to check the status of the API.</summary>
        /// <returns>
        /// A <see cref="Task"/> representing the <see cref="IApiResponse"/> instance containing the result:
        /// <list type="table">
        /// <listheader>
        /// <term>Status</term>
        /// <description>Description</description>
        /// </listheader>
        /// <item>
        /// <term>200</term>
        /// <description>Returns a \"pong\" to indicate the API is responsive.</description>
        /// </item>
        /// </list>
        /// </returns>
        [Get("/api/Status/ping")]
        Task<IApiResponse<string>> Ping(CancellationToken cancellationToken = default);

        /// <summary>Searches for half-turn trades based on the provided request parameters.</summary>
        /// <param name="request">A request containing search criteria.</param>
        /// <returns>
        /// A <see cref="Task"/> representing the <see cref="IApiResponse"/> instance containing the result:
        /// <list type="table">
        /// <listheader>
        /// <term>Status</term>
        /// <description>Description</description>
        /// </listheader>
        /// <item>
        /// <term>200</term>
        /// <description>A response with the search results.</description>
        /// </item>
        /// </list>
        /// </returns>
        [Post("/api/Trade/search")]
        Task<IApiResponse<SearchHalfTradeResponse>> SearchHalfTurnTrades([Body] SearchTradeRequest request, CancellationToken cancellationToken = default);


    }

}

//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

#pragma warning disable 108 // Disable "CS0108 '{derivedDto}.ToJson()' hides inherited member '{dtoBase}.ToJson()'. Use the new keyword if hiding was intended."
#pragma warning disable 114 // Disable "CS0114 '{derivedDto}.RaisePropertyChanged(String)' hides inherited member 'dtoBase.RaisePropertyChanged(String)'. To make the current member override that implementation, add the override keyword. Otherwise add the new keyword."
#pragma warning disable 472 // Disable "CS0472 The result of the expression is always 'false' since a value of type 'Int32' is never equal to 'null' of type 'Int32?'
#pragma warning disable 612 // Disable "CS0612 '...' is obsolete"
#pragma warning disable 649 // Disable "CS0649 Field is never assigned to, and will always have its default value null"
#pragma warning disable 1573 // Disable "CS1573 Parameter '...' has no matching param tag in the XML comment for ...
#pragma warning disable 1591 // Disable "CS1591 Missing XML comment for publicly visible type or member ..."
#pragma warning disable 8073 // Disable "CS8073 The result of the expression is always 'false' since a value of type 'T' is never equal to 'null' of type 'T?'"
#pragma warning disable 3016 // Disable "CS3016 Arrays as attribute arguments is not CLS-compliant"
#pragma warning disable 8600 // Disable "CS8600 Converting null literal or possible null value to non-nullable type"
#pragma warning disable 8602 // Disable "CS8602 Dereference of a possibly null reference"
#pragma warning disable 8603 // Disable "CS8603 Possible null reference return"
#pragma warning disable 8604 // Disable "CS8604 Possible null reference argument for parameter"
#pragma warning disable 8625 // Disable "CS8625 Cannot convert null literal to non-nullable reference type"
#pragma warning disable 8765 // Disable "CS8765 Nullability of type of parameter doesn't match overridden member (possibly because of nullability attributes)."

namespace GeneratedCode
{
    using System = global::System;

    

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class SearchAccountResponse
    {

        [JsonPropertyName("success")]
        public bool Success { get; set; }

        [JsonPropertyName("errorCode")]
        public SearchAccountErrorCode ErrorCode { get; set; }

        [JsonPropertyName("errorMessage")]
        public string ErrorMessage { get; set; }

        [JsonPropertyName("accounts")]
        public ICollection<TradingAccountModel> Accounts { get; set; }

    }

    /// <summary>
    /// 0 = Success
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public enum SearchAccountErrorCode
    {

        Success = 0,

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class TradingAccountModel
    {

        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("name")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public string Name { get; set; }

        [JsonPropertyName("balance")]
        public decimal Balance { get; set; }

        [JsonPropertyName("canTrade")]
        public bool CanTrade { get; set; }

        [JsonPropertyName("isVisible")]
        public bool IsVisible { get; set; }

        [JsonPropertyName("simulated")]
        public bool Simulated { get; set; }

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class SearchAccountRequest
    {

        [JsonPropertyName("onlyActiveAccounts")]
        public bool OnlyActiveAccounts { get; set; }

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class LoginResponse
    {

        [JsonPropertyName("success")]
        public bool Success { get; set; }

        [JsonPropertyName("errorCode")]
        public LoginErrorCode ErrorCode { get; set; }

        [JsonPropertyName("errorMessage")]
        public string ErrorMessage { get; set; }

        [JsonPropertyName("token")]
        public string Token { get; set; }

    }

    /// <summary>
    /// 0 = Success
    /// <br/>1 = UserNotFound
    /// <br/>2 = PasswordVerificationFailed
    /// <br/>3 = InvalidCredentials
    /// <br/>4 = AppNotFound
    /// <br/>5 = AppVerificationFailed
    /// <br/>6 = InvalidDevice
    /// <br/>7 = AgreementsNotSigned
    /// <br/>8 = UnknownError
    /// <br/>9 = ApiSubscriptionNotFound
    /// <br/>10 = ApiKeyAuthenticationDisabled
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public enum LoginErrorCode
    {

        Success = 0,

        UserNotFound = 1,

        PasswordVerificationFailed = 2,

        InvalidCredentials = 3,

        AppNotFound = 4,

        AppVerificationFailed = 5,

        InvalidDevice = 6,

        AgreementsNotSigned = 7,

        UnknownError = 8,

        ApiSubscriptionNotFound = 9,

        ApiKeyAuthenticationDisabled = 10,

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class LoginAppRequest
    {

        [JsonPropertyName("userName")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public string UserName { get; set; }

        [JsonPropertyName("password")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public string Password { get; set; }

        [JsonPropertyName("deviceId")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public string DeviceId { get; set; }

        [JsonPropertyName("appId")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public string AppId { get; set; }

        [JsonPropertyName("verifyKey")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public string VerifyKey { get; set; }

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class LoginApiKeyRequest
    {

        [JsonPropertyName("userName")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public string UserName { get; set; }

        [JsonPropertyName("apiKey")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public string ApiKey { get; set; }

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class LogoutResponse
    {

        [JsonPropertyName("success")]
        public bool Success { get; set; }

        [JsonPropertyName("errorCode")]
        public LogoutErrorCode ErrorCode { get; set; }

        [JsonPropertyName("errorMessage")]
        public string ErrorMessage { get; set; }

    }

    /// <summary>
    /// 0 = Success
    /// <br/>1 = InvalidSession
    /// <br/>2 = UnknownError
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public enum LogoutErrorCode
    {

        Success = 0,

        InvalidSession = 1,

        UnknownError = 2,

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class ValidateResponse
    {

        [JsonPropertyName("success")]
        public bool Success { get; set; }

        [JsonPropertyName("errorCode")]
        public ValidateErrorCode ErrorCode { get; set; }

        [JsonPropertyName("errorMessage")]
        public string ErrorMessage { get; set; }

        [JsonPropertyName("newToken")]
        public string NewToken { get; set; }

    }

    /// <summary>
    /// 0 = Success
    /// <br/>1 = InvalidSession
    /// <br/>2 = SessionNotFound
    /// <br/>3 = ExpiredToken
    /// <br/>4 = UnknownError
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public enum ValidateErrorCode
    {

        Success = 0,

        InvalidSession = 1,

        SessionNotFound = 2,

        ExpiredToken = 3,

        UnknownError = 4,

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class SearchContractResponse
    {

        [JsonPropertyName("success")]
        public bool Success { get; set; }

        [JsonPropertyName("errorCode")]
        public SearchContractErrorCode ErrorCode { get; set; }

        [JsonPropertyName("errorMessage")]
        public string ErrorMessage { get; set; }

        [JsonPropertyName("contracts")]
        public ICollection<ContractModel> Contracts { get; set; }

    }

    /// <summary>
    /// 0 = Success
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public enum SearchContractErrorCode
    {

        Success = 0,

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class ContractModel
    {

        [JsonPropertyName("id")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public string Id { get; set; }

        [JsonPropertyName("name")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public string Name { get; set; }

        [JsonPropertyName("description")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public string Description { get; set; }

        [JsonPropertyName("tickSize")]
        public decimal TickSize { get; set; }

        [JsonPropertyName("tickValue")]
        public decimal TickValue { get; set; }

        [JsonPropertyName("activeContract")]
        public bool ActiveContract { get; set; }

        [JsonPropertyName("symbolId")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public string SymbolId { get; set; }

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class SearchContractRequest
    {

        [JsonPropertyName("searchText")]
        public string SearchText { get; set; }

        [JsonPropertyName("live")]
        public bool Live { get; set; }

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class SearchContractByIdResponse
    {

        [JsonPropertyName("success")]
        public bool Success { get; set; }

        [JsonPropertyName("errorCode")]
        public SearchContractByIdErrorCode ErrorCode { get; set; }

        [JsonPropertyName("errorMessage")]
        public string ErrorMessage { get; set; }

        [JsonPropertyName("contract")]
        public ContractModel Contract { get; set; }

    }

    /// <summary>
    /// 0 = Success
    /// <br/>1 = ContractNotFound
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public enum SearchContractByIdErrorCode
    {

        Success = 0,

        ContractNotFound = 1,

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class SearchContractByIdRequest
    {

        [JsonPropertyName("contractId")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public string ContractId { get; set; }

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class ListAvailableContractResponse
    {

        [JsonPropertyName("success")]
        public bool Success { get; set; }

        [JsonPropertyName("errorCode")]
        public ListAvailableContractErrorCode ErrorCode { get; set; }

        [JsonPropertyName("errorMessage")]
        public string ErrorMessage { get; set; }

        [JsonPropertyName("contracts")]
        public ICollection<ContractModel> Contracts { get; set; }

    }

    /// <summary>
    /// 0 = Success
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public enum ListAvailableContractErrorCode
    {

        Success = 0,

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class ListAvailableContractRequest
    {

        [JsonPropertyName("live")]
        public bool Live { get; set; }

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class RetrieveBarResponse
    {

        [JsonPropertyName("success")]
        public bool Success { get; set; }

        [JsonPropertyName("errorCode")]
        public RetrieveBarErrorCode ErrorCode { get; set; }

        [JsonPropertyName("errorMessage")]
        public string ErrorMessage { get; set; }

        [JsonPropertyName("bars")]
        public ICollection<AggregateBarModel> Bars { get; set; }

    }

    /// <summary>
    /// 0 = Success
    /// <br/>1 = ContractNotFound
    /// <br/>2 = UnitInvalid
    /// <br/>3 = UnitNumberInvalid
    /// <br/>4 = LimitInvalid
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public enum RetrieveBarErrorCode
    {

        Success = 0,

        ContractNotFound = 1,

        UnitInvalid = 2,

        UnitNumberInvalid = 3,

        LimitInvalid = 4,

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class AggregateBarModel
    {

        [JsonPropertyName("t")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public System.DateTimeOffset T { get; set; }

        [JsonPropertyName("o")]
        public decimal O { get; set; }

        [JsonPropertyName("h")]
        public decimal H { get; set; }

        [JsonPropertyName("l")]
        public decimal L { get; set; }

        [JsonPropertyName("c")]
        public decimal C { get; set; }

        [JsonPropertyName("v")]
        public long V { get; set; }

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class RetrieveBarRequest
    {

        [JsonPropertyName("contractId")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public string ContractId { get; set; }

        [JsonPropertyName("live")]
        public bool Live { get; set; }

        [JsonPropertyName("startTime")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public System.DateTimeOffset StartTime { get; set; }

        [JsonPropertyName("endTime")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public System.DateTimeOffset EndTime { get; set; }

        [JsonPropertyName("unit")]
        public AggregateBarUnit Unit { get; set; }

        [JsonPropertyName("unitNumber")]
        public int UnitNumber { get; set; }

        [JsonPropertyName("limit")]
        public int Limit { get; set; }

        [JsonPropertyName("includePartialBar")]
        public bool IncludePartialBar { get; set; }

    }

    /// <summary>
    /// 0 = Unspecified
    /// <br/>1 = Second
    /// <br/>2 = Minute
    /// <br/>3 = Hour
    /// <br/>4 = Day
    /// <br/>5 = Week
    /// <br/>6 = Month
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public enum AggregateBarUnit
    {

        Unspecified = 0,

        Second = 1,

        Minute = 2,

        Hour = 3,

        Day = 4,

        Week = 5,

        Month = 6,

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class SearchOrderResponse
    {

        [JsonPropertyName("success")]
        public bool Success { get; set; }

        [JsonPropertyName("errorCode")]
        public SearchOrderErrorCode ErrorCode { get; set; }

        [JsonPropertyName("errorMessage")]
        public string ErrorMessage { get; set; }

        [JsonPropertyName("orders")]
        public ICollection<OrderModel> Orders { get; set; }

    }

    /// <summary>
    /// 0 = Success
    /// <br/>1 = AccountNotFound
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public enum SearchOrderErrorCode
    {

        Success = 0,

        AccountNotFound = 1,

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class OrderModel
    {

        [JsonPropertyName("id")]
        public long Id { get; set; }

        [JsonPropertyName("accountId")]
        public int AccountId { get; set; }

        [JsonPropertyName("contractId")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public string ContractId { get; set; }

        [JsonPropertyName("symbolId")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public string SymbolId { get; set; }

        [JsonPropertyName("creationTimestamp")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public System.DateTimeOffset CreationTimestamp { get; set; }

        [JsonPropertyName("updateTimestamp")]
        public System.DateTimeOffset? UpdateTimestamp { get; set; }

        [JsonPropertyName("status")]
        public OrderStatus Status { get; set; }

        [JsonPropertyName("type")]
        public OrderType Type { get; set; }

        [JsonPropertyName("side")]
        public OrderSide Side { get; set; }

        [JsonPropertyName("size")]
        public int Size { get; set; }

        [JsonPropertyName("limitPrice")]
        public decimal? LimitPrice { get; set; }

        [JsonPropertyName("stopPrice")]
        public decimal? StopPrice { get; set; }

        [JsonPropertyName("fillVolume")]
        public int FillVolume { get; set; }

        [JsonPropertyName("filledPrice")]
        public decimal? FilledPrice { get; set; }

        [JsonPropertyName("customTag")]
        public string CustomTag { get; set; }

    }

    /// <summary>
    /// 0 = None
    /// <br/>1 = Open
    /// <br/>2 = Filled
    /// <br/>3 = Cancelled
    /// <br/>4 = Expired
    /// <br/>5 = Rejected
    /// <br/>6 = Pending
    /// <br/>7 = PendingCancellation
    /// <br/>8 = Suspended
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public enum OrderStatus
    {

        None = 0,

        Open = 1,

        Filled = 2,

        Cancelled = 3,

        Expired = 4,

        Rejected = 5,

        Pending = 6,

        PendingCancellation = 7,

        Suspended = 8,

    }

    /// <summary>
    /// 0 = Unknown
    /// <br/>1 = Limit
    /// <br/>2 = Market
    /// <br/>3 = StopLimit
    /// <br/>4 = Stop
    /// <br/>5 = TrailingStop
    /// <br/>6 = JoinBid
    /// <br/>7 = JoinAsk
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public enum OrderType
    {

        Unknown = 0,

        Limit = 1,

        Market = 2,

        StopLimit = 3,

        Stop = 4,

        TrailingStop = 5,

        JoinBid = 6,

        JoinAsk = 7,

    }

    /// <summary>
    /// 0 = Bid
    /// <br/>1 = Ask
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public enum OrderSide
    {

        Bid = 0,

        Ask = 1,

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class SearchOrderRequest
    {

        [JsonPropertyName("accountId")]
        public int AccountId { get; set; }

        [JsonPropertyName("startTimestamp")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public System.DateTimeOffset StartTimestamp { get; set; }

        [JsonPropertyName("endTimestamp")]
        public System.DateTimeOffset? EndTimestamp { get; set; }

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class SearchOpenOrderRequest
    {

        [JsonPropertyName("accountId")]
        public int AccountId { get; set; }

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class PlaceOrderResponse
    {

        [JsonPropertyName("success")]
        public bool Success { get; set; }

        [JsonPropertyName("errorCode")]
        public PlaceOrderErrorCode ErrorCode { get; set; }

        [JsonPropertyName("errorMessage")]
        public string ErrorMessage { get; set; }

        [JsonPropertyName("orderId")]
        public long? OrderId { get; set; }

    }

    /// <summary>
    /// 0 = Success
    /// <br/>1 = AccountNotFound
    /// <br/>2 = OrderRejected
    /// <br/>3 = InsufficientFunds
    /// <br/>4 = AccountViolation
    /// <br/>5 = OutsideTradingHours
    /// <br/>6 = OrderPending
    /// <br/>7 = UnknownError
    /// <br/>8 = ContractNotFound
    /// <br/>9 = ContractNotActive
    /// <br/>10 = AccountRejected
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public enum PlaceOrderErrorCode
    {

        Success = 0,

        AccountNotFound = 1,

        OrderRejected = 2,

        InsufficientFunds = 3,

        AccountViolation = 4,

        OutsideTradingHours = 5,

        OrderPending = 6,

        UnknownError = 7,

        ContractNotFound = 8,

        ContractNotActive = 9,

        AccountRejected = 10,

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class PlaceOrderRequest
    {

        [JsonPropertyName("accountId")]
        public int AccountId { get; set; }

        [JsonPropertyName("contractId")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public string ContractId { get; set; }

        [JsonPropertyName("type")]
        public OrderType Type { get; set; }

        [JsonPropertyName("side")]
        public OrderSide Side { get; set; }

        [JsonPropertyName("size")]
        public int Size { get; set; }

        [JsonPropertyName("limitPrice")]
        public decimal? LimitPrice { get; set; }

        [JsonPropertyName("stopPrice")]
        public decimal? StopPrice { get; set; }

        [JsonPropertyName("trailPrice")]
        public decimal? TrailPrice { get; set; }

        [JsonPropertyName("customTag")]
        public string CustomTag { get; set; }

        [JsonPropertyName("stopLossBracket")]
        public PlaceOrderBracket StopLossBracket { get; set; }

        [JsonPropertyName("takeProfitBracket")]
        public PlaceOrderBracket TakeProfitBracket { get; set; }

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class PlaceOrderBracket
    {

        [JsonPropertyName("ticks")]
        public int Ticks { get; set; }

        [JsonPropertyName("type")]
        public OrderType Type { get; set; }

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class CancelOrderResponse
    {

        [JsonPropertyName("success")]
        public bool Success { get; set; }

        [JsonPropertyName("errorCode")]
        public CancelOrderErrorCode ErrorCode { get; set; }

        [JsonPropertyName("errorMessage")]
        public string ErrorMessage { get; set; }

    }

    /// <summary>
    /// 0 = Success
    /// <br/>1 = AccountNotFound
    /// <br/>2 = OrderNotFound
    /// <br/>3 = Rejected
    /// <br/>4 = Pending
    /// <br/>5 = UnknownError
    /// <br/>6 = AccountRejected
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public enum CancelOrderErrorCode
    {

        Success = 0,

        AccountNotFound = 1,

        OrderNotFound = 2,

        Rejected = 3,

        Pending = 4,

        UnknownError = 5,

        AccountRejected = 6,

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class CancelOrderRequest
    {

        [JsonPropertyName("accountId")]
        public int AccountId { get; set; }

        [JsonPropertyName("orderId")]
        public long OrderId { get; set; }

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class ModifyOrderResponse
    {

        [JsonPropertyName("success")]
        public bool Success { get; set; }

        [JsonPropertyName("errorCode")]
        public ModifyOrderErrorCode ErrorCode { get; set; }

        [JsonPropertyName("errorMessage")]
        public string ErrorMessage { get; set; }

    }

    /// <summary>
    /// 0 = Success
    /// <br/>1 = AccountNotFound
    /// <br/>2 = OrderNotFound
    /// <br/>3 = Rejected
    /// <br/>4 = Pending
    /// <br/>5 = UnknownError
    /// <br/>6 = AccountRejected
    /// <br/>7 = ContractNotFound
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public enum ModifyOrderErrorCode
    {

        Success = 0,

        AccountNotFound = 1,

        OrderNotFound = 2,

        Rejected = 3,

        Pending = 4,

        UnknownError = 5,

        AccountRejected = 6,

        ContractNotFound = 7,

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class ModifyOrderRequest
    {

        [JsonPropertyName("accountId")]
        public int AccountId { get; set; }

        [JsonPropertyName("orderId")]
        public long OrderId { get; set; }

        [JsonPropertyName("size")]
        public int? Size { get; set; }

        [JsonPropertyName("limitPrice")]
        public decimal? LimitPrice { get; set; }

        [JsonPropertyName("stopPrice")]
        public decimal? StopPrice { get; set; }

        [JsonPropertyName("trailPrice")]
        public decimal? TrailPrice { get; set; }

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class SearchPositionResponse
    {

        [JsonPropertyName("success")]
        public bool Success { get; set; }

        [JsonPropertyName("errorCode")]
        public SearchPositionErrorCode ErrorCode { get; set; }

        [JsonPropertyName("errorMessage")]
        public string ErrorMessage { get; set; }

        [JsonPropertyName("positions")]
        public ICollection<PositionModel> Positions { get; set; }

    }

    /// <summary>
    /// 0 = Success
    /// <br/>1 = AccountNotFound
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public enum SearchPositionErrorCode
    {

        Success = 0,

        AccountNotFound = 1,

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class PositionModel
    {

        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("accountId")]
        public int AccountId { get; set; }

        [JsonPropertyName("contractId")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public string ContractId { get; set; }

        [JsonPropertyName("creationTimestamp")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public System.DateTimeOffset CreationTimestamp { get; set; }

        [JsonPropertyName("type")]
        public PositionType Type { get; set; }

        [JsonPropertyName("size")]
        public int Size { get; set; }

        [JsonPropertyName("averagePrice")]
        public decimal AveragePrice { get; set; }

    }

    /// <summary>
    /// 0 = Undefined
    /// <br/>1 = Long
    /// <br/>2 = Short
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public enum PositionType
    {

        Undefined = 0,

        Long = 1,

        Short = 2,

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class SearchPositionRequest
    {

        [JsonPropertyName("accountId")]
        public int AccountId { get; set; }

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class ClosePositionResponse
    {

        [JsonPropertyName("success")]
        public bool Success { get; set; }

        [JsonPropertyName("errorCode")]
        public ClosePositionErrorCode ErrorCode { get; set; }

        [JsonPropertyName("errorMessage")]
        public string ErrorMessage { get; set; }

    }

    /// <summary>
    /// 0 = Success
    /// <br/>1 = AccountNotFound
    /// <br/>2 = PositionNotFound
    /// <br/>3 = ContractNotFound
    /// <br/>4 = ContractNotActive
    /// <br/>5 = OrderRejected
    /// <br/>6 = OrderPending
    /// <br/>7 = UnknownError
    /// <br/>8 = AccountRejected
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public enum ClosePositionErrorCode
    {

        Success = 0,

        AccountNotFound = 1,

        PositionNotFound = 2,

        ContractNotFound = 3,

        ContractNotActive = 4,

        OrderRejected = 5,

        OrderPending = 6,

        UnknownError = 7,

        AccountRejected = 8,

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class CloseContractPositionRequest
    {

        [JsonPropertyName("accountId")]
        public int AccountId { get; set; }

        [JsonPropertyName("contractId")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public string ContractId { get; set; }

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class PartialClosePositionResponse
    {

        [JsonPropertyName("success")]
        public bool Success { get; set; }

        [JsonPropertyName("errorCode")]
        public PartialClosePositionErrorCode ErrorCode { get; set; }

        [JsonPropertyName("errorMessage")]
        public string ErrorMessage { get; set; }

    }

    /// <summary>
    /// 0 = Success
    /// <br/>1 = AccountNotFound
    /// <br/>2 = PositionNotFound
    /// <br/>3 = ContractNotFound
    /// <br/>4 = ContractNotActive
    /// <br/>5 = InvalidCloseSize
    /// <br/>6 = OrderRejected
    /// <br/>7 = OrderPending
    /// <br/>8 = UnknownError
    /// <br/>9 = AccountRejected
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public enum PartialClosePositionErrorCode
    {

        Success = 0,

        AccountNotFound = 1,

        PositionNotFound = 2,

        ContractNotFound = 3,

        ContractNotActive = 4,

        InvalidCloseSize = 5,

        OrderRejected = 6,

        OrderPending = 7,

        UnknownError = 8,

        AccountRejected = 9,

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class PartialCloseContractPositionRequest
    {

        [JsonPropertyName("accountId")]
        public int AccountId { get; set; }

        [JsonPropertyName("contractId")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public string ContractId { get; set; }

        [JsonPropertyName("size")]
        public int Size { get; set; }

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class SearchHalfTradeResponse
    {

        [JsonPropertyName("success")]
        public bool Success { get; set; }

        [JsonPropertyName("errorCode")]
        public SearchTradeErrorCode ErrorCode { get; set; }

        [JsonPropertyName("errorMessage")]
        public string ErrorMessage { get; set; }

        [JsonPropertyName("trades")]
        public ICollection<HalfTradeModel> Trades { get; set; }

    }

    /// <summary>
    /// 0 = Success
    /// <br/>1 = AccountNotFound
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public enum SearchTradeErrorCode
    {

        Success = 0,

        AccountNotFound = 1,

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class HalfTradeModel
    {

        [JsonPropertyName("id")]
        public long Id { get; set; }

        [JsonPropertyName("accountId")]
        public int AccountId { get; set; }

        [JsonPropertyName("contractId")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public string ContractId { get; set; }

        [JsonPropertyName("creationTimestamp")]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public System.DateTimeOffset CreationTimestamp { get; set; }

        [JsonPropertyName("price")]
        public decimal Price { get; set; }

        [JsonPropertyName("profitAndLoss")]
        public decimal? ProfitAndLoss { get; set; }

        [JsonPropertyName("fees")]
        public decimal Fees { get; set; }

        [JsonPropertyName("side")]
        public OrderSide Side { get; set; }

        [JsonPropertyName("size")]
        public int Size { get; set; }

        [JsonPropertyName("voided")]
        public bool Voided { get; set; }

        [JsonPropertyName("orderId")]
        public long OrderId { get; set; }

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
    public partial class SearchTradeRequest
    {

        [JsonPropertyName("accountId")]
        public int AccountId { get; set; }

        [JsonPropertyName("startTimestamp")]
        public System.DateTimeOffset? StartTimestamp { get; set; }

        [JsonPropertyName("endTimestamp")]
        public System.DateTimeOffset? EndTimestamp { get; set; }

    }


}

#pragma warning restore  108
#pragma warning restore  114
#pragma warning restore  472
#pragma warning restore  612
#pragma warning restore 1573
#pragma warning restore 1591
#pragma warning restore 8073
#pragma warning restore 3016
#pragma warning restore 8600
#pragma warning restore 8602
#pragma warning restore 8603
#pragma warning restore 8604
#pragma warning restore 8625