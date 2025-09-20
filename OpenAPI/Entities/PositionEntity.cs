using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OpenAPI.Entities;

/// <summary>
/// Entity Framework-enabled position entity for persistence
/// </summary>
[Table("Positions")]
[Index(nameof(AccountId))]
[Index(nameof(ContractId))]
public class PositionEntity
{
    /// <summary>
    /// The position ID (primary key)
    /// </summary>
    [Key]
    public int Id { get; set; }

    /// <summary>
    /// The account ID this position belongs to
    /// </summary>
    public int? AccountId { get; set; }

    /// <summary>
    /// The average price of the position
    /// </summary>
    [Column(TypeName = "decimal(18,8)")]
    public decimal? AveragePrice { get; set; }

    /// <summary>
    /// The contract ID
    /// </summary>
    [MaxLength(100)]
    public string? ContractId { get; set; }

    /// <summary>
    /// When the position was created
    /// </summary>
    public DateTimeOffset? CreationTimestamp { get; set; }

    /// <summary>
    /// The size of the position
    /// </summary>
    public int? Size { get; set; }

    /// <summary>
    /// Position type: 0 = Undefined, 1 = Long, 2 = Short
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