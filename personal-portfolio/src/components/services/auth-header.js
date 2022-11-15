export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return { Authorization: "Bearer " + user.token }; //Bearer authentication (also called token authentication) is an HTTP authentication scheme that involves security tokens called bearer tokens.
  } else {
    return {};
  }
}
