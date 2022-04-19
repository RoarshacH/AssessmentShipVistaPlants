using Microsoft.EntityFrameworkCore;
using ShipVistaPlants.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShipVistaPlants.Repositories
{
    public class PlantRepo : IPlantRepo
    {
        private readonly PlantContext _context;

        public PlantRepo(PlantContext context) {
            _context = context;
        }
        public async Task<Plant> Create(Plant plant)
        {
            _context.Plants.Add(plant);
            await _context.SaveChangesAsync();

            return plant;
        }

        public async Task Delete(int id)
        {
            var plantToDelete = await _context.Plants.FindAsync(id);
            _context.Plants.Remove(plantToDelete);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Plant>> Get()
        {
            return await _context.Plants.ToListAsync();
        }

        public async Task<Plant> Get(int id)
        {
            return await _context.Plants.FindAsync(id);
        }       

        public async Task Update(Plant plant)
        {
            _context.Entry(plant).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
