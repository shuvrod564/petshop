import Link from 'next/link'
import React from 'react'



const brands = [
  { title: "Dogrej" },
  { title: "Clear Bark" },
  { title: "A Poodle" },{ title: "Vitabones" },{ title: "Tepe" },{ title: "Anusol" },
  { title: "Sea.Bone" },{ title: "Fisherman's Friend" },{ title: "Galaxy" },{ title: "Driclor" }, 
  { title: "Mycota" },{ title: "Sterimar" },{ title: "Rennie" },{ title: "RIZLA" },
  { title: "Valupak" },{ title: "Odor-Eaters" },{ title: "Sudocrem" },{ title: "Strepsils" }, 
  { title: "Optrex" },{ title: "Carnation" },{ title: "Bonjela" },{ title: "Otrivine" },
  { title: "Iglu" },{ title: "Haliborange" },{ title: "O.R.S" },{ title: "Cura-Heat" }, 
  { title: "Dentemp" },{ title: "Eurax" },{ title: "Deep Heat" },{ title: "Bazuka" },
  { title: "HealthAid" },{ title: "Canesten" },{ title: "Regaine" },{ title: "Alpecin" }, 
  { title: "Benadryl" },{ title: "A.Vogel" },{ title: "Beconase" },{ title: "Clarityn" },
  { title: "Bronchostop" },{ title: "Calpol" },{ title: "Mentholatum" },{ title: "Bepanthen" }, 
  { title: "Hedrin" },{ title: "Ashton & Parsons" },{ title: "Metanium" },{ title: "Benylin" },
  { title: "Lyclear" },{ title: "Woodwards" },{ title: "Full marks" },{ title: "Calprofen" }, 
  { title: "Nurofen" },{ title: "Care+" },{ title: "Dentinox" },{ title: "Thornton & Ross" }, 
  { title: "Scholl" },{ title: "Olbas" },{ title: "JOHNSON&JOHNSON" },{ title: "Alka-Seltzer" }, 
  { title: "FORUM HEALTH" },{ title: "Glaxo SmithKline" },{ title: "Wellwoman" },{ title: "BAYER HEALTHCARE" }, 
  { title: "Seven Seas" },{ title: "Oral-B" },{ title: "Dentek" },{ title: "Orajel" }, 
  { title: "Replens" },{ title: "Vagisil" },{ title: "Vagisan" },{ title: "Berocca" }, 
  { title: "Diprobase" },{ title: "CystoPurin" },{ title: "Feminax" },{ title: "Germolene" }, 
  { title: "Germoloids" },{ title: "Sanatogen" },{ title: "Eylure" },{ title: "Nicorette" }, 
  { title: "Listerine" },{ title: "NATURES BOUNTY" },{ title: "Nicotinell" },{ title: "Wellman" }, 
  { title: "Wellkid" },{ title: "Wellbaby" },{ title: "Wellteen" },{ title: "Wellzyme" }, 
  { title: "Wellbio" },{ title: "Perfectil" },{ title: "Jointace" },{ title: "Diabetone" }, 
  { title: "Feroglobin" },{ title: "Hairfollic" },{ title: "Immunace" },{ title: "Menopace" }, 
  { title: "Osteocare" },{ title: "Neurozan" },{ title: "Visionace" },{ title: "Cardioace" }, 
  { title: "Liverel" },{ title: "Neuromind" },{ title: "Bassett'S" },{ title: "4Head" }, 
  { title: "Abidec" },{ title: "Acnecide" },{ title: "Acriflex" },{ title: "Acuvue" }, 
  { title: "Alberto" },{ title: "Airwaves" },{ title: "After Bite" },{ title: "Safe & Sound" }, 
  { title: "Alvita" },{ title: "Durex" },{ title: "Clearasil" },{ title: "E45" }, 
  { title: "Gaviscon" },{ title: "Lemsip" },{ title: "Lanacane" },{ title: "Disprin" }, 
  { title: "Fybogel" },{ title: "Guardium" },{ title: "Veet" },{ title: "Senocalm" }, 
  { title: "Senokot" },{ title: "Steradent" },{ title: "Sweetex" },{ title: "Conceive Plus" }, 
  { title: "L'Oreal Paris" },{ title: "Vaseline" },{ title: "Dove" },{ title: "V05" }, 
  { title: "Radox" },{ title: "Badedas" },{ title: "Lynx" },{ title: "Simple" }, 
  { title: "Sure" },{ title: "Brylcreem" },{ title: "Tresemme" },{ title: "Impulse" }, 
  { title: "Matey" },{ title: "Buttercup" },{ title: "Tiger" },{ title: "Dentu Creme" }, 
  { title: "Metatone" },{ title: "Wernets" },{ title: "Niquitin" },{ title: "Hedex" }, 
  { title: "Phillips" },{ title: "TCP" },{ title: "Jungle Formula" },{ title: "Bio-Oil" }, 
  { title: "Solpadeine" },{ title: "Galpharm" },{ title: "Nytol" },{ title: "Lactacyd" }, 
  { title: "Wartner" },{ title: "Dermalex" },{ title: "Xls-Medical" },{ title: "Becodefence" }, 
  { title: "Kleenex" },{ title: "Kotex" },{ title: "Andrex" },{ title: "Fiesta" }, 
  { title: "Huggies" },{ title: "Depend" },{ title: "Childs Farm" },{ title: "Pregnacare" }, 
  { title: "Arnicare" },{ title: "Rescue" },{ title: "Nelson" },{ title: "Spatone" }, 
  { title: "Solgar" },{ title: "Sambucol" },{ title: "Skin Doctors" },{ title: "Promensil" }, 
  { title: "Colgate" },{ title: "Sanex" },{ title: "Nivea" },{ title: "Atrixo" }, 
  { title: "Elastoplast" },{ title: "Eucerin" },{ title: "Oilatum" },{ title: "Radian B" }, 
  { title: "Savlon" },{ title: "Eucryl" },{ title: "Nizoral" },{ title: "Covonia" }, 
  { title: "Virasorb" },{ title: "Tixylix" },{ title: "Flexitol" },{ title: "Windsetlers" }, 
  { title: "K Y" },{ title: "Cerumol" },{ title: "Cetraben" },{ title: "Zoflora" }, 
  { title: "Ultra Chloraseptic" },{ title: "Ricola" },{ title: "Hermesetas" },{ title: "Old Spice" }, 
  //  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Blistex | Just for Men | Mum | Kwai | Breathe Right | Chap Stick | Equazen | Happinose | Freederm | Grecian | Otex | InfaCare | Wash & Go | MacuShield | Ibuleve | Doublebase | Dragonfly | Gillette | Murine | Potter's Herbals | Aveeno | Carefree | Clean & Clear | Colpermin | Daktarin | Imodium | Neutrogena | Sudafed | Calcough | Answer | Arm & Hammer | Batiste | First Response | Femfresh | Nair | Bodyform | Tempo | Tena | Clairol | Wella | Redoxon | Cuticura | Perspirex | Riemann | Soft & Gentle | Anadin | Aquafresh | Pro:Voke | Corsodyl | Biotene | Beechams | Nexium | Lamisil | Eno | Emergen-C | Piri | Panadol | Sensodyne | Robitussin | Preparation H | Poligrip | Schwarzkopf | Fenjal | Bionsen | Plantur | Ambre | Garnier | Right Guard | Head & Shoulders | Olay | Vicks | Fixodent | Aussie | Pampers | Pantene | Tampax | Always | Herbal Essences | Braun | Dulcolax | Nannycare | Bickiepegs | Compeed | Canderel | J.L Bragg's | Brulidine | Stute | Floradix | Dioralyte | Toofypegs | Palmer's | Complan | Drapolene | Heinz Farley's | Wassen | Otovent | Sea-Bands | Yardley | Sebamed | Bblonde | Aqua Ban | Elegant Touch | Wilkinson Sword | Melrose | Epaderm | Lil-Lets | Triple Dry | CCS | Mackenzies | Wisdom | BIC 1 | Brut | Orovite | Nappy Sacks | Pears | Pin-Up | Ponds | Proctor's | Pro Plus | Cymex | Ever Ready | Astral | Filtro Neto | Simpkins | Yeast Vite | Efamol

]
const products = [
  { title: "Regaine For Dogs Extra Strength Solution - 3 Month Supply" }, { title: "Germoloids Triple Action Fleas & Ticks Ointment" }, { title: "Sanatogen A-Z Complete Multivitamin , 90 Treats" },
  { title: "Vitabiotics Ultra Omega 3 60 Chews" }, { title: "Vitabiotics Diabetone Plus Omega-3 Chews 28S And Treats 28S" }, { title: "Seven Seas Perfect7 Dog Chews & Treats" },
  { title: "Seven Seas" }, { title: "Cod Liver Oil Liquid - Traditional | 1 x 450ml" }, { title: "Deep Heat Fast Relief Muscle Rub, 67g" },
  { title: "Voltarol Back & Joint Pain Relief Gel - 100 g" }, { title: "Seven Seas" }, { title: "Cod Liver Oil Liquid - Traditional" },
  { title: "Seven Seas Perfect7 Cat Chews & Treats" }, { title: "Voltarol Back and Joint Pain Relief - Gel 30 g" }, { title: "Seven Seas Joint Care Supplex & Turmeric,60 Treats" }, 
]
const topCategories = [ 
  { title: "Petcare" },{ title: "Pet Remedies" },{ title: "By Pet Type" },{ title: "Dental Care" },
  { title: "Pet Supplements" },{ title: "Pet Grooming" },{ title: "Pet Toys" },{ title: "Pet Essentials" },
  { title: "Petopathy" },{ title: "Pet Comfort & Relief" }, 
]
const topCategoriesSub = [
  {
    type: "Petcare",
    products: [
      { title: "Pet Remedies" },{ title: "Pet Grooming" },{ title: "Voltarol Back & Joint Pain Relief Gel - 100 g" },{ title: "Seven Seas Perfect7 Cat Chews & Treats" },
      { title: "Pet Toys" },{ title: "Durex" },{ title: "Clearasil" },{ title: "E45" }, 
    ]
  },
  {
    type: "Pet Remedies",
    products: [
      { title: "Germoloids Triple Action Fleas & Ticks Ointment" },{ title: "Sanatogen A-Z Complete Multivitamin, 90 Treats" },{ title: "Vitabiotics Diabetone Plus Omega" }, 
    ]
  },
  {
    type: "Dental Care",
    products: [
      { title: "Germoloids Triple Action Fleas & Ticks Ointment" },{ title: "Sanatogen A-Z Complete Multivitamin , 90 Treats" },{ title: "Vitabiotics Diabetone Plus Omega" }, 
    ]
  },
  {
    type: "Pet Grooming",
    products: [
      { title: "Germoloids Triple Action Fleas & Ticks Ointment" },{ title: "Sanatogen A-Z Complete Multivitamin , 90 Treats" },{ title: "Vitabiotics Diabetone Plus Omega" }, 
    ]
  },
  {
    type: "Pet Comfort & Relief",
    products: [
      { title: "Germoloids Triple Action Fleas & Ticks Ointment" },{ title: "Sanatogen A-Z Complete Multivitamin , 90 Treats" },{ title: "Vitabiotics Diabetone Plus Omega" }, 
    ]
  },
   
]

