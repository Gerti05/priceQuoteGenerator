// Takes the response from the component and passes it to the reducer.
export const fetchedZip = promise => {
  return {
    type: "FETCH_ZIP",
    payload: promise
  };
};

export const fetchedServices1 = promise => {
  console.log(promise);
  return {
    type: "FETCH_SERVICES_1",
    payload:promise
  }
}