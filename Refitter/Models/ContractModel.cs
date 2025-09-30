using System.Text.Json.Serialization;

namespace Refitter.Models;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
public partial class ContractModel
{

    [JsonPropertyName("id")]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string Id { get; set; }

    [JsonPropertyName("name")]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string Name { get; set; }

    [JsonPropertyName("description")]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string Description { get; set; }

    [JsonPropertyName("tickSize")]
    public decimal TickSize { get; set; }

    [JsonPropertyName("tickValue")]
    public decimal TickValue { get; set; }

    [JsonPropertyName("activeContract")]
    public bool ActiveContract { get; set; }

    [JsonPropertyName("symbolId")]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string SymbolId { get; set; }

}