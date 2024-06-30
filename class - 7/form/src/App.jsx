// import logo from "./logo.svg";
// import "./App.css";

import { useState } from "react";
import DynamicForm from "./components/DynamicForm";
import DynamicTable from "./components/DynamicTable";

function App() {
  const [userData, setUserData] = useState([]);

  const handleSubmitForm = (userFormValue) => {
    setUserData([...userData, userFormValue]);
  };

  return (
    <div className="App">
      {/* PascalCase */}
      <DynamicForm handleSubmitForm={handleSubmitForm} />
      <DynamicTable userData={userData} />
    </div>
  );
}

export default App;
