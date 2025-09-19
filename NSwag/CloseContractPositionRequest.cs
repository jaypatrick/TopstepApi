namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial record CloseContractPositionRequest
{
    [Newtonsoft.Json.JsonConstructor]
    public CloseContractPositionRequest(int @accountId, string @contractId)
    {
        this.AccountId = @accountId;
        this.ContractId = @contractId;
    }

    [Newtonsoft.Json.JsonProperty("accountId", Required = Newtonsoft.Json.Required.Always)]
    public int AccountId { get; init; }

    [Newtonsoft.Json.JsonProperty("contractId", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string ContractId { get; init; }

    public string ToJson()
    {

        return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings());

    }
    public static CloseContractPositionRequest FromJson(string data)
    {

        return Newtonsoft.Json.JsonConvert.DeserializeObject<CloseContractPositionRequest>(data, new Newtonsoft.Json.JsonSerializerSettings());

    }
}