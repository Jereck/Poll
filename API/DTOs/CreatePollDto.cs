using System;

namespace API.DTOs;

public class CreatePollDto
{
  public string Question { get; set; } = string.Empty;
  public List<string> Options { get; set; } = new();
}
