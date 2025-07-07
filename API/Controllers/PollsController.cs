using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PollsController(AppDbContext context) : ControllerBase
{
  [HttpGet]
  public async Task<ActionResult<List<Poll>>> GetPolls()
  {
    return await context.Polls.ToListAsync();
  }

  [HttpGet("{id}")]
  public async Task<ActionResult<Poll>> GetPollById(Guid id)
  {
    var poll = await context.Polls
      .Include(p => p.Options)
      .FirstOrDefaultAsync(p => p.Id == id);

    if (poll == null) return NotFound();

    return poll;
  }

  [HttpPost]
  public async Task<ActionResult<Poll>> CreatePoll(CreatePollDto createPollDto)
  {
    var poll = new Poll
    {
      Question = createPollDto.Question,
      Options = createPollDto.Options.Select(optionText => new PollOption
      {
        Text = optionText
      }).ToList()
    };

    context.Polls.Add(poll);
    await context.SaveChangesAsync();

    return CreatedAtAction(nameof(GetPollById), new { id = poll.Id }, poll);
  }
}