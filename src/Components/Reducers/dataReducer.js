export const dataReducer = (state = null, action) => {
  switch (action.type) {
    case "TYPICODE_DATA":
      return action.payload;
    default:
      return state;
  }
};
