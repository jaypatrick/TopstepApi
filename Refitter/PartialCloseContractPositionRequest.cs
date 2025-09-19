using System.Text.Json.Serialization;

namespace GeneratedCode;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.3.0))")]
public partial class PartialCloseContractPositionRequest
{

    [JsonPropertyName("accountId")]
    public int AccountId { get; set; }

    [JsonPropertyName("contractId")]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string ContractId { get; set; }

    [JsonPropertyName("size")]
    public int Size { get; set; }

}