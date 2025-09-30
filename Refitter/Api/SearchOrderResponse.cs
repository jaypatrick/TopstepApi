using System.Text.Json.Serialization;

using Refitter.Models;

namespace Refitter.Api;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
public partial class SearchOrderResponse
{

    [JsonPropertyName("success")]
    public bool Success { get; set; }

    [JsonPropertyName("errorCode")]
    public SearchOrderErrorCode ErrorCode { get; set; }

    [JsonPropertyName("errorMessage")]
    public required string ErrorMessage { get; set; }

    [JsonPropertyName("orders")]
    public required ICollection<OrderModel> Orders { get; set; }

}