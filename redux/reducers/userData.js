const initialState = {
  data: {},
  isAuthenticated: false,
  dataUserDetail: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "RESET_USERDATA":
      return {
        ...state,
        isAuthenticated: false,
        data: {},
      };
    case "STORING_USER_DATA":
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
          isAuthenticated: true,
        },
      };
    case "STORING_USER_DATA_DETAIL":
      return {
        ...state,
        dataUserDetail: {
          ...state.dataUserDetail,
          ...action.payload,
          isAuthenticated: true,
        },
      };

    default:
      return state;
  }
};
