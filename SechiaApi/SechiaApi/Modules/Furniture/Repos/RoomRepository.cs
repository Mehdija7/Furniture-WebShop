using SechiaApi.Data;
using SechiaApi.Data.Repository;
using SechiaApi.Modules.Furniture.Models;

namespace SechiaApi.Modules.Furniture.Repos
{
    public class RoomRepository : BaseRepository<Room>, IRoomRepository
    {
        public RoomRepository(AppDbContext context) : base(context)
        {
        }
    }
}
