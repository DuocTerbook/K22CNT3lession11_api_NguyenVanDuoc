import React from 'react';

export default function NvdListUser({ renderNvdListUsers }) {
  console.log("NvdListUser:", renderNvdListUsers);

  // Display data
  let nvdElementUser = renderNvdListUsers.map((nvdUser, index) => (
    <tr key={nvdUser.id}>
      <td>{nvdUser.id}</td>
      <td>{nvdUser.UserName}</td>
      <td>{nvdUser.PassWord}</td>
      <td>{nvdUser.Email}</td>
      <td>{nvdUser.Phone}</td>
      <td>...</td>
    </tr>
  ));

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>UserName</th>
            <th>PassWord</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {nvdElementUser}
        </tbody>
      </table>
    </div>
  );
}
