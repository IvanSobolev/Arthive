using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

public class DataContext : IdentityDbContext<User, IdentityRole<long>, long>
{
    public DataContext(DbContextOptions<DataContext> options) 
    : base(options) 
    {}
}