using System.Text.Json.Serialization;

using Refitter.Api;

namespace Refitter.Models;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
public partial class OrderModel
{

    [JsonPropertyName("id")]
    public long Id { get; set; }

    [JsonPropertyName("accountId")]
    public int AccountId { get; set; }

    [JsonPropertyName("contractId")]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string ContractId { get; set; }

    [JsonPropertyName("symbolId")]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string SymbolId { get; set; }

    [JsonPropertyName("creationTimestamp")]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public DateTimeOffset CreationTimestamp { get; set; }

    [JsonPropertyName("updateTimestamp")]
    public DateTimeOffset? UpdateTimestamp { get; set; }

    [JsonPropertyName("status")]
    public OrderStatus Status { get; set; }

    [JsonPropertyName("type")]
    public OrderType Type { get; set; }

    [JsonPropertyName("side")]
    public OrderSide Side { get; set; }

    [JsonPropertyName("size")]
    public int Size { get; set; }

    [JsonPropertyName("limitPrice")]
    public decimal? LimitPrice { get; set; }

    [JsonPropertyName("stopPrice")]
    public decimal? StopPrice { get; set; }

    [JsonPropertyName("fillVolume")]
    public int FillVolume { get; set; }

    [JsonPropertyName("filledPrice")]
    public decimal? FilledPrice { get; set; }

    [JsonPropertyName("customTag")]
    public string CustomTag { get; set; }

}