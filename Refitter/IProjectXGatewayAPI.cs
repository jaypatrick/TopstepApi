using Refit;

namespace GeneratedCode
{
    /// <summary>ProjectX Gateway API</summary>
    [System.CodeDom.Compiler.GeneratedCode("Refitter", "1.6.1.0")]
    public partial interface IProjectXGatewayAPI
    {
        /// <summary>Searches for accounts based on the provided request.</summary>
        /// <param name="request">The request containing search criteria.</param>
        /// <returns>The search account response.</returns>
        /// <exception cref="ApiException">Thrown when the request returns a non-success status code.</exception>
        [Post("/api/Account/search")]
        Task<SearchAccountResponse> SearchAccounts([Body] SearchAccountRequest request);

        /// <summary>Login as the specified user using the specified application.</summary>
        /// <param name="request">The login request.</param>
        /// <returns>A <see cref="Task"/> representing the result of the request.</returns>
        /// <exception cref="ApiException">Thrown when the request returns a non-success status code.</exception>
        [Post("/api/Auth/loginApp")]
        Task<LoginResponse> LoginApp([Body] LoginAppRequest request);

        /// <summary>Login as the specified user using the specified API key.</summary>
        /// <param name="request">The login request.</param>
        /// <returns>A <see cref="Task"/> representing the result of the request.</returns>
        /// <exception cref="ApiException">Thrown when the request returns a non-success status code.</exception>
        [Post("/api/Auth/loginKey")]
        Task<LoginResponse> LoginKey([Body] LoginApiKeyRequest request);

        /// <summary>Logs out the current authenticated user.</summary>
        /// <returns>A <see cref="Task"/> representing the result of the request.</returns>
        /// <exception cref="ApiException">Thrown when the request returns a non-success status code.</exception>
        [Post("/api/Auth/logout")]
        Task<LogoutResponse> Logout();

        /// <summary>Validates the current user's session.</summary>
        /// <returns>A <see cref="Task"/> representing the result of the request.</returns>
        /// <exception cref="ApiException">Thrown when the request returns a non-success status code.</exception>
        [Post("/api/Auth/validate")]
        Task<ValidateResponse> Validate();

        /// <summary>Searches for contracts based on the provided search criteria.</summary>
        /// <param name="request">The search criteria for finding contracts.</param>
        /// <returns>A response containing the search results, including any matching contracts.</returns>
        /// <exception cref="ApiException">Thrown when the request returns a non-success status code.</exception>
        [Post("/api/Contract/search")]
        Task<SearchContractResponse> SearchContracts([Body] SearchContractRequest request);

        /// <summary>Searches for a contract by its ID.</summary>
        /// <param name="request">The request containing the contract ID.</param>
        /// <returns>A response containing the search result, including the matching contract if found.</returns>
        /// <exception cref="ApiException">Thrown when the request returns a non-success status code.</exception>
        [Post("/api/Contract/searchById")]
        Task<SearchContractByIdResponse> SearchContractById([Body] SearchContractByIdRequest request);

        /// <summary>Lists available contracts based on the provided request parameters.</summary>
        /// <param name="request">The listing criteria for available contracts.</param>
        /// <returns>A response containing the list of available contracts.</returns>
        /// <exception cref="ApiException">Thrown when the request returns a non-success status code.</exception>
        [Post("/api/Contract/available")]
        Task<ListAvailableContractResponse> AvailableContracts([Body] ListAvailableContractRequest request);

        /// <summary>Retrieves historical bars based on the specified request parameters.</summary>
        /// <param name="request">The request containing parameters for retrieving historical bars.</param>
        /// <returns>The response with the retrieved bars.</returns>
        /// <exception cref="ApiException">Thrown when the request returns a non-success status code.</exception>
        [Post("/api/History/retrieveBars")]
        Task<RetrieveBarResponse> GetBars([Body] RetrieveBarRequest request);

