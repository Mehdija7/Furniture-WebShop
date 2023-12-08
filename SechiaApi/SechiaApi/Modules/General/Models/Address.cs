using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SechiaApi.Modules.General.Models
{

    public class Address
    {
        [Key]
        public int Id { get; set; }
        public string Street { get; set; }

        [ForeignKey(nameof(City))]
        public int CityId { get; set; }
        public City? City { get; set; }
    }
}
