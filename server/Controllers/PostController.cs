using Microsoft.AspNetCore.Mvc;
using server.Interfaces;
using server.Models;
using server.ViewModels;

namespace server.Controllers
{
    [ApiController, Route("post")]
    public class PostController : ControllerBase
    {
        public IProductInterface _productInterface;
        public PostController(IProductInterface productInterface)
        {
            _productInterface = productInterface;
        }
        [HttpPost("/create")]
        public async Task<IActionResult> Create([FromForm] CreatePostViewModel createPostViewModel)
        {
            Post createPostRepo = await _productInterface.CreatePost(createPostViewModel);

            return Ok(createPostRepo);
        }
        [HttpPut("/update/{id}")]
        public async Task<IActionResult> Upadate([FromRoute] int id, [FromForm] CreatePostViewModel createPostViewModel)
        {
            Post updatePostRepo = await _productInterface.Update(id, createPostViewModel);

            return Ok(updatePostRepo);
        }
        [HttpGet("/getall")]
        public async Task<IActionResult> GetAllPosts()
        {
            List<Post> posts = await _productInterface.GetAllPost();
            return Ok(posts);
        }
    }
}