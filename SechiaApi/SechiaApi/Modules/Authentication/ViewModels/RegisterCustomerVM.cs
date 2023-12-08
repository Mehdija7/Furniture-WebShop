using SechiaApi.Modules.General.Models;
using SechiaApi.Modules.General.ViewModels;
using System.ComponentModel.DataAnnotations;

namespace SechiaApi.Modules.Authentication.ViewModels
{
    public class RegisterCustomerVM
    {
        public string Name { get; set; }

        public string Surname { get; set; }

        public string Password { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        // [Phone]
        public string PhoneNumber { get; set; }

        public AddressAddVM Address { get; set; }
    }
}
