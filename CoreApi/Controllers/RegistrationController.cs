using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShoesStoreProject.Model;

namespace ShoesStoreProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly AppDbContext _context;
        public RegistrationController(AppDbContext context)
        {
            _context = context;
        }
        [HttpPost("registration")]
        public IActionResult registration([FromBody] User user)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _context.users.Add(user);
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

        [HttpPost("login")]
        public IActionResult login([FromBody] Login login)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    // Hash the provided password
                   

                    // Check if a user with the provided email and hashed password exists
                    var user = _context.users.FirstOrDefault(u => u.Email == login.Email && u.Password == login.Password);

                    if (user != null)
                    {
                        // Successful login
                      // return Ok("valid User");
                        return StatusCode(StatusCodes.Status200OK, user);
                    }
                    else
                    {
                        // Login failed
                        return BadRequest("invalid user");
                    }
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
