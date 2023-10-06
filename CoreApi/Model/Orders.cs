using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShoesStoreProject.Model
{
    [Table(name: "Orders", Schema = "dbo")]
    public class Orders
    {
        [Key]
        public int Id { get; set; }
        // public List<string>? url { get; set; }
        public int? UserId { get; set; }
        public DateTime? OrderDate { get; set; }
        public string TransactionID { get; set; }
        public decimal? Total { get; set; }
        public string Currency { get; set; }

        public int? BillingId { get; set; }
        [ForeignKey("BillingId")]
        public BillingAddress? BillingAddress { get; set; }// Foreign key 
    }
}
