import React from 'react'

const ViewAllVisitors = () => {
  return (
    <div>
<table class="table">
  <thead>
    <tr>
    <th scope="col"><b>Date</b></th>
      <th scope="col"><b>FirstName</b></th>
      <th scope="col"><b>LastName</b></th>
      <th scope="col"><b>Purpose</b></th>
      <th scope="col"><b>Whom to Meet</b></th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">12-04-2024</th>
      <td>Mark </td>
      <td>Dsouza</td>
      <td>Visit the manager</td>
      <td>Manager</td>
      
    </tr>
  <tr>
  <th scope="row">17-02-2024</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Survey</td>
      <td>Employee</td>
    </tr>
   
  </tbody>
</table>







    </div>
  )
}

export default ViewAllVisitors