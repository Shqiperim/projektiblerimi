using AspNetCoreWithReact.DependencyInjection;
using AspNetCoreWithReact.Model.Entities;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreWithReact.Controllers;
[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;
    private IConsoleWriter _IConsoleWriter;
    private ILibraryService _ILibraryService;

    public WeatherForecastController(ILogger<WeatherForecastController> logger, IConsoleWriter prIConsoleWriter, ILibraryService prILibraryService)
    {
        _logger = logger;
        _IConsoleWriter = prIConsoleWriter;
        _ILibraryService = prILibraryService;
    }

    [HttpGet]
    public IEnumerable<WeatherForecast> Get()
    {
        /* Dependency Injection
        _IConsoleWriter.Write();
        */

        /* GET LIBRARY
        List<Library> lLibraries = _ILibraryService.GetAll();
        List<Library> lLibraries = _ILibraryService.GetByName("YALE");
        */

        /* ADD LIBRARY
        Library lNewLibrary = new Library() { Name = "Test Library", Address = "Test Address", Telephone = "123456789" };
        _ILibraryService.Save(lNewLibrary);
        */

        /* UPDATE LIBRARY 
        Library lLibraryToUpdate = _ILibraryService.GetByName("Test Library").FirstOrDefault();
        lLibraryToUpdate.Name = "Test Library Updated";
        _ILibraryService.Update(lLibraryToUpdate);
        */

        /* DELETE LIBRARY 
        Library lLibraryToUpdate = _ILibraryService.GetByName("Test Library Updated").FirstOrDefault();
        _ILibraryService.Delete(lLibraryToUpdate);
        */


        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateTime.Now.AddDays(index),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }
}