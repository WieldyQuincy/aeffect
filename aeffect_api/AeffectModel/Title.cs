using System;
using System.Collections.Generic;

namespace aeffect_api.AeffectModel
{
    public partial class Title
    {
        public Title()
        {
            Employee = new HashSet<Employee>();
        }

        public int TitleId { get; set; }
        public string TitleName { get; set; }

        public virtual ICollection<Employee> Employee { get; set; }
    }
}
