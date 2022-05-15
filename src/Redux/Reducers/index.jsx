import { ActionTypes } from "../Actions/ActionTypes";

export const employeeReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.GETEMPLOYEELIST: {
      return {
        ...state,
        employeelist: [...action.payload],
      };
    }
    case ActionTypes.ADDEMPLOYEE: {
      return {
        ...state,
        employeelist: [...state.employeelist, action.payload],
      };
    }
    case ActionTypes.EDITEMPLOYEE: {
      const index = state.employeelist.findIndex(
        (v) => v.id == action.payload.id
      );
      console.log(index);
      const newArray = [...state.employeelist]; //making a new array
      newArray[index] = action.payload;

      return {
        ...state,
        employeelist: newArray,
      };
    }
    case ActionTypes.DELETEEMPLOYEE: {
      const index = state.employeelist.findIndex(
        (v) => v.id == action.payload.id
      );
      console.log(index);
      const newArray = [...state.employeelist]; //making a new array
      newArray.splice(index, 1);
      return {
        ...state,
        employeelist: newArray,
      };
    }
    case ActionTypes.VIEWEMPLOYEE: {
      return {
        ...state,
        viewemployee: action.payload,
      };
    }
    case ActionTypes.FILTEREMPLOYEE: {
      const filterArray = [...state.employeelist];
      filterArray.filter()
      return {
        ...state,
        viewemployee: action.payload,
      };
    }
    default:
      return state;
  }
};
