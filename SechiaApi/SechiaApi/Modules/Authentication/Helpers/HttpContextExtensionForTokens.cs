using SechiaApi.Data;
using SechiaApi.Modules.Authentication.Models;
using System.Text.Json.Serialization;

namespace SechiaApi.Modules.Authentication.Helpers
{
    public static partial class HttpContextExtensionForTokens
    {
        public static LoginInfo GetLoginInfo(this HttpContext httpContext)
        {
            return new LoginInfo(httpContext.GetTokenFromDb());
        }
        public static Token? GetTokenFromDb(this HttpContext httpContext)
        {
            string requestToken = httpContext.GetTokenFromRequest();
            AppDbContext db = httpContext.RequestServices.GetService<AppDbContext>();

            Token? token = db.Tokens.SingleOrDefault(t => t.Value == requestToken);

            return token;
        }
        public static string GetTokenFromRequest(this HttpContext httpContext)
        {
            string token = httpContext.Request.Headers["authentification-token"];
            return token;
        }
    }
}
