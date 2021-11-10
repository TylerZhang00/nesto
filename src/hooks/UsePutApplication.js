import axios from "axios";

const usePutApplication = () => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Nesto-Candidat": "Yiqi Zhang7",
    },
  };

  const updateMortgageApplication = (updatedApplication) => {
    return axios
      .put(
        `https://nesto-fe-exam.vercel.app/api/applications/${updatedApplication.id}`,
        updatedApplication,
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
    updateMortgageApplication,
  };
};

export default usePutApplication;
