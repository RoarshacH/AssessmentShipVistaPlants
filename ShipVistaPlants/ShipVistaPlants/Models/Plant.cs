using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ShipVistaPlants.Models
{
    public class Plant
    {
        [Key]
        public int Id { get; set; }

        public string plantName { get; set; }

        public string waterLevel { get; set; }
        
        public string lastTimeWatered { get; set; }

        public bool isWatering { get; set; }
    }
}
