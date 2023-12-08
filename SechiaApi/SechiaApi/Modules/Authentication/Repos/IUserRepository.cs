using Azure.Identity;
using SechiaApi.Data.Repo;
using SechiaApi.Modules.Authentication.Models;

namespace SechiaApi.Modules.Authentication.Repos
{
	public interface IUserRepository : IBaseRepository<User>
	{
		User? GetUserByEmailAndPassword(string email, string password);
		bool DoesUserWithEmailExist(string email);
	}
}
