import * as constant from "@/constant";
import axios, { AxiosResponse, AxiosError } from "axios";

export const interpretPostWithGet = (
  uri: string,
  requestBodyData: any,
  responseCallback: React.Dispatch<React.SetStateAction<any>>,
): void => {
  axios.post(
    uri,
    requestBodyData,
    constant.httpGetConfigure
  )
  .then((response: AxiosResponse) => {
    responseCallback(response.data)
  })
  .catch(
    (ex: AxiosError) => { throw new Error(ex.message) }
  );
};