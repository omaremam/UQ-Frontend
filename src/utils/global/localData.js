import encryptDcrypt from "./encryptDcrypt";
/**
 * Save and get local data
 */
export const addDeleteGetLocalStorage = (
  name,
  dataObj = {},
  type = "add",
  addType = "multiple"
) => {
  if (type === "add") {
    if (addType === "single") {
      let en = encryptDcrypt(
        "en",
        typeof dataObj === "object" ? JSON.stringify(dataObj) : dataObj
      );
      localStorage.setItem(name, en);
    } else {
      let getItem = localStorage.getItem(name);
      if (getItem !== undefined) {
        let de = encryptDcrypt("de", getItem);
        let parse = JSON.parse(de);
        let a = Array.from(parse);
        a.push(dataObj);
        let t = encryptDcrypt("en", JSON.stringify(a));
        localStorage.setItem(name, t);
      } else {
        let en = encryptDcrypt("en", JSON.stringify([dataObj]));
        localStorage.setItem(name, en);
      }
    }
  } else if (type === "get") {
    try {
      let g = localStorage.getItem(name);
      let d = encryptDcrypt("de", g);
      return d;
    } catch (e) {
      return null;
    }
  } else if (type === "delete") {
    localStorage.removeItem(name);
  } else {
    let getItem = localStorage.getItem(name);
    if (getItem !== undefined) {
      let de = encryptDcrypt("de", getItem);
      let parse = JSON.parse(de);
      let a = Array.from(parse);
      let l = [];
      a.forEach((obj) => {
        if (dataObj.id !== obj.id) {
          l.push(obj);
        }
      });
      let t = encryptDcrypt("en", JSON.stringify(l));
      localStorage.setItem(name, t);
    } else {
      localStorage.removeItem(name);
    }
  }
};
/**
 * local data keys
 */
export const storageKeys = {
   USER_TOKEN:'shd1skjdu34',
   DEVICE_ID:'sadjlsa325323',
   DEFAULT_LANGUAGE:'jsahdjkanbn',
   SUBCATEGORY_NAME:'SJAiui89kjhsdkf',
   CART_DATA:'jlksjdsaartshdkjsa',
   CART_COUNTER:'sdsadsadsfdsfeew',
   ORDER_TAB:'sdsadsadsdsasfdsfeew',
   ORDER_TAB_ID:"oiwoehamdweqwcxdfsf",
   GUEST_ADDRESS:"kjkldsjfdskfldsl"
};
