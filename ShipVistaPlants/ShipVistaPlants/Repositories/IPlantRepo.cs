using ShipVistaPlants.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShipVistaPlants.Repositories
{
    public interface IPlantRepo
    {
        Task<IEnumerable<Plant>> Get();
        Task<Plant> Get(int id);
        Task<Plant> Create(Plant plant);
        Task Update(Plant plant);
        Task Delete(int id);
    }
}
