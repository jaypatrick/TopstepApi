using System.Text.Json.Serialization;

namespace GeneratedCode;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.3.0))")]
public partial class SearchPositionResponse
{

    [JsonPropertyName("success")]
    public bool Success { get; set; }

    [JsonPropertyName("errorCode")]
    public SearchPositionErrorCode ErrorCode { get; set; }

    [JsonPropertyName("errorMessage")]
    public string ErrorMessage { get; set; }

    [JsonPropertyName("positions")]
    public ICollection<PositionModel> Positions { get; set; }

}