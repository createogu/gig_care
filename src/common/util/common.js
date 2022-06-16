import { useState, useEffect } from "react";

export  function getLocation() {
  let lat = "";
  let long = "";
  const tempLocation = new Map();

  if (navigator.geolocation) {
    // GPS를 지원하면
    navigator.geolocation.getCurrentPosition(
      function (position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;

        tempLocation.set("lat", lat);
        tempLocation.set("long", long);
      },
      function (error) {
        console.error(error);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity,
      }
    );
  } else {
    alert("GPS를 지원하지 않습니다");
    return;
  };

  return tempLocation;
}

