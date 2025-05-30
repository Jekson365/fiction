using Microsoft.EntityFrameworkCore;
using Models;
using server.Models;

namespace Db
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public DbSet<Test> Tests { get; set; }
        public DbSet<Post> Posts{ get; set; }
    }
}