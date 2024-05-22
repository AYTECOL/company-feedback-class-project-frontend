import axios from "axios";

const URLApi = import.meta.env.VITE_BASE_URL_BACK;

export default async function APIList(url) {
    const token = localStorage.getItem("token");

    try {
        const response = await axios.get(`${URLApi}/surveys/${url}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.surveys;
    } catch (error) {
        throw new Error(error.response.data || error.message);
    }
}
