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
  public class PtSearchPgController : ControllerBase
  {

    // GET api/PtSearchPg
    [HttpGet]
    public ActionResult<IEnumerable<Patient>> Get()
    {
      List<Patient> patients = new List<Patient>();

      using (var DB = new AeffectContext())
      {
        patients = DB.Patient.ToList();
      }

      return patients;
    }


    // GET api/patients/5
    [HttpGet("/api/PtSearchPg/search/{search}")]
    public ActionResult<IEnumerable<Patient>> Get2(string search)
    {
      List<Patient> patients = new List<Patient>();

      using (var DB = new AeffectContext())
      {
        patients = DB.Patient.Where(p => p.FirstName.Contains(search)).ToList();
      }

      return patients;
    }


    // DELETE api/patients/5
    [HttpGet("/delete/{id}")]
    public void Delete(int id)
    {
      using (var DB = new AeffectContext())
      {
        Patient deletePt = new Patient() { PatientId = id };
        DB.Patient.Attach(deletePt);
        DB.Patient.Remove(deletePt);
        DB.SaveChanges();
      }
    }

    // // POST api/patients/add?PatientId=int&FirstName=varchar
    // [HttpGet("/api/patients/add")]
    // //public void Post([FromBody] string value)
    // public void Get([FromQuery] int PatientId, [FromQuery] string FirstName)
    // {
    //   Patient patient = new Patient();
    //   patient.PatientId = PatientId;
    //   patient.FirstName = FirstName;

    //   using (var DB = new AeffectContext())
    //   {
    //     DB.Patient.Add(patient);
    //     DB.SaveChanges();
    //   }
    // }

    // // PUT api/patients/5
    // [HttpPut("{id}")]
    // public void Put(int id, [FromBody] string value)
    // {
    // }
  }
}
