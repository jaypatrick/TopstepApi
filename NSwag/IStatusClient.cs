namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NSwag", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial interface IStatusClient
{

    /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
    /// <summary>
    /// Handles the ping request to check the status of the API.
    /// </summary>
    /// <returns>Returns a "pong" to indicate the API is responsive.</returns>
    /// <exception cref="ApiException">A server side error occurred.</exception>
    System.Threading.Tasks.Task<StatusResponse<string>> PingAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

}