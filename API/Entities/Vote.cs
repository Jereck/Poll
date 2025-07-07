using System;

namespace API.Entities;

public class Vote
{
  public int Id { get; set; }
  public Guid PollId { get; set; }
  public int PollOptionId { get; set; }
  public string? VoterSessionId { get; set; }
}
