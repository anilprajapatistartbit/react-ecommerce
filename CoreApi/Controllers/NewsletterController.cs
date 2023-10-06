using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShoesStoreProject.Model;

namespace ShoesStoreProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsletterController : ControllerBase
    {
        private readonly AppDbContext _context;
        public NewsletterController(AppDbContext context)
        {
            _context = context;
        }  

        [HttpPost("AddNewsletter")]
        public IActionResult AddNewsletter([FromBody] Newsletter newsletter)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    // Check if the email already exists in the database
                    var existingEmail = _context.newsletters.FirstOrDefault(n => n.Email == newsletter.Email);

                    if (existingEmail != null)
                    {
                        return BadRequest("Email already exists in the database.");
                    }

                    _context.newsletters.Add(newsletter);
                    _context.SaveChanges();

                    return Ok("Data inserted");
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
