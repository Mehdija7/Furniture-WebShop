using SechiaApi.Data;
using SechiaApi.Data.Repository;
using SechiaApi.Modules.Furniture.Models;

namespace SechiaApi.Modules.Furniture.Repos
{
	public class ProductRepository : BaseRepository<Product>, IProductRepository
	{
		public ProductRepository(AppDbContext context) : base(context)
		{
		}
		//dodati sta treba ako treba
	}
}
