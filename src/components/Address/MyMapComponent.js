import React, { useState, useRef, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
  Circle,
  InfoWindow,
} from "@react-google-maps/api";
import {
  updateMyAddress,
  getAddressData,
} from "../../redux/reducers/myAddress";
import * as CUSTOM from "../../utils/helper/custom";
import { Img } from "components";
import { CloseSVG } from "assets/images";
import { useDispatch, useSelector } from "react-redux";
let timer = null;
function MyMapComponent() {
  let addressData = useSelector(getAddressData);
  const dispatch = useDispatch();
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [firstLoad, setFirstLoad] = useState(false);
  const [zoom, setZoom] = useState(5);
  const [markerPosition, setMarkerPosition] = useState({
    lat: addressData?.lattitude,
    lng: addressData?.longitude,
  });
  const [searchAddress, setSearchAddress] = useState("");
  const autocompleteRef = useRef(null);
  const [markerStatus, setMarkerStatus] = useState(false);
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);
  const mapRef = useRef(null); // Add a mapRef to access the GoogleMap instance
  const mapStyles = {
    width: "100%",
    height: "500px",
  };

  const handlePlaceSelect = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      setSelectedPlace(place);
    }
  };

  useEffect(() => {
    if (mapRef.current && selectedPlace && selectedPlace.geometry) {
      const newPosition = {
        lat: selectedPlace.geometry.location.lat(),
        lng: selectedPlace.geometry.location.lng(),
      };
      setMarkerPosition(newPosition);
      if (selectedPlace.geometry.viewport) {
        mapRef.current.fitBounds(selectedPlace.geometry.viewport);
      }
    }
  }, [selectedPlace]);

  const handleMarkerDrag = (event) => {
    setMarkerPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
    setMarkerStatus(false);
  };

  const handleBoundsChanged = (e) => {
    if (mapRef.current && markerStatus == false) {
      const newCenter = mapRef.current.getCenter();
      if (newCenter) {
        if (newCenter.lat() != markerPosition.lat) {
          clearTimeout(timer);
          timer = setTimeout(() => {
            setMarkerPosition({
              lat: newCenter.lat(),
              lng: newCenter.lng(),
            });
          }, 300);
        }
      }
    }
  };

  useEffect(() => {
    if (markerPosition.lat && markerPosition.lat !== addressData?.lattitude) {
      reverseGeocode(markerPosition.lat, markerPosition.lng);
    }
  }, [markerPosition]);

  const reverseGeocode = (lat, lng) => {
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;
    fetch(geocodingUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "OK") {
          let place = data.results[0];
          const addressComponents = place.address_components;
          let streetNumber = "";
          let apartmentNumber = "";
          let city = "";
          let state = "";
          let country = "";
          let postalCode = "";
          for (const component of addressComponents) {
            const types = component.types;
            if (types.includes("street_number")) {
              streetNumber = component.long_name;
            }
            if (types.includes("subpremise")) {
              apartmentNumber = component.long_name;
            }
            if (types.includes("locality")) {
              city = component.long_name;
            }
            if (types.includes("administrative_area_level_1")) {
              state = component.long_name;
            }
            if (types.includes("country")) {
              country = component.long_name;
            }
            if (types.includes("postal_code")) {
              postalCode = component.long_name;
            }
          }
          dispatch(
            updateMyAddress({
              ...addressData,
              formatted_address: place.formatted_address,
              lattitude: lat,
              address: place.formatted_address,
              longitude: lng,
              city: city,
              building_number: streetNumber,
              state: state,
              postal_code: postalCode,
              country: country,
              floor_apartment: apartmentNumber,
              street_number: streetNumber,
            })
          );
        }
      });
  };

  const setCurrentLocation = async () => {
    let latlng = await CUSTOM.currentLocation();
    setMarkerPosition({
      lat: latlng?.lat ? latlng?.lat : markerPosition?.lat,
      lng: latlng?.lng ? latlng?.lng : markerPosition?.lng,
    });
  }

  return (
    <GoogleMap
      mapContainerStyle={mapStyles}
      // center={markerPosition}
      center={markerPosition}
      zoom={zoom}
      onLoad={(map) => {
        mapRef.current = map;
        // if (firstLoad == false && markerPosition?.lat!=process.env.REACT_APP_DEFAULT_LAT) {
        //   const geocoder = new window.google.maps.Geocoder();
        //   geocoder.geocode({ location: markerPosition }, (results, status) => {
        //     if (status === "OK" && results[0]) {
        //       let PlaceSearch = results[0];
        //       if (PlaceSearch.geometry.viewport) {
        //         mapRef.current.fitBounds(PlaceSearch.geometry.viewport);
        //       } 
        //     }
        //   });
        //   setFirstLoad(true);
        // }
        // Save the GoogleMap instance in the ref
      }}
      onBoundsChanged={(e) => {
        handleBoundsChanged(e);
      }}
      onClick={(e) => {
        handleMarkerDrag(e);
      }}
    >
      <div className="my-location-icon" onClick={(e) => {
        setCurrentLocation();
      }}></div>
      <div className="search-map-input">
        <Img
          className="cursor-pointer h-5 ltr:mr-3 rtl:ml-3 my-auto absolute top-[14px] ltr:left-[10px] rtl:right-[10px]"
          src="/images/img_search_black_900.svg"
          alt="search"
        />
        <Autocomplete
          onLoad={(autocomplete) => {
            autocompleteRef.current = autocomplete;
          }}
          options={{
            componentRestrictions: { country: "SA" },
          }}
          onPlaceChanged={handlePlaceSelect}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Enter Location"
            id="google-address-search"
            onChange={(e) => {
              setSearchAddress(e.target.value);
            }}
          />
        </Autocomplete>
        {searchAddress ? (
          <CloseSVG
            fillColor="#666666"
            className="cursor-pointer h-5 my-auto absolute ltr:right-2 rtl:left-2 top-[14px]"
            height={24}
            width={24}
            viewBox="0 0 24 24"
            onClick={(e) => {
              setSearchAddress("");
              document.getElementById("google-address-search").value = "";
            }}
          />
        ) : null}
      </div>

      {markerPosition && (
        <Marker
          position={markerPosition}
          draggable={true} // Enable marker dragging
          onDragEnd={handleMarkerDrag} // Callback function for when the marker is dragged
          onDragStart={(e) => {
            setMarkerStatus(true);
            setInfoWindowOpen(true);
          }}
          onClick={() => setInfoWindowOpen(!infoWindowOpen)}
        >
          {infoWindowOpen && (
            <InfoWindow onCloseClick={() => setInfoWindowOpen(false)}>
              <div>
                <p>{addressData?.formatted_address}</p>
                {/* You can add more address details here if needed */}
              </div>
            </InfoWindow>
          )}
        </Marker>
      )}
    </GoogleMap>
  );
}

export default MyMapComponent;
