import axios from "axios";

const URLApi = import.meta.env.VITE_BASE_URL_BACK;

export default async function API(url, objectData) {
  try {
    const response = await axios.post(`${URLApi}/account/${url}`, objectData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    sessionStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data || error.message);
  }
}
