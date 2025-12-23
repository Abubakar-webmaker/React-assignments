import React from "react";

function Table() {
    return (
        <div>
      <h3>Student List:</h3>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ali</td>
            <td>React</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ahmed</td>
            <td>JavaScript</td>
          </tr>
        </tbody>
      </table>
    </div>
    )
}

export default Table