using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShoesStoreProject.Model
{
    [Table(name: "Product", Schema = "dbo")]
    public class Product
    {
        [Key]
        public int pid { get; set; }   
        public string name { get; set; }
        public string category { get; set; }
        public string seller { get; set; }
        public string price { get; set; }
        public int? quantity { get; set; }
        public string? disciption { get; set; }
        //public List<Image> Images { get; set; }
    }


    //public class ProductDto
    //{
    //    public string name { get; set; }
    //    public string category { get; set; }
    //    public string seller { get; set; }
    //    public string price { get; set; }
    //    public int? quantity { get; set; }
    //    public string? disciption { get; set; }
    //   public List<Image> Images { get; set; }


    //}
    public class ResponseProduct
    {
        public Product product { get; set; }
        public IEnumerable<Image> Images { get; set; }
    }


}
