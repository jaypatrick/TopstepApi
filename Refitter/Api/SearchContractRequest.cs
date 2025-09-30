using System.Text.Json.Serialization;

namespace Refitter.Api;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
public partial class SearchContractRequest
{

    [JsonPropertyName("searchText")]
    public string SearchText { get; set; }

    [JsonPropertyName("live")]
    public bool Live { get; set; }

}