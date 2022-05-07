using AspNetCoreWithReact;
using AspNetCoreWithReact.CustomMiddleware;
using AspNetCoreWithReact.DependencyInjection;
using AspNetCoreWithReact.Model.Entities;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddTransient<IConsoleWriter, ConsoleWriter>();
builder.Services.AddTransient<ILibraryService, LibraryService>();
builder.Services.AddDbContext<AppDataContext>(x => x.UseSqlServer(builder.Configuration.GetConnectionString("AspNetAndReactProj")));
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "ASP.NET CORE API", Version = "v1" });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

//app.UseCors(options => options.WithOrigins("http......").AllowAnyMethod());
app.UseCors(options => options.AllowAnyMethod().AllowAnyHeader().SetIsOriginAllowed(origin => true));

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseCors(x => x.AllowAnyMethod().AllowAnyHeader().SetIsOriginAllowed(origin =>true));

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
});

app.UseRouting();
app.UseMyMiddleware();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
