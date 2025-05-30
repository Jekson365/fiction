using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [ApiController]
    [Route("api")]
    public class TestController : ControllerBase
    {
        [HttpGet]
        public ActionResult Index()
        {
            return Ok("hello world");
        }
    }
}