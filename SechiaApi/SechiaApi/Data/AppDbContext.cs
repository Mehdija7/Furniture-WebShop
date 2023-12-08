using Microsoft.EntityFrameworkCore;
using SechiaApi.Modules.Authentication.Models;
using SechiaApi.Modules.Cart.Models;
using SechiaApi.Modules.Furniture.Models;
using SechiaApi.Modules.General.Models;

namespace SechiaApi.Data
{
    public class AppDbContext: DbContext
	{
		public DbSet<User> Users { get; set; }
		public DbSet<Customer> Customers { get; set; }
		public DbSet<City> Cities { get; set; }
		public DbSet<Address> Adresses { get; set; }	
		public DbSet<Token> Tokens { get; set; }
		public DbSet<Product> Products { get; set; }
		public DbSet<Category> Categories { get; set; }
		public DbSet<Room> Rooms { get; set; }
		public DbSet<Seller> Sellers { get; set; }
		public DbSet<ShoppingCart> ShoppingCarts { get; set; }	
		public DbSet<ShoppingCartItem> ShoppingCartItems { get; set; }
		public AppDbContext(DbContextOptions options) : base(options) { }
	}
}