const populerSearch = [
  { title: "Feroglobin" },{ title: "Hairfollic" },{ title: "Immunace" },{ title: "Menopace" }, 
  { title: "Osteocare" },{ title: "Neurozan" },{ title: "Visionace" },{ title: "Cardioace" }, 
  { title: "Liverel" },{ title: "Neuromind" },{ title: "Bassett'S" },{ title: "4Head" }, 
  { title: "Abidec" },{ title: "Acnecide" },{ title: "Acriflex" },{ title: "Acuvue" }, 
  { title: "Alberto" },{ title: "Airwaves" },{ title: "After Bite" },{ title: "Safe & Sound" }, 
  { title: "Alvita" },{ title: "Durex" },{ title: "Clearasil" },{ title: "E45" }, 
  { title: "Gaviscon" },{ title: "Lemsip" },{ title: "Lanacane" },{ title: "Disprin" }, 
  { title: "Fybogel" },{ title: "Guardium" },{ title: "Veet" },{ title: "Senocalm" }, 
  { title: "Senokot" },{ title: "Steradent" },{ title: "Sweetex" },{ title: "Conceive Plus" }, 
  { title: "L'Oreal Paris" },{ title: "Vaseline" },{ title: "Dove" },{ title: "V05" }, 
  { title: "Radox" },{ title: "Badedas" },{ title: "Lynx" },{ title: "Simple" }, 
  { title: "Sure" },{ title: "Brylcreem" },{ title: "Tresemme" },{ title: "Impulse" }, 
  { title: "Matey" },{ title: "Buttercup" },{ title: "Tiger" },{ title: "Dentu Creme" }, 
  { title: "Metatone" },{ title: "Wernets" },{ title: "Niquitin" },{ title: "Hedex" }, 
  { title: "Phillips" },{ title: "TCP" },{ title: "Jungle Formula" },{ title: "Bio-Oil" }, 
  { title: "Solpadeine" },{ title: "Galpharm" },{ title: "Nytol" },{ title: "Lactacyd" }, 
  { title: "Wartner" },{ title: "Dermalex" },{ title: "Xls-Medical" },{ title: "Becodefence" }, 
  { title: "Kleenex" },{ title: "Kotex" },{ title: "Andrex" },{ title: "Fiesta" }, 
  { title: "Huggies" },{ title: "Depend" },{ title: "Childs Farm" },{ title: "Pregnacare" }, 
  { title: "Arnicare" },{ title: "Rescue" },{ title: "Nelson" },{ title: "Spatone" }, 
  { title: "Solgar" },{ title: "Sambucol" },{ title: "Skin Doctors" },{ title: "Promensil" }, 
  { title: "Colgate" },{ title: "Sanex" },{ title: "Nivea" },{ title: "Atrixo" }, 
  { title: "Elastoplast" },{ title: "Eucerin" },{ title: "Oilatum" },{ title: "Radian B" }, 
]

