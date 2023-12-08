using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SechiaApi.Modules.Furniture.Helpers;
using SechiaApi.Modules.Furniture.Models;
using SechiaApi.Modules.Furniture.Repos;

namespace SechiaApi.Modules.Furniture.Controllers
{
    
    [ApiController]
    [Route("rooms")]
    public class RoomController : ControllerBase
    {
        private readonly IRoomRepository _roomRepository;

        public RoomController(IRoomRepository roomRepository)
        {
            _roomRepository = roomRepository;

        }

        [HttpGet]
        public List<ClassForCmb> GetRoomsForCmb()
        {
           var list=new List<ClassForCmb>();
            foreach (var room in _roomRepository.GetAll().ToList())
            {
                list.Add(new ClassForCmb
                {
                    Id = room.Id,
                    Name = room.Name
                }
                );
            }
            return list;    

        }

        [HttpPost]
        public ActionResult AddRoom([FromBody] string name)
        {
            var room = new Room() { Name = name };
            _roomRepository.Create(room);
            _roomRepository.SaveChanges();
            return Ok();
        }

        [HttpPost]
        [Route("generate")]

        public ActionResult Generate()
        {
            var rooms = new List<Room>()
            {
              new Room() { Name ="Dnevni boravak"},
              new Room() { Name ="Kuhinja"},
              new Room() { Name ="Hodnik"},
              new Room() { Name ="Spavaća soba"},
              new Room() { Name="Radna soba"}  
            };

            foreach (var room in rooms)
            {
                _roomRepository.Create(room);
            }
            _roomRepository.SaveChanges();

            return Ok();
        }
    }
}
