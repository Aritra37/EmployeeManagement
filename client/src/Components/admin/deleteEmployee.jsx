import {React,useState,useEffect} from "react";
import "./deleteEmployee.scss";
import axios from "axios";

function DeleteButton(props) {
  const [count, setCount] = useState(0);
  const data = props.props
  const [resp ,setresp] = useState([])
  const [show , setshow] = useState(false)
  useEffect(()=>{
    const deleteClicked = async () => {
      const toSend = { email: data.idSelected };
      const response = await axios
      .post("http://localhost:8000/deleteEmployee",toSend)
      .then((res)=>{
          console.log(res);
          setresp(res)
          if (resp.status==200) 
          {
            alert("Employee Deleted Succesfully");
          }
      })
    };
    deleteClicked();
  },[count])

  const modalStyles = {
    display: show ? 'none' : 'block'
  };

  return (
    <div className="modal" style={modalStyles} >
      <div className="container">
        <div className="data">
          <h3>Are you absolutely sure?</h3>
          <p className="b1">
            This action cannot be undone. This will permanently delete the
            Employee. All the data regarding the employee such as name, contact
            details, department, etc. will be deleted.
          </p>
        </div>
        <div className="buttons">
          <button
          onClick={()=>{
            setshow(true);
          }}
            id="btn1"
            className="button"
            type="button"
          >
            No, Dont Delete
          </button>
          <button
            onClick={()=>{setCount(count=>count+1)
            setshow(true)
            }
          }
            id="btn2"
            className="button"
            type="button"
          >
            Yes, Delete the Employee
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteButton;
