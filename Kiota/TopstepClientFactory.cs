using Microsoft.Kiota.Abstractions.Authentication;
using Microsoft.Kiota.Http.HttpClientLibrary;

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

    public Kiota.ApiClient GetClient()
    {
        return new Kiota.ApiClient(new HttpClientRequestAdapter(_authenticationProvider, httpClient: _httpClient));
    }
}