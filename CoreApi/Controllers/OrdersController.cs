using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShoesStoreProject.Model;
using Stripe;

namespace ShoesStoreProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly AppDbContext _context;
        public OrdersController(AppDbContext context)
        {
            _context = context;
        }

        [Route("Getallorder")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Orders>>> Getallorder()
        {
            try
            {
                var products = await _context.orders.ToListAsync();

                if (products == null || products.Count == 0)
                {
                    return NotFound("No products found.");
                }

                return Ok(products);
            }
            catch (Exception ex)
            {
                // Log or handle the exception
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }
        [Route("Getall")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Orders>>> Getall(string  UserId)
        {
            try
            {
                var user = await _context.users.FirstOrDefaultAsync(s => s.Email.ToLower() == UserId.ToString().ToLower());


                var loginUserIdentity = user.Id;

                var userOrders = await _context.orders
                    .Where(order => order.UserId == loginUserIdentity)
                    .ToListAsync();

                if (userOrders == null || userOrders.Count == 0)
                {
                    return NotFound("No orders found for the logged-in user.");
                }

                return Ok(userOrders);
            }
            catch (Exception ex)
            {
                // Log or handle the exception
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        [HttpGet("getorderdetails/{orderId}")]
        public async Task<IActionResult> GetOrderDetails(int orderId)
        {
            try
            {
                var order = await _context.orders
             .Include(o => o.BillingAddress)
               .Where(o => o.BillingAddress != null)
             .FirstOrDefaultAsync(o => o.Id == orderId);
                if (order == null)
                {
                    return NotFound();
                }

                var orderItems = await _context.orderItems
                    .Where(oi => oi.OrderId == orderId)
                    .Include(oi => oi.Product)
                    .ToListAsync();

                var orderDetails = new
                {
                    Order = order,
                    OrderItems = orderItems
                };

                return Ok(orderDetails);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
