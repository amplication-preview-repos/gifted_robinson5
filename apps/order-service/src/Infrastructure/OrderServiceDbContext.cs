using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace OrderService.Infrastructure;

public class OrderServiceDbContext : IdentityDbContext<IdentityUser>
{
    public OrderServiceDbContext(DbContextOptions<OrderServiceDbContext> options)
        : base(options) { }
}
