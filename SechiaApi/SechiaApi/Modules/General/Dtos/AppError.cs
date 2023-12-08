using System.ComponentModel;

namespace SechiaApi.Modules.General.Dtos
{
	public class AppError
	{
		public int Status { get; set; }
		public string Title { get; set; } = string.Empty;
		public Dictionary<string, string[]>? Errors { get; set; }
	} 
}


