import axios from 'axios';
import { error } from 'console';
import React, { useEffect, useState } from 'react'
interface User {
  id: number;
  name: string;

}
const AxiosTutorial: React.FC = () => {
  const API = "https://jsonplaceholder.typicode.com/users";
  const [userData, setUserData] = useState<User[]>([]);
  useEffect(() => {
    axios.get<User[]>(API, {
      params: {
        _limit: 11
      }

    })
      .then((response) => {
        console.log(response.data)
        setUserData(response.data)
      })


      .catch((error) => { console.log("Fetching Data error", error) });

  }, [])
  return (
    <div>
      {userData.map((data) => (
        <div key={data.id}>{data.name}</div>
      ))}
    </div>
  )
}

export default AxiosTutorial