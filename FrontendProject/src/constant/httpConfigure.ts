import { AxiosRequestConfig } from "axios";

export const httpGetConfigure: AxiosRequestConfig = {
    headers: {
      "Content-Type": "application/json",
      "X-HTTP-Method-Override": "GET"
    }
};