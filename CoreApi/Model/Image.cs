using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShoesStoreProject.Model
{
    [Table(name: "Image", Schema = "dbo")]
    public class Image
    {
        [Key]
        public int Id { get; set; }
        public string Url { get; set; }
        public int ProductId { get; set; }

       // [ForeignKey("ProductId")]
       // public Product? Product { get; set; }// Foreign key to product
    }
}
