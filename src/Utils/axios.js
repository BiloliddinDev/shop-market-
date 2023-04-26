import axios from "axios";

export const instance = axios.create({
  baseURL: "https://fakestoreapi.com/",
  timeout: 10000,
});
