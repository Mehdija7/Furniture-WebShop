using SechiaApi.Data;
using SechiaApi.Data.Repository;
using SechiaApi.Modules.Authentication.Models;

namespace SechiaApi.Modules.Authentication.Repos
{
	public class TokenRepository : BaseRepository<Token>, ITokenRepository
	{
		public TokenRepository(AppDbContext context) : base(context)
		{
		}
	}
}
