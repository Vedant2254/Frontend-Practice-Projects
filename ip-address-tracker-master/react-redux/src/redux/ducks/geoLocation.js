const SET_GEOLOCATION = "setGeolocation";
const SET_INITIAL = "setInitial";

export const setGeolocation = (data) => ({
  type: SET_GEOLOCATION,
  data,
});

export const setInitial = () => ({
  type: SET_INITIAL,
});

const initialState = {
  ip: "-",
  location: {
    city: "-",
    region: "-",
    country: "-",
    postalCode: "-",
    timezone: "-",
  },
  isp: "-",
};

const justTrial = function (state = initialState, action) {
  switch (action.type) {
    case SET_GEOLOCATION:
      const { data } = action;
      return data;
    case SET_INITIAL:
      return initialState;
    default:
      return state;
  }
};

export default justTrial;
