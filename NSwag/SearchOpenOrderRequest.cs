namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial record SearchOpenOrderRequest
{
    [Newtonsoft.Json.JsonConstructor]
    public SearchOpenOrderRequest(int @accountId)
    {
        this.AccountId = @accountId;
    }

    [Newtonsoft.Json.JsonProperty("accountId", Required = Newtonsoft.Json.Required.Always)]
    public int AccountId { get; init; }

    public string ToJson()
    {

        return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings());

    }
    public static SearchOpenOrderRequest FromJson(string data)
    {

        return Newtonsoft.Json.JsonConvert.DeserializeObject<SearchOpenOrderRequest>(data, new Newtonsoft.Json.JsonSerializerSettings());

    }
}