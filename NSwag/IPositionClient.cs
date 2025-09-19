namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NSwag", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial interface IPositionClient
{

    /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
    /// <summary>
    /// Searches for open positions based on the provided request.
    /// </summary>
    /// <param name="request">A request containing search criteria.</param>
    /// <returns>A response with search results.</returns>
    /// <exception cref="ApiException">A server side error occurred.</exception>
    System.Threading.Tasks.Task<PositionResponse<SearchPositionResponse>> SearchOpenPositionsAsync(SearchPositionRequest request, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

    /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
    /// <summary>
    /// Closes a contract position based on the provided request.
    /// </summary>
    /// <param name="request">A request containing the account ID and contract ID to close.</param>
    /// <returns>A response indicating the success or failure of the close operation.</returns>
    /// <exception cref="ApiException">A server side error occurred.</exception>
    System.Threading.Tasks.Task<PositionResponse<ClosePositionResponse>> CloseContractPositionAsync(CloseContractPositionRequest request, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

    /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
    /// <summary>
    /// Partially closes a contract position based on the provided request.
    /// </summary>
    /// <param name="request">A request containing the account ID, contract ID, and size to close.</param>
    /// <returns>A response indicating the success or failure of the partial close operation.</returns>
    /// <exception cref="ApiException">A server side error occurred.</exception>
    System.Threading.Tasks.Task<PositionResponse<PartialClosePositionResponse>> PartialCloseContractPositionAsync(PartialCloseContractPositionRequest request, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

}