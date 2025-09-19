namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial record HalfTradeModel
{
    [Newtonsoft.Json.JsonConstructor]
    public HalfTradeModel(int @accountId, string @contractId, System.DateTimeOffset @creationTimestamp, decimal @fees, long @id, long @orderId, decimal @price, decimal? @profitAndLoss, OrderSide @side, int @size, bool @voided)
    {
        this.Id = @id;
        this.AccountId = @accountId;
        this.ContractId = @contractId;
        this.CreationTimestamp = @creationTimestamp;
        this.Price = @price;
        this.ProfitAndLoss = @profitAndLoss;
        this.Fees = @fees;
        this.Side = @side;
        this.Size = @size;
        this.Voided = @voided;
        this.OrderId = @orderId;
    }

    [Newtonsoft.Json.JsonProperty("id", Required = Newtonsoft.Json.Required.Always)]
    public long Id { get; init; }

    [Newtonsoft.Json.JsonProperty("accountId", Required = Newtonsoft.Json.Required.Always)]
    public int AccountId { get; init; }

    [Newtonsoft.Json.JsonProperty("contractId", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string ContractId { get; init; }

    [Newtonsoft.Json.JsonProperty("creationTimestamp", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public System.DateTimeOffset CreationTimestamp { get; init; }

    [Newtonsoft.Json.JsonProperty("price", Required = Newtonsoft.Json.Required.Always)]
    public decimal Price { get; init; }

    [Newtonsoft.Json.JsonProperty("profitAndLoss", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public decimal? ProfitAndLoss { get; init; }

    [Newtonsoft.Json.JsonProperty("fees", Required = Newtonsoft.Json.Required.Always)]
    public decimal Fees { get; init; }

    [Newtonsoft.Json.JsonProperty("side", Required = Newtonsoft.Json.Required.Always)]
    public OrderSide Side { get; init; }

    [Newtonsoft.Json.JsonProperty("size", Required = Newtonsoft.Json.Required.Always)]
    public int Size { get; init; }

    [Newtonsoft.Json.JsonProperty("voided", Required = Newtonsoft.Json.Required.Always)]
    public bool Voided { get; init; }

    [Newtonsoft.Json.JsonProperty("orderId", Required = Newtonsoft.Json.Required.Always)]
    public long OrderId { get; init; }

    public string ToJson()
    {

        return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings());

    }
    public static HalfTradeModel FromJson(string data)
    {

        return Newtonsoft.Json.JsonConvert.DeserializeObject<HalfTradeModel>(data, new Newtonsoft.Json.JsonSerializerSettings());

    }
}