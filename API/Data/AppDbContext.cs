using System;
using API.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace API.Data;

public class AppDbContext(DbContextOptions options) : DbContext(options)
{
  public DbSet<Poll> Polls { get; set; }
  public DbSet<PollOption> PollOptions { get; set; }
  public DbSet<Vote> Votes { get; set; }
}
