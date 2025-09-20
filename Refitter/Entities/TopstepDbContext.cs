using Microsoft.EntityFrameworkCore;

namespace Refitter.Entities;

/// <summary>
/// Entity Framework DbContext for Topstep API data (Refitter)
/// </summary>
public class TopstepDbContext : DbContext
{
    public TopstepDbContext(DbContextOptions<TopstepDbContext> options) : base(options)
    {
    }

    /// <summary>
    /// Trading accounts
    /// </summary>
    public DbSet<TradingAccountEntity> TradingAccounts { get; set; }

    /// <summary>
    /// Contracts
    /// </summary>
    public DbSet<ContractEntity> Contracts { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Configure decimal precision
        modelBuilder.Entity<ContractEntity>()
            .Property(c => c.TickSize)
            .HasPrecision(18, 8);

        modelBuilder.Entity<ContractEntity>()
            .Property(c => c.TickValue)
            .HasPrecision(18, 8);

        modelBuilder.Entity<TradingAccountEntity>()
            .Property(a => a.Balance)
            .HasPrecision(18, 2);
    }
}