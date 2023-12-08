using System.Text.Json.Serialization;

namespace SechiaApi.Modules.Authentication.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public Customer? Customer => this as Customer;
        public Seller? Seller => this as Seller;      
        public bool IsSeller => Seller != null;
        public bool IsCustomer => Customer != null;
        public bool isAdmin { get; set; }
    }
}
