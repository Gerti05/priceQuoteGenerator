// Takes the action payload and uses it to update state.
export default (state = null, action) => {
  switch (action.type) {
    case "FETCH_ZIP":
      return action.payload;
    default:
      return state;
  }
};
