import React from "react";

function Display(props) {
  // console.log(props.users);
  return (
    <div>

<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">userName</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
      {/* <th scope="col">Company</th> */}
    </tr>
  </thead>
  <tbody>
    {props.users.map((user)=>{
        return <tr>
        <th scope="col">{user.id}</th>
        <td colspan="col">{user.name}</td>
        <td colspan="col">{user.username}</td>
        <td colspan="col">{user.email}</td>
        <td colspan="col">{user.address.city}</td>
        <td colspan="col">{user.phone}</td>
      


      </tr>
    })}
      
    
  </tbody>
</table>
    {/* //   <table className="table">
    //     <tr>
    //       <th scope="col">Id</th>
    //       <th scope="col">Name</th>
    //       <th scope="col">userName</th>
    //       <th scope="col">Email</th>
    //       <th scope="col">company</th>
    //       <th scope="col">city</th>
    //     </tr>
    //     {props.users.map((user) => { */}
    {/* //       return (
    //           <p>{user.name}</p>
    //         // <tr key={user.id}>
    //         //   <td>{user.id}</td>
    //         //   <td>{user.name}</td>
    //         //   <td>{user.username}</td>
    //         //   <td>{user.email}</td>
    //         //   <td>{user.company}</td>
    //         //   <td>{user.city}</td>
    //         // </tr>
    //       );
    //     })}
    //   </table> */}
    </div>
  );
}

export default Display;
