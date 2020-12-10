import React, {useReducer, createContext, useContext} from "react"

const GlobalContext = createContext();
const { Provider } = GlobalContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return {
        ...state,
        location: {
          longitude: action.longitude,
          latitude: action.latitude
        }
      }
    case "SET_ZIP":
      return {
        ...state,
        zipcode: action.zip
      }
    case "ENABLE_LOCATION":
      return {
        ...state,
        locationEnabled: true
      }
    case "LOGIN":
      console.log(action)
      return {
        ...state,
        email: action.email,
        apiToken: action.apiToken,
        zipcode: action.zipcode
      }
    case "LOGOUT":
      console.log(action)
      return {
        ...state,
        email: "",
        apiToken: ""
      }
    default:
      return state;
  }
}

const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { 
    message: undefined,
    email: "",
    apiToken: "",
    locationEnabled: false,
    zipcode: ""
  })

  return <Provider value={[state, dispatch]} {...props} />
}

const useGlobalContext = () => {
  return useContext(GlobalContext);
}

export { GlobalProvider, useGlobalContext }