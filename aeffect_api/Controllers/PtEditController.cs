using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using aeffect_api.AeffectModel;

namespace aeffect_api.Controllers
{

  [Route("api/[controller]")]
  [ApiController]
  public class PtEditController : ControllerBase
  {

    // GET api/patients/5
    [HttpGet("/api/PtEditPg/{id}")]
    public ActionResult<IEnumerable<Patient>> Get(int id)
    {
      List<Patient> patients = new List<Patient>();

      using (var DB = new AeffectContext())
      {
        patients = DB.Patient.Where(p => p.PatientId == id).ToList();
      }
      return patients;
    }
  }


}