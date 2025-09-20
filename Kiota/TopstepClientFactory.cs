using Kiota;

using Microsoft.Kiota.Abstractions.Authentication;
using Microsoft.Kiota.Http.HttpClientLibrary;

namespace Kiota;

/// <summary>
///     Factory for creating Topstep API clients
/// </summary>
public class TopstepClientFactory
{
    private readonly IAuthenticationProvider _authenticationProvider;
    private readonly HttpClient _httpClient;

    /// <summary>
    ///     Constructor
    /// </summary>
    /// <param name="httpClient"></param>
    public TopstepClientFactory(HttpClient httpClient)
    {
        _authenticationProvider = new AnonymousAuthenticationProvider();
        _httpClient = httpClient;
    }

    /// <summary>
    ///     Factory method for creating a new Topstep API client
    /// </summary>
    /// <returns></returns>
    public ApiClient GetClient()
    {
        return new ApiClient(new HttpClientRequestAdapter(_authenticationProvider, httpClient: _httpClient));
    }
}
