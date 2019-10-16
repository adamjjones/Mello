using System;
using System.Linq;
using System.Collections.Generic;

namespace Mello.Models
{
  public class Boards
  {
    public string UserId { get; set; }
    public int Id { get; set; }
    public string Name { get; set; }
    public string Category { get; set; }
    public DateTime DateCreated { get; set; } = DateTime.Now;
    public List<Cards> Cards { get; set; } = new List<Cards>();


  }

}