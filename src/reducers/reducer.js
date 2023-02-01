export const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "TOGGLE":
      return !state;
    default:
      return state;
  }
};
