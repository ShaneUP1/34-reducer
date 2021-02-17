/* eslint-disable max-len */
import React, { useState, useReducer } from 'react';
import reducer, { initialState } from '../../reducers/colorReducer';

// export const useRecord = (init) => {
//   const [before, setBefore] = useState([]);
//   const [current, setCurrent] = useState(init);
//   const [after, setAfter] = useState([]);

//   const undo = () => {
//     setAfter(after => [current, ...after]);
//     setCurrent(before[before.length - 1]);
//     setBefore(before => before.slice(0, -1));
//   };

//   const redo = () => {
//     setBefore(before => [...before, current]);
//     setCurrent(after[0]);
//     setAfter(after => after.slice(1));
//   };

//   const record = val => {
//     setBefore(before => [...before, current]);
//     setCurrent(val);
//   };

//   return {
//     undo,
//     record,
//     redo,
//     current,
//   };
// };

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = ({ target }) => {
    dispatch({
      type: target.id,
      payload: target.value
    });
  };

  return (
    <>
      <button id="UNDO" disabled={!state.before.length} onClick={handleChange}>undo</button>
      <button id="REDO" disabled={!state.after.length} onClick={handleChange}>redo</button>
      <label htmlFor="inputColor"> Input Color </label>
      <input id="inputColor" type="color" value={state.current} onChange={handleChange} />
      <div data-testid="display" style={{ backgroundColor: state.current, width: '10rem', height: '10rem' }}></div>
    </>
  );
}

export default App;
