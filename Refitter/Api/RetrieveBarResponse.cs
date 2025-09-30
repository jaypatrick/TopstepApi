using System.Text.Json.Serialization;

using Refitter.Models;

namespace Refitter.Api;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
public partial class RetrieveBarResponse
{

    [JsonPropertyName("success")]
    public bool Success { get; set; }

    [JsonPropertyName("errorCode")]
    public RetrieveBarErrorCode ErrorCode { get; set; }

    [JsonPropertyName("errorMessage")]
    public string ErrorMessage { get; set; }

    [JsonPropertyName("bars")]
    public ICollection<AggregateBarModel> Bars { get; set; }

}