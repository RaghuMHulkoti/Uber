import React from "react";

const ConfirmedRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanel(false);
        }}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className=" text-xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>

      <div className="flex  gap-2 justify-between flex-col items-center">
        <img
          className="h-20"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
        <div className="w-full">
          <div>svasdv</div>
          <div>ascfas</div>
          <div>asca</div>
        </div>

        <button className="w-full mt-5 bg-green-600 text-black font-semibold p-2 rounded-lg">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
