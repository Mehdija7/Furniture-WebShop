using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace SechiaApi.Modules.Authentication.Models
{
    [Table("Seller")]
    public class Seller : User
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string JMBG { get; set; }
        public DateTime BirthDate { get; set; }
        public string Gender { get; set; }
       
    }
}
