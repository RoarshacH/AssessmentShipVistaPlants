const initialState = {
  list: [],
};

export const plantReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getAll":
      return {
        ...state,
        list: [...action.payload],
      };

    case "update":
      return {
        ...state,
        list: state.list.map((x) => (x.id === action.payload.id ? action.payload : x)),
      };

    default:
      return state;
  }
};
