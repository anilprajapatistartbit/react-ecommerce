using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShoesStoreProject.Model
{
    [Table(name: "BillingAddress", Schema = "dbo")]
    public class BillingAddress
    {
        [Key]
        public int cid { get; set; }
        public string fullname { get; set; }
        public string email { get; set; }
        public string address { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string zip { get; set; }
        public string country { get; set; }
       
    }
    public class BillingRequest
    {
        public int cid { get; set; }
        public string fullname { get; set; }
        public string email { get; set; }
         public int selectedAddress { get; set; }
    }
    public class selectedAddress

    {

        public string? address { get; set; }
        public string? city { get; set; }
        public string? state { get; set; }
        public string? zip { get; set; }
        public string? country { get; set; }
    }
}
