namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial record SearchAccountRequest
{
    [Newtonsoft.Json.JsonConstructor]
    public SearchAccountRequest(bool @onlyActiveAccounts)
    {
        this.OnlyActiveAccounts = @onlyActiveAccounts;
    }

    [Newtonsoft.Json.JsonProperty("onlyActiveAccounts", Required = Newtonsoft.Json.Required.Always)]
    public bool OnlyActiveAccounts { get; init; }

    public string ToJson()
    {

        return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings());

    }
    public static SearchAccountRequest FromJson(string data)
    {

        return Newtonsoft.Json.JsonConvert.DeserializeObject<SearchAccountRequest>(data, new Newtonsoft.Json.JsonSerializerSettings());

    }
}