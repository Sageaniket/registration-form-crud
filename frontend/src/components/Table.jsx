import axios from "axios";
import React, { useEffect, useRef } from "react";

function Table(props) {
  let {data} = props;
  const userFetched = useRef(false);
  // fetching the data front end from the backend

  useEffect(() => {
    if (!userFetched.current) {
      //fetchdata();
    }
    return () => {
      userFetched.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // end fetching data

  //delete the data from the backend
  const handleDelete = async (id) => {
    const response = await axios.delete(
      `http://localhost:4000/deleteData/${id}`
    );
    //fetchdata();
    console.log(response);
  };

  const handleEdit = async (userData) => {
    //setShow(true);
    //setValue(userData);
   // setSubmitOperation("update");
  };

  return (
    <>
      <div className="container">
        <table className="table table-striped table-bordered table-dark" >
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  
                  <td>
                    <button
                      type="button"
                      onClick={() => handleEdit(user)}
                      className="btn btn-success"
                    >
                      Update
                      
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;

