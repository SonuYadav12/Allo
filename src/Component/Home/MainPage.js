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
    const [select,setselect]=useState(true);
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
        setselect(!select);
    };

    return (
        <div className="flex flex-col rounded-lg md:flex-row lg:container lg:mx-auto">
            <div className="w-full md:w-2/3 mx-auto">
                {props.items.map(data => (
                    <div className="flex flex-col md:flex-row lg:flex-row px-12 py-12 border-b-2 border-primary lg:px-24 lg:py-16" key={data.id}>
                        <div className="flex flex-col rounded-lg md:flex-row lg:flex-row md:items-start m-2 lg:m-4">
                            <img className="object-cover object-center rounded-t-lg md:mr-8 mb-4 md:mb-0 w-full h-96 md:w-80 md:h-128 lg:w-96 lg:h-160" src={data.img} alt="Image of mentioned food" />
                            <div className="md:text-left lg:text-left flex flex-col lg:ml-8">
                                <p className="text-4xl uppercase font-semibold mb-2 lg:text-5xl">{data.title}</p>
                                <h1 className="text-gray-700 mb-4 leading-12 lg:leading-14">{data.description}</h1>
                                <div className='flex flex-col'>
                                    <p className="mb-1 uppercase"><strong>Starter:</strong> {data.starter}</p>
                                    <p className="mb-1 uppercase"><strong>Desert:</strong> {data.desert}</p>
                                    <p className="mb-1 uppercase"><strong>Selected drink:</strong> {data.id === mainId ? name : ''}</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full rounded-lg md:w-auto md:mt-0 flex justify-between items-center lg:justify-start lg:flex-col lg:ml-8">
                            <div className="flex justify-center lg:flex-col lg:items-start lg:mb-4">
                                {drinksWithImg.map(drink => (
                                    <div key={drink.id} className="mr-4 lg:mr-0 lg:mb-4 flex  cursor-pointer">
                                        <img
                                            className={`w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 border border-secondary ${mainId === data.id && drinkId === drink.id ? 'border-4 border-tertiary' : ''}`}
                                            src={drink.img}
                                            alt={drink.alt}
                                            onClick={() => selectDrink(data.id, drink.id, drink.title, drink.price)}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 text-center lg:mt-0 lg:text-left">
                                <h1 className="text-2xl font-bold mb-2 lg:text-3xl">${(data.price + (data.id === mainId ? price : 0)).toFixed(2)}</h1>
                                <button className="px-8 py-2 border-2 border-gray-500 font-semibold text-xl rounded-lg cursor-pointer hover:bg-black hover:text-white lg:px-16 lg:py-4" onClick={() => handleClick(data.title, name, (data.price + price).toFixed(2))}>
                                    {select?"Select":"Selected"}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Mainpage;
