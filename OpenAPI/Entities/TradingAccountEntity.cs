using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OpenAPI.Entities;

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
    public decimal? Balance { get; set; }

    /// <summary>
    /// Whether the account can trade
    /// </summary>
    public bool? CanTrade { get; set; }

    /// <summary>
    /// Whether the account is visible
    /// </summary>
    public bool? IsVisible { get; set; }

    /// <summary>
    /// Whether this is a simulated account
    /// </summary>
    public bool? Simulated { get; set; }

    /// <summary>
    /// Navigation property to positions in this account
    /// </summary>
    public virtual ICollection<PositionEntity> Positions { get; set; } = new List<PositionEntity>();

    /// <summary>
    /// Navigation property to orders in this account
    /// </summary>
    public virtual ICollection<OrderEntity> Orders { get; set; } = new List<OrderEntity>();
}