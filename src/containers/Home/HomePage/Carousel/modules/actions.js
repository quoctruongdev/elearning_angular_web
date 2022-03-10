import * as ActionType from "./constants";
import { apiClient } from "../../../../../utils/apiutils";

export const actFetchAddCarousel = () => {
  return (dispatch) => {
    dispatch(actAddCarouselRequest());
    apiClient
      .get("QuanLyPhim/LayDanhSachBanner")
      .then((result) => {
        dispatch(actAddCarouselSuccess(result.data.content));
      })
      .catch((err) => {
        dispatch(actAddCarouselFailed(err));
      });
  };
};

const actAddCarouselRequest = () => {
  return {
    type: ActionType.ADD_CAROUSEL_REQUEST,
  };
};

const actAddCarouselSuccess = (data) => {
  return {
    type: ActionType.ADD_CAROUSEL_SUCCESS,
    payload: data,
  };
};

const actAddCarouselFailed = (error) => {
  return {
    type: ActionType.ADD_CAROUSEL_FAILED,
    payload: error,
  };
};
