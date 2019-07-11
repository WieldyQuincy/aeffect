using System;
using System.Collections.Generic;

namespace aeffect_api.AeffectModel
{
    public partial class CurrentStay
    {
        public CurrentStay()
        {
            Incident = new HashSet<Incident>();
        }

        public int StayId { get; set; }
        public DateTime Date { get; set; }
        public DateTime InquiryDate { get; set; }
        public int PatientId { get; set; }
        public int Screener { get; set; }
        public int ReferralSource { get; set; }
        public int PayorId { get; set; }
        public TimeSpan InquiryTime { get; set; }
        public int AdmittingMd { get; set; }

        public virtual Employee AdmittingMdNavigation { get; set; }
        public virtual Patient Patient { get; set; }
        public virtual Payor Payor { get; set; }
        public virtual Sources ReferralSourceNavigation { get; set; }
        public virtual Employee ScreenerNavigation { get; set; }
        public virtual ICollection<Incident> Incident { get; set; }
    }
}
