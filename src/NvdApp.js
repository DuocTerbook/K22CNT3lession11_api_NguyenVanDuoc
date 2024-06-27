import { useEffect, useState } from 'react';
import axios from './api/NvdApi';
import './App.css';
import NvdListUser from './components/NvdListUser';

function NvdApp() {
  const [nvdListUsers, setNvdListUsers] = useState([]);

  useEffect(() => {
    const nvdGetAllUsers = async () => {
      try {
        const nvdResponse = await axios.get("/nvdUsers"); // Ensure the endpoint is correct
        console.log("Api Data:", nvdResponse.data);
        setNvdListUsers(nvdResponse.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    nvdGetAllUsers();
  }, []);

  useEffect(() => {
    console.log("State Data:", nvdListUsers);
  }, [nvdListUsers]);

  return (
    <div className="container border my-3">
      <h1>Làm việc với MockApi</h1>
      <hr />
      <NvdListUser renderNvdListUsers={nvdListUsers} />
    </div>
  );
}

export default NvdApp;
