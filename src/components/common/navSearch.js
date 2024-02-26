import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { useTypingText } from '../shared/UseTypeingText';

export function NavSearch(props) {
    
    const { word } = useTypingText(
        ["dog", "litters", "drools", "wishkas"],
        130,
        20
      );
    return (
        <>
            <form className="relative w-full 3xl:max-w-[450px] 2xl:max-w-[400px] lg:max-w-[300px] hidden xl:block">
                <input 
                    type="text" 
                    className="border-2 border-[#ADDFFF] rounded-md h-12 pl-8 pr-2 w-full" 
                    placeholder={`Search for ${word} `}
                />
                <FiSearch className="text-xl absolute top-1/2 left-2 -translate-y-1/2 text-dark" />
            </form>
        </>
    )
}
