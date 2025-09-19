namespace Topstep.Client;

/// <summary>
/// 0 = Success
/// <br/>1 = AccountNotFound
/// <br/>2 = OrderRejected
/// <br/>3 = InsufficientFunds
/// <br/>4 = AccountViolation
/// <br/>5 = OutsideTradingHours
/// <br/>6 = OrderPending
/// <br/>7 = UnknownError
/// <br/>8 = ContractNotFound
/// <br/>9 = ContractNotActive
/// <br/>10 = AccountRejected
/// </summary>
[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "14.6.0.0 (NJsonSchema v11.5.0.0 (Newtonsoft.Json v13.0.0.0))")]
public enum PlaceOrderErrorCode
{

    Success = 0,

    AccountNotFound = 1,

    OrderRejected = 2,

    InsufficientFunds = 3,

    AccountViolation = 4,

    OutsideTradingHours = 5,

    OrderPending = 6,

    UnknownError = 7,

    ContractNotFound = 8,

    ContractNotActive = 9,

    AccountRejected = 10,

}