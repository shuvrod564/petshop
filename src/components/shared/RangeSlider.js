"use client"
import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import "@/components/styles/RangeSlider.css"

export function RangeSlider(props) {
    const [minValue, set_minValue] = useState(100);
    const [maxValue, set_maxValue] = useState(1000);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };

    return (
        <> 
            <MultiRangeSlider
                min={100}
                max={1000}
                step={15}
                minValue={minValue}
                maxValue={maxValue}
                onInput={(e) => {
                    handleInput(e);
                }}
                label='false'
                ruler='false'
                barLeftColor='#D9D9D9'
                barInnerColor='#2882FF'
                barRightColor='#D9D9D9'
                thumbLeftColor='#2882FF'
                thumbRightColor='#2882FF'
                className="range"
            />

            <div className="border border-gray rounded-sm grid grid-cols-2">
                <div className="border-r border-gray p-3">
                    <span className="text-dark">${minValue}</span>
                </div>
                <div className="p-3">
                    <span className="text-dark">${maxValue}</span>
                </div>
            </div>
        </>
    )
}
