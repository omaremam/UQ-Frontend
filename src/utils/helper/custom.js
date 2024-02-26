import { object } from "prop-types";
import { format } from "date-fns";
import { addDeleteGetLocalStorage, storageKeys } from "../global/localData";
import jwt_decode from "jwt-decode";
//import moment from 'moment';
import { ONBOARDING_APIS } from "utils/helper/Enum";

export const clearLocalData = () => {
  let deviceId = getDeviceID();
  localStorage.clear();
  getDeviceID(deviceId);
}



export const generateDeviceId = (length = 35) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let deviceId = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    deviceId += characters.charAt(randomIndex);
  }
  return deviceId;
};

export const getDeviceID = (setdeviceId = "") => {
  if (setdeviceId) {
    addDeleteGetLocalStorage(storageKeys?.DEVICE_ID, setdeviceId, "add", "single");
  }
  let deviceId = addDeleteGetLocalStorage(storageKeys?.DEVICE_ID, {}, "get");
  if (!deviceId) {
    deviceId = generateDeviceId();
    addDeleteGetLocalStorage(storageKeys?.DEVICE_ID, deviceId, "add", "single");
  }
  return deviceId;
};

/**
 * get image url with base url
 */
export const getImage = (img) => {
  return img ? `${process.env.REACT_APP_BASEURL}/uploads${img}` : "";
};

/**
 * get image url with base url
 */
export const setPrice = (price = 0) => {
  return price != 0 && price ? price.toFixed(2) : 0.0;
};

/**
 * get image url with base url
 */
export const deliveryMethod = (method = "") => {
  let a = {
    home_office: "delivery",
    pickup_point: "pickup",
    buying_for_love: "gift",
  };
  return a[method] || method; // Use the method to access the value from the 'a' object
};

/**
 * get image url with base url
 */
export const isValidField = (value, type = "email") => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  if (type == "email") {
    return value ? emailRegex.test(value) : false;
  }
  if (type == "url") {
    return value ? urlPattern.test(value) : false;
  }
  if (type == "mobile") {
    return value ? value.length != 9 ? false : true : false;
  }
};

/**
 * getOff on product
 */
export const getOff = (a, s) => {
  if (a && s) {
    let total = a - s;
    if (total) {
      const percentage = (total / a) * 100;
      return percentage.toFixed(2) + "%";
    }
  }
};
/**
 * Product Price Filter
 */
export const ProductPriceFilter = () => {
  return [
    {
      min: 500,
      max: "+",
    },
    {
      min: 300,
      max: 399,
    },
    {
      min: 200,
      max: 299,
    },
    {
      min: 100,
      max: 199,
    },
  ];
};
/**
 * get current location
 */
async function getGeolocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const res = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          resolve(res);
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error("Geolocation is not supported in this browser."));
    }
  });
}
/**
 * get current location
 */
export const currentLocation = async () => {
  try {
    const res = await getGeolocation();
    return res;
  } catch (error) {
    console.error(error);
    return { lat: "", lng: "" }; // Handle errors gracefully
  }
};

export const getDefautAddress = () => {
  return {
    address: "Riyadh Saudi Arabia",
    lattitude: Number(process.env.REACT_APP_DEFAULT_LAT),
    longitude: Number(process.env.REACT_APP_DEFAULT_LNG)
  };
}

/**
 * default address params
 */
export const defaultAddressParams = (data = {}) => {
  if (Object.keys(data).length == 0) {
    return {
      id: 0,
      full_name: getLoginDataByKey("fullname"),
      mobile_no: getMobileNo(getLoginDataByKey("mobileNo"), "number"),
      formatted_address: "",
      address: "",
      city: "",
      building_number: "",
      state: "",
      postal_code: "",
      country: "",
      floor_apartment: "",
      street_number: "",
      zone_number: "1",
      lattitude: Number(process.env.REACT_APP_DEFAULT_LAT),
      longitude: Number(process.env.REACT_APP_DEFAULT_LNG),
      darglat: "",
      draglnh: "",
    };
  }
  return {
    id: data?.id,
    full_name: data?.fullName,
    mobile_no: getMobileNo(data?.mobileNo, "number"),
    formatted_address: data?.address,
    address: data?.address,
    city: "tets",
    building_number: data?.buildingNumber,
    state: "test",
    postal_code: "test",
    country: "SA",
    zone_number: "1",
    lattitude: Number(data?.lattitude),
    longitude: Number(data?.longitude),
    darglat: data?.lattitude,
    draglnh: data?.longitude,
    floor_apartment: data?.floorApartment,
    street_number: data?.streetNumber,
  };
};
/**
 * check token expire expire
 */
