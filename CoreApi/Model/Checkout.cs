using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ShoesStoreProject.Model
{
    // [Table(name: "Checkout", Schema = "dbo")]
    //public class Checkout
    //{
    //    [Key]
    //    public int cid { get; set; }
    //    public string fullname { get; set; }
    //    public string email { get; set; }
    //    public string address { get; set; }
    //    public string city { get; set; }
    //    public string state { get; set; }
    //    public string zip { get; set; }
    //    public string card { get; set; }
    //    public string cardnumber { get; set; }
    //    public string expmonth { get; set; }
    //    public string expyear { get; set; }
    //    public string cvv { get; set; }
    //}

    public class CartDataa
    {
        public List<cartData> items { get; set; }

        public decimal sum;
    }
    public class cartData
    {

        public int pid { get; set; }
        public string category { get; set; }
        public string disciption { get; set; }
        public string name { get; set; }
        public string price { get; set; }
        public int quantity { get; set; }
        public string seller { get; set; }
        public List<Image>? images { get; set; }
    }
}
