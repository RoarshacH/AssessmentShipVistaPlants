using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShipVistaPlants.Models;
using ShipVistaPlants.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShipVistaPlants.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlantController : ControllerBase
    {
        private readonly IPlantRepo _plantRepository;

        public PlantController(IPlantRepo plantRepo)
        {
            _plantRepository = plantRepo;
        }

        [HttpGet]
        public async Task<IEnumerable<Plant>> GetPlants()
        {
            return await _plantRepository.Get();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Plant>> GetPlants(int id)
        {
            return await _plantRepository.Get(id);
        }

        [HttpPost]
        public async Task<ActionResult<Plant>> PostPlants([FromBody] Plant plant)
        {
            var newPlant = await _plantRepository.Create(plant);
            return CreatedAtAction(nameof(GetPlants), new { id = newPlant.Id }, newPlant);
        }

        [HttpPatch]
        public async Task<ActionResult> PutPlants(int id, [FromBody] Plant plant)
        {            
            if (id != plant.Id)
            {
                return BadRequest();
            }

            await _plantRepository.Update(plant);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var plantToDelete = await _plantRepository.Get(id);
            if (plantToDelete == null)
                return NotFound();

            await _plantRepository.Delete(plantToDelete.Id);
            return NoContent();
        }      
    }
}
