using CapaModelo;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Administracion.Controllers
{
    [Route("api")]
    [ApiController]
    public class CargoController : ControllerBase
    {
        private PruebaContext _context;
        public CargoController (PruebaContext context)
        {
            _context = context;
        }
        [HttpGet("cargo")]
        public IEnumerable<Cargo> Get() => _context.Cargos.ToList();
    }
}
