# Entity Framework Integration for Topstep API

This repository now includes Entity Framework Core support for persisting Topstep API models beyond in-memory storage. The EF capabilities have been added to all three client libraries:

- **Kiota** - Microsoft Kiota-generated client
- **OpenAPI** - OpenAPI-generated client  
- **Refitter** - Refit-based client

## Features

### Entity Framework-Enabled Models

Each library now includes EF-enabled companion entities for the main domain models:

- `PositionEntity` - For trading positions
- `ContractEntity` - For trading contracts
- `OrderEntity` - For orders (Kiota and OpenAPI)
- `TradingAccountEntity` - For trading accounts

### Database Operations

- **CRUD Operations** - Create, Read, Update, Delete for all entities
- **Relationships** - Proper foreign key relationships between entities
- **Indexes** - Performance-optimized database indexes
- **Mapping Extensions** - Easy conversion between API models and EF entities

## Quick Start

### 1. Add Entity Framework Services

```csharp
using Kiota.Extensions;
using Microsoft.Extensions.DependencyInjection;

// Add to your service collection
services.AddTopstepEntityFramework("Server=.;Database=TopstepApi;Trusted_Connection=true;");

// Or with custom configuration
services.AddTopstepEntityFramework(options => 
    options.UseSqlServer(connectionString)
           .EnableSensitiveDataLogging());
```

### 2. Use the Services

```csharp
using Kiota.Services;
using Kiota.Models;

// Inject the service
public class PositionManager
{
    private readonly IPositionService _positionService;
    
    public PositionManager(IPositionService positionService)
    {
        _positionService = positionService;
    }
    
    public async Task SavePositionAsync(PositionModel position)
    {
        // Save API model to database
        var entity = await _positionService.SavePositionAsync(position);
        Console.WriteLine($"Saved position with ID: {entity.Id}");
    }
    
    public async Task<IEnumerable<PositionEntity>> GetAccountPositionsAsync(int accountId)
    {
        // Query positions by account
        return await _positionService.GetPositionsByAccountAsync(accountId);
    }
}
```

### 3. Model Mapping

The libraries include extension methods for easy conversion between API models and EF entities:

```csharp
using Kiota.Mapping;

// Convert API model to entity
var position = new PositionModel { /* ... */ };
var entity = position.ToEntity();

// Convert entity back to API model
var model = entity.ToModel();

// Update entity from model
entity.UpdateFromModel(position);
```

## Database Configuration

### SQL Server (Recommended)

```csharp
services.AddTopstepEntityFramework(options =>
    options.UseSqlServer("Server=localhost;Database=TopstepApi;Trusted_Connection=true;"));
```

### In-Memory (For Testing)

```csharp
services.AddTopstepEntityFramework(options =>
    options.UseInMemoryDatabase("TopstepTest"));
```

### SQLite

```csharp
services.AddTopstepEntityFramework(options =>
    options.UseSqlite("Data Source=topstep.db"));
```

## Database Schema

The EF models create the following tables:

- `TradingAccounts` - Trading account information
- `Contracts` - Contract specifications
- `Positions` - Position data with foreign keys to accounts and contracts
- `Orders` - Order data with foreign keys to accounts and contracts (Kiota/OpenAPI only)

### Key Relationships

- Positions → TradingAccounts (Many-to-One)
- Positions → Contracts (Many-to-One)
- Orders → TradingAccounts (Many-to-One)
- Orders → Contracts (Many-to-One)

## Sample Application

See `Samples/EntityFrameworkSample` for a complete working example that demonstrates:

- Service configuration
- Saving API models to database
- Retrieving and querying data
- Model mapping

To run the sample:

```bash
cd Samples/EntityFrameworkSample
dotnet run
```

## Library-Specific Notes

### Kiota Library
- Full EF support for all main entities
- Complete service layer with CRUD operations
- Handles nullable properties from Kiota models

### OpenAPI Library  
- Similar to Kiota with OpenAPI-specific namespaces
- Compatible with Microsoft.Extensions.Hosting

### Refitter Library
- Basic EF support for core entities
- Simplified mapping for Refit-based models
- JSON property name mapping included

## Migration Support

To create database migrations:

```bash
# For Kiota
dotnet ef migrations add InitialCreate --project Kiota --context Kiota.Entities.TopstepDbContext

# For OpenAPI
dotnet ef migrations add InitialCreate --project OpenAPI --context OpenAPI.Entities.TopstepDbContext
```

## Best Practices

1. **Use Services** - Always use the provided service interfaces rather than accessing DbContext directly
2. **Handle Nulls** - API models may have nullable properties that need handling during mapping
3. **Transactions** - Use transactions for related operations
4. **Async/Await** - All database operations are async
5. **Dispose Properly** - Use dependency injection for proper DbContext lifecycle management

## Dependencies

The EF integration adds these dependencies:

- `Microsoft.EntityFrameworkCore` (8.0.11)
- `Microsoft.EntityFrameworkCore.SqlServer` (8.0.11)
- `Microsoft.EntityFrameworkCore.Design` (8.0.11)

## Compatibility

- .NET 8.0+
- Entity Framework Core 8.0+
- Compatible with all three client libraries independently