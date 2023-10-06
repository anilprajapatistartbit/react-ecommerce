using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using ShoesStoreProject.Model;

namespace ShoesStoreProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BillingAddressController : ControllerBase

    {
        private readonly AppDbContext _context;
        public BillingAddressController(AppDbContext context)
        {
            _context = context;
        }

        //private IShoeslist members = new ShoesRepository();

        [HttpPost("AddBilling")]
        public async Task<IActionResult> AddBilling(BillingAddress billing)
        {
            if (ModelState.IsValid)
            {
                try
                {
                   var x = await _context.billingAddresses.AddAsync(billing);
                   var y= await  _context.SaveChangesAsync();

                    return Ok(x.Entity.cid);
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
