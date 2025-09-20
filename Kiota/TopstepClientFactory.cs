using Kiota;

using Microsoft.Kiota.Abstractions.Authentication;
using Microsoft.Kiota.Http.HttpClientLibrary;

namespace Kiota;

/// <summary>
/// 
/// </summary>
public class TopstepClientFactory
{
    private readonly IAuthenticationProvider _authenticationProvider;
    private readonly HttpClient _httpClient;

    /// <summary>
    /// 
    /// </summary>
    /// <param name="httpClient"></param>
    public GitHubClientFactory(HttpClient httpClient)
    {
        _authenticationProvider = new AnonymousAuthenticationProvider();
        _httpClient = httpClient;
    }

    /// <summary>
    /// 
    /// </summary>
    /// <returns></returns>
    public ApiClient GetClient()
    {
        return new ApiClient(new HttpClientRequestAdapter(_authenticationProvider, httpClient: _httpClient));
    }
}
