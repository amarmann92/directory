import React from "react";
import { Table } from "react-bootstrap";
import Employee from "../Employee";

function List({ firstClick, lastClick, employees }) {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>
            <button onClick={firstClick}>First Name</button>
          </th>
          <th>
            <button onClick={lastClick}>Last Name</button>
          </th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => {
          return <Employee employee={employee} key={employee.cell} />;
        })}
      </tbody>
    </Table>
  );
}

export default List;
