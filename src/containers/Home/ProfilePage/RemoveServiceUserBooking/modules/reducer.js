import * as ActionType from "./constants";

const initialStatae = {
  loading: false,
  data: null,
  error: null,
};

const doneServiceBookingReducer = (state = initialStatae, action) => {
  switch (action.type) {
    case ActionType.DONE_SERVICE_USER_BOOKING_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.DONE_SERVICE_USER_BOOKING_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.DONE_SERVICE_USER_BOOKING_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default doneServiceBookingReducer;
