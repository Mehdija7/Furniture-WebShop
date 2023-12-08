using SechiaApi.Data;
using SechiaApi.Data.Repository;
using SechiaApi.Modules.Authentication.Models;

namespace SechiaApi.Modules.Authentication.Repos
{
    public class SellerRepository:BaseRepository<Seller>,ISellerRepository
    {
        public SellerRepository(AppDbContext context) : base(context)
        {

        }
    }
}
