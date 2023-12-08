using Microsoft.AspNetCore.Mvc;
using SechiaApi.Data;
using SechiaApi.Modules.Authentication.Models;
using SechiaApi.Modules.Authentication.Repos;
using SechiaApi.Modules.Authentication.ViewModels;
using SechiaApi.Modules.General.Dtos;
using SechiaApi.Modules.General.Models;
using SechiaApi.Modules.General.Repos;

namespace SechiaApi.Modules.Authentication.Controllers
{
    [ApiController]
	[Route("register")]
	public class RegisterController : ControllerBase
	{
		private readonly ICustomerRepository _customerRepository;
		private readonly IUserRepository _userRepository;
		private readonly ISellerRepository _sellerRepository;

		public RegisterController(ICustomerRepository customerRepository, IUserRepository userRepository, ISellerRepository sellerRepository)
		{
			_customerRepository = customerRepository;
			_userRepository = userRepository;
			_sellerRepository = sellerRepository;
		}

		[HttpPost]
		[Route("customer")]
		public ActionResult RegisterCustomer([FromBody] RegisterCustomerVM newCustomer) {
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			bool userAlreadyExists = _userRepository.DoesUserWithEmailExist(newCustomer.Email);	

			if (userAlreadyExists)
			{
				return BadRequest(
					new AppError() 
					{ 
						Status = 411, // consider different code
						Title = "User with this email allready exists." // this message is a sec issue
					}
				);
			}

			var address = new Address() {
				Street = newCustomer.Address.Street,
				CityId = newCustomer.Address.CityId
			};

			var customer = new Customer()
			{
				Name = newCustomer.Name,
				Surname = newCustomer.Surname,
				Email = newCustomer.Email,
				Password = newCustomer.Password,
				PhoneNumber = newCustomer.PhoneNumber,
				Address = address,
				isAdmin = false
			};
			_customerRepository.Create(customer);
			_customerRepository.SaveChanges();
			
			return Ok("Dodan korisnik");
		}
        [HttpPost]
        [Route("seller")]
        public ActionResult RegisterSeller([FromBody]RegisterSellerVM newSeller)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var seller = new Seller()
            {
                Name = newSeller.Name,
                Surname = newSeller.Surname,
                Email = newSeller.Email,
                Password = newSeller.Password,
                PhoneNumber = newSeller.PhoneNumber,
                Gender = newSeller.Gender,
                JMBG = newSeller.JMBG,
                BirthDate = newSeller.BirthDate,
                isAdmin = false
            };
            _sellerRepository.Create(seller);
            _sellerRepository.SaveChanges();
            return Ok("Uspjesno dodan prodavac");

        }

        [HttpPost]
        [Route("admin")]
		public ActionResult RegisterAdmin()
		{
			var admin = new User()
			{
				Email = "admin",
				Password = "admin",
				PhoneNumber = "admin",
				isAdmin = true
			};
			_userRepository.Create(admin);
			_userRepository.SaveChanges();
			return Ok("Admin dodan");
		}
    }
}
