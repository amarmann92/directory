import React from "react";

function Employee({ employee }) {
  return (
    <tr>
      <td>{employee.name.first}</td>
      <td>{employee.name.last}</td>
      <td>{employee.phone}</td>
      <td>{employee.email}</td>
    </tr>
  );
}

export default Employee;
