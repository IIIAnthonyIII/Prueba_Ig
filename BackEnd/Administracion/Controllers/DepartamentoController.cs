using CapaModelo;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Administracion.Controllers
{
    [Route("api")]
    [ApiController]
    public class DepartamentoController : ControllerBase
    {
        private PruebaContext _context;
        public DepartamentoController (PruebaContext context)
        {
            _context = context;
        }
        [HttpGet("departamento")]
        public IEnumerable<Departamento> Get () => _context.Departamentos.ToList();
    }
}
