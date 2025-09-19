namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial record PositionModel
{
    [Newtonsoft.Json.JsonConstructor]
    public PositionModel(int @accountId, decimal @averagePrice, string @contractId, System.DateTimeOffset @creationTimestamp, int @id, int @size, PositionType @type)
    {
        this.Id = @id;
        this.AccountId = @accountId;
        this.ContractId = @contractId;
        this.CreationTimestamp = @creationTimestamp;
        this.Type = @type;
        this.Size = @size;
        this.AveragePrice = @averagePrice;
    }

    [Newtonsoft.Json.JsonProperty("id", Required = Newtonsoft.Json.Required.Always)]
    public int Id { get; init; }

    [Newtonsoft.Json.JsonProperty("accountId", Required = Newtonsoft.Json.Required.Always)]
    public int AccountId { get; init; }

    [Newtonsoft.Json.JsonProperty("contractId", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string ContractId { get; init; }

    [Newtonsoft.Json.JsonProperty("creationTimestamp", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public System.DateTimeOffset CreationTimestamp { get; init; }

    [Newtonsoft.Json.JsonProperty("type", Required = Newtonsoft.Json.Required.Always)]
    public PositionType Type { get; init; }

    [Newtonsoft.Json.JsonProperty("size", Required = Newtonsoft.Json.Required.Always)]
    public int Size { get; init; }

    [Newtonsoft.Json.JsonProperty("averagePrice", Required = Newtonsoft.Json.Required.Always)]
    public decimal AveragePrice { get; init; }

    public string ToJson()
    {

        return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings());

    }
    public static PositionModel FromJson(string data)
    {

        return Newtonsoft.Json.JsonConvert.DeserializeObject<PositionModel>(data, new Newtonsoft.Json.JsonSerializerSettings());

    }
}