using System;
using System.Linq;
using System.Collections.Generic;

namespace Mello.Models
{

  public class Users
  {

    public int Id { get; set; }
    public string FullName { get; set; }
    public string Email { get; set; }
    public string AccessToken { get; set; }

    public List<Boards> Boards { get; set; } = new List<Boards>();
  }

}