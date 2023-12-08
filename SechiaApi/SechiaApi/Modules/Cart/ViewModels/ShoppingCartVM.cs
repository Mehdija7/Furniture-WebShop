using SechiaApi.Modules.Cart.Models;
using SechiaApi.Modules.Furniture.Models;

namespace SechiaApi.Modules.Cart.ViewModels
{
    public class ShoppingCartVM
    {
        public int CustomerID { get; set; }
        public List<ShoppingCartItem> Items { get; set; } = new List<ShoppingCartItem> ();
        public float TotalPrice { get; set; }
    }
}
