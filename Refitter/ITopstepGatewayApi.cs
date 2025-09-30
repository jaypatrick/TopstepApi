
using Refit;
using Refitter.Api;

namespace Refitter.Client
{
    /// <summary>ProjectX Gateway API</summary>
    [System.CodeDom.Compiler.GeneratedCode("Refitter", "1.6.3.0")]
    public partial interface ITopstepGatewayAPI
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