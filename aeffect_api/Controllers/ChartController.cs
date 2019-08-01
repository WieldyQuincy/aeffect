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
  public class ChartController : ControllerBase
    {
    // GET api/Chart
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
    }
}

        // // GET api/values/5
        // [HttpGet("{id}")]
        // public ActionResult<string> Get(int id)
        // {
        //     return "value";
        // }

        // // POST api/values
        // [HttpPost]
        // public void Post([FromBody] string value)
        // {
        // }

        // // PUT api/values/5
        // [HttpPut("{id}")]
        // public void Put(int id, [FromBody] string value)
        // {
        // }

        // // DELETE api/values/5
        // [HttpDelete("{id}")]
        // public void Delete(int id)
        // {
        // }