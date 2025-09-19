namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial record LoginAppRequest
{
    [Newtonsoft.Json.JsonConstructor]
    public LoginAppRequest(string @appId, string @deviceId, string @password, string @userName, string @verifyKey)
    {
        this.UserName = @userName;
        this.Password = @password;
        this.DeviceId = @deviceId;
        this.AppId = @appId;
        this.VerifyKey = @verifyKey;
    }

    [Newtonsoft.Json.JsonProperty("userName", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string UserName { get; init; }

    [Newtonsoft.Json.JsonProperty("password", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string Password { get; init; }

    [Newtonsoft.Json.JsonProperty("deviceId", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string DeviceId { get; init; }

    [Newtonsoft.Json.JsonProperty("appId", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string AppId { get; init; }

    [Newtonsoft.Json.JsonProperty("verifyKey", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string VerifyKey { get; init; }

    public string ToJson()
    {

        return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings());

    }
    public static LoginAppRequest FromJson(string data)
    {

        return Newtonsoft.Json.JsonConvert.DeserializeObject<LoginAppRequest>(data, new Newtonsoft.Json.JsonSerializerSettings());

    }
}