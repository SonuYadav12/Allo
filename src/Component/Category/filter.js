import React, { useState } from 'react'
import food from '../../asset/data.json'
import Dash from "../Home/Mainpage"
import Price from '../Price/Pricebox.js';

const Filter = () => {
    const [items, setItems] = useState(food?.meals || []);
    const [selectedLabel, setSelectedLabel] = useState('all');

    const [currPage, setCurrPage] = useState(1);
    const itemPerPage = 3;
    const lastItemIndex = itemPerPage * currPage;
    const firstItemIndex = lastItemIndex - itemPerPage;
    const itemsInPage = items.slice(firstItemIndex, lastItemIndex);
    const totalPages = Math.ceil(items.length / itemPerPage);
    const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);

    const [ordered, setOrdered] = useState('');
    const [name, setName] = useState('');
    const [totalPrice, setTotalPrice] = useState('');

    const handleFilter = (label, id) => {
        if (label === 'all') {
            setItems(food.meals);
        } else {
            const filteredItems = food.meals.filter(item => item.labels.includes(label));
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
        <section className="flex flex-col lg:flex-row m-2 rounded-lg ">
            <section className="flex flex-col w-full lg:w-3/4 bg-gradient-to-t from-black via-gray-500 to-white ">
                <div className="flex flex-wrap bg-secondary p-4 sm:p-8 mt-8 mb-4 rounded-t-2xl shadow-2xl  rounded-md">
                    <div 
                        className={`border-2 border-light-color py-2 px-4 sm:px-14 rounded-full m-2 cursor-pointer ${selectedLabel === 'all' ? 'border-tertiary bg-light-color text-tertiary' : ''}`}
                        onClick={() => handleFilter('all', 'all')}
                    >
                        <p className="filters">All</p>
                    </div>
                    {food.labels.map(label => (
                        <div 
                            className={`border-2 border-light-color py-2 px-4 sm:px-14 rounded-full m-2 cursor-pointer ${selectedLabel === label.id ? 'border-tertiary bg-light-color text-tertiary' : ''}`} 
                            key={label.id} 
                            onClick={() => handleFilter(label.label.toLowerCase(), label.id)}
                        >
                            <p className="filterName">{label.label}</p>
                        </div>
                    ))}
                </div>
                <Dash items={itemsInPage} getData={handleOrderData}/>
                <div className="flex justify-center lg:justify-end bg-secondary p-4 sm:p-8 mb-8 rounded-b-2xl">
                    {pageNumbers.map(number => (
                        <div 
                            className={`py-0.5 px-4 border-3 border-primary rounded-md cursor-pointer mr-2 sm:mr-6 ${currPage === number ? 'border-tertiary text-tertiary' : ''}`} 
                            key={number} 
                            onClick={() => changePage(number)}
                        >
                            <p>{number}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className=' bg-gradient-to-t from-black via-gray-500 to-white'>
            <Price className="w-full lg:w-1/4" ordered={ordered} name={name} totalPrice={totalPrice}/>
            </section>
        </section>
    );
};

export default Filter;
