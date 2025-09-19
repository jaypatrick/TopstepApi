namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial record SearchContractRequest
{
    [Newtonsoft.Json.JsonConstructor]
    public SearchContractRequest(bool @live, string? @searchText)
    {
        this.SearchText = @searchText;
        this.Live = @live;
    }

    [Newtonsoft.Json.JsonProperty("searchText", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public string? SearchText { get; init; }

    [Newtonsoft.Json.JsonProperty("live", Required = Newtonsoft.Json.Required.Always)]
    public bool Live { get; init; }

    public string ToJson()
    {

        return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings());

    }
    public static SearchContractRequest FromJson(string data)
    {

        return Newtonsoft.Json.JsonConvert.DeserializeObject<SearchContractRequest>(data, new Newtonsoft.Json.JsonSerializerSettings());

    }
}