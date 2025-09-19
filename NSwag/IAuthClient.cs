namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NSwag", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial interface IAuthClient
{

    /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
    /// <summary>
    /// Login as the specified user using the specified application.
    /// </summary>
    /// <param name="request">The login request.</param>
    /// <exception cref="ApiException">A server side error occurred.</exception>
    System.Threading.Tasks.Task<AuthResponse<LoginResponse>> LoginAppAsync(LoginAppRequest request, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

    /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
    /// <summary>
    /// Login as the specified user using the specified API key.
    /// </summary>
    /// <param name="request">The login request.</param>
    /// <exception cref="ApiException">A server side error occurred.</exception>
    System.Threading.Tasks.Task<AuthResponse<LoginResponse>> LoginKeyAsync(LoginApiKeyRequest request, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

    /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
    /// <summary>
    /// Logs out the current authenticated user.
    /// </summary>
    /// <exception cref="ApiException">A server side error occurred.</exception>
    System.Threading.Tasks.Task<AuthResponse<LogoutResponse>> LogoutAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

    /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
    /// <summary>
    /// Validates the current user's session.
    /// </summary>
    /// <exception cref="ApiException">A server side error occurred.</exception>
    System.Threading.Tasks.Task<AuthResponse<ValidateResponse>> ValidateAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

}