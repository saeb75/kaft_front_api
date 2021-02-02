import axios from "axios";

export const ApiFunc = () => {
  const instance = axios.create({
    baseURL: "http://localhost:5000/api/",
  });
  return instance;
};
