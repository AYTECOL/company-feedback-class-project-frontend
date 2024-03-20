import axios from "axios";

export default async function API(url, objectData) {
  try {
    const response = await axios.post(
      `https://d5q0bzq9r5.execute-api.us-east-1.amazonaws.com/dev/v1/account/${url}`,
      {
        data: objectData,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data || error.message);
  }
}
