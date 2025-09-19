namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial record RetrieveBarRequest
{
    [Newtonsoft.Json.JsonConstructor]
    public RetrieveBarRequest(string @contractId, System.DateTimeOffset @endTime, bool @includePartialBar, int @limit, bool @live, System.DateTimeOffset @startTime, AggregateBarUnit @unit, int @unitNumber)
    {
        this.ContractId = @contractId;
        this.Live = @live;
        this.StartTime = @startTime;
        this.EndTime = @endTime;
        this.Unit = @unit;
        this.UnitNumber = @unitNumber;
        this.Limit = @limit;
        this.IncludePartialBar = @includePartialBar;
    }

    [Newtonsoft.Json.JsonProperty("contractId", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public string ContractId { get; init; }

    [Newtonsoft.Json.JsonProperty("live", Required = Newtonsoft.Json.Required.Always)]
    public bool Live { get; init; }

    [Newtonsoft.Json.JsonProperty("startTime", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public System.DateTimeOffset StartTime { get; init; }

    [Newtonsoft.Json.JsonProperty("endTime", Required = Newtonsoft.Json.Required.Always)]
    [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
    public System.DateTimeOffset EndTime { get; init; }

    [Newtonsoft.Json.JsonProperty("unit", Required = Newtonsoft.Json.Required.Always)]
    public AggregateBarUnit Unit { get; init; }

    [Newtonsoft.Json.JsonProperty("unitNumber", Required = Newtonsoft.Json.Required.Always)]
    public int UnitNumber { get; init; }

    [Newtonsoft.Json.JsonProperty("limit", Required = Newtonsoft.Json.Required.Always)]
    public int Limit { get; init; }

    [Newtonsoft.Json.JsonProperty("includePartialBar", Required = Newtonsoft.Json.Required.Always)]
    public bool IncludePartialBar { get; init; }

    public string ToJson()
    {

        return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings());

    }
    public static RetrieveBarRequest FromJson(string data)
    {

        return Newtonsoft.Json.JsonConvert.DeserializeObject<RetrieveBarRequest>(data, new Newtonsoft.Json.JsonSerializerSettings());

    }
}