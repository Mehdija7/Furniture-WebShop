using SechiaApi.Modules.Furniture.Models;
using System.Drawing;

namespace SechiaApi.Modules.Furniture.ViewModels
{
	public class ProductGetVM
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public float Price { get; set; }
		public string ShortDescription { get; set; }
		public string Image { get; set; }
		public Category Category{ get; set; }
		public Room Room { get; set; }
	}
}
