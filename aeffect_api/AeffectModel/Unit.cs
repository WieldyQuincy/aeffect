using System;
using System.Collections.Generic;

namespace aeffect_api.AeffectModel
{
    public partial class Unit
    {
        public Unit()
        {
            Patient = new HashSet<Patient>();
        }

        public int UnitId { get; set; }
        public string Name { get; set; }
        public int LocationId { get; set; }

        public virtual Location Location { get; set; }
        public virtual ICollection<Patient> Patient { get; set; }
    }
}
