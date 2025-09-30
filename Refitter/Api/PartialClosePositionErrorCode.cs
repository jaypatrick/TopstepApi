namespace Refitter.Api;

/// <summary>
/// 0 = Success
/// <br/>1 = AccountNotFound
/// <br/>2 = PositionNotFound
/// <br/>3 = ContractNotFound
/// <br/>4 = ContractNotActive
/// <br/>5 = InvalidCloseSize
/// <br/>6 = OrderRejected
/// <br/>7 = OrderPending
/// <br/>8 = UnknownError
/// <br/>9 = AccountRejected
/// </summary>
[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.4.0.0 (NJsonSchema v11.3.2.0 (Newtonsoft.Json v13.0.0.0))")]
public enum PartialClosePositionErrorCode
{

    Success = 0,

    AccountNotFound = 1,

    PositionNotFound = 2,

    ContractNotFound = 3,

    ContractNotActive = 4,

    InvalidCloseSize = 5,

    OrderRejected = 6,

    OrderPending = 7,

    UnknownError = 8,

    AccountRejected = 9,

}