import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const data = [
  {
    title: "Dog Foods",
    thumbnail: "/images/products/american-bully-white-isolated-1.png",
    off: "75% Off"
  },
  {
    title: "Cat Foods",
    thumbnail: "/images/products/view-adorable-cat-eating-its-food-1.png",
    off: "69% Off"
  },
  {
    title: "Rabbit Foods",
    thumbnail: "/images/products/brown-rabbit-sits-near-plate-compound-feed-balanced-diet-food-rabbit-background-with-place-text-copy-space-1.png",
    off: "61% Off"
  },
  {
    title: "Hen Foods",
    thumbnail: "/images/products/indoors-chicken-farm-chicken-feeding-1.png",
    off: "57% Off"
  },
  {
    title: "Adult Dog Food",
    thumbnail: "/images/products/adult-dog-food.png",
    off: "Omni pet ltd"
  },
  {
    title: "HelloFresh Launches",
    thumbnail: "/images/products/HelloFresh-Launches.png",
    off: "Addiction"
  },
  {
    title: "Alternative Dog Food",
    thumbnail: "/images/products/Alternative-Dog-Food.png",
    off: "The Pets Table"
  },
  {
    title: "Pet Food Processing",
    thumbnail: "/images/products/Pet-Food-Processing.png",
    off: "Nature's Fresh"
  },
  {
    title: "HelloFresh Launches",
    thumbnail: "/images/products/7c5a348f874d34113e164c1eab98fe13.png",
    off: "Addiction"
  },
  {
    title: "Cat Foods",
    thumbnail: "/images/products/view-adorable-cat-eating-its-food-1.png",
    off: "69% Off"
  },
  {
    title: "Rabbit Foods",
    thumbnail: "/images/products/brown-rabbit-sits-near-plate-compound-feed-balanced-diet-food-rabbit-background-with-place-text-copy-space-1.png",
    off: "61% Off"
  },
  {
    title: "Hen Foods",
    thumbnail: "/images/products/indoors-chicken-farm-chicken-feeding-1.png",
    off: "57% Off"
  },
]

const TopCategoriesWidgets = ({title}) => {
  return (
    <div className="py-8 md:py-12 bg-bg-gray">
      <div className="container">
        <h2 className="text-black font-bold text-xl md:text-2xl mb-4 md:mb-8">{title}</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {
            data.map((item, index)=> {
              return(
                <div key={index}>
                  <div className="text-center">
                    <Link href={"#"} className="inline-block border-2 border-primary rounded-full" title={item.title}>
                      <Image src={item.thumbnail} width={200} height={200} alt={item.title} 
                        className="2xl:w-[191px] 2xl:h-[191px] xl:w-[150px] xl:h-[150px] lg:w-[160px] lg:h-[160px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] rounded-full mx-auto"
                      /> 
                    </Link>
                    <h3 className="text-base md:text-lg">
                      <Link href={"#"} className="text-dark hover:text-primary focus:text-primary" title={item.title}>{item.title}</Link>
                    </h3>
                    <p className="m-0 text-green">{item.off}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="text-center mt-6 md:mt-10">
          <Link href={"#"} className="btn btn-primary">View All</Link>
        </div>
      </div>
      {/* container */}
    </div>
  )
}

export default TopCategoriesWidgets
