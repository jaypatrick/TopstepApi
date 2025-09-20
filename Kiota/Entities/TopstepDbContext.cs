using Microsoft.EntityFrameworkCore;

namespace Kiota.Entities;

/// <summary>
/// Entity Framework DbContext for Topstep API data
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

    /// <summary>
    /// Positions
    /// </summary>
    public DbSet<PositionEntity> Positions { get; set; }

    /// <summary>
    /// Orders
    /// </summary>
    public DbSet<OrderEntity> Orders { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Configure relationships
        modelBuilder.Entity<PositionEntity>()
            .HasOne(p => p.TradingAccount)
            .WithMany(a => a.Positions)
            .HasForeignKey(p => p.AccountId)
            .OnDelete(DeleteBehavior.SetNull);

        modelBuilder.Entity<PositionEntity>()
            .HasOne(p => p.Contract)
            .WithMany(c => c.Positions)
            .HasForeignKey(p => p.ContractId)
            .OnDelete(DeleteBehavior.SetNull);

        modelBuilder.Entity<OrderEntity>()
            .HasOne(o => o.TradingAccount)
            .WithMany(a => a.Orders)
            .HasForeignKey(o => o.AccountId)
            .OnDelete(DeleteBehavior.SetNull);

        modelBuilder.Entity<OrderEntity>()
            .HasOne(o => o.Contract)
            .WithMany(c => c.Orders)
            .HasForeignKey(o => o.ContractId)
            .OnDelete(DeleteBehavior.SetNull);

        // Configure decimal precision
        modelBuilder.Entity<PositionEntity>()
            .Property(p => p.AveragePrice)
            .HasPrecision(18, 8);

        modelBuilder.Entity<ContractEntity>()
            .Property(c => c.TickSize)
            .HasPrecision(18, 8);

        modelBuilder.Entity<ContractEntity>()
            .Property(c => c.TickValue)
            .HasPrecision(18, 8);

        modelBuilder.Entity<TradingAccountEntity>()
            .Property(a => a.Balance)
            .HasPrecision(18, 2);

        modelBuilder.Entity<OrderEntity>()
            .Property(o => o.FilledPrice)
            .HasPrecision(18, 8);

        modelBuilder.Entity<OrderEntity>()
            .Property(o => o.LimitPrice)
            .HasPrecision(18, 8);

        modelBuilder.Entity<OrderEntity>()
            .Property(o => o.StopPrice)
            .HasPrecision(18, 8);
    }
}