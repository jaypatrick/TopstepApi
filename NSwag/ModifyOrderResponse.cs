namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial record ModifyOrderResponse
{
    [Newtonsoft.Json.JsonConstructor]
    public ModifyOrderResponse(ModifyOrderErrorCode @errorCode, string? @errorMessage, bool @success)
    {
        this.Success = @success;
        this.ErrorCode = @errorCode;
        this.ErrorMessage = @errorMessage;
    }

    [Newtonsoft.Json.JsonProperty("success", Required = Newtonsoft.Json.Required.Always)]
    public bool Success { get; init; }

    [Newtonsoft.Json.JsonProperty("errorCode", Required = Newtonsoft.Json.Required.Always)]
    public ModifyOrderErrorCode ErrorCode { get; init; }

    [Newtonsoft.Json.JsonProperty("errorMessage", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public string? ErrorMessage { get; init; }

    public string ToJson()
    {

        return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings());

    }
    public static ModifyOrderResponse FromJson(string data)
    {

        return Newtonsoft.Json.JsonConvert.DeserializeObject<ModifyOrderResponse>(data, new Newtonsoft.Json.JsonSerializerSettings());

    }
}