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
  public class BoardsController : ControllerBase
  {
    private readonly DatabaseContext context;

    public BoardsController(DatabaseContext context)
    {
      this.context = context;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Boards>> GetAllResults()
    {
      var Allresults = context.Boards.Include(i => i.Cards).OrderByDescending(results => results.Id);
      return Allresults.ToList();
    }

    // GET api/values/5
    [HttpGet("{id}")]
    public ActionResult GetOneEntry(int id)
    {
      var OneResult = context.Boards.FirstOrDefault(r => r.Id == id);
      if (OneResult == null)
      {
        return NotFound();
      }
      else
      {
        return Ok(OneResult);
      }
    }

    // GET api/values/5/cards
    [HttpGet("{id}/cards")]
    public ActionResult GetBoardCards(int id)
    {
      var cards = context.Cards.Where(r => r.BoardsId == id);

      return Ok(cards);

    }

    // POST api/values
    [HttpPost]
    public ActionResult<Boards> InsertData([FromBody]Boards insertion)
    {
      context.Boards.Add(insertion);
      context.SaveChanges();
      return insertion;
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public ActionResult<Boards> Update(int id, [FromBody]Boards newDetails)
    {
      context.Entry(newDetails).State = EntityState.Modified;
      context.SaveChanges();
      return newDetails;
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public ActionResult<Boards> DeleteEntry(int id)
    {
      var DeleteResult = context.Boards.FirstOrDefault(r => r.Id == id);
      context.Boards.Remove(DeleteResult);
      context.SaveChanges();
      return Ok();
    }
  }
}