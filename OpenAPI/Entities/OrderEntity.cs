using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OpenAPI.Entities;

/// <summary>
/// Entity Framework-enabled order entity for persistence
/// </summary>
[Table("Orders")]
[Index(nameof(AccountId))]
[Index(nameof(ContractId))]
[Index(nameof(Status))]
[Index(nameof(CreationTimestamp))]
public class OrderEntity
{
    /// <summary>
    /// The order ID (primary key)
    /// </summary>
    [Key]
    public long Id { get; set; }

    /// <summary>
    /// The account ID this order belongs to
    /// </summary>
    public int? AccountId { get; set; }

    /// <summary>
    /// The contract ID for this order
    /// </summary>
    [MaxLength(100)]
    public string? ContractId { get; set; }

    /// <summary>
    /// When the order was created
    /// </summary>
    public DateTimeOffset? CreationTimestamp { get; set; }

    /// <summary>
    /// When the order was last updated
    /// </summary>
    public DateTimeOffset? UpdateTimestamp { get; set; }

    /// <summary>
    /// Custom tag for the order
    /// </summary>
    [MaxLength(200)]
    public string? CustomTag { get; set; }

    /// <summary>
    /// The filled price of the order
    /// </summary>
    [Column(TypeName = "decimal(18,8)")]
    public decimal? FilledPrice { get; set; }

    /// <summary>
    /// The fill volume of the order
    /// </summary>
    public int? FillVolume { get; set; }

    /// <summary>
    /// The limit price of the order
    /// </summary>
    [Column(TypeName = "decimal(18,8)")]
    public decimal? LimitPrice { get; set; }

    /// <summary>
    /// Order side: 0 = Bid, 1 = Ask
    /// </summary>
    public int? Side { get; set; }

    /// <summary>
    /// The size of the order
    /// </summary>
    public int? Size { get; set; }

    /// <summary>
    /// Order status: 0 = None, 1 = Open, 2 = Filled, 3 = Cancelled, 4 = Expired, 5 = Rejected, 6 = Pending, 7 = PendingCancellation, 8 = Suspended
    /// </summary>
    public int? Status { get; set; }

    /// <summary>
    /// The stop price of the order
    /// </summary>
    [Column(TypeName = "decimal(18,8)")]
    public decimal? StopPrice { get; set; }

    /// <summary>
    /// The symbol ID for the order
    /// </summary>
    [MaxLength(100)]
    public string? SymbolId { get; set; }

    /// <summary>
    /// Order type: 0 = Unknown, 1 = Limit, 2 = Market, 3 = StopLimit, 4 = Stop, 5 = TrailingStop, 6 = JoinBid, 7 = JoinAsk
    /// </summary>
    public int? Type { get; set; }

    /// <summary>
    /// Navigation property to the trading account
    /// </summary>
    public virtual TradingAccountEntity? TradingAccount { get; set; }

    /// <summary>
    /// Navigation property to the contract
    /// </summary>
    public virtual ContractEntity? Contract { get; set; }
}