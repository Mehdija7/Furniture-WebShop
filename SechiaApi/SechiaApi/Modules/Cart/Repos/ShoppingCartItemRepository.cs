using SechiaApi.Data;
using SechiaApi.Data.Repository;
using SechiaApi.Modules.Cart.Models;

namespace SechiaApi.Modules.Cart.Repos
{
    public class ShoppingCartItemRepository : BaseRepository<ShoppingCartItem>, IShoppingCartItemRepository
    {
        public ShoppingCartItemRepository(AppDbContext context) : base(context)
        {

        }
    }
}
