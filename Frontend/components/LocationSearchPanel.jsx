import React from "react";
import "remixicon/fonts/remixicon.css";
const LocationSearchPanel = (props) => {
  console.log(props);
  const locations = [
    "Dr,Ambedkar institute of technology",
    "Dr,Ambedkar institute of technology",
    "Dr,Ambedkar institute of technology",
    "Dr,Ambedkar institute of technology",
    "Dr,Ambedkar institute of technology",
    "Dr,Ambedkar institute of technology",
  ];
  return (
    <div>
      {locations.map((elem, idx) => {
        return (
          <div
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            key={idx}
            className="flex border-2 p-3 border-gray-50 active:border-black  rounded-xl gap-4 justify-start my-4  items-center"
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
      {/* {this ia a sample data} */}
    </div>
  );
};

export default LocationSearchPanel;
