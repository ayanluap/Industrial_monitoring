// import { createContext, useReducer } from 'react';
// import AppReducer from './AppReducer';

// import DB from '../../Utils/firebase';
// import { getDatabase, ref, set, onValue } from 'firebase/database';

// // initial state
// const initialState = {
//   temp: 10,
//   humid: 15,
//   loading: false,
//   message: {
//     type: '',
//     text: '',
//   },
// };

// // create context
// export const GlobalContext = createContext(initialState);

// //  Provider component
// export const GlobalProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState);

//   function getTemp() {
//     dispatch({ type: 'GET_TEMP' });

//     const starCountRef = ref(DB, '/');
//     onValue(starCountRef, (snapshot) => {
//       const data = snapshot.val();
//       //   updateStarCount(postElement, data);
//     });
//   }

//   return (
//     <GlobalContext.Provider
//       value={{
//         temp: state.temp,
//         humid: state.humid,
//         getTemp,
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// };
