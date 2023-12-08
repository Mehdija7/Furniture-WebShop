using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SechiaApi.Modules.Furniture.Models
{
    [Table("Room")]
    public class Room
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
