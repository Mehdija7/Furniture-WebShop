using Microsoft.EntityFrameworkCore.Metadata.Internal;
using SechiaApi.Modules.Furniture.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace SechiaApi.Modules.Cart.Models
{
    [Table("ShoppingCartItems")]
    public class ShoppingCartItem
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey(nameof(ProductID))]
        public Product? Product { get; set; }
        public int ProductID { get; set; }
        public int Quantity { get; set; }

    }
}
