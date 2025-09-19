using System.Text.Json.Serialization;

namespace GeneratedCode;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.3.0))")]
public partial class PositionModel
{

    [JsonPropertyName("id")]
    public int Id { get; set; }

    [JsonPropertyName("accountId")]
    public int AccountId { get; set; }

    [JsonPropertyName("contractId")]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string ContractId { get; set; }

    [JsonPropertyName("creationTimestamp")]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public System.DateTimeOffset CreationTimestamp { get; set; }

    [JsonPropertyName("type")]
    public PositionType Type { get; set; }

    [JsonPropertyName("size")]
    public int Size { get; set; }

    [JsonPropertyName("averagePrice")]
    public decimal AveragePrice { get; set; }

}