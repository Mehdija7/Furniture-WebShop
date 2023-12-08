using SechiaApi.Modules.Authentication.Models;
using SechiaApi.Modules.Furniture.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SechiaApi.Modules.Cart.Models
{
    [Table("ShoppingCarts")]
    public class ShoppingCart
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey(nameof(CustomerID))]
        public Customer Customer { get; set; }
        public int CustomerID { get; set; }
        public List<ShoppingCartItem> Items { get; set; } = new List<ShoppingCartItem>();
        public DateTime DateTime { get; set; }
        public float TotalPrice { get; set; }
        public bool isNew { get; set; }
    }
}

