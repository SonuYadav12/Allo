import React, { useState } from 'react';
import food from '../../asset/data.json';
import Wine from './Wine.jpeg';
import Juice from './Juice.png';
import Beer from './Beer.jpeg';

function Mainpage(props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [mainId, setMainId] = useState('');
    const [drinkId, setDrinkId] = useState('');
    const [toggle1, setToggle1] = useState(false);
    const [select, setSelect] = useState(true);

    const drinkImgData = [
        {
            img: Wine,
            alt: "Glass of wine"
        },
        {
            img: Juice,
            alt: "Glass of juice"
        },
        {
            img: Beer,
            alt: "Glass of beer"
        }
    ];

    const drinksData = food.meals[0].drinks;
    const drinksWithImg = drinkImgData.map((drinkImg, index) => ({ ...drinkImg, ...drinksData[index] }));

    const selectDrink = (mainId, drinkId, title, price) => {
        if (toggle1) {
            setName('');
            setPrice(0);
            setMainId('');
            setDrinkId('');
        } else {
            setName(title);
            setPrice(price);
            setMainId(mainId);
            setDrinkId(drinkId);
        }
        setToggle1(!toggle1);
    };

    const handleClick = (order, dname, tprice) => {
        props.getData(order, dname, tprice);
        setSelect(!select);
    };

    return (
        <div className="flex flex-col lg:container lg:mx-auto">
            <div className="w-full mx-auto">
                {props.items.map(data => (
                    <div className="flex flex-col md:flex-row px-4 py-6 border-b-2 border-primary lg:px-8 lg:py-12" key={data.id}>
                        <div className="flex lg:w-full flex-col rounded-lg md:flex-row m-2 lg:m-4">
                            <img className="object-cover object-center rounded-t-lg md:mr-8 mb-4 md:mb-0 w-full h-64 sm:h-96  md:h-80 lg:h-96" src={data.img} alt="Image of mentioned food" />
                            <div className="md:text-left lg:text-left flex flex-col lg:ml-8">
                                <p className="text-2xl uppercase font-semibold mb-2 lg:text-4xl">{data.title}</p>
                                <h1 className="text-gray-700 mb-4 leading-6 lg:leading-8">{data.description}</h1>
                                <div className='flex flex-col'>
                                    <p className="mb-1 uppercase"><strong>Starter:</strong> {data.starter}</p>
                                    <p className="mb-1 uppercase"><strong>Desert:</strong> {data.desert}</p>
                                    <p className="mb-1 uppercase"><strong>Selected drink:</strong> {data.id === mainId ? name : ''}</p>
                                </div>
                                <div className="flex w-full justify-between items-center lg:flex-col lg:items-center lg:justify-between mt-4">
                                    <div className="flex justify-center lg:justify-start lg:mb-4">
                                        {drinksWithImg.map(drink => (
                                            <div key={drink.id} className="mr-4 mb-4 cursor-pointer">
                                                <img
                                                    className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 border border-secondary ${mainId === data.id && drinkId === drink.id ? 'border-4 border-tertiary' : ''}`}
                                                    src={drink.img}
                                                    alt={drink.alt}
                                                    onClick={() => selectDrink(data.id, drink.id, drink.title, drink.price)}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-col lg:w-full lg:justify-between lg:flex-row  items-center lg:p-2">
                                        <h1 className="text-xl font-bold  lg:text-2xl">${(data.price + (data.id === mainId ? price : 0)).toFixed(2)}</h1>
                                        <button className="px-4 py-2 border-2 border-gray-500 font-semibold text-lg rounded-lg cursor-pointer hover:bg-black hover:text-white lg:px-8 lg:py-3" onClick={() => handleClick(data.title, name, (data.price + price).toFixed(2))}>
                                            {select ? "Select" : "Selected"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Mainpage;
