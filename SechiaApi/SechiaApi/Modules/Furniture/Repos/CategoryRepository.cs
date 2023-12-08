using SechiaApi.Data;
using SechiaApi.Data.Repository;
using SechiaApi.Modules.Furniture.Models;

namespace SechiaApi.Modules.Furniture.Repos
{
    public class CategoryRepository : BaseRepository<Category>, ICategoryRepository
    {
        public CategoryRepository(AppDbContext context) : base(context)
        {
        }
    }
}
