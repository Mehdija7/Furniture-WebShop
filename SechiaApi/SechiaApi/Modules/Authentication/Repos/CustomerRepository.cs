using SechiaApi.Data;
using SechiaApi.Data.Repository;
using SechiaApi.Modules.Authentication.Models;

namespace SechiaApi.Modules.Authentication.Repos
{
	public class CustomerRepository : BaseRepository<Customer>, ICustomerRepository
	{
		public CustomerRepository(AppDbContext context) : base(context)
		{
		}
	}
}
