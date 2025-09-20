using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Refitter.Entities;

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
    /// Name of the contract
    /// </summary>
    [Required]
    [MaxLength(200)]
    public string Name { get; set; } = string.Empty;

    /// <summary>
    /// Description of the contract
    /// </summary>
    [Required]
    [MaxLength(500)]
    public string Description { get; set; } = string.Empty;

    /// <summary>
    /// The tick size for the contract
    /// </summary>
    [Column(TypeName = "decimal(18,8)")]
    public decimal TickSize { get; set; }

    /// <summary>
    /// The tick value for the contract
    /// </summary>
    [Column(TypeName = "decimal(18,8)")]
    public decimal TickValue { get; set; }

    /// <summary>
    /// Whether this is an active contract
    /// </summary>
    public bool ActiveContract { get; set; }

    /// <summary>
    /// Symbol ID for the contract
    /// </summary>
    [Required]
    [MaxLength(100)]
    public string SymbolId { get; set; } = string.Empty;
}