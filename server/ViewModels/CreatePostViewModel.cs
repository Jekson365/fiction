using System.ComponentModel.DataAnnotations.Schema;

namespace server.ViewModels
{
    public class CreatePostViewModel
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public IFormFile Image { get; set; }
    }
}