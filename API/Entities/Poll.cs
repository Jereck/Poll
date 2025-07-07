using System;

namespace API.Entities;

public class Poll
{
  public Guid Id { get; set; }
  public required string Question { get; set; }
  public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
  public DateTime? ExpiresAt { get; set; }
  public ICollection<PollOption> Options { get; set; } = [];
}
