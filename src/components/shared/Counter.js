'use client'
import React, { useState } from 'react'
import { LuMinus } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";

export function Counter({page=""}) {
    const [count, setCount] = useState(1);
    
    const handleDecrease = () => {
        setCount(prevCount => prevCount - 1); // Decrease count by 1
        if (count < 1) {
            setCount(0)
        }
    }

    const handleIncrement = () => {
    setCount(prevCount => prevCount + 1); // Increase count by 1
    }

    return (
        <>
            <div className={`inline-flex rounded-lg ${page=='cart' ? 'gap-1' : ' border border-gray'}`}>
                <button 
                    type="button"
                    onClick={handleDecrease}
                    className={`p-1 inline-flex justify-center items-center hover:text-primary focus:text-primary active:text-primary ${page=='cart' ? 'border border-border-color rounded-sm w-8 h-8' : 'w-10 h-10'}`}
                >
                    <LuMinus />
                </button>
                <input 
                    type="text" 
                    className={` text-center text-dark font-medium ${page=='cart' ? 'border border-border-color rounded-sm h-8 w-14 bg-white' : 'w-10 h-10 border-l border-r border-gray bg-bg-gray'}`}
                    value={count}
                    readOnly
                />
                <button 
                    type="button"
                    onClick={handleIncrement}
                    className={`p-1 inline-flex justify-center items-center hover:text-primary focus:text-primary active:text-primary ${page=='cart' ? 'border border-border-color rounded-sm w-8 h-8' : 'w-10 h-10'}`}
                >
                <FiPlus />
                </button>
            </div>
        </>
    )
}
