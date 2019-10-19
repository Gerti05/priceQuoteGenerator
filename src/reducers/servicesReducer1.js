export default (state = [], action) => {
    switch (action.type) {
      case "FETCH_SERVICES_1":
        return action.payload;
      default:
        return state;
    }
  };