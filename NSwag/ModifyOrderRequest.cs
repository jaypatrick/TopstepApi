namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial record ModifyOrderRequest
{
    [Newtonsoft.Json.JsonConstructor]
    public ModifyOrderRequest(int @accountId, decimal? @limitPrice, long @orderId, int? @size, decimal? @stopPrice, decimal? @trailPrice)
    {
        this.AccountId = @accountId;
        this.OrderId = @orderId;
        this.Size = @size;
        this.LimitPrice = @limitPrice;
        this.StopPrice = @stopPrice;
        this.TrailPrice = @trailPrice;
    }

    [Newtonsoft.Json.JsonProperty("accountId", Required = Newtonsoft.Json.Required.Always)]
    public int AccountId { get; init; }

    [Newtonsoft.Json.JsonProperty("orderId", Required = Newtonsoft.Json.Required.Always)]
    public long OrderId { get; init; }

    [Newtonsoft.Json.JsonProperty("size", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public int? Size { get; init; }

    [Newtonsoft.Json.JsonProperty("limitPrice", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public decimal? LimitPrice { get; init; }

    [Newtonsoft.Json.JsonProperty("stopPrice", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public decimal? StopPrice { get; init; }

    [Newtonsoft.Json.JsonProperty("trailPrice", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public decimal? TrailPrice { get; init; }

    public string ToJson()
    {

        return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings());

    }
    public static ModifyOrderRequest FromJson(string data)
    {

        return Newtonsoft.Json.JsonConvert.DeserializeObject<ModifyOrderRequest>(data, new Newtonsoft.Json.JsonSerializerSettings());

    }
}