using System.Diagnostics;

namespace AspNetCoreWithReact.DependencyInjection
{
    public class ConsoleWriter : IConsoleWriter
    {
        public void Write()
        {
            Debug.WriteLine("Testing Depaendency Injection...");
        }
    }
}
