using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShipVistaPlants.Models
{
    public class PlantContext: DbContext
    {
        public PlantContext(DbContextOptions<PlantContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Plant> Plants { get; set; }
        
    }
}
