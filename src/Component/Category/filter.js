import React, { useState } from 'react';
import food from '../../asset/data.json';

const FilterBox = () => {
    const [items, setItems] = useState(food.meals);
    const [toggle1, setToggle1] = useState('all');

    const toggleBTN = (index, id) => {
        const updatedItems = food.meals.filter((item) => item.labels.includes(index));
        setItems(updatedItems);
        setToggle1(id);
    };

    return (
        <section className='flex flex-col md:flex-row'>
            <section className="dashboard">
                <div className='flex flex-wrap bg-secondary p-10 mt-8 mb-4 rounded-t-2xl'>
                    <div
                        className={`border-2 border-light-color py-2.5 px-14 rounded-full m-4 cursor-pointer hover:bg-primary ${toggle1 === 'all' ? "border-tertiary bg-light-color text-tertiary" : ""}`}
                        onClick={() => {
                            setItems(food.meals);
                            setToggle1('all');
                        }}
                    >
                        <p className="filters"> All </p>
                    </div>
                    {
                        food.labels.map((data) => (
                            <div
                                className={`border-2 border-light-color py-2.5 px-14 rounded-full m-4 cursor-pointer hover:bg-primary ${toggle1 === data.id ? "border-tertiary bg-light-color text-tertiary" : ""}`}
                                key={data.id}
                                onClick={() => toggleBTN(data.label.toLowerCase(), data.id)}
                            >
                                <p className="filterName"> {data.label} </p>
                            </div>
                        ))
                    }
                </div>
               
            </section>
        </section>
    );
};

export default FilterBox;