export function isTokenExpired(token) {
  try {
    //return true;
    const decodedToken = jwtDecode(token);
    const expirationTime = new Date(decodedToken.exp * 1000);
    const currentTime = new Date();
    return currentTime > expirationTime;
  } catch (error) {
    // If there's an error decoding the token or it's expired, return true
    return true;
  }
}

export const getLoginDataByKey = (key) => {
  let data = loginData();
  if (data?.id) {
    if (key == "fullname") {
      return data ? data?.firstName + " " + data?.lastName : "";
    }
    return data ? data[key] : "";
  }
  return "";
};

/**
 * date format change
 */
export const getCuurentDate = (formate = "ymd") => {
  const currentDate = new Date();
  if (formate == "ymd") {
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Add leading zero if needed
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  return "";
};

function formatTime(hours, minutes) {
  const period = hours < 12 ? "AM" : "PM";
  const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");
  return `${formattedHours}:${minutes} ${period}`;
}

export const minutsToHour = (minutes = 0) => {
  minutes = minutes ? Number(minutes) : "";
  var hours = Math.floor(minutes / 60);
  var remainingMinutes = minutes % 60;
  return (
    hours.toString().padStart(2, "0") +
    ":" +
    remainingMinutes.toString().padStart(2, "0")
  );
};

export const formatTimeRange = (openTime, closeTime) => {
  // Parse the input times as Date objects
  if (openTime && closeTime) {
    const openHours = parseInt(openTime.substring(0, 2));
    const openMinutes = openTime.substring(3, 5);
    const closeHours = parseInt(closeTime.substring(0, 2));
    const closeMinutes = closeTime.substring(3, 5);

    const formattedOpenTime = formatTime(openHours, openMinutes);
    const formattedCloseTime = formatTime(closeHours, closeMinutes);

    const timeRange = `${formattedOpenTime} - ${formattedCloseTime}`;

    return timeRange;
  }
  return "";
};

export const getDayOfWeek = (dateString = "") => {
  if (!dateString) {
    dateString = new Date();
  }
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(dateString);
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex].toLocaleLowerCase();
};

export const changeDateFormat = (date = "", type = "dd/MM/yy") => {
  let dates = "";
  try {
    if (!date) return;
    date = date == "cdate" ? new Date() : new Date(date);
    const formattedDate = format(date, type);
    dates = formattedDate;
  } catch (e) {
    return "error";
  }
  return dates;
};
/**
 * decode encode jwt
 */
export const jwtDecode = (value) => {
  return jwt_decode(value);
};

/**
 * decode encode jwt
 */
export const getMobileNo = (value, type = "code") => {
  try {
    if (value) {
      value = value.split("-");
      if (value?.length > 1) {
        return type == "code" ? value[0] : value[1];
      }
      return value[0];
    }
    return "";
  } catch (e) {
    return "wew43e";
  }
};

/**
 * check login or not
 */
export const loginData = () => {
  let token = addDeleteGetLocalStorage(storageKeys?.USER_TOKEN, {}, "get");
  let tokendata = token ? jwtDecode(token) : { id: 0 };
  if (Object.keys(tokendata).length !== 0) {
    return typeof tokendata?.user !== "undefined" ? tokendata?.user : { id: 0 };
  }
  return tokendata;
};
/**
 * check login or not
 */
export const getToken = async () => {
  let token = addDeleteGetLocalStorage(storageKeys?.USER_TOKEN, {}, "get");
  if (token) {
    //alert(isTokenExpired(token))
    if (isTokenExpired(token) == true) {
      try {
        const headers = {
          // Add any custom headers you need, e.g., Authorization token, API key, etc.
          Authorization: "Bearer " + token,
          "x-api-key": process.env.REACT_APP_API_KEY,
          "Content-Type": "application/json",
        };
        const requestOptions = {
          method: "GET",
          headers: headers,
        };
        const response = await fetch(
          process.env.REACT_APP_BASEURL + ONBOARDING_APIS?.REFRESH_TOKEN,
          requestOptions
        );
        const jsonData = await response.json();
        if (jsonData?.status == "SUCCESS") {
          addDeleteGetLocalStorage(
            storageKeys?.USER_TOKEN,
            jsonData?.data?.token,
            "add",
            "single"
          );
          return jsonData?.data?.token;
        } else {
          clearLocalData();
          window.location.reload();
        }
      } catch (e) {
        clearLocalData();
        window.location.reload();
      }
    }
  }
  return token;
};