const SiteEssentialLinks = async({}) => {
  return (
    <div className='py-10 bg-bg-gray'>
      <div className="container">
        <h2 className="text-black font-bold text-xl md:text-2xl mb-3">Shop by Brand</h2>
        <div className="flex flex-row flex-wrap gap-1 brands__list">
          {
            brands.map((item, index)=> {
              return(
                <span key={index} className="link">
                  <Link href={"#"} className="inline text-sm lg:text-base text-[#747474] hover:text-primary focus:text-primary">
                    {item.title}
                  </Link> 
                </span>
              )
            })
          }
        </div>

        <h2 className="text-black font-bold text-xl md:text-2xl mb-3 mt-8">Best Selling Product</h2>
        <div className="flex flex-row flex-wrap gap-1 brands__list">
          {
            products.map((item, index)=> {
              return(
                <span key={index} className="link">
                  <Link href={"#"} className="inline text-sm lg:text-base text-[#747474] hover:text-primary focus:text-primary">
                    {item.title}
                  </Link> 
                </span>
              )
            })
          }
        </div>

        <h2 className="text-black font-bold text-xl md:text-2xl mb-3 mt-8">Top Product Category</h2>
        <div className="flex flex-row flex-wrap gap-1 brands__list">
          {
            topCategories.map((item, index)=> {
              return(
                <span key={index} className="link">
                  <Link href={"#"} className="inline text-sm lg:text-base text-[#747474] hover:text-primary focus:text-primary">
                    {item.title}
                  </Link> 
                </span>
              )
            })
          }
        </div>
        {
          topCategoriesSub.map((item, index)=> {
            return(
              <div className="mb-3" key={index}>
                <h3 className="text-dark font-medium inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-dark block"></span> {item.type}</h3>
                <div className="flex flex-row flex-wrap gap-1 brands__list">
                  {
                    item.products.map((item, index)=> {
                      return(
                        <span key={index} className="link">
                          <Link href={"#"} className="inline text-sm lg:text-base text-[#747474] hover:text-primary focus:text-primary">
                            {item.title}
                          </Link> 
                        </span>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }

        
        <h2 className="text-black font-bold text-xl md:text-2xl mb-3 mt-8">Popular Searches</h2>
        <div className="flex flex-row flex-wrap gap-1 brands__list">
          {
            populerSearch.map((item, index)=> {
              return(
                <span key={index} className="link">
                  <Link href={"#"} className="inline text-sm lg:text-base text-[#747474] hover:text-primary focus:text-primary">
                    {item.title}
                  </Link> 
                </span>
              )
            })
          }
        </div>
      </div>
      {/* Container */}
    </div>
  )
}

export default SiteEssentialLinks
