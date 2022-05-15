import { ActionTypes } from "../Redux/Actions/ActionTypes";
import index from "./index";

export const fetchEmployeeList = () => async (dispatch) => {
  const response = await index.get("/employeeslist");
  // console.log(response);
  dispatch({ type: ActionTypes.GETEMPLOYEELIST, payload: response.data });
};

export const addEmployee = (data) => async (dispatch) => {
  const response = await index.post("/employeeslist", data);
  dispatch({ type: ActionTypes.ADDEMPLOYEE, payload: response.data });
};
export const EditEmployee = (data, empid) => async (dispatch) => {
  const response = await index.put("/employeeslist/" + empid, data);
  dispatch({ type: ActionTypes.EDITEMPLOYEE, payload: response.data });
};
export const DeleteEmployee = (empid) => async (dispatch) => {
  console.log(empid);
  const response = await index.delete("/employeeslist/" + empid);
  dispatch({ type: ActionTypes.DELETEEMPLOYEE, payload: response.data });
};
export const ViewEmployee = (empid) => async (dispatch) => {
  console.log(empid);
  const response = await index.get("/employeeslist/" + empid);
  dispatch({ type: ActionTypes.VIEWEMPLOYEE, payload: response.data });
};
export const FilterEmployee = (empid) => async (dispatch) => {
  console.log(empid);
  const response = await index.get("/employeeslist/" + empid);
  dispatch({ type: ActionTypes.FILTEREMPLOYEE, payload: response.data });
};
