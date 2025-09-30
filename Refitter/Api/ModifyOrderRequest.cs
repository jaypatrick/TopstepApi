using System.Text.Json.Serialization;

namespace Refitter.Api;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
public partial class ModifyOrderRequest
{

    [JsonPropertyName("accountId")]
    public int AccountId { get; set; }

    [JsonPropertyName("orderId")]
    public long OrderId { get; set; }

    [JsonPropertyName("size")]
    public int? Size { get; set; }

    [JsonPropertyName("limitPrice")]
    public decimal? LimitPrice { get; set; }

    [JsonPropertyName("stopPrice")]
    public decimal? StopPrice { get; set; }

    [JsonPropertyName("trailPrice")]
    public decimal? TrailPrice { get; set; }

}