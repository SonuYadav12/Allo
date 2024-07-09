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
    <section className="flex flex-col lg:flex-row m-2 ">
       
      <section className="flex flex-col w-full lg:w-3/4   ">
        <div className="flex flex-wrap justify-center sm:justify-normal sm:p-4 mt-2 mb-2  ">
          <div
            className={`border-2 border-light-color py-2 px-4 sm:px-14 rounded-lg m-2 cursor-pointer ${
              selectedLabel === "all"
                ? "border-tertiary bg-red-600"
                : " bg-gray-100"
            }`}
            onClick={() => handleFilter("all", "all")}
          >
            <p className="filters">All</p>
          </div>
          {food.labels.map((label) => (
            <div
              className={`border-2   border-light-color py-2 px-2 m-2 sm:px-14 rounded-lg  hover:bg-orange-400 cursor-pointer ${
                selectedLabel === label.id
                  ? "border-tertiary bg-light-color text-tertiary"
                  : ""
              }`}
              key={label.id}
              onClick={() => handleFilter(label.label.toLowerCase(), label.id)}
            >
              <p className="filterName">{label.label}</p>
            </div>
          ))}
        </div>
        <hr className=" bg-black h-0.5 w-full"/>
        <Dash items={itemsInPage} getData={handleOrderData} />
        <div className="flex justify-center lg:justify-end  p-4 sm:p-8 mb-8 rounded-b-2xl space-x-2 sm:space-x-6">
          {pageNumbers.map((number) => (
            <div
              className={`py-2 px-4 border-2 border-primary rounded-lg cursor-pointer transition-all duration-300 
                                ${
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
      <section className=" flex  justify-center">
        <Prices
          className="w-full lg:w-1/4"
          ordered={ordered}
          name={name}
          totalPrice={totalPrice}
        />
      </section>
    </section>
  );
};

export default Filter;
