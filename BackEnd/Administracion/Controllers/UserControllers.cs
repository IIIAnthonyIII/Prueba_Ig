using CapaModelo;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Newtonsoft.Json;

namespace Administracion.Controllers
{
    [Route("api")]
    [ApiController]
    public class UserControllers : ControllerBase
    {
        private PruebaContext _context;

        public UserControllers (PruebaContext context)
        {
            _context = context;
        }
        [HttpGet("users")]
        public IEnumerable<User> GetUsers ()
        {
            try
            {
                //return _context.Users.ToList();
                return _context.Users.Include(u => u.Cargo)
                                      .Include(u => u.Departamento)
                                      .ToList();
            } catch (Exception ex)
            {
                return Enumerable.Empty<User>();
            }
        }

        [HttpGet("user/{id}")]
        public ActionResult<User> GetUser (int id)
        {
            try
            {
                var user = _context.Users.Find(id);
                if (user == null)
                {
                    return NotFound();
                }
                return user;
            } catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpPost("user")]
        public ActionResult<User> CreateUser ([FromBody] User newUser)
        {
            try
            {
                //newUser.Departamento = null;
                //newUser.Cargo = null;
                _context.Users.Add(newUser);
                _context.SaveChanges();
                return CreatedAtAction(nameof(GetUser), new { id = newUser.Id }, newUser);
            } catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.InnerException}");
            }
        }

        [HttpPut("user/{id}")]
        public IActionResult UpdateUser (int id, [FromBody] User userUpdate)
        {
            try
            {
                if (id != userUpdate.Id)
                {
                    return BadRequest();
                }
                _context.Entry(userUpdate).State = EntityState.Modified;
                _context.SaveChanges();
                return NoContent();
            } catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpDelete("user/{id}")]
        public IActionResult DeleteUser (int id)
        {
            try
            {
                var user = _context.Users.Find(id);
                if (user == null)
                {
                    return NotFound();
                }
                _context.Users.Remove(user);
                _context.SaveChanges();
                return NoContent();
            } catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        //[HttpGet("user/departcargo/{idd}/{idc}")]
        //public ActionResult<User> GetUserDepartamento (int idd, int idc)
        //{
        //    try
        //    {
        //        var users;
        //        if (idd != 0 && idc != 0) { 
        //            return users = _context.Users
        //                    .Where(u => u.DepartamentoId == idd && u.CargoId == idc)
        //                    .ToList();
        //        }
        //        if (idd != 0 && idc == 0)
        //        {
        //            return users = _context.Users
        //                    .Where(u => u.DepartamentoId == idd)
        //                    .ToList();
        //        }
        //        if (idd == 0 && idc != 0)
        //        {
        //            return users = _context.Users
        //                    .Where(u => u.DepartamentoId == idc)
        //                    .ToList();
        //        }

        //        if (users == null)
        //        {
        //            return NotFound();
        //        }
                
        //    } catch (Exception ex)
        //    {
        //        return StatusCode(500, $"Error interno del servidor: {ex.Message}");
        //    }
        //}
    }
}
