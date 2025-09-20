using Refitter.Entities;
using GeneratedCode;

namespace Refitter.Mapping;

/// <summary>
/// Extension methods for mapping between Refitter models and EF entities
/// </summary>
public static class ModelMappingExtensions
{
    /// <summary>
    /// Converts a TradingAccountModel to a TradingAccountEntity
    /// </summary>
    public static TradingAccountEntity ToEntity(this TradingAccountModel model)
    {
        return new TradingAccountEntity
        {
            Id = model.Id,
            Name = model.Name ?? string.Empty,
            Balance = model.Balance,
            CanTrade = model.CanTrade,
            IsVisible = model.IsVisible,
            Simulated = model.Simulated
        };
    }

    /// <summary>
    /// Converts a TradingAccountEntity to a TradingAccountModel
    /// </summary>
    public static TradingAccountModel ToModel(this TradingAccountEntity entity)
    {
        return new TradingAccountModel
        {
            Id = entity.Id,
            Name = entity.Name,
            Balance = entity.Balance,
            CanTrade = entity.CanTrade,
            IsVisible = entity.IsVisible,
            Simulated = entity.Simulated
        };
    }

    /// <summary>
    /// Updates a TradingAccountEntity with values from a TradingAccountModel
    /// </summary>
    public static void UpdateFromModel(this TradingAccountEntity entity, TradingAccountModel model)
    {
        entity.Name = model.Name ?? string.Empty;
        entity.Balance = model.Balance;
        entity.CanTrade = model.CanTrade;
        entity.IsVisible = model.IsVisible;
        entity.Simulated = model.Simulated;
    }

    /// <summary>
    /// Converts a ContractModel to a ContractEntity
    /// </summary>
    public static ContractEntity ToEntity(this ContractModel model)
    {
        return new ContractEntity
        {
            Id = model.Id ?? string.Empty,
            Name = model.Name ?? string.Empty,
            Description = model.Description ?? string.Empty,
            TickSize = model.TickSize,
            TickValue = model.TickValue,
            ActiveContract = model.ActiveContract,
            SymbolId = model.SymbolId ?? string.Empty
        };
    }

    /// <summary>
    /// Converts a ContractEntity to a ContractModel
    /// </summary>
    public static ContractModel ToModel(this ContractEntity entity)
    {
        return new ContractModel
        {
            Id = entity.Id,
            Name = entity.Name,
            Description = entity.Description,
            TickSize = entity.TickSize,
            TickValue = entity.TickValue,
            ActiveContract = entity.ActiveContract,
            SymbolId = entity.SymbolId
        };
    }

    /// <summary>
    /// Updates a ContractEntity with values from a ContractModel
    /// </summary>
    public static void UpdateFromModel(this ContractEntity entity, ContractModel model)
    {
        entity.Name = model.Name ?? string.Empty;
        entity.Description = model.Description ?? string.Empty;
        entity.TickSize = model.TickSize;
        entity.TickValue = model.TickValue;
        entity.ActiveContract = model.ActiveContract;
        entity.SymbolId = model.SymbolId ?? string.Empty;
    }
}