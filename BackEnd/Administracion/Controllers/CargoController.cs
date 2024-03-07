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
        [HttpGet("cargo/{id}")]
        public ActionResult<Cargo> GetCargo (int id)
        {
            try
            {
                var cargo = _context.Cargos.Find(id);
                if (cargo == null)
                {
                    return NotFound();
                }
                return cargo;
            } catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }
    }
}
