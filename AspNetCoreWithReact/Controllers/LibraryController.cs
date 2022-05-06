using AspNetCoreWithReact.Model.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreWithReact.Controllers;

[Route("api/[controller]/[action]")]
[ApiController]
public class LibraryController : ControllerBase
{
    private readonly ILibraryService _ILibraryService;

    public LibraryController(ILibraryService prILibraryService)
    {
        _ILibraryService = prILibraryService;
    }

    [HttpGet]
    public Library Get()
    {
        return new Library();
    }
}
