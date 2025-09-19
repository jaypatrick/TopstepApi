namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial record AggregateBarModel
{
    [Newtonsoft.Json.JsonConstructor]
    public AggregateBarModel(decimal @c, decimal @h, decimal @l, decimal @o, System.DateTimeOffset @t, long @v)
    {
        this.T = @t;
        this.O = @o;
        this.H = @h;
        this.L = @l;
        this.C = @c;
        this.V = @v;
    }

    [Newtonsoft.Json.JsonProperty("t", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public System.DateTimeOffset T { get; init; }

    [Newtonsoft.Json.JsonProperty("o", Required = Newtonsoft.Json.Required.Always)]
    public decimal O { get; init; }

    [Newtonsoft.Json.JsonProperty("h", Required = Newtonsoft.Json.Required.Always)]
    public decimal H { get; init; }

    [Newtonsoft.Json.JsonProperty("l", Required = Newtonsoft.Json.Required.Always)]
    public decimal L { get; init; }

    [Newtonsoft.Json.JsonProperty("c", Required = Newtonsoft.Json.Required.Always)]
    public decimal C { get; init; }

    [Newtonsoft.Json.JsonProperty("v", Required = Newtonsoft.Json.Required.Always)]
    public long V { get; init; }

    public string ToJson()
    {

        return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings());

    }
    public static AggregateBarModel FromJson(string data)
    {

        return Newtonsoft.Json.JsonConvert.DeserializeObject<AggregateBarModel>(data, new Newtonsoft.Json.JsonSerializerSettings());

    }
}