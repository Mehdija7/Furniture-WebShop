using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SechiaApi.Data;
using SechiaApi.Modules.Authentication.Models;
using SechiaApi.Modules.General.Models;
using SechiaApi.Modules.General.Repos;
using SechiaApi.Modules.General.ViewModels;

namespace SechiaApi.Modules.General.Controllers
{
	[ApiController]
	[Route("cities")]
	public class CitiesController : Controller
	{
		private readonly ICityRepository _cityRepository;

		public CitiesController(ICityRepository cityRepository)
		{
			_cityRepository = cityRepository;
		}

		[HttpGet]
		public ActionResult GetAllCities()
		{
			return Ok(_cityRepository.GetAll().ToList());
		}

		[HttpPost]
		public ActionResult AddCity([FromBody] CityAddVM newCity)
		{
			bool cityAlreadyExists = _cityRepository.DoesCityWithPostalNumberExist(newCity.PostalNumber);

			if (cityAlreadyExists)
			{
				return BadRequest("Grad sa ovim postanskim brojem vec postoji.");
			}

			var city = new City()
			{
				Name = newCity.Name,
				PostalNumber = newCity.PostalNumber
			};

			_cityRepository.Create(city);
			_cityRepository.SaveChanges();

			return Ok(city);
		}

		[HttpPost]
		[Route("generate")]
		public ActionResult GenerateCities()
		{
			var cities = new List<City>()
			{
			  new City() { Name ="Sarajevo", PostalNumber="76000"},
			  new City() { Name ="Mostar", PostalNumber="88000"},
			  new City() { Name ="Sanski Most", PostalNumber="79260"},
			  new City() { Name ="Velika Kladusa", PostalNumber="77230"}
			};

			foreach (var city in cities)
			{
				_cityRepository.Create(city);
			}
			_cityRepository.SaveChanges();

			return Ok();
		}
	}
}