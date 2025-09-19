namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NSwag", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial interface IOrderClient
{

    /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
    /// <summary>
    /// Searches for orders based on the provided request.
    /// </summary>
    /// <param name="request">A request containing search criteria.</param>
    /// <returns>A response with search results.</returns>
    /// <exception cref="ApiException">A server side error occurred.</exception>
    System.Threading.Tasks.Task<OrderResponse<SearchOrderResponse>> SearchOrdersAsync(SearchOrderRequest request, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

    /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
    /// <summary>
    /// Searches for open (working/active) orders based on the provided request.
    /// </summary>
    /// <param name="request">A request containing search criteria.</param>
    /// <returns>A response with search results.</returns>
    /// <exception cref="ApiException">A server side error occurred.</exception>
    System.Threading.Tasks.Task<OrderResponse<SearchOrderResponse>> SearchOpenOrdersAsync(SearchOpenOrderRequest request, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

    /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
    /// <summary>
    /// Places a new order based on the provided request.
    /// </summary>
    /// <param name="request">A request containing order details.</param>
    /// <returns>A response with order placement details.</returns>
    /// <exception cref="ApiException">A server side error occurred.</exception>
    System.Threading.Tasks.Task<OrderResponse<PlaceOrderResponse>> PlaceOrderAsync(PlaceOrderRequest request, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

    /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
    /// <summary>
    /// Cancels an existing order based on the provided request.
    /// </summary>
    /// <param name="request">A request containing order cancellation details.</param>
    /// <returns>A response with order cancellation details.</returns>
    /// <exception cref="ApiException">A server side error occurred.</exception>
    System.Threading.Tasks.Task<OrderResponse<CancelOrderResponse>> CancelOrderAsync(CancelOrderRequest request, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

    /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
    /// <summary>
    /// Modifies an existing order based on the provided request.
    /// </summary>
    /// <param name="request">A request containing order modification details.</param>
    /// <returns>A response with order modification details.</returns>
    /// <exception cref="ApiException">A server side error occurred.</exception>
    System.Threading.Tasks.Task<OrderResponse<ModifyOrderResponse>> ModifyOrderAsync(ModifyOrderRequest request, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

}