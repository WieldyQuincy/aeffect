using System;
using System.Collections.Generic;

namespace aeffect_api.AeffectModel
{
    public partial class Marketing
    {
        public int Id { get; set; }
        public DateTime VisitDate { get; set; }
        public int SourceId { get; set; }
        public int EmpId { get; set; }
        public string ContactType { get; set; }
        public DateTime FollowUpDate { get; set; }
        public string FollowUpAction { get; set; }
        public string FollowUpObjective { get; set; }

        public virtual Employee Emp { get; set; }
        public virtual Sources Source { get; set; }
    }
}
