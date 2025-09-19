namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial record ContractModel
{
    [Newtonsoft.Json.JsonConstructor]
    public ContractModel(bool @activeContract, string @description, string @id, string @name, string @symbolId, decimal @tickSize, decimal @tickValue)
    {
        this.Id = @id;
        this.Name = @name;
        this.Description = @description;
        this.TickSize = @tickSize;
        this.TickValue = @tickValue;
        this.ActiveContract = @activeContract;
        this.SymbolId = @symbolId;
    }

    [Newtonsoft.Json.JsonProperty("id", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string Id { get; init; }

    [Newtonsoft.Json.JsonProperty("name", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string Name { get; init; }

    [Newtonsoft.Json.JsonProperty("description", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string Description { get; init; }

    [Newtonsoft.Json.JsonProperty("tickSize", Required = Newtonsoft.Json.Required.Always)]
    public decimal TickSize { get; init; }

    [Newtonsoft.Json.JsonProperty("tickValue", Required = Newtonsoft.Json.Required.Always)]
    public decimal TickValue { get; init; }

    [Newtonsoft.Json.JsonProperty("activeContract", Required = Newtonsoft.Json.Required.Always)]
    public bool ActiveContract { get; init; }

    [Newtonsoft.Json.JsonProperty("symbolId", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string SymbolId { get; init; }

    public string ToJson()
    {

        return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings());

    }
    public static ContractModel FromJson(string data)
    {

        return Newtonsoft.Json.JsonConvert.DeserializeObject<ContractModel>(data, new Newtonsoft.Json.JsonSerializerSettings());

    }
}