/**
 * check login or not
 */
export const refreshToken = async () => {
  let token = addDeleteGetLocalStorage(storageKeys?.USER_TOKEN, {}, "get");
  if (token) {
    try {
      const headers = {
        // Add any custom headers you need, e.g., Authorization token, API key, etc.
        Authorization: "Bearer " + token,
        "x-api-key": process.env.REACT_APP_API_KEY,
        "Content-Type": "application/json",
      };
      const requestOptions = {
        method: "GET",
        headers: headers,
      };
      const response = await fetch(
        process.env.REACT_APP_BASEURL + ONBOARDING_APIS?.REFRESH_TOKEN,
        requestOptions
      );
      const jsonData = await response.json();
      if (jsonData?.status == "SUCCESS") {
        addDeleteGetLocalStorage(
          storageKeys?.USER_TOKEN,
          jsonData?.data?.token,
          "add",
          "single"
        );
      }
    } catch (e) { }
  }
};

/**
 * check login or not
 */
export const checkLoginOrNot = () => {
  let token = addDeleteGetLocalStorage(storageKeys?.USER_TOKEN, {}, "get");
  let tokendata = token ? jwtDecode(token) : {};
  if (Object.keys(tokendata).length !== 0) {
    return typeof tokendata?.user !== "undefined" ? true : false;
  }
  return false;
};

/**
 * check login or not
 */
