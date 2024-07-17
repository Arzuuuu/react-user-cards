import React, { useState } from "react";
import Cards from "./Components/Cards";
import Form from "./Components/Form";

function App() {
  const [users, setUsers] = useState([]);

  const handleFormSubmitData = (data) => {
    setUsers([...users, data]);
  };

  const handleRemove = (id) => {
    setUsers(users.filter((item, index) => index !== id));
  };

  return (
    <div className="p-20 flex flex-col gap-10 w-full h-screen bg-zinc-200 items-center justify-center">
      <Cards users={users} handleRemove={handleRemove} />
      <Form handleFormSubmitData={handleFormSubmitData} />
    </div>
  );
}

export default App;
