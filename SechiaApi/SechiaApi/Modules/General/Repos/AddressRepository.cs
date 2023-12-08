using SechiaApi.Data;
using SechiaApi.Data.Repository;
using SechiaApi.Modules.General.Models;

namespace SechiaApi.Modules.General.Repos
{
	public class AddressRepository : BaseRepository<Address>, IAddressRepository
	{
		public AddressRepository(AppDbContext context) : base(context)
		{
		}
	}
}
