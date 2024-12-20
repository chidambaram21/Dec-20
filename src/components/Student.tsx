//import React from 'react'

export default function EmpSal() {
    const empData = [
      { StudentName :"Ramu", StudentStudentemail: "ramu@gmail.com", Subject: "IBM", marks: 45 },
      { StudentName :"Raju", Studentemail: "raju@gmail.com", Subject: "HP", marks: 35 },
      { StudentName :"Ramya", Studentemail: "ramya@gmail.com", Subject: "InfoSys", marks: 25 },
      { StudentName :"John", Studentemail: "john@gmail.com", Subject: "Wipro", marks: 65 },
      { StudentName:"Abdul", Studentemail: "abdul@gmail.com", Subject: "TCS", marks: 55 },
    
    ];
  
    // () => ()
  
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Studentemail</th>
              <th scope="col">Subject</th>
              <th scope="col">marks</th>
            </tr>
          </thead>
          <tbody>
            {empData.map(
                (x)=>( 
                <tr>
                    <td>{x.StudentName}</td>
                    <td>{x.Studentemail}</td>
                    <td>{x.Subject}</td>
                    <td>{x.marks}</td>
                  </tr>
                 )
            )}
           
          </tbody>
        </table>
      </div>
    );
  } 