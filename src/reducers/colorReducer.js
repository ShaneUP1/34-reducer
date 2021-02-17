export const initialState = {
  before: [],
  current: '#FF0000',
  after: []
};

export default function reducer(state, action) {
  const { before, current, after } = state; 
  switch(action.type) {
    case 'UNDO':
      return {
        after: [current, ...after],
        current: before[before.length - 1],
        before: before.slice(0, -1)
      };
    case 'REDO':
      return {
        before: [...before, current],
        current: after[0],
        after: after.slice(1)
      };
    case 'inputColor':
      return {
        ...state,
        before: [...before, current],
        current: action.payload
      };
  }
}
