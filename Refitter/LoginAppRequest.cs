using System.Text.Json.Serialization;

namespace GeneratedCode;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.3.0))")]
public partial class LoginAppRequest
{

    [JsonPropertyName("userName")]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string UserName { get; set; }

    [JsonPropertyName("password")]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string Password { get; set; }

    [JsonPropertyName("deviceId")]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string DeviceId { get; set; }

    [JsonPropertyName("appId")]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string AppId { get; set; }

    [JsonPropertyName("verifyKey")]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string VerifyKey { get; set; }

}