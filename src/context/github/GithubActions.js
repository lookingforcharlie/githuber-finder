import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// create an instance of axios we can call this whatever we want
// now we can do github.get or github.post ...
const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

// Get initial users (testing purposes)
// From 57, get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  // with axios, we don't need to do await resp.json(); stuff.
  // this just gives us the response that includes json data
  // it's going to be in an object called data
  const resp = await github.get(`/search/users?${params}`);
  return resp.data.items;
};

// Get user and repos: we combine both getUser and getUserRepos functions together by using axios
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created", // get the latest 10 items
    per_page: 10,
  });

  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ]);

  return { user: user.data, repos: repos.data };
};
