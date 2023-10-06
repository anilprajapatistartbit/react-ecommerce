using Microsoft.EntityFrameworkCore;
using Stripe;

namespace ShoesStoreProject.Model
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public  DbSet<Product> products { get; set; }
       // public DbSet<cartitem> cartitems { get; set; }
        public  DbSet<BillingAddress> billingAddresses { get; set; }
        public DbSet<Address> addresses { get; set; }
        public DbSet<Newsletter> newsletters { get; set; }
        public DbSet<Orders> orders { get; set; }
        public DbSet<OrderItem> orderItems { get; set; }
        public  DbSet<Image> images { get; set; }
        public  DbSet<User> users { get; set; }


    }
}
