using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Newtonsoft.Json;
using ShoesStoreProject.Model;
using Stripe.Checkout;
using Stripe;
using Microsoft.EntityFrameworkCore;

namespace ShoesStoreProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly SessionService sessionService;
        private readonly IConfiguration _configuration;
        public PaymentController(SessionService sessionService, IConfiguration configuration, AppDbContext context)
        {
            this.sessionService = sessionService;
            _configuration = configuration;
            _context = context;

        }
        [HttpPost("Payment")]
        public async Task<IActionResult> CreateSession([FromBody] CartDataa cartData)
        {


            try
            {
                var lineItemsForStripe = cartData.items.Select(lineItem => new SessionLineItemOptions
                {
                    PriceData = new SessionLineItemPriceDataOptions
                    {
                        Currency = "INR",
                        ProductData = new SessionLineItemPriceDataProductDataOptions
                        {
                            Name = lineItem.name
                        },
                        UnitAmount = (long)(decimal.Parse(lineItem.price) * 100) // Convert to cents
                    },
                    Quantity = lineItem.quantity
                }).ToList();
                var totalAmount = (long)(cartData.sum * 100); // Convert to cents
                var options = new SessionCreateOptions
                {
                    PaymentMethodTypes = new List<string> { "card" },
                    LineItems = lineItemsForStripe,
                    Mode = "payment",
                    SuccessUrl = "http://localhost:3000/Success?session_id={CHECKOUT_SESSION_ID}", // Replace with your actual success URL
                    CancelUrl = "http://localhost:3000/Cancel"  // Replace with your actual cancel URL
                };

                var session = await sessionService.CreateAsync(options);




                return Ok(JsonConvert.SerializeObject(session.Url));

            }

            catch (Exception ex)
            {
                Console.Write(ex.ToString());
                return BadRequest(ex.ToString());
            }

        }

        [HttpPost("success/{sessionId}")]
        public async Task<IActionResult> Success(string sessionId, [FromBody] OrderDTO orderData)
        {
            try
            {
                // Retrieve the Stripe session
                var sessionService = new SessionService();
                var session = await sessionService.GetAsync(sessionId);
                var transactionId = session.PaymentIntentId;
                var billingid = orderData.BillingId;

                //var LineItems = session.LineItems;

                //foreach (var pro in LineItems)
                //{
                //    var q = pro.Quantity;
                //}





                    var total = session.AmountTotal / 100;
                var user = await _context.users.FirstOrDefaultAsync(s=>s.Email.ToLower()==orderData.UserId.ToLower());
                var order = new Orders
                {
                    UserId = user.Id,
                    BillingId = billingid,
                    OrderDate = DateTime.UtcNow,
                    Currency = "INR",
                    Total = total,
                    TransactionID = transactionId,
                    

                };
         
                // Save the order to your database (replace with actual code)
                await _context.orders.AddAsync(order);
                await _context.SaveChangesAsync();


                foreach (var pro in orderData.Items)
                {
                    var orderItem = new OrderItem
                    {
                        OrderId = order.Id,
                        ProductId = pro.pid,
                        Quantity =  pro.quantity.ToString(),
                        Price =pro.price,

                    };

                    // Save the order item to the database
                   await _context.orderItems.AddAsync(orderItem);
                }

                await _context.SaveChangesAsync();

                // Create a custom object that combines order details and order items
                var orderDetails = new
                {
                   Order = order,
                    OrderItems = orderData.Items
                };

                // Serialize the custom object to JSON
                var jsonData = JsonConvert.SerializeObject(orderDetails);

                // Return the JSON data in your response
                return Ok(jsonData);
            }
            catch (Exception ex)
            {
                // Handle exceptions
              
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

}
}
