namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial record PlaceOrderResponse
{
    [Newtonsoft.Json.JsonConstructor]
    public PlaceOrderResponse(PlaceOrderErrorCode @errorCode, string? @errorMessage, long? @orderId, bool @success)
    {
        this.Success = @success;
        this.ErrorCode = @errorCode;
        this.ErrorMessage = @errorMessage;
        this.OrderId = @orderId;
    }

    [Newtonsoft.Json.JsonProperty("success", Required = Newtonsoft.Json.Required.Always)]
    public bool Success { get; init; }

    [Newtonsoft.Json.JsonProperty("errorCode", Required = Newtonsoft.Json.Required.Always)]
    public PlaceOrderErrorCode ErrorCode { get; init; }

    [Newtonsoft.Json.JsonProperty("errorMessage", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public string? ErrorMessage { get; init; }

    [Newtonsoft.Json.JsonProperty("orderId", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public long? OrderId { get; init; }

    public string ToJson()
    {

        return Newtonsoft.Json.JsonConvert.SerializeObject(this, new Newtonsoft.Json.JsonSerializerSettings());

    }
    public static PlaceOrderResponse FromJson(string data)
    {

        return Newtonsoft.Json.JsonConvert.DeserializeObject<PlaceOrderResponse>(data, new Newtonsoft.Json.JsonSerializerSettings());

    }
}