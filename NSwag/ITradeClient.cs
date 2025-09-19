namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NSwag", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial interface ITradeClient
{

    /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
    /// <summary>
    /// Searches for half-turn trades based on the provided request parameters.
    /// </summary>
    /// <param name="request">A request containing search criteria.</param>
    /// <returns>A response with the search results.</returns>
    /// <exception cref="ApiException">A server side error occurred.</exception>
    System.Threading.Tasks.Task<TradeResponse<SearchHalfTradeResponse>> SearchHalfTurnTradesAsync(SearchTradeRequest request, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

}