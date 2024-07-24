export const listReducer = (state, action) => {
  switch (action.type) {
  case 'ADD_ITEM':
    // eslint-disable-next-line no-case-declarations
    const extendedList = state.list.concat({ name: action.name, id: action.id });
    localStorage.setItem('list', JSON.stringify(extendedList));
    return {
      ...state,
      list: extendedList,
    };
  case 'REMOVE_ITEM':
    // eslint-disable-next-line no-case-declarations
    const reducedList = state.list.filter((item) => {
      return action.id !== item.id;
    });
    localStorage.setItem('list', JSON.stringify(reducedList));
    return {
      ...state,
      list: reducedList
    };
  case 'LIST_ITEM':
    return {
      ...state,
      list: state.list
    };
  default:
    throw new Error();
  }
};