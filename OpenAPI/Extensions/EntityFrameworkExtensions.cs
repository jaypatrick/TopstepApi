using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using OpenAPI.Entities;
using OpenAPI.Services;

namespace OpenAPI.Extensions;

/// <summary>
/// Extensions for configuring Entity Framework services
/// </summary>
public static class EntityFrameworkExtensions
{
    /// <summary>
    /// Adds Entity Framework services for Topstep API data persistence
    /// </summary>
    /// <param name="services">The service collection</param>
    /// <param name="connectionString">The database connection string</param>
    /// <returns>The service collection for chaining</returns>
    public static IServiceCollection AddTopstepEntityFramework(this IServiceCollection services, string connectionString)
    {
        services.AddDbContext<TopstepDbContext>(options =>
            options.UseSqlServer(connectionString));

        services.AddScoped<IPositionService, PositionService>();

        return services;
    }

    /// <summary>
    /// Adds Entity Framework services for Topstep API data persistence with custom options
    /// </summary>
    /// <param name="services">The service collection</param>
    /// <param name="optionsAction">Configuration action for DbContext options</param>
    /// <returns>The service collection for chaining</returns>
    public static IServiceCollection AddTopstepEntityFramework(this IServiceCollection services, Action<DbContextOptionsBuilder> optionsAction)
    {
        services.AddDbContext<TopstepDbContext>(optionsAction);

        services.AddScoped<IPositionService, PositionService>();

        return services;
    }
}