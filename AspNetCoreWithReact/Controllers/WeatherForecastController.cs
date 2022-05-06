using AspNetCoreWithReact.DependencyInjection;
using AspNetCoreWithReact.Model.Entities;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreWithReact.Controllers
{
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

        public WeatherForecastController(ILogger<WeatherForecastController> logger, IConsoleWriter prIConsoleWriter, ILibraryService prLibraryService)
        {
            _logger = logger;
            _IConsoleWriter = prIConsoleWriter;
            _ILibraryService = prLibraryService;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            //DependencyInjection
            //_IConsoleWriter.Write();

            //Get Library
            //List<Library> lLibraries = _ILibraryService.GetAll();
            //List<Library> lLibraries = _ILibraryService.GetByName("Yale");

            //Add Library
            //Library lNewLibrary = new Library() { Name = "Test Library", Address = "Test Address", Phone = "456132165"};
            //_ILibraryService.Save(lNewLibrary);

            //Update Library
            //Library lLibraryToUpdate = _ILibraryService.GetByName("Library of Congress").FirstOrDefault();
            //lLibraryToUpdate.Name = "Library of Congress Updated";
            //_ILibraryService.Update(lLibraryToUpdate);

            //DELETE Library
            Library lLibraryToUpdate = _ILibraryService.GetByName("Library of Congress Updated").FirstOrDefault();
            _ILibraryService.Delete(lLibraryToUpdate);

            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}