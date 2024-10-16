import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { ipApiInstance } from "../instance";
import { IpDetail } from "../../Types";

const getIpDetail = async (ipAddress: string) => {
  const data = await ipApiInstance.get<IpDetail>(`api/json/${ipAddress}`);
  return data.data;
};

export const useGetIpGeolocation = () => {
  return useMutation({
    mutationKey: ["ipGeoLocation"],
    mutationFn: (ipAddress: string) => getIpDetail(ipAddress),
    onError: () => {
      toast.error("مشکلی پیش آمده‌است، لطفا مجددا تلاش کنید.");
    },
    onSuccess: (variables) => {
      toast.success(`اطلاعات مربوط به ${variables.ipAddress} پیدا شد.`);
    },
  });
};
