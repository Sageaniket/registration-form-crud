import "./App.css";
import "./index.css";
import Form from "./components/Form";
import { useState } from "react";
import Table from "./components/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Button from "react-bootstrap/Button";

function App() {
  const [data, setData] = useState([]);
  const [formShow, setFormShow] = useState(false);

  const setUserDetails = (userObj) => {
    let prevData = [...data];
    prevData.push(userObj);
    setData([...prevData]);
    setFormShow(false);
  }
  return (
    <div className="App">
    {
      formShow ? 
      <Form
        setUserDetails={setUserDetails}
        show={formShow}
        formShow={setFormShow}
      /> : 
      <>
      <Button
        className="me-2 mb-2"
        style={{backgroundColor:"black"}}
        onClick={() => {
          setFormShow(true);
        }}
      >
        Add New User
      </Button>
        <Table
          data={data}
        />
      </>
    }
    </div>
  );
}

export default App;
