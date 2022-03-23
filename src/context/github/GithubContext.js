import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// children is whatever we surround with the provider
export const GithubProvider = ({ children }) => {
  // make a loading state, whenever you make a request to an API, you should have a loader.
  // we set it true to begin with, once we make request and get the data we set it to false
  // will use useReducer later in place of useState
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  // put users and loading together inside initialState
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  // One context file uses a specific bespoken Reducer
  // for GithubContext here, we are only using githubReducer
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Clear users from state
  // const clearUsers = () => {
  //   dispatch({ type: "CLEAR_USERS" });
  // };

  // create a Set loading function
  // const setLoading = () => {
  //   dispatch({ type: "SET_LOADING" });
  // };

  return (
    <GithubContext.Provider
      value={{
        // users: state.users,
        // loading: state.loading,
        // user: state.user,
        // repos: state.repos,
        ...state,
        // searchUsers,
        // clearUsers,
        // getUser,
        // getUserRepos,
        dispatch,
      }}
    >
      {/* don't forget to put {children} here */}
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
