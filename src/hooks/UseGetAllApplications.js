import axios from "axios";
import useSWR from "swr";

const useGetAllApplications = () => {
  const fetcher = (url) =>
    axios
      .get(`${url}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Nesto-Candidat": "Yiqi Zhang7",
        },
      })
      .then((res) => res.data);

  const { data, error } = useSWR(
    `https://nesto-fe-exam.vercel.app/api/applications`,
    fetcher
  );

  return {
    allApplications: data,
    isApplicationsLoading: !error && !data,
    isApplicationsError: error,
  };
};

export default useGetAllApplications;
