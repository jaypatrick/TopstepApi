namespace Refitter.Api;

/// <summary>
/// 0 = Success
/// <br/>1 = AccountNotFound
/// <br/>2 = OrderNotFound
/// <br/>3 = Rejected
/// <br/>4 = Pending
/// <br/>5 = UnknownError
/// <br/>6 = AccountRejected
/// <br/>7 = ContractNotFound
/// </summary>
[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
public enum ModifyOrderErrorCode
{

    Success = 0,

    AccountNotFound = 1,

    OrderNotFound = 2,

    Rejected = 3,

    Pending = 4,

    UnknownError = 5,

    AccountRejected = 6,

    ContractNotFound = 7,

}