import axios from 'axios';
import { getToken, getDefaultLanguage, clearLocalData } from '../helper/custom'
export const globalRequest = async (
  url,
  method = "get",
  data = {},
  options = {},
  token = false
) => {
  //gloabl axios request for post get put and delete
  let headers = {
    'x-api-key': process.env.REACT_APP_API_KEY,
    'x-accept-language': getDefaultLanguage()
  };
  if (token) {
    let json = {};
    headers.authorization = "Bearer " + await getToken();
  }
  let d = {
    method: method,
    url: process.env.REACT_APP_BASEURL + url,
    headers: headers,
    ...options,
  };

  if (data) {
    d.data = data;
  }

  let resp = new Promise((resolve, reject) => {
    axios(d)
      .then((response) => {
        resolve(response)
      })
      .catch((err) => { resolve(err?.response) });
  });

  return resp.then((response) => {
    let status = response?.data?.status;
    if (status == "UNAUTHORIZED") {
      clearLocalData();
      window.location.reload();
    }
    return response;
  }).catch((error) => {
  });

};
export default globalRequest;

