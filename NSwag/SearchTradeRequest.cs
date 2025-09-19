namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial record SearchTradeRequest
{
    [Newtonsoft.Json.JsonConstructor]
    public SearchTradeRequest(int @accountId, System.DateTimeOffset? @endTimestamp, System.DateTimeOffset? @startTimestamp)
    {
        this.AccountId = @accountId;
        this.StartTimestamp = @startTimestamp;
        this.EndTimestamp = @endTimestamp;
    }

    [Newtonsoft.Json.JsonProperty("accountId", Required = Newtonsoft.Json.Required.Always)]
    public int AccountId { get; init; }

    [Newtonsoft.Json.JsonProperty("startTimestamp", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public System.DateTimeOffset? StartTimestamp { get; init; }

    [Newtonsoft.Json.JsonProperty("endTimestamp", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public System.DateTimeOffset? EndTimestamp { get; init; }

    public string ToJson()
    {

        return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings());

    }
    public static SearchTradeRequest FromJson(string data)
    {

        return Newtonsoft.Json.JsonConvert.DeserializeObject<SearchTradeRequest>(data, new Newtonsoft.Json.JsonSerializerSettings());

    }
}