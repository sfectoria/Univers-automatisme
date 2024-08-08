import axios from "axios";

export const axiosGetWithHeaders = async (url, queries) => {
  const token = localStorage.getItem("token");
  const response = await axios.get("http://localhost:4000/" + url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response;
};

export const axiosPostWithHeaders = async (url, body) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const response = await axios.post(
    "http://localhost:4000/" + url,
    body,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return response;
};