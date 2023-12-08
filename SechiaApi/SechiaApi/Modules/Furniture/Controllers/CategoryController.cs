using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SechiaApi.Modules.Furniture.Helpers;
using SechiaApi.Modules.Furniture.Models;
using SechiaApi.Modules.Furniture.Repos;
using SechiaApi.Modules.General.Models;

namespace SechiaApi.Modules.Furniture.Controllers
{
   
    [ApiController]
    [Route("categories")]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoryController(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;

        }

        [HttpGet]
        public  List<ClassForCmb> GetCategoryForCmb()
        {
           var list=new List<ClassForCmb>();
            foreach (var c in _categoryRepository.GetAll().ToList())
            {
                list.Add(new ClassForCmb()
                {
                    Id = c.Id,
                    Name = c.Name
                });
            }
            return list;
        }

        [HttpPost]
        [Route("generate")]
        public ActionResult GenerateCategory()
        {
            var categories = new List<Category>()
            {
              new Category() { Name ="Uglovnice"},
              new Category() { Name ="Stolice"},
              new Category() { Name ="Stolovi"},
              new Category() { Name ="Ormari"},
              new Category() { Name="Komode"},
              new Category() { Name="Kreveti"},
              new Category() { Name="Kuhinje"}
            };

            foreach (var category in categories)
            {
                _categoryRepository.Create(category);
            }
            _categoryRepository.SaveChanges();

            return Ok();
        }

        [HttpPost]
        public ActionResult AddCategory([FromBody]string name)
        {
            var category = new Category() { Name = name };
            _categoryRepository.Create(category);
            _categoryRepository.SaveChanges();
            return Ok();
        }
    }
}
