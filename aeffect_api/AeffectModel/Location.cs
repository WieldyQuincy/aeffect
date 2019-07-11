using System;
using System.Collections.Generic;

namespace aeffect_api.AeffectModel
{
    public partial class Location
    {
        public Location()
        {
            Sources = new HashSet<Sources>();
            Unit = new HashSet<Unit>();
        }

        public int LocationId { get; set; }
        public string City { get; set; }
        public string County { get; set; }
        public string ZipCode { get; set; }

        public virtual ICollection<Sources> Sources { get; set; }
        public virtual ICollection<Unit> Unit { get; set; }
    }
}
