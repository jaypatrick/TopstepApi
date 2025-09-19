using System.Text.Json.Serialization;

namespace GeneratedCode;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.3.0))")]
public partial class HalfTradeModel
{

    [JsonPropertyName("id")]
    public long Id { get; set; }

    [JsonPropertyName("accountId")]
    public int AccountId { get; set; }

    [JsonPropertyName("contractId")]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string ContractId { get; set; }

    [JsonPropertyName("creationTimestamp")]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public System.DateTimeOffset CreationTimestamp { get; set; }

    [JsonPropertyName("price")]
    public decimal Price { get; set; }

    [JsonPropertyName("profitAndLoss")]
    public decimal? ProfitAndLoss { get; set; }

    [JsonPropertyName("fees")]
    public decimal Fees { get; set; }

    [JsonPropertyName("side")]
    public OrderSide Side { get; set; }

    [JsonPropertyName("size")]
    public int Size { get; set; }

    [JsonPropertyName("voided")]
    public bool Voided { get; set; }

    [JsonPropertyName("orderId")]
    public long OrderId { get; set; }

}