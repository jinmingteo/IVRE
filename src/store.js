import { createStore } from 'redux';
// import { combineReducers } from 'redux';

// const allReducers = combineReducers({
// 	users: UserReducer
// });

//actions page

const reducer = (state = {}, action) => {
  switch(action.type) {
  case 'SET_VAL':
    return {
      ...state,
      val: action.payload
      };

  case 'SET_STU_VAL':
  	return {
  		...state,
  		stuVal: action.payload
  		};
            
// Handle other actions here
default:
return state;
  }
};


const store = createStore(reducer);

export default store;
            
                