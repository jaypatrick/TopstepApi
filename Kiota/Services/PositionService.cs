using Microsoft.EntityFrameworkCore;
using Kiota.Entities;
using Kiota.Models;
using Kiota.Mapping;

namespace Kiota.Services;

/// <summary>
/// Service for managing position data persistence
/// </summary>
public interface IPositionService
{
    Task<PositionEntity?> GetPositionAsync(int id);
    Task<IEnumerable<PositionEntity>> GetPositionsByAccountAsync(int accountId);
    Task<IEnumerable<PositionEntity>> GetPositionsByContractAsync(string contractId);
    Task<PositionEntity> SavePositionAsync(PositionModel model);
    Task<PositionEntity> UpdatePositionAsync(PositionModel model);
    Task<bool> DeletePositionAsync(int id);
    Task<IEnumerable<PositionEntity>> GetAllPositionsAsync();
}

/// <summary>
/// Implementation of position service
/// </summary>
public class PositionService : IPositionService
{
    private readonly TopstepDbContext _context;

    public PositionService(TopstepDbContext context)
    {
        _context = context ?? throw new ArgumentNullException(nameof(context));
    }

    public async Task<PositionEntity?> GetPositionAsync(int id)
    {
        return await _context.Positions
            .Include(p => p.TradingAccount)
            .Include(p => p.Contract)
            .FirstOrDefaultAsync(p => p.Id == id);
    }

    public async Task<IEnumerable<PositionEntity>> GetPositionsByAccountAsync(int accountId)
    {
        return await _context.Positions
            .Include(p => p.TradingAccount)
            .Include(p => p.Contract)
            .Where(p => p.AccountId == accountId)
            .ToListAsync();
    }

    public async Task<IEnumerable<PositionEntity>> GetPositionsByContractAsync(string contractId)
    {
        return await _context.Positions
            .Include(p => p.TradingAccount)
            .Include(p => p.Contract)
            .Where(p => p.ContractId == contractId)
            .ToListAsync();
    }

    public async Task<PositionEntity> SavePositionAsync(PositionModel model)
    {
        var entity = model.ToEntity();
        _context.Positions.Add(entity);
        await _context.SaveChangesAsync();
        return entity;
    }

    public async Task<PositionEntity> UpdatePositionAsync(PositionModel model)
    {
        var entity = await _context.Positions.FindAsync(model.Id);
        if (entity == null)
        {
            throw new InvalidOperationException($"Position with ID {model.Id} not found");
        }

        entity.UpdateFromModel(model);
        await _context.SaveChangesAsync();
        return entity;
    }

    public async Task<bool> DeletePositionAsync(int id)
    {
        var entity = await _context.Positions.FindAsync(id);
        if (entity == null)
        {
            return false;
        }

        _context.Positions.Remove(entity);
        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<IEnumerable<PositionEntity>> GetAllPositionsAsync()
    {
        return await _context.Positions
            .Include(p => p.TradingAccount)
            .Include(p => p.Contract)
            .ToListAsync();
    }
}