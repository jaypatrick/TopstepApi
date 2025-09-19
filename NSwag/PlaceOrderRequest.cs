namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial record PlaceOrderRequest
{
    [Newtonsoft.Json.JsonConstructor]
    public PlaceOrderRequest(int @accountId, string @contractId, string? @customTag, decimal? @limitPrice, long? @linkedOrderId, OrderSide @side, int @size, decimal? @stopPrice, decimal? @trailPrice, OrderType @type)
    {
        this.AccountId = @accountId;
        this.ContractId = @contractId;
        this.Type = @type;
        this.Side = @side;
        this.Size = @size;
        this.LimitPrice = @limitPrice;
        this.StopPrice = @stopPrice;
        this.TrailPrice = @trailPrice;
        this.CustomTag = @customTag;
        this.LinkedOrderId = @linkedOrderId;
    }

    [Newtonsoft.Json.JsonProperty("accountId", Required = Newtonsoft.Json.Required.Always)]
    public int AccountId { get; init; }

    [Newtonsoft.Json.JsonProperty("contractId", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string ContractId { get; init; }

    [Newtonsoft.Json.JsonProperty("type", Required = Newtonsoft.Json.Required.Always)]
    public OrderType Type { get; init; }

    [Newtonsoft.Json.JsonProperty("side", Required = Newtonsoft.Json.Required.Always)]
    public OrderSide Side { get; init; }

    [Newtonsoft.Json.JsonProperty("size", Required = Newtonsoft.Json.Required.Always)]
    public int Size { get; init; }

    [Newtonsoft.Json.JsonProperty("limitPrice", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public decimal? LimitPrice { get; init; }

    [Newtonsoft.Json.JsonProperty("stopPrice", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public decimal? StopPrice { get; init; }

    [Newtonsoft.Json.JsonProperty("trailPrice", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public decimal? TrailPrice { get; init; }

    [Newtonsoft.Json.JsonProperty("customTag", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public string? CustomTag { get; init; }

    [Newtonsoft.Json.JsonProperty("linkedOrderId", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public long? LinkedOrderId { get; init; }

    public string ToJson()
    {

        return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings());

    }
    public static PlaceOrderRequest FromJson(string data)
    {

        return Newtonsoft.Json.JsonConvert.DeserializeObject<PlaceOrderRequest>(data, new Newtonsoft.Json.JsonSerializerSettings());

    }
}