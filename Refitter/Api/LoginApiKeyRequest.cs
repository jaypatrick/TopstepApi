using System.Text.Json.Serialization;

namespace Refitter.Api;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
public partial class LoginApiKeyRequest
{

    [JsonPropertyName("userName")]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string UserName { get; set; }

    [JsonPropertyName("apiKey")]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string ApiKey { get; set; }

}