import { useState, useEffect } from "react";

export function getLocation() {
  let lat = null;
  let long = null;
  let location;
  if (navigator.geolocation) {
    // GPS를 지원하면
    navigator.geolocation.getCurrentPosition( 
      function (position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        let tempLocation = new Map(); 

        tempLocation.set("lat", lat);
        tempLocation.set("long", long);

        location = tempLocation;
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
  }
  console.log(location);
  return location;
}
