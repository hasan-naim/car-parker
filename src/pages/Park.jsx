import React, { useEffect, useState } from "react";
import CarCard from "../compnents/CarCard/CarCard";
import AddForm from "../compnents/ParkForm/AddForm";

function Park() {
  const [inputData, setInputData] = useState({
    name: "",
    numberPlate: 0,
    checkoutDate: "",
  });

  const [carParked, setCarParked] = useState([]);

  useEffect(() => {
    const getTheData = localStorage.getItem("car-park-list");
    if (getTheData !== null) {
      const actualData = JSON.parse(getTheData);
      setCarParked([...actualData]);
      console.log("local", actualData);
    }
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...inputData,
      checkInDate: new Date(),
      id: carParked.length + 1,
    };
    setCarParked([...carParked, data]);

    const getTheData = localStorage.getItem("car-park-list");
    if (getTheData === null) {
      localStorage.setItem("car-park-list", JSON.stringify([data]));
    } else {
      const actualData = await JSON.parse(getTheData);
      localStorage.setItem(
        "car-park-list",
        JSON.stringify([...actualData, data])
      );
    }

    setInputData({
      name: "",
      numberPlate: "",
      checkoutDate: "",
    });
    console.log(inputData);
  };
  // useEffect(() => {}, [carParked]);

  return (
    <div className="mt-8">
      <div className="container">
        <AddForm
          inputData={inputData}
          handleFormSubmit={handleFormSubmit}
          setInputData={setInputData}
        />

        {carParked.length > 0 ? (
          <>
            <div>
              <h3 className="text-center text-3xl lg:text-5xl mt-12 font-medium text-gray-800">
                There is {carParked.length} car{carParked.length > 1 ? "s" : ""}{" "}
                {carParked.length > 1 ? "are" : "is"} parked
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {carParked.map((car) => (
                  <CarCard key={car.id} carDetails={car} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-center text-3xl lg:text-5xl mt-12 font-medium text-gray-500">
              There is no car is parked
            </h3>
          </>
        )}
      </div>
    </div>
  );
}

export default Park;
