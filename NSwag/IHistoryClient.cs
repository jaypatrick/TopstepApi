namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NSwag", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial interface IHistoryClient
{

    /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
    /// <summary>
    /// Retrieves historical bars based on the specified request parameters.
    /// </summary>
    /// <param name="request">The request containing parameters for retrieving historical bars.</param>
    /// <returns>The response with the retrieved bars.</returns>
    /// <exception cref="ApiException">A server side error occurred.</exception>
    System.Threading.Tasks.Task<HistoryResponse<RetrieveBarResponse>> GetBarsAsync(RetrieveBarRequest request, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

}