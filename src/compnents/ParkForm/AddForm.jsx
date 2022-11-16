import React from "react";

function AddForm({ inputData, setInputData, handleFormSubmit }) {
  return (
    <div className="max-w-lg bg-white mx-auto p-8 rounded-md shadow-lg">
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="name" className="font-medium">
            Name
          </label>
          <input
            required
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full bg-white"
            value={inputData.name}
            onChange={(e) =>
              setInputData({ ...inputData, name: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="" className="font-medium">
            Number Plate
          </label>
          <input
            required
            type="number"
            placeholder="Number Plate"
            className="input input-bordered w-full bg-white"
            value={inputData.numberPlate}
            onChange={(e) =>
              setInputData({ ...inputData, numberPlate: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="" className="font-medium">
            Checkout Date
          </label>
          <input
            required
            type="date"
            min={`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`}
            placeholder="Number Plate"
            className="input input-bordered w-full bg-white"
            value={inputData.checkoutDate}
            onChange={(e) =>
              setInputData({ ...inputData, checkoutDate: e.target.value })
            }
          />
        </div>

        <div className="mt-6 text-center">
          <button className="btn btn-primary" type="submit">
            Park
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
