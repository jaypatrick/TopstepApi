using Microsoft.EntityFrameworkCore;
using Kiota.Entities;
using Kiota.Models;
using Kiota.Mapping;

namespace Kiota.Services;

/// <summary>
/// Service for managing order data persistence
/// </summary>
public interface IOrderService
{
    Task<OrderEntity?> GetOrderAsync(long id);
    Task<IEnumerable<OrderEntity>> GetOrdersByAccountAsync(int accountId);
    Task<IEnumerable<OrderEntity>> GetOrdersByContractAsync(string contractId);
    Task<IEnumerable<OrderEntity>> GetOrdersByStatusAsync(int status);
    Task<OrderEntity> SaveOrderAsync(OrderModel model);
    Task<OrderEntity> UpdateOrderAsync(OrderModel model);
    Task<bool> DeleteOrderAsync(long id);
    Task<IEnumerable<OrderEntity>> GetAllOrdersAsync();
}

/// <summary>
/// Implementation of order service
/// </summary>
public class OrderService : IOrderService
{
    private readonly TopstepDbContext _context;

    public OrderService(TopstepDbContext context)
    {
        _context = context ?? throw new ArgumentNullException(nameof(context));
    }

    public async Task<OrderEntity?> GetOrderAsync(long id)
    {
        return await _context.Orders
            .Include(o => o.TradingAccount)
            .Include(o => o.Contract)
            .FirstOrDefaultAsync(o => o.Id == id);
    }

    public async Task<IEnumerable<OrderEntity>> GetOrdersByAccountAsync(int accountId)
    {
        return await _context.Orders
            .Include(o => o.TradingAccount)
            .Include(o => o.Contract)
            .Where(o => o.AccountId == accountId)
            .ToListAsync();
    }

    public async Task<IEnumerable<OrderEntity>> GetOrdersByContractAsync(string contractId)
    {
        return await _context.Orders
            .Include(o => o.TradingAccount)
            .Include(o => o.Contract)
            .Where(o => o.ContractId == contractId)
            .ToListAsync();
    }

    public async Task<IEnumerable<OrderEntity>> GetOrdersByStatusAsync(int status)
    {
        return await _context.Orders
            .Include(o => o.TradingAccount)
            .Include(o => o.Contract)
            .Where(o => o.Status == status)
            .ToListAsync();
    }

    public async Task<OrderEntity> SaveOrderAsync(OrderModel model)
    {
        var entity = model.ToEntity();
        _context.Orders.Add(entity);
        await _context.SaveChangesAsync();
        return entity;
    }

    public async Task<OrderEntity> UpdateOrderAsync(OrderModel model)
    {
        var entity = await _context.Orders.FindAsync(model.Id);
        if (entity == null)
        {
            throw new InvalidOperationException($"Order with ID {model.Id} not found");
        }

        entity.UpdateFromModel(model);
        await _context.SaveChangesAsync();
        return entity;
    }

    public async Task<bool> DeleteOrderAsync(long id)
    {
        var entity = await _context.Orders.FindAsync(id);
        if (entity == null)
        {
            return false;
        }

        _context.Orders.Remove(entity);
        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<IEnumerable<OrderEntity>> GetAllOrdersAsync()
    {
        return await _context.Orders
            .Include(o => o.TradingAccount)
            .Include(o => o.Contract)
            .ToListAsync();
    }
}