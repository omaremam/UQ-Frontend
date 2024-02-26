import { useRef, useState } from "react";
import { Autocomplete, LoadScript } from "@react-google-maps/api";
import MyMapComponent from "./MyMapComponent";
import { render } from "react-dom";
import {
  updateMyAddress,
  getAddressData,
} from "../../redux/reducers/myAddress";
import { useDispatch, useSelector } from "react-redux";
import { Img } from "components";
import { CloseSVG } from "assets/images";
const lib = ["places"];
const key = process.env.REACT_APP_GOOGLE_API_KEY; // PUT GMAP API KEY HERE
const AutoFillAddress = (props) => {
  const [isLoad,setIsLoaded]=useState(false);
  const handleLoadScript = () => {
    setIsLoaded(true);
  };

  return (
    <LoadScript
      googleMapsApiKey={key}
      libraries={lib}
      onLoad={handleLoadScript}
    >
      {isLoad?(<MyMapComponent />):<>Loading...</>}
    </LoadScript>
  );
};

export { AutoFillAddress };
