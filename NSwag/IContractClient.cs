namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NSwag", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial interface IContractClient
{

    /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
    /// <summary>
    /// Searches for contracts based on the provided search criteria.
    /// </summary>
    /// <param name="request">The search criteria for finding contracts.</param>
    /// <returns>A response containing the search results, including any matching contracts.</returns>
    /// <exception cref="ApiException">A server side error occurred.</exception>
    System.Threading.Tasks.Task<ContractResponse<SearchContractResponse>> SearchContractsAsync(SearchContractRequest request, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

    /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
    /// <summary>
    /// Searches for a contract by its ID.
    /// </summary>
    /// <param name="request">The request containing the contract ID.</param>
    /// <returns>A response containing the search result, including the matching contract if found.</returns>
    /// <exception cref="ApiException">A server side error occurred.</exception>
    System.Threading.Tasks.Task<ContractResponse<SearchContractByIdResponse>> SearchContractByIdAsync(SearchContractByIdRequest request, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

    /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
    /// <summary>
    /// Lists available contracts based on the provided request parameters.
    /// </summary>
    /// <param name="request">The listing criteria for available contracts.</param>
    /// <returns>A response containing the list of available contracts.</returns>
    /// <exception cref="ApiException">A server side error occurred.</exception>
    System.Threading.Tasks.Task<ContractResponse<ListAvailableContractResponse>> AvailableContractsAsync(ListAvailableContractRequest request, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

}