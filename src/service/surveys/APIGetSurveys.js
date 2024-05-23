import axios from "axios";

const URLApi = import.meta.env.VITE_BASE_URL_BACK;

export default async function APIGetSurveys({ email, surveyId }) {
    try {
        const response = await axios.get(`${URLApi}/surveys/get/${email}/${surveyId}`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data || error.message);
    }
}
