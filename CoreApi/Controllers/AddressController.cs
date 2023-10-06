using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShoesStoreProject.Model;

namespace ShoesStoreProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressController : ControllerBase
    {
        private readonly AppDbContext _context;
        public AddressController(AppDbContext context)
        {
            _context = context;
        }


        [Route("Getall")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Address>>> Getall(int id)
        {
            try
            {
                var addresses = await _context.addresses
                    .Where(address => address.UserId == id) // Filter by userId
                    .ToListAsync();

                if (addresses == null || addresses.Count == 0)
                {
                    return NotFound("No addresses found for the specified user.");
                }

                return Ok(addresses);
            }
            catch (Exception ex)
            {
                // Log or handle the exception
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        [HttpPost("AddAddress")]
        public async Task<IActionResult> AddAddressAsync([FromBody] AddressUpdateRequest billing)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var user = await _context.users.FirstOrDefaultAsync(s => s.Email.ToLower() == billing.UserId.ToString().ToLower());
                    if (user == null)
                    {
                        // Handle the case where the user does not exist.
                        return NotFound("User not found.");
                    }
                    var address = new Address
                    {
                       
                        StreetAddress = billing.StreetAddress,
                        Country = billing.Country,
                        City = billing.City,
                        State = billing.State,
                        zipcode = billing.zipcode,
                        UserId = user.Id

                    };
                    _context.addresses.Add(address);
                    _context.SaveChanges();

                    return Ok("Address added successfully.");
                }
                catch (Exception ex)
                {
                    Console.Write(ex.ToString());
                    return BadRequest(ex.ToString());
                }
            }

            return BadRequest("Invalid model state.");
        }

    }        
}
