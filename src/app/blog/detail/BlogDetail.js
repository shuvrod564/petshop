import { CommentGrayIcon, UserGrayIcon } from '@/components/common/icons'
import Link from 'next/link'
import React from 'react'

export function BlogDetail(props) {
    

    return (
        <>
            <h1 className="text-base sm:text-lg font-bold mb-4 md:mb-5">
                6 Essential Cat Products Every Cat Owners Must Have     
            </h1>
            <div className="mb-4 pb-4 md:pb-5 border-b border-border-color flex items-center">
                <div className="inline-flex text-gray items-center gap-2">
                    <UserGrayIcon className="text-gray" />
                    <span>By : <Link href={"#"} className="text-gray hover:text-primary">Onkar Nath</Link></span>
                </div>
                <div className="w-[1px] h-5 bg-border-color mx-5"></div>
                <div className="inline-flex text-gray items-center gap-2">
                    <CommentGrayIcon className="text-gray" />
                    <span>Comment : 21</span>
                </div>
            </div>

            <p>
                Did you know? Golden Retrievers are the most cherished types of breeds you&apos;ll ever see! The breed is known for their sheer intelligence which makes them excel in obedience training sessions. Owing to their quick learning skills and people pleasing nature, they are ranked 4th in the list of Top 100 Smartest Dog Breeds in the world. Their highly affectionate nature and a special fondness towards kids make them great family dogs.
            </p>

            <ul className="list-disc mb-4 ps-5">
                <li>Golden Retriever – An Intro of the Breed</li>
                <li>Origin – Scotland</li>
                <li>Weight – Male: 29 – 35 kg / Female: 25 – 29 kg</li>
                <li>Height – Male: 56 – 61 cm / Female: 51 – 56 cm</li>
                <li>Coat – Straight or moderately wavy</li>
                <li>Skin Colour – Any shades of gold or cream</li>
                <li>Life Span – 10 -12 Years </li>
            </ul>

            <p className="mb-3">
                Golden Retrievers have a wolf-like appetite. As they are a highly active breed and possess good cognitive functions, Golden Retrievers require a diet having top-notch nutrition to thrive.
            </p>

            <p className="mb-3">
                You should also know that Golden Retrievers are among those large breed dogs, whose dietary requirements change significantly as they progress in their life. To make pet parents like you well aware about the right kind of nutrition and also the feeding pattern of Golden Retrievers, we shall see below some of the best foods and feeding plan for Newborn, Puppy, Adult as well as Senior Golden Retrievers.
            </p>

            <h2 className="text-lg font-bold mb-4">Dog Food & Feeding Pattern for Golden Retrievers age-wise</h2>

            <p className="text-lg mb-3">A) For New Born (0 to 2 months)</p>
            <p> 
                A mother dog&nbsp;s milk fulfils all the nutritional demands of the pup during their first four weeks of life. If for any reason, the maternal milk is not available, the newborn Golden Retriever pups can be fed a high quality commercial puppy milk replacer, which imparts all the nutrients provided by the mother&nbsp;s milk.
            </p>
            <ul className="list-disc pl-5 mb-3"> 
                <li>Nutritional Profile of A Baby Dog Milk</li>
                <li>Omega 3 Fatty Acid: Boosts Cognitive skills and eyesight in pups.</li>
                <li>FOS Prebiotics: Keeps excellent digestive health and regulates bowel movement.</li>
                <li>Highly Digestible Proteins: Build healthy muscles and fortify the nervous system in puppies.</li>
                <li>Essential Vitamins and Anti-oxidants: Vitamins like A and D strengthens bones and joints, whereas anti-oxidants boost the overall immunity of the pups.</li>
            </ul>
            <p className="text-lg font-bold mb-3">
                Which Milk Replacer Is Ideal For Newborn Golden Retrievers?
            </p>
            <p className="mb-3"> 
                A diet like Royal Canin Baby Dog Milk has all the vital nutrients in it to support steady and harmonious growth in newborn pups. The benefits of Royal Canin Baby Dog Milk:
            </p>

            <ul className="list-disc pl-5">
                <li>Exclusive homogeneous formula makes the milk powder get dissolved instantly.</li>
                <li>Ultra-digestible proteins enhance muscle mass and bone density in pups.</li>
                <li>DHA (an Omega 3 fatty acid) promotes learning functions and excellent eyesight in pups.</li> 
            </ul>

        </>
    )
}
