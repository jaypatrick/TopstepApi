namespace Topstep.Client;

[System.CodeDom.Compiler.GeneratedCode("NSwag", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public partial class AccountResponse
{
    public int StatusCode { get; private set; }

    public System.Collections.Generic.IReadOnlyDictionary<string, System.Collections.Generic.IEnumerable<string>> Headers { get; private set; }

    public AccountResponse(int statusCode, System.Collections.Generic.IReadOnlyDictionary<string, System.Collections.Generic.IEnumerable<string>> headers)
    {
        StatusCode = statusCode;
        Headers = headers;
    }
}