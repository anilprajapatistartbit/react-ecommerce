using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShoesStoreProject.Model
{
    [Table(name:"Newsletter", Schema = "dbo")]
    public class Newsletter
    {
        [Key]
        public int Id { get; set; }
        public string Email { get; set; }
    }
}
