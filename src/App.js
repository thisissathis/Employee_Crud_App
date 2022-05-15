import "./App.css";
import store from "./Redux/Store/index"
import React, { useState, useRef,useEffect } from "react";
import { connect } from 'react-redux';
import {fetchEmployeeList,addEmployee,EditEmployee,DeleteEmployee,ViewEmployee} from "./Api/api";
import { useNavigate} from "react-router-dom";

const mapStateToProps=state=>{
  return{
    employeelist: state?.employeelist,
  }

}

function App(props) {
  const [data,setData] = useState({
    empname: "",
    empid:"",
    empdob:"",
    empjd:"",
    empemailid:"", });
    const[search,setSearch]=useState("");
    const [empId,setempId] = useState(null);
    const navigate = useNavigate();
    const inputSearch=useRef("");
    
  useEffect(()=>{
store.dispatch(fetchEmployeeList())
  },[])

  const SubmitHandler=(e)=>{
    e.preventDefault();

    var processdata={"name":data.empname,"employeeid":data.empid,"dob":data.empdob,"joiningdate":data.empjd,
    "emailid":data.empemailid}
   
    if(empId!=null){
      store.dispatch(EditEmployee(processdata,empId));
      setData({});
      setempId(null)
    }else{
      store.dispatch(addEmployee(processdata));
    }
    setData({});

  }

  function DeleteFunction(){
    console.log(this.currentID);
    setempId(this.currentID)

    if(window.confirm('Are you sure want to delete')){
      store.dispatch(DeleteEmployee(this.currentID))
      setempId(null)
    }else{
      console.log('Cancel');
    }
  }
  

  return (
  
    <div className="App">
      <section>
      <form className="employee_form" onSubmit={SubmitHandler}>
      <div className="employee_form_details">
      <div className="employee_form__values">
      <label>Employee Name
        <input 
          type="text" 
          value={data.empname}
          placeholder="Enter employee name"
          name="Employee name"
          onChange={(e)=>{
          
            setData({...data,empname:e.target.value})
          }}
        />
      </label>
      </div>
      
      <div className="employee_form__values">
      <label>Employee ID
        <input 
          type="text" 
          value={data.empid}
          placeholder="Enter employee id"
          name="Employee id"
          onChange={(e)=>{
            
            setData({...data,empid:e.target.value})
          }}
        />
      </label></div>
      <div  className="employee_form__values">
      <label>Employee DOB
        <input 
          type="date" 
          value={data.empdob}
          placeholder="Enter employee Date of birth"
          name="Employee dob"
          onChange={(e)=>{
            
            setData({...data,empdob:e.target.value})
          }}
        />
      </label>
      </div>
      <div  className="employee_form__values">
      <label>Employee Joining date
        <input 
          type="date" 
          value={data.empjd}
          placeholder="Enter employee date of joining"
          name="Employee joining date"
          onChange={(e)=>{
            
            setData({...data,empjd:e.target.value})
          }}
        />
      </label>
      </div>
      <div  className="employee_form__values">
      <label>Employee Email ID
        <input 
          type="text" 
          value={data.empemailid}
          placeholder="Enter employee email id"
          name="Employee email id"
          onChange={(e)=>{
            
            setData({...data,empemailid:e.target.value})
          }}
        />
      </label>
      </div>
      </div>
      <input type="submit" />
    </form>
      </section>
      <section className="search_session">
      <input 
          type="text" 
          placeholder="Search employee details"
          name="Search"
          value={search}
          className="input_type_search"
          ref={inputSearch}
          
        />
        {/* <button className="searchbtn">Search</button> */}
      </section>
      <section className="employee__table">
      <table id="employees__table_deatils">
  <tr>
  <th>ID No</th>
    <th>Employee Name</th>
    <th>Employee ID</th>
    <th>Employee DOB</th>
    <th>Employee JD</th>
    <th>Employee Email ID</th>
    <th>Edit</th>
    <th>Delete</th>
  </tr>
  {
    props.employeelist&&(
      props.employeelist.map((data,i)=>{
        return (
          <tr onClick={()=>{
            navigate("/employeeslist/"+data.id);
          }}>
          <td>{i+1}</td>
    <td>{data.name}</td>
    <td>{data.employeeid}</td>
    <td>{data.dob}</td>
    <td>{data.joiningdate}</td>
    <td>{data.emailid}</td>
    <td><button className="employee__details__action" onClick={()=>{
      setData({...data,empname:data.name,empid:data.employeeid,empdob:data.dob,empjd:data.joiningdate,empemailid:data.emailid})
      setempId(data.id);
    }}>Edit</button></td>
    <td><button className="employee__details__action" onClick={DeleteFunction.bind({"currentID": data.id})}>Delete</button></td>
  </tr>
        )
      })
    )
  }
  
</table>
      </section>
      

    </div>
  );
}

export default connect(mapStateToProps,() => ({}))(App);

