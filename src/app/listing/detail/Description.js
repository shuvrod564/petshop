import Image from 'next/image'
import React from 'react'

const gallery = [
    { url: "/images/products/gallery/A_Content_Amazon_1.png", },
    { url: "/images/products/gallery/A_Content_Amazon_2.png", },
    { url: "/images/products/gallery/A_Content_Amazon_4.png", },
    { url: "/images/products/gallery/A_Content_Amazon_3.png", },
    { url: "/images/products/gallery/A_Content_Amazon_5.png", },
    { url: "/images/products/gallery/A_Content_Amazon_6.png", },
    { url: "/images/products/gallery/A_Content_Amazon_7.png", },
    { url: "/images/products/gallery/A_Content_Amazon_8.png", },
]

export function Description(props) {
    

    return (
        <>
            <div className="text-dark mt-8 md:mt-12">
                <h2 className=" text-xl md:text-2xl font-bold text-dark border-b border-border-color pb-4 mb-5">Description</h2>
                <p>
                    You love your dog and want the best for them. That&apos;s why we&apos;re thrilled to introduce you to Patly Baked Dry Food for Dogs - the new revolution in your dog&apos;s diet. Our Oven Baked Dry Food is the outcome of more than a year of intensive research, dedicated to making sure your dog lives a long and happy life. It&apos;s a wholesome and nutritious meal for every day, made with only the finest ingredients that support your dog&apos;s overall well-being.
                </p>

                <h3 className="text-base md:text-lg font-medium text-dark mb-2.5 mt-5">Key Features:</h3>
                <ul className="flex flex-col gap-1.5 list-disc pl-4">
                    <li><span className="font-medium">Improves Gut Health:</span> Our formula is designed to promote healthy digestion and overall gut well-being in your dog.</li>
                    <li><span className="font-medium">Boosts Energy Levels:</span> We understand the importance of your dog&apos;s vitality, and our food is created to give them the energy they need for their daily adventures.</li>
                    <li><span className="font-medium">Strengthens Bones & Teeth:</span> Healthy bones and teeth are crucial, and our food contains ingredients that contribute to their well-being.</li>
                    <li><span className="font-medium">Builds Strong Muscles:</span> We want your dog to be strong and active, and our formula includes components that support muscle development.</li>
                    <li><span className="font-medium">Enhances Skin & Coat:</span> A shiny coat and healt hy skin are signs of well-being. Our food helps maintain these crucial aspects of your dog&apos;s health.</li>
                    <li><span className="font-medium">Supports Heart Health:</span> Your dog&apos;s heart is important, and our formula includes ingredients that promote cardiovascular health.</li>
                </ul>

                <h3 className="text-base md:text-lg font-medium text-dark mb-2.5 mt-5">Ingredients:</h3>
                <p>
                    Our recipe features high-quality, 100% human-grade chicken, eggs, and chicken liver. We also include fresh freeze-dried veggies like sweet potato, beetroot, carrot, green beans, and pumpkin, providing your dog with essential nutrients and flavors. Organic spices like cinnamon, rosemary, and ginger add a delightful touch. Plus, our formula is enriched with essential vitamins and minerals.
                </p>

                <h3 className="text-base md:text-lg font-medium text-dark mb-2.5 mt-5">Transition to Henlo Baked Dry Food:</h3>
                <p className="mb-4">
                    Switching your dog to a new food should be done gradually for their comfort and digestive health. Here&apos;s a simple 8-day transition plan -
                </p>


                <ul className="flex flex-col gap-1.5 list-disc pl-4 mb-4">
                    <li>Day 1-3: Add 1/4th of Henlo to 3/4th of their existing dry food.</li>
                    <li>Day 3-5: Mix equal amounts of Henlo and their current dry food.</li>
                    <li>Day 6-7: Use 3/4th of Henlo and 1/4th of their existing dry food.</li>
                    <li>Day 8: Transition to 100% Henlo Baked Dry Food for your dog to enjoy the full benefits of this nutritious and delicious meal.</li> 
                </ul>

                <p className="mb-4"> 
                    Our formula is proudly Made in India with love at our state-of-the-art Production Centre. It&apos;s certified and recommended by expert veterinarians, and it meets the global AAFCO and FEDIAF guidelines for pet nutrition.
                </p>
                <p> 
                    Give your dog the gift of a healthier and happier life with Henlo Baked Dry Food for Adult Dogs. We believe your dog will instantly fall in love with it, and you&apos;ll see the positive changes in their well-being.
                </p>


                <div className="mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                        {
                            gallery.map((item, index)=>{
                                return (
                                    <div key={index}>
                                        <Image
                                            src={item.url}
                                            width={630} height={300}
                                            alt="Gallery Product Thumbnail"
                                            className="w-full h-auto aspect-[21/9] object-cover"
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <h2 className="mt-8 md:mt-12 text-xl md:text-2xl font-bold text-dark border-b border-border-color pb-4 mb-5">Manufacturer Details</h2>
                <ul className="flex flex-col gap-1.5 list-disc pl-4 mb-4"> 
                    <li><span className="font-medium">SKU:</span> DFODF0008HN</li>
                    <li><span className="font-medium">Country of Origin:</span> India</li>
                    <li><span className="font-medium">Name & Address of Manufacturer:</span> &quot;Henlo Pets Private Limited Survey No 91/1, Cheemasandra, Virognagar Post, Bengaluru, Karnataka - 560049&quot;</li>
                    <li><span className="font-medium">Marketed by:</span> &quot;Henlo Pets Private Limited Survey No 91/1, Cheemasandra, Virognagar Post, Bengaluru, Karnataka - 560049&quot;</li>
                </ul>


            </div>
        </>
    )
}
