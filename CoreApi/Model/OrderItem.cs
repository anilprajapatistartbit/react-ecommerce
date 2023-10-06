using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShoesStoreProject.Model
{
    [Table(name: "OrderItem", Schema = "dbo")]
    public class OrderItem
    {
        [Key]
        public int Id { get; set; }
        public string? Quantity { get; set; } = null;
        public string? Price { get; set; }
        public int OrderId { get; set; }
        [ForeignKey("OrderId")]
        public Orders? Orders { get; set; }// Foreign key to product
        public int ProductId { get; set; }
        [ForeignKey("ProductId")]
        public Product? Product { get; set; }// Foreign key to product

    }
}
