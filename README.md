# TopStep API .Net/TypeScript Client Libraries
Topstep is a popular proprietary trading firm with an OpenApi specification for integration of 3rd party tools. This project includes several different client framework implementatons of the Topstep API.

#### Client frameworks
- Kiota (C#)
- NSwag (C#)
- OpenApi (C#)
- Refit (C#)
- TypeScript (TSC)

## Simplify development projects against the TopStep API
- Fluent API for chaining method calls
- Responsive async methods
- Libraries for C# and TypeScript client applications
- Kiota implementation can be integrated as middleware via DI

### Project Types
All libraries are for use in client-side applications

```
using Topstep.TopstepClient;
using Microsoft.Kiota.Abstractions.Authentication;
using Microsoft.Kiota.Http.HttpClientLibrary;

namespace Topstep;

public class TopstepClientFactory
{
    private readonly IAuthenticationProvider _authenticationProvider;
    private readonly HttpClient _httpClient;

    public TopstepClientFactory(HttpClient httpClient)
    {
        _authenticationProvider = new AnonymousAuthenticationProvider();
        _httpClient = httpClient;
    }

    public TopstepClient GetClient() {
      return new TopstepClient(new HttpClientRequestAdapter(_authenticationProvider, httpClient: _httpClient));
    }
}
```
### Extension Methods for Kiota

```
using Microsoft.Kiota.Http.HttpClientLibrary;

/// <summary>
/// Service collection extensions for Kiota handlers.
/// </summary>
public static class KiotaServiceCollectionExtensions
{
    /// <summary>
    /// Adds the Kiota handlers to the service collection.
    /// </summary>
    /// <param name="services"><see cref="IServiceCollection"/> to add the services to</param>
    /// <returns><see cref="IServiceCollection"/> as per convention</returns>
    /// <remarks>The handlers are added to the http client by the <see cref="AttachKiotaHandlers(IHttpClientBuilder)"/> call, which requires them to be pre-registered in DI</remarks>
    public static IServiceCollection AddKiotaHandlers(this IServiceCollection services)
    {
        // Dynamically load the Kiota handlers from the Client Factory
        var kiotaHandlers = KiotaClientFactory.GetDefaultHandlerTypes();
        // And register them in the DI container
        foreach(var handler in kiotaHandlers)
        {
            services.AddTransient(handler);
        }

        return services;
    }

    /// <summary>
    /// Adds the Kiota handlers to the http client builder.
    /// </summary>
    /// <param name="builder"></param>
    /// <returns></returns>
    /// <remarks>
    /// Requires the handlers to be registered in DI by <see cref="AddKiotaHandlers(IServiceCollection)"/>.
    /// The order in which the handlers are added is important, as it defines the order in which they will be executed.
    /// </remarks>
    public static IHttpClientBuilder AttachKiotaHandlers(this IHttpClientBuilder builder)
    {
        // Dynamically load the Kiota handlers from the Client Factory
        var kiotaHandlers = KiotaClientFactory.GetDefaultHandlerTypes();
        // And attach them to the http client builder
        foreach(var handler in kiotaHandlers)
        {
            builder.AddHttpMessageHandler((sp) => (DelegatingHandler)sp.GetRequiredService(handler));
        }    

        return builder;
    }
}
```

### Register the API Client
```
using Topstep;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// ----------- Add this part to register the generated client -----------
// Add Kiota handlers to the dependency injection container
builder.Services.AddKiotaHandlers();

// Register the factory for the Topstep Kiota runtime client
builder.Services.AddHttpClient<TopstepClientFactory>((sp, client) => {
    // Set the base address and accept header
    // or other settings on the http client
    client.BaseAddress = new Uri("https://api.topstepx.com");
    client.DefaultRequestHeaders.Add("Accept", "application/vnd.topstepx.v3+json");
}).AttachKiotaHandlers(); // Attach the Kiota handlers to the http client, this is to enable all the Kiota features.

// Register the GitHub client
builder.Services.AddTransient(sp => sp.GetRequiredService<GitHubClientFactory>().GetClient());
// ----------- Add this part to register the generated client end -------

var app = builder.Build();
```

