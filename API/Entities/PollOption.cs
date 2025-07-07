using System;

namespace API.Entities;

public class PollOption
{
  public int Id { get; set; }
  public Guid PollId { get; set; }
  public required string Text { get; set; }
  public int VoteCount { get; set; } = 0;
}
