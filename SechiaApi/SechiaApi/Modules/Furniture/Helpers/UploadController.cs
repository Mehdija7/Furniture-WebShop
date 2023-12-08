using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SechiaApi.Modules.Furniture.Repos;
using System.Net.Http.Headers;

namespace SechiaApi.Modules.Furniture.Helpers
{

    [ApiController]
    [Route("upload")]
    public class UploadController : ControllerBase
    {
        private readonly IProductRepository _productRepository;

        public UploadController(IProductRepository productRepository)
        {
            _productRepository = productRepository;

        }

        [HttpPost, DisableRequestSizeLimit]
        public async Task<IActionResult> Upload()
        {
            try
            {
                var formCollection = await Request.ReadFormAsync();
                var file = formCollection.Files.First();
                var folderName = Path.Combine("Resources", "Images");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(folderName, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    return Ok(new { dbPath });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }



    }
}
