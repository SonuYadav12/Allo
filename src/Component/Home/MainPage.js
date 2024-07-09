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
    };

    return (
        <div className="dashboardWrapper bg-secondary p-12">
            <div className="dashboard w-2/3 md:w-full">
                {props.items.map(data => (
                    <div className="flex justify-around items-center py-12 border-b-2 border-primary first:pt-0" key={data.id}>
                        <div className=' h-96 w-80'>
                            <img className="  object-cover object-center mr-16 mb-8 md:w-full md:h-128 md:mb-0" src={data.img} alt="Image of mentioned food" />
                        </div>
                        <div className="foodInfo">
                            <p className="foodType text-lg font-bold mb-2">{data.title} + drink</p>
                            <h1 className="foodDesc text-gray-700 mb-4 leading-12">{data.description}</h1>
                            <p className="starter mb-1"><strong>Starter:</strong> {data.starter}</p>
                            <p className="desert mb-1"><strong>Desert:</strong> {data.desert}</p>
                            <p className="drinks mb-1"><strong>Selected drink:</strong> {data.id === mainId ? name : ''}</p>
                            <div className="moreInfo flex justify-between mt-8 md:block">
                                <div className=" flex">
                                    {drinksWithImg.map(drink => (
                                        <div key={drink.id}>
                                            <img
                                                className={`drinkImg w-28 h-28 mr-6 border border-secondary ${mainId === data.id && drinkId === drink.id ? 'border-4 border-tertiary' : ''}`}
                                                src={drink.img}
                                                alt={drink.alt}
                                                onClick={() => selectDrink(data.id, drink.id, drink.title, drink.price)}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="order mt-4">
                                    <h1 className="price text-2xl font-bold mb-2">${(data.price + (data.id === mainId ? price : 0)).toFixed(2)}</h1>
                                    <button className="submitBTN px-16 py-4 border-3 border-tertiary bg-transparent text-tertiary font-semibold text-xl rounded-lg cursor-pointer hover:bg-primary" onClick={() => handleClick(data.title, name, (data.price + price).toFixed(2))}>Select</button>
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
