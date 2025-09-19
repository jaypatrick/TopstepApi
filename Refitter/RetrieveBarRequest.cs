using System.Text.Json.Serialization;

namespace GeneratedCode;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.3.0))")]
public partial class RetrieveBarRequest
{

    [JsonPropertyName("contractId")]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string ContractId { get; set; }

    [JsonPropertyName("live")]
    public bool Live { get; set; }

    [JsonPropertyName("startTime")]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public System.DateTimeOffset StartTime { get; set; }

    [JsonPropertyName("endTime")]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public System.DateTimeOffset EndTime { get; set; }

    [JsonPropertyName("unit")]
    public AggregateBarUnit Unit { get; set; }

    [JsonPropertyName("unitNumber")]
    public int UnitNumber { get; set; }

    [JsonPropertyName("limit")]
    public int Limit { get; set; }

    [JsonPropertyName("includePartialBar")]
    public bool IncludePartialBar { get; set; }

}