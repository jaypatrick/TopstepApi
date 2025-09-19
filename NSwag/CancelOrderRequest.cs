namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial record CancelOrderRequest
{
    [Newtonsoft.Json.JsonConstructor]
    public CancelOrderRequest(int @accountId, long @orderId)
    {
        this.AccountId = @accountId;
        this.OrderId = @orderId;
    }

    [Newtonsoft.Json.JsonProperty("accountId", Required = Newtonsoft.Json.Required.Always)]
    public int AccountId { get; init; }

    [Newtonsoft.Json.JsonProperty("orderId", Required = Newtonsoft.Json.Required.Always)]
    public long OrderId { get; init; }

    public string ToJson()
    {

        return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings());

    }
    public static CancelOrderRequest FromJson(string data)
    {

        return Newtonsoft.Json.JsonConvert.DeserializeObject<CancelOrderRequest>(data, new Newtonsoft.Json.JsonSerializerSettings());

    }
}