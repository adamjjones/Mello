using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mello.Models;
using mello;

namespace mello.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CardsController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public CardsController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Cards
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Cards>>> GetCards()
    {
      return await _context.Cards.ToListAsync();
    }

    // GET: api/Cards/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Cards>> GetCards(int id)
    {
      var cards = await _context.Cards.FindAsync(id);

      if (cards == null)
      {
        return NotFound();
      }

      return cards;
    }

    // PUT: api/Cards/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutCards(int id, Cards cards)
    {
      if (id != cards.Id)
      {
        return BadRequest();
      }

      _context.Entry(cards).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!CardsExists(id))
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

    // POST: api/Cards
    [HttpPost]
    public async Task<ActionResult<Cards>> PostCards(Cards cards)
    {
      _context.Cards.Add(cards);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetCards", new { id = cards.Id }, cards);
    }

    // [HttpDelete]
    // public async Task<ActionResult<Cards>> DeleteAllCards(Cards cards)
    // {
    //   var rows = from o in _context.Cards
    //              select o;
    //   foreach (var row in rows)
    //   {
    //     _context.Cards.Remove(row);
    //   }
    //   _context.SaveChanges();
    //   return cards;
    // }

    // DELETE: api/Cards/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Cards>> DeleteCards(int id)
    {
      var cards = await _context.Cards.FindAsync(id);
      if (cards == null)
      {
        return NotFound();
      }

      _context.Cards.Remove(cards);
      await _context.SaveChangesAsync();

      return cards;
    }

    //PATCH: api/Cards/id/property
    [HttpPatch("{id}/{q}")]
    public ActionResult<Cards> Patch([FromRoute] int id, [FromRoute] string q, [FromBody] string value)
    {
        Console.WriteLine("trying to retrieve card " + id);
       //  var card = _context.Cards.FirstOrDefault(f => f.Id == id);
        var card = _context.Cards.Find(id);
        // Console.WriteLine("retrieved card " + card.ToString());
        Console.WriteLine("q=" + q);
        if (q == "name") {
            card.Name = value;
            Console.WriteLine("updated card name with " + value);
        }
        _context.SaveChanges();
        return card;
    }

    private bool CardsExists(int id)
    {
      return _context.Cards.Any(e => e.Id == id);
    }
  }
}
