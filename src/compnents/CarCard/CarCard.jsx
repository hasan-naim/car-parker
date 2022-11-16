import React from "react";

function CarCard({ carDetails }) {
  const { name, checkInDate, checkoutDate, numberPlate } = carDetails;
  const formateDate = (date) => {
    let newdate = date;
    if (typeof date === "string") {
      return date.slice(0, 10);
    }
    const month = newdate.getMonth() + 1;
    const day = newdate.getDate();
    const year = newdate.getFullYear();
    return `${year}-${month}-${day}`;
  };
  return (
    <div>
      <div className="w-full bg-white rounded-md p-5 space-y-2 shadow-lg">
        <h3 className="text-lg font-bold">Name: {name}</h3>
        <h3 className="text-lg font-bold">Number Plate: {numberPlate}</h3>
        <p className="font-medium">Check in: {formateDate(checkInDate)}</p>
        <p className="font-medium">Checkout: {checkoutDate}</p>
      </div>
    </div>
  );
}

export default CarCard;
