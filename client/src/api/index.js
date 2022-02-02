import axios from "axios";
import fileDownload from "js-file-download";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Axios = axios.create({ baseURL: BASE_URL });
Axios.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export const fetchSodas = () => Axios.get("/sodas");
export const fetchSoda = (sodaId) => Axios.get(`/sodas/${sodaId}`);
export const updateSodaQuantity = (sodaId, amount) => Axios.put(`/sodas/${sodaId}/${amount}`);
export const updateSoda = (sodaId, formData) => Axios.put(`/sodas/${sodaId}`, formData);

export const deleteSoda = (sodaId) => Axios.delete(`/sodas/${sodaId}`);
export const createSoda = (formData) => Axios.post("/sodas", formData);
export const downloadSoda = (sodaId, productName) =>
  Axios.get(`/sodas/download/${sodaId}`, { responseType: "blob" }).then(
    (res) => {
      fileDownload(res.data, `${productName}.json`);
    }
  );

export const signIn = (formData) => Axios.post("/users/sign-in", formData);
export const signUp = (formData) => Axios.post("/users/sign-up", formData);

export const getUser = (userId) => Axios.get(`/users/${userId}`);
export const updateUserBalance = (userId, amount) => Axios.put(`/users/${userId}/${amount}`);
