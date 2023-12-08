using System.ComponentModel.DataAnnotations.Schema;
using SechiaApi.Modules.General.Models;

namespace SechiaApi.Modules.Authentication.Models
{
    [Table("Customer")]
    public class Customer : User
    {
        public string Name { get; set; }

        public string Surname { get; set; }

        [ForeignKey(nameof(Address))]
        public int AdressId { get; set; }
        public Address Address { get; set; }

    }
}
