import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/subjects/";

export function getSubjects() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
