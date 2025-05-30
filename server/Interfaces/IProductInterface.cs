using server.Models;
using server.ViewModels;

namespace server.Interfaces
{
    public interface IProductInterface
    {
        public Task<Post> CreatePost(CreatePostViewModel createPostViewModel);
        public Task<List<Post>> GetAllPost();
        public Task<Post> Update(int id,CreatePostViewModel createPostViewModel);
    }
}