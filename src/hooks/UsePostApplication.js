import axios from "axios";

const usePostApplication = () => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Nesto-Candidat": "Yiqi Zhang",
    },
  };

  const createMortgageApplication = (applicationID) => {
    const createApplication = {
      productId: applicationID,
    };
    return axios
      .post(
        `https://nesto-fe-exam.vercel.app/api/applications`,
        createApplication,
        config
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  };

  return {
    createMortgageApplication,
  };
};

export default usePostApplication;
