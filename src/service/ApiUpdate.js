import axios from "axios";

const URLApi = import.meta.env.VITE_BASE_URL_BACK;

export default async function APIUPDATE(url, objectData) {
  const token = sessionStorage.getItem("token");

  try {
    const response = await axios.put(`${URLApi}/account/${url}`, objectData, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        Authorization: `Bearer ${token}`,
      },
    });
    sessionStorage.setItem("token", response.data.token);
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data || error.message);
  }
}
