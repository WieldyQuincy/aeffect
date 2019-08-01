using System;
using System.Collections.Generic;

namespace aeffect_api.AeffectModel
{
  public partial class Patient
  {
    public Patient()
    {
      CurrentStay = new HashSet<CurrentStay>();
    }

    public int PatientId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Dob { get; set; }
    public string AddressLine1 { get; set; }
    public string AddressLine2 { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public int? Zip { get; set; }
    public int? Account { get; set; }
    public int? MedRecord { get; set; }
    public int? UnitId { get; set; }

    public virtual Unit Unit { get; set; }
    public virtual ICollection<CurrentStay> CurrentStay { get; set; }
  }
}
