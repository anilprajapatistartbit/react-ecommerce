namespace ShoesStoreProject.Model
{
    public class OrderDTO
    {
        public string UserId { get; set; }
        public int? BillingId { get; set; }
        public List<Product> Items { get; set; }
    }
}
