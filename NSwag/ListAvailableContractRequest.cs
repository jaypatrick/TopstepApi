namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial record ListAvailableContractRequest
{
    [Newtonsoft.Json.JsonConstructor]
    public ListAvailableContractRequest(bool @live)
    {
        this.Live = @live;
    }

    [Newtonsoft.Json.JsonProperty("live", Required = Newtonsoft.Json.Required.Always)]
    public bool Live { get; init; }

    public string ToJson()
    {

        return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings());

    }
    public static ListAvailableContractRequest FromJson(string data)
    {

        return Newtonsoft.Json.JsonConvert.DeserializeObject<ListAvailableContractRequest>(data, new Newtonsoft.Json.JsonSerializerSettings());

    }
}