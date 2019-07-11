using System;
using System.Collections.Generic;

namespace aeffect_api.AeffectModel
{
    public partial class Payor
    {
        public Payor()
        {
            CurrentStay = new HashSet<CurrentStay>();
        }

        public int PayorId { get; set; }
        public string PayorType { get; set; }
        public string PayorName { get; set; }

        public virtual ICollection<CurrentStay> CurrentStay { get; set; }
    }
}
