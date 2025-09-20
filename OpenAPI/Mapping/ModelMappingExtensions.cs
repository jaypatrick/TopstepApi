using OpenAPI.Entities;
using OpenAPI.Models;

namespace OpenAPI.Mapping;

/// <summary>
/// Extension methods for mapping between OpenAPI models and EF entities
/// </summary>
public static class ModelMappingExtensions
{
    /// <summary>
    /// Converts a PositionModel to a PositionEntity
    /// </summary>
    public static PositionEntity ToEntity(this PositionModel model)
    {
        return new PositionEntity
        {
            Id = model.Id ?? 0,
            AccountId = model.AccountId,
            AveragePrice = model.AveragePrice,
            ContractId = model.ContractId,
            CreationTimestamp = model.CreationTimestamp,
            Size = model.Size,
            Type = model.Type
        };
    }

    /// <summary>
    /// Converts a PositionEntity to a PositionModel
    /// </summary>
    public static PositionModel ToModel(this PositionEntity entity)
    {
        return new PositionModel
        {
            Id = entity.Id,
            AccountId = entity.AccountId,
            AveragePrice = entity.AveragePrice,
            ContractId = entity.ContractId,
            CreationTimestamp = entity.CreationTimestamp,
            Size = entity.Size,
            Type = entity.Type
        };
    }

    /// <summary>
    /// Updates a PositionEntity with values from a PositionModel
    /// </summary>
    public static void UpdateFromModel(this PositionEntity entity, PositionModel model)
    {
        entity.AccountId = model.AccountId;
        entity.AveragePrice = model.AveragePrice;
        entity.ContractId = model.ContractId;
        entity.CreationTimestamp = model.CreationTimestamp;
        entity.Size = model.Size;
        entity.Type = model.Type;
    }

    /// <summary>
    /// Converts a ContractModel to a ContractEntity
    /// </summary>
    public static ContractEntity ToEntity(this ContractModel model)
    {
        return new ContractEntity
        {
            Id = model.Id ?? string.Empty,
            ActiveContract = model.ActiveContract,
            Description = model.Description,
            Name = model.Name,
            SymbolId = model.SymbolId,
            TickSize = model.TickSize,
            TickValue = model.TickValue
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
            ActiveContract = entity.ActiveContract,
            Description = entity.Description,
            Name = entity.Name,
            SymbolId = entity.SymbolId,
            TickSize = entity.TickSize,
            TickValue = entity.TickValue
        };
    }

    /// <summary>
    /// Updates a ContractEntity with values from a ContractModel
    /// </summary>
    public static void UpdateFromModel(this ContractEntity entity, ContractModel model)
    {
        entity.ActiveContract = model.ActiveContract;
        entity.Description = model.Description;
        entity.Name = model.Name;
        entity.SymbolId = model.SymbolId;
        entity.TickSize = model.TickSize;
        entity.TickValue = model.TickValue;
    }

    /// <summary>
    /// Converts an OrderModel to an OrderEntity
    /// </summary>
    public static OrderEntity ToEntity(this OrderModel model)
    {
        return new OrderEntity
        {
            Id = model.Id ?? 0,
            AccountId = model.AccountId,
            ContractId = model.ContractId,
            CreationTimestamp = model.CreationTimestamp,
            UpdateTimestamp = model.UpdateTimestamp,
            CustomTag = model.CustomTag,
            FilledPrice = model.FilledPrice,
            FillVolume = model.FillVolume,
            LimitPrice = model.LimitPrice,
            Side = model.Side,
            Size = model.Size,
            Status = model.Status,
            StopPrice = model.StopPrice,
            SymbolId = model.SymbolId,
            Type = model.Type
        };
    }

    /// <summary>
    /// Converts an OrderEntity to an OrderModel
    /// </summary>
    public static OrderModel ToModel(this OrderEntity entity)
    {
        return new OrderModel
        {
            Id = entity.Id,
            AccountId = entity.AccountId,
            ContractId = entity.ContractId,
            CreationTimestamp = entity.CreationTimestamp,
            UpdateTimestamp = entity.UpdateTimestamp,
            CustomTag = entity.CustomTag,
            FilledPrice = entity.FilledPrice,
            FillVolume = entity.FillVolume,
            LimitPrice = entity.LimitPrice,
            Side = entity.Side,
            Size = entity.Size,
            Status = entity.Status,
            StopPrice = entity.StopPrice,
            SymbolId = entity.SymbolId,
            Type = entity.Type
        };
    }

    /// <summary>
    /// Updates an OrderEntity with values from an OrderModel
    /// </summary>
    public static void UpdateFromModel(this OrderEntity entity, OrderModel model)
    {
        entity.AccountId = model.AccountId;
        entity.ContractId = model.ContractId;
        entity.CreationTimestamp = model.CreationTimestamp;
        entity.UpdateTimestamp = model.UpdateTimestamp;
        entity.CustomTag = model.CustomTag;
        entity.FilledPrice = model.FilledPrice;
        entity.FillVolume = model.FillVolume;
        entity.LimitPrice = model.LimitPrice;
        entity.Side = model.Side;
        entity.Size = model.Size;
        entity.Status = model.Status;
        entity.StopPrice = model.StopPrice;
        entity.SymbolId = model.SymbolId;
        entity.Type = model.Type;
    }

    /// <summary>
    /// Converts a TradingAccountModel to a TradingAccountEntity
    /// </summary>
    public static TradingAccountEntity ToEntity(this TradingAccountModel model)
    {
        return new TradingAccountEntity
        {
            Id = model.Id ?? 0,
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
}