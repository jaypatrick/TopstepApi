namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial record TradingAccountModel
{
    [Newtonsoft.Json.JsonConstructor]
    public TradingAccountModel(decimal @balance, bool @canTrade, int @id, bool @isVisible, string @name, bool @simulated)
    {
        this.Id = @id;
        this.Name = @name;
        this.Balance = @balance;
        this.CanTrade = @canTrade;
        this.IsVisible = @isVisible;
        this.Simulated = @simulated;
    }

    [Newtonsoft.Json.JsonProperty("id", Required = Newtonsoft.Json.Required.Always)]
    public int Id { get; init; }

    [Newtonsoft.Json.JsonProperty("name", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string Name { get; init; }

    [Newtonsoft.Json.JsonProperty("balance", Required = Newtonsoft.Json.Required.Always)]
    public decimal Balance { get; init; }

    [Newtonsoft.Json.JsonProperty("canTrade", Required = Newtonsoft.Json.Required.Always)]
    public bool CanTrade { get; init; }

    [Newtonsoft.Json.JsonProperty("isVisible", Required = Newtonsoft.Json.Required.Always)]
    public bool IsVisible { get; init; }

    [Newtonsoft.Json.JsonProperty("simulated", Required = Newtonsoft.Json.Required.Always)]
    public bool Simulated { get; init; }

    public string ToJson()
    {

        return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings());

    }
    public static TradingAccountModel FromJson(string data)
    {

        return Newtonsoft.Json.JsonConvert.DeserializeObject<TradingAccountModel>(data, new Newtonsoft.Json.JsonSerializerSettings());

    }
}