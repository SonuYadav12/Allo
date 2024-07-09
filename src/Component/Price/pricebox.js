import React, { useState } from 'react'
import Flight from './flight.svg'

const Pricebox = (props) => {
    const [status1, setStatus1] = useState('Not selected');
    const [status2, setStatus2] = useState('Not selected');
    const [price1, setPrice1] = useState(0);
    const [price2, setPrice2] = useState(0);
    const [drink1, setDrink1] = useState('None');
    const [drink2, setDrink2] = useState('None');

    const [selected, setSelected] = useState(false)
    const [pass, setPass] = useState(0)

    const handleSelect = () => {
        if (pass === 1 && props.ordered !== null) {
            setStatus1(props.ordered)
            setPrice1(props.totalPrice)
            setDrink1(props.name)
            setPass(0)
        } else if (pass === 2 && props.ordered !== null){
            setStatus2(props.ordered)
            setPrice2(props.totalPrice)
            setDrink2(props.name)
            setPass(0)
        }
    }

    return (
        <>
            <section className="mt-8 ml-12 w-1/3 sm:mb-20 sm:w-4/5">
                <div className="summary">
                    <div className="infoWrapper">
                        <div className="infoHead flex">
                            <img src={Flight} alt="svg of a plane" className='rotate-90 mr-4 w-8 opacity-40' />
                            <h1 className='text-2xl font-semibold'> Select meal </h1>
                        </div>
                        <p className='text-lg opacity-40 mb-8'> Click on select and then click on passenger to assign a meal </p>
                        <div className="bg-secondary border-2 border-tertiary border-l-4 border-b-0 h-28 leading-8 p-6 pl-8 mb-8">
                            <h1 className="text-2xl font-semibold"> London - Dubai </h1>
                            <p className="text-lg opacity-60"> Flight duration: 7 hours </p>
                        </div>
                    </div>
                    <div className="bg-secondary border-2 border-tertiary mb-8">
                        <div className={`flex justify-between h-28 p-9 border-b-2 border-tertiary ${selected && pass === 1 ? 'bg-primary' : ''}`} onClick={() => {
                            setSelected(!selected)
                            setPass(1)
                            handleSelect()
                        }}>
                            <p> Adult Passenger 1: </p>
                            <p> {status1} + {drink1} </p>
                        </div>
                        <div className={`flex justify-between h-28 p-9 border-b-2 border-tertiary ${selected && pass === 2 ? 'bg-primary' : ''}`} onClick={() => {
                            setSelected(!selected)
                            setPass(2)
                            handleSelect()
                        }}>
                            <p> Adult Passenger 2: </p>
                            <p> {status2} + {drink2} </p>
                        </div>
                        <div className="flex justify-end p-8">
                            <button className="px-8 py-2 border-3 border-tertiary bg-transparent text-tertiary font-bold text-lg rounded cursor-pointer hover:bg-primary" onClick={() => {
                                setStatus1('Not selected')
                                setStatus2('Not selected')
                                setPass(0)
                                setPrice1(0)
                                setPrice2(0)
                                setDrink1('None')
                                setDrink2('None')
                            }}> Deselect </button>
                        </div>
                    </div>
                    <div className="priceWrapper">
                        <p className="text-xl font-semibold">Total for all passengers: <span className="text-3xl ml-12 font-bold"> ${(Number(price1) + Number(price2)).toFixed(2)}</span> </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricebox;
