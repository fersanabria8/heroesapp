import { types } from '../types/types';

// const state = {
//   name: 'Fernando',
//   logged: true
// }

export const authReducer = ( state = {}, action ) => {

  switch ( action.type) {
    // 1er caso si es verdadero el usuario
    case types.login:
        return{
          ...action.payload,
          logged:true 
        }
      
    // 2do caso si es falso el usuario   
    case types.logout:
      return {
        logged: false
      }

    // 3do maneja la excepcion retornando al stado inicial 
      default:
        return state;
  }

}