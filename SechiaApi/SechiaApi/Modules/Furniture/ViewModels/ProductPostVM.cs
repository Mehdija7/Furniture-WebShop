using SechiaApi.Modules.Furniture.Models;
using System.Drawing;

namespace SechiaApi.Modules.Furniture.ViewModels
{
	public class ProductPostVM
	{
		public string Name { get; set; }
		public float Price { get; set; }
		public string ShortDescription { get; set; }
		public string? LongDescription { get; set; }
		public int CategoryId { get; set; }
		public string? Dimension { get; set; }
		public int RoomId { get; set; }
		public string? Image { get; set; }
	}
}
