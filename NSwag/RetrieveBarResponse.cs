namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial record RetrieveBarResponse
{
    [Newtonsoft.Json.JsonConstructor]
    public RetrieveBarResponse(System.Collections.Generic.ICollection<AggregateBarModel>? @bars, RetrieveBarErrorCode @errorCode, string? @errorMessage, bool @success)
    {
        this.Success = @success;
        this.ErrorCode = @errorCode;
        this.ErrorMessage = @errorMessage;
        this.Bars = @bars;
    }

    [Newtonsoft.Json.JsonProperty("success", Required = Newtonsoft.Json.Required.Always)]
    public bool Success { get; init; }

    [Newtonsoft.Json.JsonProperty("errorCode", Required = Newtonsoft.Json.Required.Always)]
    public RetrieveBarErrorCode ErrorCode { get; init; }

    [Newtonsoft.Json.JsonProperty("errorMessage", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public string? ErrorMessage { get; init; }

    [Newtonsoft.Json.JsonProperty("bars", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public System.Collections.Generic.ICollection<AggregateBarModel>? Bars { get; init; }

    public string ToJson()
    {

        return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings());

    }
    public static RetrieveBarResponse FromJson(string data)
    {

        return Newtonsoft.Json.JsonConvert.DeserializeObject<RetrieveBarResponse>(data, new Newtonsoft.Json.JsonSerializerSettings());

    }
}