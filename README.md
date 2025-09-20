# TopStep API .Net/TypeScript Client Libraries

## Simplify development projects against the TopStep API

### Project Types

- Kiota
- OpenApi
- NSwag
- Refitter

```
using GitHub.ApiClient;
using Microsoft.Kiota.Abstractions.Authentication;
using Microsoft.Kiota.Http.HttpClientLibrary;

namespace Topstep;

public class TopstepClientFactory
{
    private readonly IAuthenticationProvider _authenticationProvider;
    private readonly HttpClient _httpClient;

    public GitHubClientFactory(HttpClient httpClient)
    {
        _authenticationProvider = new AnonymousAuthenticationProvider();
        _httpClient = httpClient;
    }

    public TopstepClient GetClient() {
      return new TopstepClient(new HttpClientRequestAdapter(_authenticationProvider, httpClient: _httpClient));
    }
}
```
