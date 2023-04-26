using Data.Access;
using Data.Model;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using Villa_Apartments.Hubs;

namespace VillaDataAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VillaApiController : ControllerBase
    {
        private readonly VillaDbContext _db;
        public IHubContext<NotificationHub,INotificationHub> _hubContext { get; }

        public VillaApiController(VillaDbContext db, IHubContext<NotificationHub, INotificationHub> hubContext)
        {
            _db = db;
            _hubContext = hubContext;

        }
        [HttpGet("getall")]   //route would be api/VillaApi
        public async Task<IActionResult> GetAll()
        {
            var ob=await _db.Villas.ToListAsync();
            return Ok(ob);
        }
        [HttpGet("{id:int}")] //route would be api/VillaApi/id
        public ActionResult<Villa> GetById(int id) {
            if (id == 0)
            {
                return BadRequest();
            }
            var obj=_db.Villas.Find(id);
            if (obj == null)
            {
                return NotFound();
            }
            return obj;
        }
        [HttpPost]   //route would be api/VillaApi -->body should contain Villa obj in JSON format
        public async Task<IActionResult> Post([FromBody] Villa obj)
        {
            if (obj == null)
            {
                return BadRequest();
            }
            else
            {
                await _db.Villas.AddAsync(obj);
                _db.SaveChanges();
                return Ok(obj);
            }
        }
        [HttpGet]
        public async Task<IActionResult> StartLongRunningProcess()
        {
            // Start the long-running process on a separate thread
            await Task.Run(() => LongRunningProcess());

            return Ok();
        }

        private void LongRunningProcess()
        {
            // Simulate a long-running process using Thread.Sleep
            Thread.Sleep(50000);
            _hubContext.Clients.All.SendNotification("Booking confirmed");
        }

        [HttpPut("UpdateData")] //route would be api/VillaApi/UpdateData
        public IActionResult Put([FromBody] Villa obj)
        {
            if (obj == null)
                return BadRequest();
            else
            {
                _db.Villas.Update(obj);
                _db.SaveChanges();
                return Ok(obj);
            }
        }

        [HttpDelete("Delete/{id:int}")] //route would be api/VillaApi/Delete/id
        public IActionResult Delete(int id)
        {
            if (id == 0 || _db.Villas.Find(id) == null)
                return BadRequest();
            else
            {
                _db.Villas.Remove(_db.Villas.Find(id));
                _db.SaveChanges();
                return Ok(id);
            }
        }

    }
}
