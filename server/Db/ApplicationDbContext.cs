using Microsoft.EntityFrameworkCore;
using Models;

namespace Db
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public DbSet<Test> Tests { get; set; }
    }
}