using System;
using System.Linq;
using System.Collections.Generic;

namespace Mello.Models
{

  public class Cards
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Content { get; set; }
    public string Value { get; set; }
    public int BoardId { get; set; }
    public Boards Boards { get; set; }

  }

}