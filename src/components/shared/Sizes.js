import React from 'react'
import "@/components/styles/SizesStyles.css"

const data = [
    { size: "15kg (5x3kg)", offer: "15%" },
    { size: "100g",  },
    { size: "1kg",  },
    { size: "3kg",  },
    { size: "6kg (2x3kg)",  },
]

export function Sizes(props) {
    

    return (
        <>
            <div className="flex flex-wrap gap-2 5">
                {
                    data.map((item, index)=>{
                        return(
                            <div key={index} className="size__item relative">
                                {
                                    item.offer && (
                                        <span className="bg-primary text-white rounded-full w-8 h-8 text-xs font-medium flex justify-center items-center absolute -top-3 -left-3">{item.offer}</span>
                                    )
                                }
                                <input 
                                    type="radio" 
                                    name="size"
                                    className="absolute top-0 left-0 opacity-0 group"
                                    id={'size_item'+index}
                                />
                                <label 
                                    htmlFor={'size_item'+index}
                                    className="px-5 py-1 h-10 inline-flex items-center border bg-bg-gray border-border-color rounded-lg cursor-pointer"
                                    aria-label={item.size}
                                    title={item.size}
                                >{item.size}</label>
                            </div> 
                        )
                    })
                }
            </div>
        </>
    )
}
