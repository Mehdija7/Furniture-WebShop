using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SechiaApi.Modules.Authentication.Models;
using SechiaApi.Modules.Authentication.Repos;
using SechiaApi.Modules.Authentication.ViewModels;

namespace SechiaApi.Modules.Authentication.Controllers
{
    [Route("user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ISellerRepository _sellerRepository;
        private readonly ICustomerRepository _customerRepository;
        public UserController(ISellerRepository sellerRepository, ICustomerRepository customerRepository)
        {
            _sellerRepository = sellerRepository;
            _customerRepository = customerRepository;
        }

        [HttpGet]
        [Route("customers")]

        public ActionResult GetCustomers() {
            var customers = _customerRepository.GetAll();
            return Ok(customers);
        }

        [HttpGet]
        [Route("customer/{id}")]

        public ActionResult GetCustomer(int id)
        {

            var customer = _customerRepository.GetAll().Include(a => a.Address.City).FirstOrDefault(c=>c.Id==id);
            return Ok(customer);
        }

        [HttpGet]
        [Route("sellers")]
        public ActionResult GetSellers() {
            var sellers = _sellerRepository.GetAll();
            return Ok(sellers);
            
        }


        [HttpDelete]
        [Route("seller/delete")]
        public ActionResult DeleteSeller(string sellerEmail)
        {
            var seller = _sellerRepository.GetAll().FirstOrDefault(s => s.Email == sellerEmail);
            try
            {
                _sellerRepository.Remove(seller);
                _sellerRepository.SaveChanges();
            }
            catch (Exception Ex)
            {
               Console.WriteLine(Ex.Message);
            }
            
            return Ok("Prodavac obrisan");

        }

    }
}
