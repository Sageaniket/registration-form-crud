import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useRef } from "react";
import axios from "axios";
import swal from "sweetalert";

function Form({
  value,
  setValue,
  setUsers,
  users,
  show,
  formShow,
  setShow,
  submitOperation,
  setSubmitOperation,
  fetchdata,
  setUserDetails
}) {
  // for modal box
  const [fullscreen, setFullscreen] = useState(true);
  let userid=useRef(null);
  let userFirstNameRef = useRef(null);
  let userLastNameRef = useRef(null);
  let userEmailRef = useRef(null);
  let userPasswordRef=useRef(null);
  let userTitleRef=useRef(null);
  let userMangeroptionRef=useRef(null);
  let userRoleRef=useRef(null);
  let userSaleforceIdRef=useRef(null);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  // modal box ends

  //reset button
  const handleCancel = () => {
    formShow(false)
  };

  const isValid = (user) => {
    if (user.firstName === "" && user.lastName === "") {
      return false;
    }
    return true;
  };

  // const addUser = (userData) => {
  //   axios
  //     .post("http://localhost:4000/setUser", {
  //       userData,
  //     })
  //     .then(function (res) {
  //       console.log(res);
  //       setUsers((preValue) => [...preValue, res.data]);
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //       swal("Oops!", "Something went wrong!", "error");
  //     });
  // };

  // const updateUser = (userData) => {
  //   axios
  //     .put(`http://localhost:4000/updateData/${userData._id}`, {
  //       userData,
  //     })
  //     .then(function (res) {
  //       console.log(res);
  //       fetchdata();
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //       swal("Oops!", "Something went wrong!", "error");
  //     });
  // };

  let handleClickSubmit = (e) => {
    e.preventDefault();
    // if (!isValid(value)) {
    //   // console.log("isvalid");
    //   swal("Oops!", "Please Fill The Form Correctly!", "error");
    //   return;
    // }
    // if (submitOperation === "add") {
    //   addUser(value);
    // } else if (submitOperation === "update") {
    //   updateUser(value);
    // }
    // setShow(false);

    let tempObj = {};
    tempObj._id = new Date().getTime();
    tempObj.name = userFirstNameRef.current.value + " " + userLastNameRef.current.value;
    tempObj.email = userEmailRef.current.value;
    tempObj.title= userTitleRef.current.value;
    tempObj.manager= userMangeroptionRef.current.value;
    tempObj.role= userRoleRef.current.value;
    tempObj.password=userPasswordRef.current.value;
    tempObj.saleforceid=userSaleforceIdRef.current.value;
    
    axios
    .post("http://localhost:4000/setUser", {
      // userData: { ...userData, _id: users.length + 1 }
      tempObj
    })
    .then(function (res) {
      console.log("Resultv---->> ",);
     
    })
    .catch(function (err) {
      console.log(err);
      //swal("Oops!", "Something went wrong!", "error");
    });


    setUserDetails(tempObj)
    console.log("tempObj ", tempObj);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      
      {/* modal box */}
      <Button
        className="me-2 mb-2"
        style={{backgroundColor:"black"}}
        onClick={() => {
          handleShow(true);
          
        }}
      >
        Add New User
      </Button>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
      <form onSubmit={(e) => handleClickSubmit(e)}>
        <Modal.Header closeButton style={{backgroundColor:"#E8E8E8"}}>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={{marginTop:"40px",marginBottom:"60px"}}>
      
        <div className='row'>
            <div className='col-md-6'> 
            First Name
            <input ref={userFirstNameRef} className="form-control" placeholder='First name' type="text" />
            </div> 
            <div className='col-md-6'>
             Last Name
             <input ref={userLastNameRef}className="form-control" placeholder='Last name' type="text"  />
             </div>
        </div>
        <div className='row' style={{marginTop:"15px",}}>
          <div className='col-md-12'>
            Title (optional)
            <input ref={userTitleRef} className="form-control" placeholder='Title' type="text"/>
          </div>
        </div>
        <div className='row' style={{marginTop:"15px",}}>
          <div className='col-md-12'>
            Email
            <input ref={userEmailRef} className="form-control" placeholder='user@example.com' type="email" />
          </div>
          
        </div>
        <div className='row' style={{marginTop:"15px"}}>
          <div className='col-md-4'>
            Manager(optional)
  <select ref={userMangeroptionRef} class="form-select">
              <option>Supervisor</option>
              <option>Assistant manager</option>
              <option>Shift manager</option>
              <option>Floor manager</option>
</select>
          </div>
          <div className='col-md-4'>Role
  <select  ref={userRoleRef} class="form-select">
      <option>User</option>
      <option>Super-user</option>
      <option>Admin</option>
      <option>Guest</option>
</select>
          </div>
          <div className='col-md-4'></div>
        </div>
        <div className='row' style={{marginTop:"15px"}}>
          {/* <div className='col-md-5'>Temporary Password
          <input ref={userPasswordRef} className="form-control" type="password"/>
          </div> */}
          
          <div className='col-md-4'>Temporary Password <input ref={userPasswordRef} className='form-control' type={showPassword ? 'text' : 'password'}/>
          <div className="col-md-4">
               
          </div>
      
    </div>
          <div className='col-md-4' style={{marginTop:"20px"}}>
          <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
  <label class="form-check-label"><em>send welcome email now</em></label>
          </div>
        </div>
        <div className='row' style={{marginTop:"15px"}}>
          <div className='col-md-7'>saleforce System Id(18 Alphanumeric Characters)
          <input ref={userSaleforceIdRef} className="form-control" type="text"/>
          </div>
        </div>
        
    </div>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:"#E8E8E8"}}>
        <div className='row' style={{marginTop:"15px",}}>
        <div className='col-md-2'></div>
        <div className='col-md-5'>
          <button type="submit" class="btn btn-secondary"
          onClick={handleCancel}

         style={{backgroundColor:"gray",marginLeft:"2px"}}>Cancle</button>
        </div>
        <div className='col-md-5'>
          <button type="submit" class="btn btn-secondary" style={{backgroundColor:"#C9702E",marginLeft:"7px"}}>Submit
          </button>
        </div>
        </div>
        
        </Modal.Footer>
        </form>
      </Modal>
      {/* modal end */}
      
    </>
  );
}

export default Form;
