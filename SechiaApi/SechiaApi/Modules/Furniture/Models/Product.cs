using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Drawing;

namespace SechiaApi.Modules.Furniture.Models
{
	[Table("Product")]
	public class Product
	{
		[Key]
		public int Id { get; set; }
		public string Name { get; set; }
		public float Price { get; set; }
		public string ShortDescription { get; set; }
		public string? LongDescription { get; set; }

        [ForeignKey(nameof(CategoryID))]
        public Category Category { get; set; }
        public int CategoryID { get; set; }
        public string? Dimension{ get; set; }
		[ForeignKey(nameof(RoomID))]
		public Room Room { get; set; }
		public int RoomID { get; set; }
		public string? Image { get; set; }

	}

	
}
