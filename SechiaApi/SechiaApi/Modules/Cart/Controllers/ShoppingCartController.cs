using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SechiaApi.Modules.Cart.Models;
using SechiaApi.Modules.Cart.Repos;
using SechiaApi.Modules.Cart.ViewModels;

namespace SechiaApi.Modules.Cart.Controllers
{
    [ApiController]
    [Route("cart")]
    public class ShoppingCartController : ControllerBase
    {
   
        private readonly IShoppingCartRepository _shoppingCartRepository;
        private readonly IShoppingCartItemRepository _shoppingCartItemRepository;

        public ShoppingCartController(IShoppingCartRepository shoppingCartRepository,IShoppingCartItemRepository shoppingCartItemRepository) 
        {
            _shoppingCartRepository= shoppingCartRepository;   
            _shoppingCartItemRepository= shoppingCartItemRepository;
        }

        [HttpPost]
        [Route("/item")]
        public ActionResult PostShoppingCartItem([FromBody] ShoppingCartItemVM shoppingCartItemVM)
        {
            var item = new ShoppingCartItem()
            {
                ProductID=shoppingCartItemVM.ProductId,
                Quantity=shoppingCartItemVM.Quantity
            };
            _shoppingCartItemRepository.Create(item);
            _shoppingCartItemRepository.SaveChanges();
            return Ok();

        }

        [HttpGet]
        [Route("/item")]
        public ActionResult GetShoppingCartItem()
        {
            var item=_shoppingCartItemRepository.GetAll().OrderBy(x => x.Id).Last();
            return Ok();

        }

        [HttpPost]
        public ActionResult PostShoppingCart([FromBody]ShoppingCartVM shoppingCartVM)
        {
            var cart = new ShoppingCart()
            {
                CustomerID=shoppingCartVM.CustomerID,
                DateTime=DateTime.Now,
                TotalPrice=shoppingCartVM.TotalPrice,
                isNew=true
            };
           foreach( var c in shoppingCartVM.Items)
            {
                var item = new ShoppingCartItem()
                {
                    ProductID = c.ProductID,
                    Quantity = c.Quantity

                };
                cart.Items.Add(item);
            }
            _shoppingCartRepository.Create(cart);
            _shoppingCartRepository.SaveChanges();
            return Ok();
            
        }

        [HttpGet]
        public ActionResult<List<ShoppingCart>> GetOrder()
        {
            var orders=_shoppingCartRepository.GetAll().Where(o=>o.isNew==true).Include(o=>o.Items).ToList();
            return Ok(orders);
        }


    }
}
