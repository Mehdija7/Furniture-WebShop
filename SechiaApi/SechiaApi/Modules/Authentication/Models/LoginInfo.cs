using System.Text.Json.Serialization;

namespace SechiaApi.Modules.Authentication.Models
{
    public class LoginInfo
    {
        public LoginInfo(Token? token)
        {
            this.token = token;
        }

        [JsonIgnore]
        public User? user => token?.User;
        public Token? token { get; set; }
        public bool isLoggedIn => user != null;

    }  
}
