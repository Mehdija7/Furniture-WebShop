using SechiaApi.Data;
using SechiaApi.Data.Repo;
using SechiaApi.Data.Repository;
using SechiaApi.Modules.Authentication.Models;



namespace SechiaApi.Modules.Authentication.Repos
{
	public class UserRepository : BaseRepository<User>, IUserRepository
	{
		public UserRepository(AppDbContext context) : base(context)
		{
		}

		public bool DoesUserWithEmailExist(string email)
		{
			return _context.Users.Any(u => u.Email == email);
		}

		public User? GetUserByEmailAndPassword(string email, string password)
		{
			return _context.Users.FirstOrDefault(user => user.Email == email && user.Password == password);
		}
	}
}
