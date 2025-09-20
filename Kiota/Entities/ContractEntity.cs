using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Kiota.Entities;

/// <summary>
/// Entity Framework-enabled contract entity for persistence
/// </summary>
[Table("Contracts")]
[Index(nameof(Id), IsUnique = true)]
[Index(nameof(SymbolId))]
public class ContractEntity
{
    /// <summary>
    /// The contract ID (primary key)
    /// </summary>
    [Key]
    [MaxLength(100)]
    public string Id { get; set; } = string.Empty;

    /// <summary>
    /// Whether this is an active contract
    /// </summary>
    public bool? ActiveContract { get; set; }

    /// <summary>
    /// Description of the contract
    /// </summary>
    [MaxLength(500)]
    public string? Description { get; set; }

    /// <summary>
    /// Name of the contract
    /// </summary>
    [MaxLength(200)]
    public string? Name { get; set; }

    /// <summary>
    /// Symbol ID for the contract
    /// </summary>
    [MaxLength(100)]
    public string? SymbolId { get; set; }

    /// <summary>
    /// The tick size for the contract
    /// </summary>
    [Column(TypeName = "decimal(18,8)")]
    public decimal? TickSize { get; set; }

    /// <summary>
    /// The tick value for the contract
    /// </summary>
    [Column(TypeName = "decimal(18,8)")]
    public decimal? TickValue { get; set; }

    /// <summary>
    /// Navigation property to positions using this contract
    /// </summary>
    public virtual ICollection<PositionEntity> Positions { get; set; } = new List<PositionEntity>();

    /// <summary>
    /// Navigation property to orders for this contract
    /// </summary>
    public virtual ICollection<OrderEntity> Orders { get; set; } = new List<OrderEntity>();
}