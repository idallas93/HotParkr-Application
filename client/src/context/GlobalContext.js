import React, { useReducer, createContext, useContext } from "react";

const GlobalContext = createContext();
const { Provider } = GlobalContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return {
        ...state,
        location: {
          longitude: action.longitude,
          latitude: action.latitude,
        },
      };
    case "DELETE_PARKS":
      return {
        ...state,
        parks: []
      };
    case "ADD_PARK":
      return {
        ...state,
        parks: [
          ...state.parks,
          {
            name: action.name,
            location: {
              address: action.address,
              latitude: action.latitude,
              longitude: action.longitude,
            },
            rating: action.rating,
            hasPoopBags: action.hasPoopBags,
            groundType: action.groundType,
          },
        ],
      };
    case "SET_ZIP":
      return {
        ...state,
        zipcode: action.zip,
      };
    case "ENABLE_LOCATION":
      return {
        ...state,
        locationEnabled: true,
      };
    case "LOGIN":
      return {
        ...state,
        email: action.email,
        apiToken: action.apiToken,
        zipcode: action.zipcode,
        location: {
          longitude: action.longitude, 
          latitude: action.latitude
        }
      };
    case "LOGOUT":
      return {
        ...state,
        email: "",
        apiToken: "",
      };
      case "FOCUS_PARK":
      return {
        ...state,
        focusIndex: action.index,
      };
    default:
      return state;
  }
};

const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    message: undefined,
    email: "",
    apiToken: "",
    locationEnabled: false,
    zipcode: "",
    parks: [],
    location: {
      longitude: "",
      latitude: "",
    },
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };
