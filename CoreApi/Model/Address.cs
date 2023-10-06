using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShoesStoreProject.Model
{
    [Table(name: "Address", Schema = "dbo")]
    public class Address
    {
        [Key]
        public int Id { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string StreetAddress { get; set; }
        public string zipcode { get; set; }
        public int? UserId { get; set; }
        [ForeignKey("UserId")]
        public User? User { get; set; }// Foreign key to product

    }

    public class AddressUpdateRequest
    {
        public string Country { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string StreetAddress { get; set; }
        public string zipcode { get; set; }
        public string UserId { get; set; }
    }
}
