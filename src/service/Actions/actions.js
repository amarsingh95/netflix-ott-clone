import {ADD_EVENT} from '../constants';


export const addEvent=(data)=>
{

return {
  type:ADD_EVENT,
  payload:data
  }


}

