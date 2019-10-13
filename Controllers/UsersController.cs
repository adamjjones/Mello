using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mello.Models;
using Microsoft.AspNetCore.Authorization;

namespace mello.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize]
  public class UsersController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public UsersController()
    {
      _context = new DatabaseContext();
    }

    // GET: api/Users
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Users>>> GetUsers()
    {
      return await _context.Users.ToListAsync();
    }

    // GET: api/Users/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Users>> GetUsers(int id)
    {
      var users = await _context.Users.FindAsync(id);

      if (users == null)
      {
        return NotFound();
      }

      return users;
    }

    // PUT: api/Users/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutUsers(int id, Users users)
    {
      if (id != users.Id)
      {
        return BadRequest();
      }

      _context.Entry(users).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!UsersExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    [HttpGet("check")]
    public async Task<ActionResult> CheckIfUserExists()
    {

      var token = User.Claims.First(f => f.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Value;
      var exists = await _context.Users.AnyAsync(a => a.AccessToken == token);

      return Ok(new { exists });
    }

    // POST: api/Users
    [HttpPost]
    public async Task<ActionResult<Users>> PostUsers()
    {
      var token = User.Claims.First(f => f.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Value;
      var user = new Users
      {
        AccessToken = token
      };
      _context.Users.Add(user);
      await _context.SaveChangesAsync();

      return user;
    }

    // DELETE: api/Users/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Users>> DeleteUsers(int id)
    {
      var users = await _context.Users.FindAsync(id);
      if (users == null)
      {
        return NotFound();
      }

      _context.Users.Remove(users);
      await _context.SaveChangesAsync();

      return users;
    }

    private bool UsersExists(int id)
    {
      return _context.Users.Any(e => e.Id == id);
    }
  }
}