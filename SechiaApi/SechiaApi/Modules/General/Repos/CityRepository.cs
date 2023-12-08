using SechiaApi.Data;
using SechiaApi.Data.Repository;
using SechiaApi.Modules.General.Models;

namespace SechiaApi.Modules.General.Repos
{
	public class CityRepository : BaseRepository<City>, ICityRepository
	{
		public CityRepository(AppDbContext context) : base(context)
		{
		}

		public bool DoesCityWithPostalNumberExist(string postalNumber)
		{
			return Any(city => city.PostalNumber == postalNumber);
		}
	}
}
