
namespace AspNetCoreWithReact.Model.Entities
{
    public interface ILibraryService
    {
        void Delete(Library prLibrary);
        List<Library> GetAll();
        List<Library> GetByName(string prName);
        List<Library> Save(Library prLibrary);
        List<Library> Update(Library prLibrary);
    }
}