import "./styles.css";
import React, { useState } from "react";
import pic from "./images/loginph.png";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./mock-data.json";
import datax from "./mock.json";
import headerdata from "./mock-header.json";

export default function App() {
  const [recordsx, setRecordsx] = useState(datax);
  const [hrecords, sethrecords] = useState(headerdata);
  const [records, setRecords] = useState(data);
  return (
    <div className="App">
      <button id="fk" type="button" class="btn btn-primary" onClick="#">
        back
      </button>
      <br />
      <br />
      <center>
        <img src={pic} />
      </center>

      <table>
        <thead>
          <tr>
            {hrecords.map((hrecord) => (
              <td>
                <th class="del">
                  <b>{hrecord.labelname}</b>
                </th>
                <th class="del">{hrecord.valuex}</th>
              </td>
            ))}
          </tr>
        </thead>
      </table>
      <table class="table table-hover table-bordered p-5">
        {recordsx.map((recordx) => (
          <tr>
            <td class="del">
              <b>{recordx.labelname}</b>
            </td>
            <td>{recordx.valuex}</td>

            <hr />
          </tr>
        ))}
      </table>
      <h1>Record History</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Doctor Name</th>
            <th>Diagnosis</th>
            <th>Prescription</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr>
              <td>{record.Date_today}</td>
              <td>{record.DoctorsName}</td>
              <td>{record.DIagnosis_tested}</td>
              <td>
                {" "}
                <a href="{record.Prescription_given}">See Prescription</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/*Link this button to the prescription page */}
      <button id="addb" type="button" class="btn btn-primary" onClick="#">
        Add Treatement
      </button>
    </div>
  );
}
