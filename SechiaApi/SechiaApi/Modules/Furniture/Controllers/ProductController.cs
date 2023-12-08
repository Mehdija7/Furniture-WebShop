using Microsoft.AspNetCore.Mvc;
using SechiaApi.Modules.Furniture.Models;
using SechiaApi.Modules.Furniture.Repos;
using SechiaApi.Modules.Furniture.ViewModels;
using static System.Net.Mime.MediaTypeNames;
using SechiaApi.Modules.Furniture.Helpers;
using System.Text;
using System.Drawing;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace SechiaApi.Modules.Furniture.Controllers
{
	[ApiController]
	[Route("products")]
	public class ProductController : ControllerBase
	{
		private readonly IProductRepository _productRepository;
		private readonly IMapper _mapper;
		
		public ProductController(IProductRepository productRepository, IMapper mapper)
		{
			_productRepository = productRepository;
			_mapper = mapper;
		}

		[HttpPost]
		public ActionResult PostProduct([FromBody] ProductPostVM newProduct)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}


			var product = new Product()
			{
				Name = newProduct.Name,
				Price = newProduct.Price,
				Dimension = newProduct.Dimension,
				ShortDescription = newProduct.ShortDescription,
				LongDescription = newProduct.LongDescription,
				CategoryID = newProduct.CategoryId,
				RoomID = newProduct.RoomId,
				Image = newProduct.Image
		    };

			_productRepository.Create(product);
			_productRepository.SaveChanges();

			return Ok();
		}

		[HttpGet]

		public ActionResult GetProducts()
		{
			var productsDb = _productRepository.GetAll().Include(x=>x.Category).Include(x=> x.Room).ToList();
			var products = productsDb.ConvertAll(productDb => _mapper.Map<ProductGetVM>(productDb));
			return Ok(products);
		}

		[HttpGet]
		[Route("{id}")]
		public ActionResult GetProduct(int id)
		{
			var product = _productRepository.GetAll().FirstOrDefault(p => p.Id == id);
			if (product == null)
			{
				return BadRequest("Nema proizvoda");
			}
			return Ok(product);
		}

        [HttpDelete]
        public ActionResult DeleteProduct(int id)
        {
            var product = _productRepository.GetAll().FirstOrDefault(p => p.Id == id);
            _productRepository.Remove(product);
            _productRepository.SaveChanges();
            return Ok("Proizvod obrisan");
        }

        [HttpPatch]
        public ActionResult UpdateProduct(Product product)
        {
            _productRepository.Update(product);
            _productRepository.SaveChanges();
            return Ok("Uspjesno editovan proizvod");
        }

    }	
}
