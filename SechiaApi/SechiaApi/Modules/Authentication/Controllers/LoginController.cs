using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SechiaApi.Data;
using SechiaApi.Modules.Authentication.Helpers;
using SechiaApi.Modules.Authentication.Models;
using SechiaApi.Modules.Authentication.Repos;
using SechiaApi.Modules.Authentication.ViewModels;

namespace SechiaApi.Modules.Authentication.Controllers
{
    [ApiController]
    [Route("login")]
    public class LoginController :ControllerBase
    {
        
        private readonly IUserRepository _userRepository;
        private readonly ITokenRepository _tokenRepository;
        public LoginController(IUserRepository userRepository,ITokenRepository tokenRepository) {
            _userRepository = userRepository;
            _tokenRepository = tokenRepository;
        }

        [HttpPost]
        public ActionResult<LoginInfo> Login([FromBody] LoginUserVM loginUserVM)
        {

            User? user = _userRepository.GetUserByEmailAndPassword(loginUserVM.Email, loginUserVM.Password);
            if (user == null)
            {
                return new LoginInfo(null);      

            }
        
            string tokenValue = TokenGenerator.Generate(10);     
           
            var newToken = new Token()
            {
                IpAddress = Request.HttpContext.Connection.RemoteIpAddress?.ToString(),
                Value = tokenValue,
                User = user,
                Time = DateTime.Now
            };

                _tokenRepository.Create(newToken);
                _tokenRepository.SaveChanges();

            return new LoginInfo(newToken);

        }
    }
}
