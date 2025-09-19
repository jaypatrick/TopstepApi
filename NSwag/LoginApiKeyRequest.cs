namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial record LoginApiKeyRequest
{
    [Newtonsoft.Json.JsonConstructor]
    public LoginApiKeyRequest(string @apiKey, string @userName)
    {
        this.UserName = @userName;
        this.ApiKey = @apiKey;
    }

    [Newtonsoft.Json.JsonProperty("userName", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string UserName { get; init; }

    [Newtonsoft.Json.JsonProperty("apiKey", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string ApiKey { get; init; }

    public string ToJson()
    {

        return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings());

    }
    public static LoginApiKeyRequest FromJson(string data)
    {

        return Newtonsoft.Json.JsonConvert.DeserializeObject<LoginApiKeyRequest>(data, new Newtonsoft.Json.JsonSerializerSettings());

    }
}