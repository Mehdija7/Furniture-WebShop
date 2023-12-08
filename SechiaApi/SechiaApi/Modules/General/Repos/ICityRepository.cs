using SechiaApi.Data.Repo;
using SechiaApi.Modules.General.Models;

namespace SechiaApi.Modules.General.Repos
{
	public interface ICityRepository : IBaseRepository<City>
	{
		bool DoesCityWithPostalNumberExist(string postalNumber);
	}
}
