import {ADD_EVENT} from '../constants';


export default function addEventData(state={name:""},action)
{

switch(action.type)
{
  
  case ADD_EVENT:
  return{
       ...state,
       name:action.payload
      };
  
  default:
    return state  
  }


}