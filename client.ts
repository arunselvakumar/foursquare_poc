import axios from "axios";

const baseURL = "https://api.foursquare.com/v3";
const ApiClient = axios.create({
  baseURL,
  headers: {
    Authorization: "fsq37bPXSaW8IljjjY49FQFnQ1PcRnA2dcH0OAcnqyvB7GA=",
  },
});

export default ApiClient;
