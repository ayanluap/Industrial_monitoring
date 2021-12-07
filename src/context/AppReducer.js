// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case 'GET_TEMP':
      return {
        ...state,
        temp: state.temp,
      };
    default:
      return state;
  }
};
