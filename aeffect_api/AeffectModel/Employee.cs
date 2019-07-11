using System;
using System.Collections.Generic;

namespace aeffect_api.AeffectModel
{
    public partial class Employee
    {
        public Employee()
        {
            CurrentStayAdmittingMdNavigation = new HashSet<CurrentStay>();
            CurrentStayScreenerNavigation = new HashSet<CurrentStay>();
            Marketing = new HashSet<Marketing>();
        }

        public int EmpId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Phone { get; set; }
        public int TitleId { get; set; }

        public virtual Title Title { get; set; }
        public virtual ICollection<CurrentStay> CurrentStayAdmittingMdNavigation { get; set; }
        public virtual ICollection<CurrentStay> CurrentStayScreenerNavigation { get; set; }
        public virtual ICollection<Marketing> Marketing { get; set; }
    }
}
