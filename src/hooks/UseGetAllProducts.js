import axios from "axios";
import useSWR from "swr";

const useGetAllProducts = () => {
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
    `https://nesto-fe-exam.vercel.app/api/products`,
    fetcher
  );

  return {
    allProducts: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetAllProducts;
