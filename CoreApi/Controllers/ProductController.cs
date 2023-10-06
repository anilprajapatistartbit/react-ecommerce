using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShoesStoreProject.Model;
using Stripe;
using System.Collections;
using System.Security.Policy;

namespace ShoesStoreProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly AppDbContext _context;
        public ProductController(AppDbContext context)
        {
            _context = context;
        }

    [Route("Getall")]
    [HttpGet]
    public async Task<IActionResult> Getall()
    {   
            try
            {
                var products = await _context.products.ToListAsync();
                var Images = await _context.images.ToListAsync();
                List<ResponseProduct> productsResponse = new();   
                foreach (var product in products)
                {
                    var images = Images.Where(s => s.ProductId == product.pid);
                    productsResponse.Add(new() { Images = images ,product = product});

                }

                if (products == null || products.Count == 0)
                {
                    return NotFound("No products found.");
                }

                return StatusCode(StatusCodes.Status200OK, productsResponse);
            }
            catch (Exception ex)
            {
                // Log or handle the exception
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
     }
        [Route("GetLastFive")]
        [HttpGet]
        public async Task<IActionResult> GetLastFiveProducts()
        {
            try
            {
                // Order products by a suitable criterion (e.g., product ID) in descending order
                var products = await _context.products
                    .OrderByDescending(p => p.pid)
                    .Take(9)
                    .ToListAsync();

                var Images = await _context.images.ToListAsync();
                List<ResponseProduct> productsResponse = new List<ResponseProduct>();

                foreach (var product in products)
                {
                    var images = Images.Where(s => s.ProductId == product.pid);
                    productsResponse.Add(new ResponseProduct { Images = images.ToList(), product = product });
                }

                if (products == null || products.Count == 0)
                {
                    return NotFound("No products found.");
                }

                return StatusCode(StatusCodes.Status200OK, productsResponse);
            }
            catch (Exception ex)
            {
                // Log or handle the exception
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }


        //[HttpGet("{id}")]
        //public async Task<ActionResult<Product>> GetFood(int id)
        //{
        //    var food = await _context.products.Include(f => f.Images).FirstOrDefaultAsync(f => f.pid == id);

        //    if (food == null)
        //    {
        //        return NotFound();
        //    }

        //    return food;
        //}

        //[HttpPost]
        //public async Task<ActionResult<Product>> AddFoodWithImages(Product product)
        //{
        //    try
        //    {
        //        _context.products.Add(product);

        //        foreach (var image in product.Images)
        //        {
        //            _context.images.Add((Image)image);
        //        }

        //        await _context.SaveChangesAsync();

        //        return CreatedAtAction(nameof(GetFood), new { id = product.pid }, product);
        //    }
        //    catch (Exception ex)
        //    {
        //        Console.WriteLine("Outer Exception: " + ex.Message);
        //        if (ex.InnerException != null)
        //        {
        //            Console.WriteLine("Inner Exception: " + ex.InnerException.Message);
        //        }
        //        return StatusCode(500, ex.Message);

        //    }
        //}
        [HttpPost]
        public async Task<IActionResult> AddProduct([FromForm] Model.Product product, List<IFormFile> images)
        {
            // Save the product data to the database
            _context.products.Add(product);
            await _context.SaveChangesAsync();

            // Handle image uploads and save them to the Images table
            foreach (var imageFile in images)
            {
                var image = new Image
                {
                    Url = imageFile.FileName,
                    ProductId = product.pid, // Link the image to the product
                };

                // Save the image to the Images table
                _context.images.Add(image);

                // Save the image file to a storage location or cloud storage
                // You can use libraries like System.IO or a cloud storage SDK
                // Example for saving locally:
                var imagePath = Path.Combine("D:\\github\\react-ecommerce\\src\\assets\\images", imageFile.FileName);
                using (var stream = new FileStream(imagePath, FileMode.Create))
                {
                    await imageFile.CopyToAsync(stream);
                }
            }

            await _context.SaveChangesAsync();

            return Ok(product); // Return a success response
        }


        [Route("DeleteProduct/{id}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.products.FindAsync(id);

            if (product == null)
            {
                return NotFound("Product not found.");
            }

            // Delete associated images first
            var images = await _context.images.Where(i => i.ProductId == id).ToListAsync();
            _context.images.RemoveRange(images);

            // Then delete the product
            _context.products.Remove(product);

            try
            {
                await _context.SaveChangesAsync();
                return Ok("Product and associated images deleted successfully.");
            }
            catch (DbUpdateException ex)
            {
                // Log the exception and handle it appropriately
                return StatusCode(500, "An error occurred while deleting the product. Details: " + ex.InnerException?.Message);
            }
        }


        //[HttpGet("{id}")]
        //public async Task<IActionResult> EditProduct(int id)
        //{
        //    var product = await _context.products.FindAsync(id);

        //    if (product == null)
        //    {
        //        return NotFound("Product not found.");
        //    }

        //    return Ok(product);
        //}
        [Route("EditProduct/{pid}")]
        [HttpGet]
        public async Task<IActionResult> EditProduct(int pid)
        {
            var product = await _context.products.FirstOrDefaultAsync(p => p.pid == pid);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }


        [Route("UpdateProduct/{id}")]
        [HttpPut]
        public async Task<IActionResult> UpdateProduct(int id, Model.Product updatedProduct)
        {
            if (id != updatedProduct.pid)
            {
                return BadRequest("Product ID in the request does not match the route.");
            }

            var existingProduct = await _context.products.FindAsync(id);

            if (existingProduct == null)
            {
                return NotFound("Product not found.");
            }

            existingProduct.name = updatedProduct.name;
            existingProduct.category = updatedProduct.category;
            existingProduct.seller = updatedProduct.seller;
            existingProduct.price = updatedProduct.price;
            existingProduct.quantity = updatedProduct.quantity;
            existingProduct.disciption = updatedProduct.disciption;

            try
            {
                await _context.SaveChangesAsync();
                return Ok("Product updated successfully.");
            }
            catch (DbUpdateConcurrencyException)
            {
                return Conflict("Concurrency error: The product was modified by another user.");
            }
            catch (DbUpdateException ex)
            {
                // Log the exception and handle it appropriately
                return StatusCode(500, "An error occurred while updating the product. Details: " + ex.InnerException?.Message);
            }
        }
















        //        [HttpPost("upload")]
        //        public async Task<IActionResult> UploadImage()
        //        {
        //            try
        //            {

        //                List<string> strings = new List<string>();
        //                for (var i = 0; i < Request.Form.Files.Count; i++)
        //                {
        //                    var file = Request.Form.Files[i];
        //                    var uploadsFolder = Path.Combine("E:\\git\\angular-ecommerce\\src", "assets");
        //                    var uniqueFileName = Guid.NewGuid().ToString() + "_" + file.FileName;
        //                    var filePath = Path.Combine(uploadsFolder, uniqueFileName);

        //                    strings.Add(uniqueFileName);
        //                    using (var stream = new FileStream(filePath, FileMode.Create))
        //                    {
        //                        await file.CopyToAsync(stream)
        //;
        //                    }
        //                }
        //                return Ok(strings);
        //            }
        //            catch (Exception ex)
        //            {
        //                Console.Write(ex.ToString());
        //                return Ok(null);
        //            }
        //        }
        //        [HttpPost("AddProduct")]
        //        public async Task<IActionResult> AddProduct(AddProductViewModel model)
        //        {
        //            try
        //            {

        //                Food food = new Food();
        //                food.Description = model.Description;
        //                food.Price = model.Price;
        //                food.Name = model.Name;
        //                food.Type = model.Type;
        //                food.Quantity = model.Quantity;
        //                var result = await _context.Foods.AddAsync(food);
        //                await _context.SaveChangesAsync();
        //                var exist = _context.Foods.Where(x => x.Name == model.Name && x.Price == model.Price).FirstOrDefault();
        //                foreach (var item in model.ImageUrl)
        //                {
        //                    ImageUrls imageUrls = new ImageUrls();
        //                    imageUrls.Url = "./assets/" + item;
        //                    imageUrls.FoodId = exist.Id;

        //                    await _context.ImageUrls.AddAsync(imageUrls);
        //                    await _context.SaveChangesAsync();
        //                }
        //                return Ok(model);
        //            }
        //            catch (Exception ex)
        //            {
        //                Console.WriteLine(ex.ToString());
        //                return null;
        //            }
        //        }

    }
}
