using System;
using System.Collections.Generic;

namespace aeffect_api.AeffectModel
{
    public partial class Incident
    {
        public int IncidentId { get; set; }
        public int StayId { get; set; }
        public DateTime EventDate { get; set; }
        public TimeSpan EventTime { get; set; }
        public string EventType { get; set; }
        public string EventDescription { get; set; }
        public bool Injury { get; set; }
        public string InjuryDetails { get; set; }
        public string InjurySeverity { get; set; }
        public TimeSpan EventLength { get; set; }

        public virtual CurrentStay Stay { get; set; }
    }
}
