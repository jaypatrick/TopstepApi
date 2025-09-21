# Copilot Instructions for Topstep API Client Libraries

## Overview
This repository provides multiple client implementations for the Topstep trading API, supporting C# (.NET) and TypeScript. The main client frameworks are:
- **Kiota** (`Kiota/`)
- **NSwag** (`NSwag/`)
- **OpenAPI** (`OpenAPI/`)
- **Refit** (`Refitter/`)
- **TypeScript** (`Typescript/`)

Each implementation is organized in its own directory, with shared conventions for API models, request builders, and client factories.

## Architecture & Patterns
- **API Clients**: Each client framework has its own entry point (e.g., `TopstepClient.cs`, `ApiClient.cs`) and factory/service registration pattern.
- **Models**: All API request/response models are in `Kiota/Models/` and similar folders in other frameworks. Models are named after their API function (e.g., `PlaceOrderRequest`, `SearchAccountResponse`).
- **Request Builders**: API endpoints are organized by domain (Account, Auth, Contract, etc.) under `Kiota/Api/` and `OpenAPI/Api/`.
- **Dependency Injection**: C# clients use DI for service registration. See `TopstepClientFactory.cs` and extension methods in `Kiota/Extensions/`.
- **Async/Fluent API**: All clients expose async methods and support fluent chaining for API calls.

## Developer Workflows
- **Build**: Use Visual Studio or `dotnet build Topstep.sln` for C# projects. TypeScript: `npm install` then `tsc` in `Typescript/`.
- **Test**: No explicit test directory found; add tests in framework-specific folders if needed.
- **Generate OpenAPI Client**: For OpenAPI, use the provided `config.yaml` and run the documented `java -jar ... openapi-generator-cli.jar generate -c config.yaml` command.
- **Kiota Middleware**: Register Kiota handlers in DI before attaching to HTTP clients. See `KiotaServiceCollectionExtensions`.

## Conventions & Integration
- **Model Naming**: Request/response models are always suffixed with `Request` or `Response`.
- **API Domains**: Endpoints are grouped by domain (Account, Auth, etc.) for clarity and maintainability.
- **External Dependencies**: C# clients depend on Kiota, NSwag, and OpenAPI generator packages. TypeScript client uses standard TSC setup.
- **Cross-Component Communication**: No direct cross-framework calls; each client is self-contained but shares API schema and model conventions.

## Key Files & Directories
- `Kiota/TopstepClient.cs`, `Kiota/TopstepClientFactory.cs`: Main C# client and DI factory
- `Kiota/Models/`: API models
- `Kiota/Api/`: Request builders by domain
- `OpenAPI/ApiClient.cs`, `OpenAPI/TopstepClient.cs`: OpenAPI C# client
- `Typescript/app.ts`: TypeScript client entry point

## Example: Registering Kiota Client in DI
```csharp
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

## Example: Generating OpenAPI Client
```powershell
java -jar "<path>/openapi-generator-cli.jar" generate -c config.yaml
```

---
_If any section is unclear or missing, please provide feedback to improve these instructions._
