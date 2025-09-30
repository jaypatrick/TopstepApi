using Microsoft.Kiota.Abstractions.Authentication;
using Microsoft.Kiota.Http.HttpClientLibrary;
using Topstep.Api;

namespace Topstep.Client;

public class TopstepClientFactory
{
    private readonly IAuthenticationProvider _authenticationProvider;
    private readonly HttpClient _httpClient;

    public TopstepClientFactory(HttpClient httpClient)
    {
        _authenticationProvider = new AnonymousAuthenticationProvider();
        _httpClient = httpClient;
    }

    public TopstepApiClient GetClient()
    {
        return new TopstepApiClient(new HttpClientRequestAdapter(_authenticationProvider, httpClient: _httpClient));
    }
}