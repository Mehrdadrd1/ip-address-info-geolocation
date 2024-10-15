import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { ipApiInstance } from "../instance";

const getIpDetail = async (ipAddress: string) => {
  const data = await ipApiInstance.get(`api/json/${ipAddress}`);
  return data;
};

export const useGetIpGeolocation = () => {
  return useMutation({
    mutationKey: ["ipGeoLocation"],
    mutationFn: (ipAddress: string) => getIpDetail(ipAddress),
    onError: () => {
      toast.error("مشکلی پیش آمده‌است، لطفا مجددا تلاش کنید.");
    },
    onSuccess: (data, variables, context) => {
      console.log("🚀 ~ useGetIpGeolocation ~ data:", data);
      console.log("🚀 ~ useGetIpGeolocation ~ variables:", variables);
      console.log("🚀 ~ useGetIpGeolocation ~ context:", context);
    },
  });
};
