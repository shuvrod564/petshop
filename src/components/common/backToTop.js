'use client'
import React, { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

const BackToTop = () => {
    const [showBackBtn, setBackBtn] = useState(false);
    const handleBackTop =()=> {
        document.documentElement.scrollTop=0
    }

    useEffect(()=>{
        const handleBackBtn =()=> {
            if (window.scrollY > 500) {
                setBackBtn(true);
            } else {
                setBackBtn(false);
            }

        }
        document.addEventListener('scroll', handleBackBtn)
        handleBackBtn();

        return(()=> {
            document.removeEventListener('scroll', handleBackBtn)
        })
         
    }, []);

  return (
    <>
        
        <button onClick={handleBackTop} className={`w-11 h-11 bg-primary rounded-full hidden justify-center items-center fixed bottom-20 right-6 z-50 ${showBackBtn ? '!flex' : ''}`}>
            <FiArrowUp className='text-xl lg:text-2xl text-white' />
        </button>
     
    </>
  )
}

export default BackToTop
