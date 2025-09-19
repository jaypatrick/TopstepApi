namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NSwag", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial interface IAccountClient
{

    /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
    /// <summary>
    /// Searches for accounts based on the provided request.
    /// </summary>
    /// <param name="request">The request containing search criteria.</param>
    /// <returns>The search account response.</returns>
    /// <exception cref="ApiException">A server side error occurred.</exception>
    System.Threading.Tasks.Task<AccountResponse<SearchAccountResponse>> SearchAccountsAsync(SearchAccountRequest request, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

}