var builder = DistributedApplication.CreateBuilder(args);

var apiService = builder.AddProject<Projects.Aspire_ApiService>("apiservice")
    .WithHttpHealthCheck("/health");

builder.AddProject<Projects.Aspire_Web>("webfrontend")
    .WithExternalHttpEndpoints()
    .WithHttpHealthCheck("/health")
    .WithReference(apiService)
    .WaitFor(apiService);

builder.AddProject<Projects.ApiServer>("apiserver");

builder.Build().Run();
