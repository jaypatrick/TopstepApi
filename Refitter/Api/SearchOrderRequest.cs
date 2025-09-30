using System.Text.Json.Serialization;

namespace Refitter.Api;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
public partial class SearchOrderRequest
{

    [JsonPropertyName("accountId")]
    public int AccountId { get; set; }

    [JsonPropertyName("startTimestamp")]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public DateTimeOffset StartTimestamp { get; set; }

    [JsonPropertyName("endTimestamp")]
    public DateTimeOffset? EndTimestamp { get; set; }

}