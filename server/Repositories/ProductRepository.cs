using Db;
using Microsoft.EntityFrameworkCore;
using server.Interfaces;
using server.Models;
using server.ViewModels;

namespace server.Repositories
{
    public class ProductRepository : IProductInterface
    {
        private readonly ApplicationDbContext _db;
        private readonly IWebHostEnvironment _env;
        public ProductRepository(ApplicationDbContext db, IWebHostEnvironment env)
        {
            _db = db;
            _env = env;
        }
        public async Task<Post> CreatePost(CreatePostViewModel createPostViewModel)
        {
            string UploadImage = await UploadPostImage(createPostViewModel);
            Post post = new Post
            {
                Title = createPostViewModel.Title,
                Description = createPostViewModel.Description,
                Image = UploadImage
            };
            await _db.AddAsync(post);
            await _db.SaveChangesAsync();

            return post;

        }

        public async Task<List<Post>> GetAllPost()
        {
            List<Post> Posts = await _db.Posts.OrderByDescending(p => p.PublishedAt).ToListAsync();

            return Posts;
        }

        public async Task<Post?> Update(int id, CreatePostViewModel createPostViewModel)
        {
            Post post = await _db.Posts.FindAsync(id);

            if (post == null)
            {
                return null;
            }
            post.Title = createPostViewModel.Title;
            post.Description = createPostViewModel.Description;
            post.Image = await UploadPostImage(createPostViewModel);

            await _db.SaveChangesAsync();

            return post;
        }

        private async Task<string> UploadPostImage(CreatePostViewModel createPostViewModel)
        {
            var folder = Path.Combine(_env.WebRootPath, "uploads");
            if (!Directory.Exists(folder))
            {
                Directory.CreateDirectory(folder);
            }
            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(createPostViewModel.Image.FileName);
            var filePath = Path.Combine(folder, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await createPostViewModel.Image.CopyToAsync(stream);
            }

            return fileName;
        }
    }
}