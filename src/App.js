import "./styles.css";
import QRCode from "qrcode";
import React, { useState } from "react";

const App = () => {
  const initailData = [];
  const [users, setUsers] = useState(initailData);

  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [count, setcount] = useState(1);

  const [savebtn, setsavebtn] = useState("Add");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleDel = (item) => {
    const updatedUsers = users.filter((user) => user.id !== item.id);
    setUsers(updatedUsers);
  };
  const handleEdit = (item) => {
    setsavebtn("Update");

    setName(item.name);
    setAge(item.age);

    const updatedUsers = users.filter((user) => user.id !== item.id);

    setUsers(updatedUsers);
  };

  const Adddata = () => {
    setsavebtn("Add");
    const newUser = {
      id: count,
      name: Name,
      age: Age,
    };
    console.log(newUser);

    if (newUser.name === "") {
    } else {
      setcount(count + 1);
      setUsers((prev) => [...prev, newUser]);
      setName("");
      setAge("");
    }
  };

  return (
    <div className="App">
      <h1>Users List </h1>
      <input
        type="text"
        value={Name}
        required
        placeholder="Enter Name"
        onChange={handleName}
      />
      <input
        type="number"
        value={Age}
        placeholder="Enter Age"
        required
        onChange={handleAge}
      />
      {<button onClick={Adddata}> {savebtn} </button>}
      {users.length == 0 ? (
        <h5>No data......</h5>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Sn</th>

              <th>Name</th>
              <th>Age</th>
              <th>Qr</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>

                <td>{user.name}</td>
                <td>{user.age}</td>
                <td></td>
                <td>
                  <button onClick={() => handleEdit(user)}>Edit</button>
                  <button onClick={() => handleDel(user)}>Del</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default App;
