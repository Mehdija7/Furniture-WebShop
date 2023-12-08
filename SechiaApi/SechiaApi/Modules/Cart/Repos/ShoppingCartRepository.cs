using Microsoft.EntityFrameworkCore.ChangeTracking;
using SechiaApi.Data;
using SechiaApi.Data.Repository;
using SechiaApi.Modules.Cart.Models;

namespace SechiaApi.Modules.Cart.Repos
{
    public class ShoppingCartRepository : BaseRepository<ShoppingCart>,IShoppingCartRepository
    {
        public ShoppingCartRepository(AppDbContext context) : base(context)
        {

        }
    }
}
