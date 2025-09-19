namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial record OrderModel
{
    [Newtonsoft.Json.JsonConstructor]
    public OrderModel(int @accountId, string @contractId, System.DateTimeOffset @creationTimestamp, string? @customTag, decimal? @filledPrice, int @fillVolume, long @id, decimal? @limitPrice, OrderSide @side, int @size, OrderStatus @status, decimal? @stopPrice, string @symbolId, OrderType @type, System.DateTimeOffset? @updateTimestamp)
    {
        this.Id = @id;
        this.AccountId = @accountId;
        this.ContractId = @contractId;
        this.SymbolId = @symbolId;
        this.CreationTimestamp = @creationTimestamp;
        this.UpdateTimestamp = @updateTimestamp;
        this.Status = @status;
        this.Type = @type;
        this.Side = @side;
        this.Size = @size;
        this.LimitPrice = @limitPrice;
        this.StopPrice = @stopPrice;
        this.FillVolume = @fillVolume;
        this.FilledPrice = @filledPrice;
        this.CustomTag = @customTag;
    }

    [Newtonsoft.Json.JsonProperty("id", Required = Newtonsoft.Json.Required.Always)]
    public long Id { get; init; }

    [Newtonsoft.Json.JsonProperty("accountId", Required = Newtonsoft.Json.Required.Always)]
    public int AccountId { get; init; }

    [Newtonsoft.Json.JsonProperty("contractId", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string ContractId { get; init; }

    [Newtonsoft.Json.JsonProperty("symbolId", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string SymbolId { get; init; }

    [Newtonsoft.Json.JsonProperty("creationTimestamp", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public System.DateTimeOffset CreationTimestamp { get; init; }

    [Newtonsoft.Json.JsonProperty("updateTimestamp", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public System.DateTimeOffset? UpdateTimestamp { get; init; }

    [Newtonsoft.Json.JsonProperty("status", Required = Newtonsoft.Json.Required.Always)]
    public OrderStatus Status { get; init; }

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

    [Newtonsoft.Json.JsonProperty("fillVolume", Required = Newtonsoft.Json.Required.Always)]
    public int FillVolume { get; init; }

    [Newtonsoft.Json.JsonProperty("filledPrice", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public decimal? FilledPrice { get; init; }

    [Newtonsoft.Json.JsonProperty("customTag", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public string? CustomTag { get; init; }

    public string ToJson()
    {

        return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings());

    }
    public static OrderModel FromJson(string data)
    {

        return Newtonsoft.Json.JsonConvert.DeserializeObject<OrderModel>(data, new Newtonsoft.Json.JsonSerializerSettings());

    }
}