import { AppEnv } from "../enums";

const { REACT_APP_ENV } = process.env;

let baseApiUrl = "http://localhost:8000/api";

export const appEnv = REACT_APP_ENV || AppEnv.development;
export const isProd = appEnv === AppEnv.production;

if (isProd) {
  baseApiUrl = "https://api.example.com/";
}
export default baseApiUrl;