        /// <summary>Searches for orders based on the provided request.</summary>
        /// <param name="request">A request containing search criteria.</param>
        /// <returns>A response with search results.</returns>
        /// <exception cref="ApiException">Thrown when the request returns a non-success status code.</exception>
        [Post("/api/Order/search")]
        Task<SearchOrderResponse> SearchOrders([Body] SearchOrderRequest request);

        /// <summary>Searches for open (working/active) orders based on the provided request.</summary>
        /// <param name="request">A request containing search criteria.</param>
        /// <returns>A response with search results.</returns>
        /// <exception cref="ApiException">Thrown when the request returns a non-success status code.</exception>
        [Post("/api/Order/searchOpen")]
        Task<SearchOrderResponse> SearchOpenOrders([Body] SearchOpenOrderRequest request);

        /// <summary>Places a new order based on the provided request.</summary>
        /// <param name="request">A request containing order details.</param>
        /// <returns>A response with order placement details.</returns>
        /// <exception cref="ApiException">Thrown when the request returns a non-success status code.</exception>
        [Post("/api/Order/place")]
        Task<PlaceOrderResponse> PlaceOrder([Body] PlaceOrderRequest request);

        /// <summary>Cancels an existing order based on the provided request.</summary>
        /// <param name="request">A request containing order cancellation details.</param>
        /// <returns>A response with order cancellation details.</returns>
        /// <exception cref="ApiException">Thrown when the request returns a non-success status code.</exception>
        [Post("/api/Order/cancel")]
        Task<CancelOrderResponse> CancelOrder([Body] CancelOrderRequest request);

        /// <summary>Modifies an existing order based on the provided request.</summary>
        /// <param name="request">A request containing order modification details.</param>
        /// <returns>A response with order modification details.</returns>
        /// <exception cref="ApiException">Thrown when the request returns a non-success status code.</exception>
        [Post("/api/Order/modify")]
        Task<ModifyOrderResponse> ModifyOrder([Body] ModifyOrderRequest request);

        /// <summary>Searches for open positions based on the provided request.</summary>
        /// <param name="request">A request containing search criteria.</param>
        /// <returns>A response with search results.</returns>
        /// <exception cref="ApiException">Thrown when the request returns a non-success status code.</exception>
        [Post("/api/Position/searchOpen")]
        Task<SearchPositionResponse> SearchOpenPositions([Body] SearchPositionRequest request);

        /// <summary>Closes a contract position based on the provided request.</summary>
        /// <param name="request">A request containing the account ID and contract ID to close.</param>
        /// <returns>A response indicating the success or failure of the close operation.</returns>
        /// <exception cref="ApiException">Thrown when the request returns a non-success status code.</exception>
        [Post("/api/Position/closeContract")]
        Task<ClosePositionResponse> CloseContractPosition([Body] CloseContractPositionRequest request);

        /// <summary>Partially closes a contract position based on the provided request.</summary>
        /// <param name="request">A request containing the account ID, contract ID, and size to close.</param>
        /// <returns>A response indicating the success or failure of the partial close operation.</returns>
        /// <exception cref="ApiException">Thrown when the request returns a non-success status code.</exception>
        [Post("/api/Position/partialCloseContract")]
        Task<PartialClosePositionResponse> PartialCloseContractPosition([Body] PartialCloseContractPositionRequest request);

        /// <summary>Handles the ping request to check the status of the API.</summary>
        /// <returns>Returns a "pong" to indicate the API is responsive.</returns>
        /// <exception cref="ApiException">Thrown when the request returns a non-success status code.</exception>
        [Get("/api/Status/ping")]
        Task<string> Ping();

        /// <summary>Searches for half-turn trades based on the provided request parameters.</summary>
        /// <param name="request">A request containing search criteria.</param>
        /// <returns>A response with the search results.</returns>
        /// <exception cref="ApiException">Thrown when the request returns a non-success status code.</exception>
        [Post("/api/Trade/search")]
        Task<SearchHalfTradeResponse> SearchHalfTurnTrades([Body] SearchTradeRequest request);


    }

}