namespace AspNetCoreWithReact.Model.Entities;

public class LibraryService : ILibraryService
{
    public AppDataContext _context { get; set; }
    public LibraryService(AppDataContext prAppDataContext)
    {
        _context = prAppDataContext;
    }

    public List<Library> GetAll()
    {
        return null;
    }

    public List<Library> GetByName(string prName)
    {
        return null;
    }

    public List<Library> Save(Library prLibrary)
    {
        return null;
    }

    public List<Library> Update(Library prLibrary)
    {
        return null;
    }

    public void Delete(Library prLibrary)
    {
    }
}
