

const filtersReducerDefaultState = {
  text: '',
};
export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_USER_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};