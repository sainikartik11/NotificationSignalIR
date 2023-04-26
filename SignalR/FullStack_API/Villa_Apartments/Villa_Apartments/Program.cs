using Data.Access;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Villa_Apartments.Hubs;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<VillaDbContext>(options => options.UseSqlServer(
    builder.Configuration.GetConnectionString("Default_connection")
    ));
builder.Services.AddCors((options) =>
{
    options.AddPolicy("FeedClientApp",
        new CorsPolicyBuilder()
        .WithOrigins("http://localhost:4200")
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowCredentials()
        .Build());
});
builder.Services.AddSignalR();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


// other code and build the app

app.UseCors("FeedClientApp");
app.MapHub<NotificationHub>("/NotificationHub");

app.UseAuthorization();

app.MapControllers();

app.Run();
