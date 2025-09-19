namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial record PartialCloseContractPositionRequest
{
    [Newtonsoft.Json.JsonConstructor]
    public PartialCloseContractPositionRequest(int @accountId, string @contractId, int @size)
    {
        this.AccountId = @accountId;
        this.ContractId = @contractId;
        this.Size = @size;
    }

    [Newtonsoft.Json.JsonProperty("accountId", Required = Newtonsoft.Json.Required.Always)]
    public int AccountId { get; init; }

    [Newtonsoft.Json.JsonProperty("contractId", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string ContractId { get; init; }

    [Newtonsoft.Json.JsonProperty("size", Required = Newtonsoft.Json.Required.Always)]
    public int Size { get; init; }

    public string ToJson()
    {

        return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings());

    }
    public static PartialCloseContractPositionRequest FromJson(string data)
    {

        return Newtonsoft.Json.JsonConvert.DeserializeObject<PartialCloseContractPositionRequest>(data, new Newtonsoft.Json.JsonSerializerSettings());

    }
}