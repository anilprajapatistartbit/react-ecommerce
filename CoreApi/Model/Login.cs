using System.ComponentModel.DataAnnotations;

namespace ShoesStoreProject.Model
{
    public class Login
    {
        [Key]
        public int id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
