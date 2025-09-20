using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Refitter.Entities;

/// <summary>
/// Entity Framework-enabled trading account entity for persistence
/// </summary>
[Table("TradingAccounts")]
[Index(nameof(Id), IsUnique = true)]
[Index(nameof(Name))]
public class TradingAccountEntity
{
    /// <summary>
    /// The trading account ID (primary key)
    /// </summary>
    [Key]
    public int Id { get; set; }

    /// <summary>
    /// The name of the trading account
    /// </summary>
    [Required]
    [MaxLength(200)]
    public string Name { get; set; } = string.Empty;

    /// <summary>
    /// The current balance of the account
    /// </summary>
    [Column(TypeName = "decimal(18,2)")]
    public decimal Balance { get; set; }

    /// <summary>
    /// Whether the account can trade
    /// </summary>
    public bool CanTrade { get; set; }

    /// <summary>
    /// Whether the account is visible
    /// </summary>
    public bool IsVisible { get; set; }

    /// <summary>
    /// Whether this is a simulated account
    /// </summary>
    public bool Simulated { get; set; }
}