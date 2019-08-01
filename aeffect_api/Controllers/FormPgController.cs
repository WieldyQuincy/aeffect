using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using aeffect_api.AeffectModel;

namespace aeffect_api.Controllers
{

  public class AddPtRequest
  {

    public int ptId { get; set; }
    public string firstName { get; set; }
    public string lastName { get; set; }
    public string dob { get; set; }
    public string address { get; set; }
    public string address2 { get; set; }
    public string city { get; set; }
    public string state { get; set; }
    public int zipCode { get; set; }
    public int account { get; set; }
    public int medRecord { get; set; }
    public int unitId { get; set; }
  }


  [Route("api/[controller]")]
  [ApiController]
  public class FormPgController : ControllerBase
  {
    // GET api/states
    [HttpGet]
    public ActionResult<IEnumerable<State>> Get()
    {
      List<State> states = new List<State>();

      using (var DB = new AeffectContext())
      {
        states = DB.State.ToList();
      }

      return states;
    }

    // POST api/states/add?stateID=ZZ&stateName=Zambia
    [HttpPost("/api/patients/add")]
    public void Post([FromBody] AddPtRequest AddPtRequest)
    //public void Get([FromQuery] string stateID, [FromQuery] string stateName)
    {

      Patient patient = new Patient();
      patient.PatientId = AddPtRequest.ptId;
      patient.FirstName = AddPtRequest.firstName;
      patient.LastName = AddPtRequest.lastName;
      patient.Dob = AddPtRequest.dob;
      patient.AddressLine1 = AddPtRequest.address;
      patient.AddressLine2 = AddPtRequest.address2;
      patient.City = AddPtRequest.city;
      patient.State = AddPtRequest.state;
      patient.Zip = AddPtRequest.zipCode;
      patient.Account = AddPtRequest.account;
      patient.MedRecord = AddPtRequest.medRecord;
      patient.UnitId = AddPtRequest.unitId;

      using (var DB = new AeffectContext())
      {
        DB.Patient.Add(patient);
        DB.SaveChanges();
      }
    }

    // // GET api/patients/5
    // [HttpGet("{id}")]
    // public ActionResult<IEnumerable<Patient>> Get(int id)
    // {
    //   List<Patient> patients = new List<Patient>();

    //   using (var DB = new AeffectContext())
    //   {
    //     patients = DB.Patient.Where(p => p.PatientId == id).ToList();
    //   }

    //   return patients;
    // }

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

    // // DELETE api/patients/5
    // [HttpDelete("{id}")]
    // public void Delete(int id)
    // {
    // }
  }
}
