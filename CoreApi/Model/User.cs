using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShoesStoreProject.Model
{
    [Table(name: "Users", Schema = "dbo")]
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Usename { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public int IsActive { get; set; }
    }
}
