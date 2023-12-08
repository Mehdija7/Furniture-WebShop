using SechiaApi.Data.Repo;
using SechiaApi.Data.Repository;
using SechiaApi.Modules.Authentication.Models;

namespace SechiaApi.Modules.Authentication.Repos
{
	public interface ICustomerRepository : IBaseRepository<Customer>
	{
	}
}
