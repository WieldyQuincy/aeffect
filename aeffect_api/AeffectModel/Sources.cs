using System;
using System.Collections.Generic;

namespace aeffect_api.AeffectModel
{
    public partial class Sources
    {
        public Sources()
        {
            CurrentStay = new HashSet<CurrentStay>();
            Marketing = new HashSet<Marketing>();
        }

        public int SourceId { get; set; }
        public string SourceName { get; set; }
        public string SourceType { get; set; }
        public int LocationId { get; set; }
        public string SourceOrganization { get; set; }

        public virtual Location Location { get; set; }
        public virtual ICollection<CurrentStay> CurrentStay { get; set; }
        public virtual ICollection<Marketing> Marketing { get; set; }
    }
}
