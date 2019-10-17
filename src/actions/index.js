// Takes the response from the component and passes it to the reducer.
export const fetchedZip = response => {
  return {
    type: "FETCH_ZIP",
    payload: response
  };
};
