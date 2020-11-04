export default function authHeader(storage = null) {
  let user;
  user = JSON.parse(localStorage.getItem("user"));

  if (storage) {
    user = storage.getItem("user");
  }

  if (user && user.access) {
    return { Authorization: "Bearer " + user.access };
  } else {
    return {};
  }
}
