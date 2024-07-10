import React, { useState } from "react";
import food from "../../asset/data.json";
import Dash from "../Home/Mainpage";
import Prices from "../Price/Pricebox.js";

const Filter = () => {
  const [items, setItems] = useState(food?.meals || []);
  const [selectedLabel, setSelectedLabel] = useState("all");

  const [currPage, setCurrPage] = useState(1);
  const itemPerPage = 3;
  const lastItemIndex = itemPerPage * currPage;
  const firstItemIndex = lastItemIndex - itemPerPage;
  const itemsInPage = items.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(items.length / itemPerPage);
  const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);

  const [ordered, setOrdered] = useState("");
  const [name, setName] = useState("");
  const [totalPrice, setTotalPrice] = useState("");

  const handleFilter = (label, id) => {
    if (label === "all") {
      setItems(food.meals);
    } else {
      const filteredItems = food.meals.filter((item) =>
        item.labels.includes(label)
      );
      setItems(filteredItems);
    }
    setSelectedLabel(id);
  };

  const changePage = (number) => {
    setCurrPage(number);
  };

  const handleOrderData = (order, dname, tprice) => {
    setOrdered(order);
    setName(dname);
    setTotalPrice(tprice);
  };

  return (
    <section className="flex flex-col lg:flex-row m-4  lg:space-x-4">
      <section className="flex flex-col w-full lg:w-3/4 bg-white p-4 rounded-lg shadow-lg">
        <div className="flex flex-wrap justify-center sm:justify-start mb-4 space-x-2">
          <div
            className={`border-2 py-2 px-4 rounded-lg cursor-pointer transition-all duration-300 ${
              selectedLabel === "all"
                ? "border-tertiary bg-red-600 text-white"
                : "bg-gray-100 hover:bg-red-600 hover:text-white"
            }`}
            onClick={() => handleFilter("all", "all")}
          >
            <p className="font-medium">All</p>
          </div>
          {food.labels.map((label) => (
            <div
              className={`border-2 py-2 px-4 rounded-lg cursor-pointer transition-all duration-300 ${
                selectedLabel === label.id
                  ? "border-tertiary bg-red-600 text-white"
                  : "bg-gray-100 hover:bg-orange-400 hover:text-white"
              }`}
              key={label.id}
              onClick={() => handleFilter(label.label.toLowerCase(), label.id)}
            >
              <p className="font-medium">{label.label}</p>
            </div>
          ))}
        </div>
        <hr className="bg-black h-0.5 mb-4" />
        <Dash items={itemsInPage} getData={handleOrderData} />
        <div className="flex justify-center lg:justify-end mt-4 space-x-2">
          {pageNumbers.map((number) => (
            <div
              className={`py-2 px-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                currPage === number
                  ? "border-tertiary text-tertiary bg-gray-200"
                  : "hover:bg-gray-100"
              }`}
              key={number}
              onClick={() => changePage(number)}
            >
              <p className="font-medium">{number}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full lg:w-1/4">
        <Prices
          ordered={ordered}
          name={name}
          totalPrice={totalPrice}
        />
      </section>
    </section>
  );
};

export default Filter;
