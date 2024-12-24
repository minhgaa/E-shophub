import React, { useState } from 'react';
const History = () => {
    const [selectedTab, setSelectedTab] = useState('All');
    const orders = [
        {
            id: 1,
            product: "Apple iPhone 16 Pro",
            details: "8GB, Titan Desert",
            quantity: 1,
            price: "12.999.000 VND",
            status: "On shipping",
            paid: true,
        },
        {
            id: 2,
            product: "Apple iPhone 16 Pro",
            details: "8GB, Titan Desert",
            quantity: 1,
            price: "12.999.000 VND",
            status: "On shipping",
            paid: true,
        },
        {
            id: 3,
            product: "Apple iPhone 16 Pro",
            details: "8GB, Titan Desert",
            quantity: 1,
            price: "12.999.000 VND",
            status: "On shipping",
            paid: true,
        },
    ];
    const renderOrders = () =>
        orders.map((order) => (
            <div key={order.id} className="flex w-full h-[150px] items-center p-4 mb-4 bg-white shadow-lg rounded-lg">
                <img src="src/assets/16.svg" alt="Product" className="w-[20%] h-[100%] rounded-lg mr-4" />
                <div className="flex flex-col w-full">
                    <h3 className="text-lg font-semibold">{order.product}</h3>
                    <p className="text-sm text-gray-500">{order.details}</p>
                    <p className="text-sm">Quantity: {order.quantity}</p>
                    <p className="mt-2 text-lg font-bold text-black">{order.price}</p>
                </div>
                <div className="flex flex-col w-[50%] items-end ml-4">
                    {order.paid && <p className="text-sm text-green-600 font-semibold">✔ Paid</p>}
                    <div className='flex flex-row justify-center items-center'>
                        <img src="src/assets/ship.svg" className='mr-2'></img>
                        <p className="text-sm text-gray-500">{order.status}</p>
                    </div>
                </div>
            </div>
        ));
    return (
        <div className=" w-4/5 ">
            <div className="bg-white shadow-md h-[50px] w-[80%] rounded-full justify-center flex items-center space-x-7 mb-4">
                {['All', 'Order placed', 'On shipping', 'Cancel'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setSelectedTab(tab)}
                        className={`px-4 h-[35px] w-[120px] py-2 text-sm rounded-full ${selectedTab === tab ? 'bg-black text-white' : 'text-black'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className='w-full h-full'>{renderOrders()}</div>
        </div>
    );
};

export default History;