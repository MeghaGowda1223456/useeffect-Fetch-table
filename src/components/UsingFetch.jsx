import React, { useEffect, useState } from "react"
import Display from "./Display"

const UsingFetch = () => {
  const [users, setUsers] = useState([])

  // const fetchData = () => {
   
  // }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>  response.json()
    )
    .then(data => {
      console.log(data);
      setUsers(data)
    });
  }, [])

  return (
    <div>
    <Display users={users}/>
    </div>
  )
}

export default UsingFetch;