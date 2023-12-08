using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SechiaApi.Modules.Authentication.Models
{
    public class Token
	{
		[Key]
		public int Id { get; set; }
		public string Value { get; set; }
		public DateTime Time { get; set; }
		public string? IpAddress { get; set; }

		[ForeignKey(nameof(User))]
		public int UserId { get; set; }
		public User User { get; set; }

	}
}