export const replaceKeyValue = (str, key, value, type = "str") => {
  if (type == "str") {
    return str.replace(key, value);
  }
  try {
    const array = JSON.parse(value.replace(/'/g, '"'));
    const keys = JSON.parse(key.replace(/'/g, '"'));
    keys.map((item, index) => {
      str = str.replace("[" + item + "]", array[index]);
    });
  } catch (e) {
    const keys = value ? JSON.parse(value.replace(/'/g, '"')) : "";
  }
  return str;
};

/**
 * check login or not
 */
export const buildFullAddress = (address = {}) => {
  if (Object.keys(address).length !== 0) {
    return [
      address?.streetNumber,
      address?.buildingNumber,
      address?.floorApartment,
      address?.address,
    ].join(", ");
  }
  return "";
};

/**
 * trim string
 */
export const strFormat = (inputStr, type) => {
  try {
    let all = type.split("|");
    if (all.includes("trim")) {
      inputStr = inputStr.trim();
    }
    if (all.includes("number")) {
      inputStr = inputStr.replace(/[^0-9]/g, "");
    }
    if (all.includes("text")) {
      inputStr = inputStr.replace(/\d/g, ""); // This regex replaces all digits (numbers) with an empty string.
    }
    for (const formatter of all) {
      const [command, ...args] = formatter.split(":");
      switch (command) {
        case "max":
          const maxLength = parseInt(args[0]);
          if (inputStr.length > maxLength) {
            inputStr = inputStr.slice(0, maxLength);
          }
          break;
        default:
          break;
      }
    }
    inputStr = inputStr ? inputStr.replace(/^\s+/, "") : "";
  } catch (e) { }
  return inputStr;
};
/**
 * trim string
 */
export const mobileWithCountryCode = (inputStr, code = "") => {
  return code == "" ? "+966 " + inputStr : code + " " + inputStr;
};
/**
 * form validation
 */
export const validateForm = (data, type = "", t) => {
  const errors = {};
  if (type == "addAddress") {
    let mobile_error = "";
    if (!data?.mobile_no) {
      errors.mobile_no = t("mobile_no_length_error");
      mobile_error = 1;
    }
    if (mobile_error == "") {
      if (data?.mobile_no.length != 9) {
        errors.mobile_no = t("mobile_no_length_error");
      }
    }
    if (!data?.full_name) {
      errors.full_name = t("full_name_required");
    }
    if (!data?.street_number) {
      errors.street_number = t("street_number_required");
    }
    if (!data?.floor_apartment) {
      errors.floor_apartment = t("floor_apartment_required");
    }
    if (!data?.building_number) {
      errors.building_number = t("building_number_required");
    }
    if (!data?.address) {
      errors.address = t("address_is_required");
    }
  }

  if (type == "login") {
    let mobile_error = "";
    if (!data?.mobile_no) {
      errors.mobile_no = t("mobile_no_required");
      mobile_error = 1;
    }
    if (data?.mobile_no.length != 9 && mobile_error == "") {
      errors.mobile_no = t("mobile_no_length_error");
    }
  }
  if (type == "signup") {
    let mobile_error = "";
    if (!data?.mobile_no) {
      errors.mobile_no = t("mobile_no_length_error");
      mobile_error = 1;
    }
    if (!data?.email) {
      errors.email = t("please_enter_valid_email");
    }
    if (data?.email) {
      if (data?.email.length > 0 && data?.email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailRegex.test(data?.email) == false) {
          errors.email = t("please_enter_valid_email");
        }
      }
    }
    if (data?.mobile_no.length != 9 && mobile_error == "") {
      errors.mobile_no = t("mobile_no_length_error");
    }
    let first_name_error = 0;
    if (data?.first_name.length == 0) {
      errors.first_name = t("first_name_required");
      first_name_error = 1;
    }
    if (data?.first_name.length > 50 && first_name_error != 1) {
      errors.first_name = t("first_name_length_error");
    }
    let last_name_error = 0;
    if (data?.last_name.length == 0) {
      errors.last_name = t("last_name_required");
      last_name_error = 1;
    }
    if (data?.last_name.length > 50 && last_name_error != 1) {
      errors.last_name = t("last_name_length_error");
    }
    if (data?.terms_and_condition == false) {
      errors.terms = t("terms_and_condition_required");
    }
  }
  if (type == "profile") {
    let first_name_error = 0;
    if (data?.first_name.length == 0) {
      errors.first_name = t("first_name_required");
      first_name_error = 1;
    }
    if (data?.first_name.length > 50 && first_name_error != 1) {
      errors.first_name = t("first_name_length_error");
    }
    let last_name_error = 0;
    if (data?.last_name.length == 0) {
      errors.last_name = t("last_name_required");
      last_name_error = 1;
    }
    if (data?.last_name.length > 50 && last_name_error != 1) {
      errors.last_name = t("last_name_length_error");
    }
    if (data?.email.length > 0 && data?.email) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (emailRegex.test(data?.email) == false) {
        errors.email = t("please_enter_valid_email");
      }
    }
    if (data?.dob) {
      //alert();
      if (changeDateFormat(data?.dob) == "error") {
        errors.dob = t("please_enter_valid_date");
      }
    }
  }
  if (type == "otp") {
    if (data?.otp.length != 4) {
      errors.otp = t("valid_otp_error");
    }
  }
  return errors;
};
/**
 * get default language
 */
export const getDefaultLanguage = (type = "small") => {
  let ldata = localStorage.getItem("jsahdjkanbn");
  ldata = ldata == "sd5s42s3ad2sa1d3iu748923DSF" ? "AR" : "EN";
  if (type != "small") {
    return ldata;
  }
  return ldata.toLowerCase();
};

/**
 * get locale data by key
 */
export const getdataByLangKey = (data, type = "en", key = "") => {
  let newData = "";
  data?.forEach((item) => {
    if (item?.languageCode == type) newData = item[key];
  });
  return newData;
};

/**
 * category data by slug
 */
export const getCategoryDataBySlug = (getAllCatData = [], slug = "") => {
  let category = {
    name: "",
    list: [],
    id: 0,
    mainCategoryName: "",
    subcatid: 0,
  };
  for (let mainCategory of getAllCatData) {
    for (let subCategory of mainCategory?.subcategories) {
      if (subCategory?.slug.trim() == slug.trim()) {
        category = {
          list: [],
          id: subCategory?.id,
          subcatid: 0,
          list: subCategory?.subsubcategories || [],
          subcatslug: subCategory?.slug,
          mainCategoryName: getdataByLangKey(
            mainCategory?.categoryLocales,
            getDefaultLanguage(),
            "name"
          ),
          name: getdataByLangKey(
            subCategory?.categoryLocales,
            getDefaultLanguage(),
            "name"
          ),
        };
        return category;
        break;
      } else {
        for (let subsubCategory of subCategory?.subsubcategories) {
          if (subsubCategory?.slug.trim() == slug.trim()) {
            category = {
              list: subCategory?.subsubcategories,
              id: subsubCategory?.id,
              subcatid: subsubCategory?.parentId,
              subcatslug: subCategory?.slug,
              mainCategoryName: getdataByLangKey(
                mainCategory?.categoryLocales,
                getDefaultLanguage(),
                "name"
              ),
              name: getdataByLangKey(
                subCategory?.categoryLocales,
                getDefaultLanguage(),
                "name"
              ),
            };
            return category;
            break;
          }
        }
      }
    }
  }

  return category;
};
