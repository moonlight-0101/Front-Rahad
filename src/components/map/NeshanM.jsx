import React from 'react';
import NeshanMap from 'react-neshan-map-leaflet'


function NeshanM() {
  return (
    <div className="   sm:mr-0 h-[25vh] mt-10  sm:mt-8 flex items-center justify-center sm:h-[43vh] overflow-hidden sm:overflow-visible">
      <NeshanMap style={{width:"100%",height:"40vh"}} 
        options={{
          key: 'web.6f60856296aa44f9bde200e47469cce3',
          poi: true,
          traffic: false,
          center: [35.699739, 51.338097],
          zoom: 5,
        }}
        onInit={(L, myMap) => {
            let marker = L.marker([33.30905935066827, 52.434885798782396])
              .addTo(myMap)
              .bindPopup('I am a popup.');
        
            myMap.on('click', function (e) {
              marker.setLatLng(e.latlng)
              console.log(e.latlng);
              fetch("https",{
                method:"POST",
                headers:{
                "Content-Type":"application/json"
                },
                body:JSON.stringify({
                  latitude:e.latlng.lnt,
                  longitude:e.latlng.lng
                })
              })
              .then(response=>response.json())
              .then(data=>console.log(data))
              .catch(erroe=>console.log("ارور:",erroe))
            });
          }}
      />

    </div>
  );
}

export default NeshanM;