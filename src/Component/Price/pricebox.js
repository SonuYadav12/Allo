import React, { useState, useEffect } from 'react';
import Flight from './flight.svg';

const Pricebox = (props) => {
    const [status1, setStatus1] = useState('Not selected');
    const [status2, setStatus2] = useState('Not selected');
    const [price1, setPrice1] = useState(0);
    const [price2, setPrice2] = useState(0);
    const [drink1, setDrink1] = useState('None');
    const [drink2, setDrink2] = useState('None');

    const [selected, setSelected] = useState(false);
    const [pass, setPass] = useState(0);

    useEffect(() => {
        if (pass === 1 && props.ordered) {
            setStatus1(props.ordered);
            setPrice1(props.totalPrice);
            setDrink1(props.name);
            setPass(0);
        } else if (pass === 2 && props.ordered) {
            setStatus2(props.ordered);
            setPrice2(props.totalPrice);
            setDrink2(props.name);
            setPass(0);
        }
    }, [props.ordered, props.totalPrice, props.name, pass]);

    const handleSelect = (passenger) => {
        setSelected(!selected);
        setPass(passenger);
    };

    const handleDeselect = () => {
        setStatus1('Not selected');
        setStatus2('Not selected');
        setPass(0);
        setPrice1(0);
        setPrice2(0);
        setDrink1('None');
        setDrink2('None');
    };

    return (
        <section className="mt-8 w-full sm:mb-20   sm:w-4/5 lg:w-1/3">
            <div className="">
                <div className="flex flex-col justify-center">
                    <div className="flex justify-center text-3xl font-semibold uppercase items-center mb-6">
                        <h1 className=' lg:text-2xl '>Select Meal</h1>
                    </div>
                    <p className=' ml-4  lg:text-lg opacity-40 mb-8'>Click on select and then click on passenger to assign a meal.</p>
                    <div className="border-2 border-tertiary border-l-4 border-b-0 h-24 lg:h-28 leading-6 lg:leading-8 p-4 lg:p-6 pl-6 lg:pl-8 mb-8">
                        <h1 className="text-xl lg:text-2xl font-semibold">Punjab-Bangalore</h1>
                        <p className="text-base lg:text-lg opacity-60">Flight duration: 3 hours</p>
                    </div>
                </div>
                <div className=" border-2 border-tertiary rounded-lg mb-8">
                    <div 
                        className={`flex justify-between items-center h-24 lg:h-28 p-6 lg:p-9 border-b-2 border-tertiary cursor-pointer transition-all duration-300 ${selected && pass === 1 ? ' bg-black text-white' : 'hover:bg-gray-500'}`} 
                        onClick={() => handleSelect(1)}
                    >
                        <p className="text-base lg:text-lg font-medium">Adult Passenger 1:</p>
                        <p className="text-base lg:text-lg">{status1} + {drink1}</p>
                    </div>
                    <div 
                        className={`flex justify-between items-center h-24 lg:h-28 p-6 lg:p-9 border-b-2 border-tertiary cursor-pointer transition-all duration-300 ${selected && pass === 1 ? 'bg-black text-white' : 'hover:bg-gray-500'}`} 
                        onClick={() => handleSelect(2)}
                    >
                        <p className=" lg:text-lg font-medium">Adult Passenger 2:</p>
                        <p className=" lg:text-lg">{status2} + {drink2}</p>
                    </div>
                    <div className="flex justify-center p-6 lg:p-8">
                        <button 
                            className="px-6 lg:px-8 py-2 border-2 border-tertiary font-bold text-base lg:text-lg rounded-lg transition-all duration-300 hover:bg-black hover:text-white" 
                            onClick={handleDeselect}
                        >
                            Deselect
                        </button>
                    </div>
                </div>
                <div className=" text-center">
                    <p className="text-lg lg:text-xl font-semibold">Total for all passengers: <span className="text-2xl lg:text-3xl ml-6 lg:ml-12 font-bold">${(Number(price1) + Number(price2)).toFixed(2)}</span></p>
                </div>
            </div>
        </section>
    );
};

export default Pricebox;
