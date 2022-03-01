import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://lit-lowlands-85611.herokuapp.com/"
    : "http://localhost:3000/";

export const api = axios.create({
  baseURL: baseUrl,
});
