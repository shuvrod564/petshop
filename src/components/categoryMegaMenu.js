import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi2'

const data = [
    {
        title: "Dog",
        icon: "/images/icons/dog.png",
        sublinks: [
            {
                category_name: "Dog Accessories",
                categories: [
                    { title: "collar" },
                    { title: "leash" },
                    { title: "harness" },
                    { title: "bed" },
                    { title: "crate" },
                    { title: "toys (e.g., balls, chew toys, puzzle toys)" },
                    { title: "bowls (food and water)" },
                    { title: "brush or comb" },
                    { title: "shampoo" },
                    { title: "nail clippers" },
                    { title: "treats" },
                    { title: "tags (for identification)" },
                    { title: "jackets or sweaters (for colder climates)" },
                    { title: "grooming kit" },
                    { title: "toothbrush and toothpaste (for dental care)" },
                ]
            },
            {
                category_name: "Dog Foods",
                categories: [
                    { title: "Royal Canin" },
                    { title: "Hill's Science Diet" },
                    { title: "Purina Pro Plan" },
                    { title: "Blue Buffalo" },
                    { title: "Taste of the Wild" },
                    { title: "Orijen" },
                    { title: "Wellness Core" },
                    { title: "Canidae" },
                    { title: "Nutro" },
                    { title: "Natural Balance" },
                    { title: "Merrick" },
                    { title: "Fromm" },
                    { title: "Acana" },
                    { title: "Eukanuba" },
                    { title: "Instinct" },
                ]
            },
            {
                category_name: "Treats",
                categories: [
                    { title: "Biscuits & Cookies" },
                    { title: "Dental treats" },
                    { title: "Freeze-Dried Treats" },
                    { title: "Functional & Training Treats" },
                    { title: "Jerkies" },
                    { title: "Natural Treats" },
                    { title: "Soft & Chewy Treats" },
                ]
            },
            {
                category_name: "Supplies",
                categories: [
                    { title: "Toys" },
                    { title: "Bedding" },
                    { title: "Bowls & Feeders" },
                    { title: "Cleaning & Potty" },
                    { title: "Training & Behaviour" },
                    { title: "Carriers & Travel" },
                    { title: "Grooming" },
                    { title: "Gates, Crates & Pens" },
                ]
            },
            {
                category_name: "Health Care",
                categories: [
                    { title: "Health Care Aids" },
                    { title: "Vitamins & Supplements" },
                    { title: "Flea & Tick" }
                ]
            },
 
        ]
    },
    {
        title: "Cat",
        icon: "/images/icons/cat.png",
        sublinks: [
            {
                category_name: "Cat Accessories",
                categories: [
                    { title: "Collar" },
                    { title: "Harness and Leash" },
                    { title: "harness" },
                    { title: "bed" },
                    { title: "Carrier" },
                    { title: "Scratching Post" },
                    { title: "Tree or Condo" },
                    { title: "brush or comb" },
                    { title: "shampoo" },
                    { title: "nail clippers" },
                    { title: "treats" },
                    { title: "tags (for identification)" },
                    { title: "jackets or sweaters (for colder climates)" },
                    { title: "Litter Box" },
                    { title: "Food and Water Bowls" },
                ]
            },
            {
                category_name: "Cat Foods",
                categories: [
                    { title: "Royal Canin" },
                    { title: "Hill's Science Diet" },
                    { title: "Purina Pro Plan" },
                    { title: "Blue Buffalo" },
                    { title: "Wellness" },
                    { title: "Taste of the Wild" },
                    { title: "Fancy Feast" },
                    { title: "Natural Balance" },
                    { title: "Nutro" },
                    { title: "Meow Mix" },
                    { title: "Friskies" },
                    { title: "Iams" },
                    { title: "Rachael Ray Nutrish" },
                    { title: "Orijen" },
                    { title: "Fromm" },
                ]
            },
            {
                category_name: "Treats",
                categories: [
                    { title: "Temptations" },
                    { title: "Greenies" },
                    { title: "Blue Buffalo Wilderness" },
                    { title: "Wellness Kittles" },
                    { title: "Friskies Party Mix" },
                    { title: "PureBites" },
                    { title: "Hartz Delectables" },
                    { title: "Pounce" },
                    { title: "Feline Greenies" },
                    { title: "Sheba Meaty Tender Sticks" },
                ]
            },
            {
                category_name: "Supplies",
                categories: [
                    { title: "Toys" },
                    { title: "Bedding" },
                    { title: "Bowls & Feeders" },
                    { title: "Cleaning & Potty" },
                    { title: "Training & Behaviour" },
                    { title: "Carriers & Travel" },
                    { title: "Grooming" },
                    { title: "Gates, Crates & Pens" },
                ]
            },
            {
                category_name: "Health Care",
                categories: [
                    { title: "Health Care Aids" },
                    { title: "Vitamins & Supplements" },
                    { title: "Flea & Tick" }
                ]
            },
 
        ]
    },
    {
        title: "Bird",
        icon: "/images/icons/bird.png",
        sublinks: [
            {
                category_name: "Bird Accessories",
                categories: [
                    { title: "Collar" },
                    { title: "Harness and Leash" },
                    { title: "harness" },
                    { title: "bed" },
                    { title: "Carrier" },
                    { title: "Scratching Post" },
                    { title: "Tree or Condo" },
                    { title: "brush or comb" },
                    { title: "shampoo" },
                    { title: "nail clippers" },
                    { title: "treats" },
                    { title: "tags (for identification)" },
                    { title: "jackets or sweaters (for colder climates)" },
                    { title: "Litter Box" },
                    { title: "Food and Water Bowls" },
                ]
            },
            {
                category_name: "Bird Foods",
                categories: [
                    { title: "Royal Canin" },
                    { title: "Hill's Science Diet" },
                    { title: "Purina Pro Plan" },
                    { title: "Blue Buffalo" },
                    { title: "Wellness" },
                    { title: "Taste of the Wild" },
                    { title: "Fancy Feast" },
                    { title: "Natural Balance" },
                    { title: "Nutro" },
                    { title: "Meow Mix" },
                    { title: "Friskies" },
                    { title: "Iams" },
                    { title: "Rachael Ray Nutrish" },
                    { title: "Orijen" },
                    { title: "Fromm" },
                ]
            },
            {
                category_name: "Treats",
                categories: [
                    { title: "Temptations" },
                    { title: "Greenies" },
                    { title: "Blue Buffalo Wilderness" },
                    { title: "Wellness Kittles" },
                    { title: "Friskies Party Mix" },
                    { title: "PureBites" },
                    { title: "Hartz Delectables" },
                    { title: "Pounce" },
                    { title: "Feline Greenies" },
                    { title: "Sheba Meaty Tender Sticks" },
                ]
            },
            {
                category_name: "Supplies",
                categories: [
                    { title: "Toys" },
                    { title: "Bedding" },
                    { title: "Bowls & Feeders" },
                    { title: "Cleaning & Potty" },
                    { title: "Training & Behaviour" },
                    { title: "Carriers & Travel" },
                    { title: "Grooming" },
                    { title: "Gates, Crates & Pens" },
                ]
            },
            {
                category_name: "Health Care",
                categories: [
                    { title: "Health Care Aids" },
                    { title: "Vitamins & Supplements" },
                    { title: "Flea & Tick" }
                ]
            },
 
        ]
    },
    {
        title: "Fish",
        icon: "/images/icons/Fish.png",
        sublinks: [
            {
                category_name: "Fish Accessories",
                categories: [
                    { title: "Collar" },
                    { title: "Harness and Leash" },
                    { title: "harness" },
                    { title: "bed" },
                    { title: "Carrier" },
                    { title: "Scratching Post" },
                    { title: "Tree or Condo" },
                    { title: "brush or comb" },
                    { title: "shampoo" },
                    { title: "nail clippers" },
                    { title: "treats" },
                    { title: "tags (for identification)" },
                    { title: "jackets or sweaters (for colder climates)" },
                    { title: "Litter Box" },
                    { title: "Food and Water Bowls" },
                ]
            },
            {
                category_name: "Fish Foods",
                categories: [
                    { title: "Royal Canin" },
                    { title: "Hill's Science Diet" },
                    { title: "Purina Pro Plan" },
                    { title: "Blue Buffalo" },
                    { title: "Wellness" },
                    { title: "Taste of the Wild" },
                    { title: "Fancy Feast" },
                    { title: "Natural Balance" },
                    { title: "Nutro" },
                    { title: "Meow Mix" },
                    { title: "Friskies" },
                    { title: "Iams" },
                    { title: "Rachael Ray Nutrish" },
                    { title: "Orijen" },
                    { title: "Fromm" },
                ]
            },
            {
                category_name: "Treats",
                categories: [
                    { title: "Temptations" },
                    { title: "Greenies" },
                    { title: "Blue Buffalo Wilderness" },
                    { title: "Wellness Kittles" },
                    { title: "Friskies Party Mix" },
                    { title: "PureBites" },
                    { title: "Hartz Delectables" },
                    { title: "Pounce" },
                    { title: "Feline Greenies" },
                    { title: "Sheba Meaty Tender Sticks" },
                ]
            },
            {
                category_name: "Supplies",
                categories: [
                    { title: "Toys" },
                    { title: "Bedding" },
                    { title: "Bowls & Feeders" },
                    { title: "Cleaning & Potty" },
                    { title: "Training & Behaviour" },
                    { title: "Carriers & Travel" },
                    { title: "Grooming" },
                    { title: "Gates, Crates & Pens" },
                ]
            },
            {
                category_name: "Health Care",
                categories: [
                    { title: "Health Care Aids" },
                    { title: "Vitamins & Supplements" },
                    { title: "Flea & Tick" }
                ]
            },
 
        ]
    },
    {
        title: "Rabbit",
        icon: "/images/icons/Rabbit.png",
        sublinks: [
            {
                category_name: "Dog Accessories",
                categories: [
                    { title: "Collar" },
                    { title: "Harness and Leash" },
                    { title: "harness" },
                    { title: "bed" },
                    { title: "Carrier" },
                    { title: "Scratching Post" },
                    { title: "Tree or Condo" },
                    { title: "brush or comb" },
                    { title: "shampoo" },
                    { title: "nail clippers" },
                    { title: "treats" },
                    { title: "tags (for identification)" },
                    { title: "jackets or sweaters (for colder climates)" },
                    { title: "Litter Box" },
                    { title: "Food and Water Bowls" },
                ]
            },
            {
                category_name: "Dog Foods",
                categories: [
                    { title: "Royal Canin" },
                    { title: "Hill's Science Diet" },
                    { title: "Purina Pro Plan" },
                    { title: "Blue Buffalo" },
                    { title: "Wellness" },
                    { title: "Taste of the Wild" },
                    { title: "Fancy Feast" },
                    { title: "Natural Balance" },
                    { title: "Nutro" },
                    { title: "Meow Mix" },
                    { title: "Friskies" },
                    { title: "Iams" },
                    { title: "Rachael Ray Nutrish" },
                    { title: "Orijen" },
                    { title: "Fromm" },
                ]
            },
            {
                category_name: "Treats",
                categories: [
                    { title: "Temptations" },
                    { title: "Greenies" },
                    { title: "Blue Buffalo Wilderness" },
                    { title: "Wellness Kittles" },
                    { title: "Friskies Party Mix" },
                    { title: "PureBites" },
                    { title: "Hartz Delectables" },
                    { title: "Pounce" },
                    { title: "Feline Greenies" },
                    { title: "Sheba Meaty Tender Sticks" },
                ]
            },
            {
                category_name: "Supplies",
                categories: [
                    { title: "Toys" },
                    { title: "Bedding" },
                    { title: "Bowls & Feeders" },
                    { title: "Cleaning & Potty" },
                    { title: "Training & Behaviour" },
                    { title: "Carriers & Travel" },
                    { title: "Grooming" },
                    { title: "Gates, Crates & Pens" },
                ]
            },
            {
                category_name: "Health Care",
                categories: [
                    { title: "Health Care Aids" },
                    { title: "Vitamins & Supplements" },
                    { title: "Flea & Tick" }
                ]
            },
 
        ]
    },
    {
        title: "Hen",
        icon: "/images/icons/Hen.png",
        sublinks: [
            {
                category_name: "Hen Accessories",
                categories: [
                    { title: "Collar" },
                    { title: "Harness and Leash" },
                    { title: "harness" },
                    { title: "bed" },
                    { title: "Carrier" },
                    { title: "Scratching Post" },
                    { title: "Tree or Condo" },
                    { title: "brush or comb" },
                    { title: "shampoo" },
                    { title: "nail clippers" },
                    { title: "treats" },
                    { title: "tags (for identification)" },
                    { title: "jackets or sweaters (for colder climates)" },
                    { title: "Litter Box" },
                    { title: "Food and Water Bowls" },
                ]
            },
            {
                category_name: "Hen Foods",
                categories: [
                    { title: "Royal Canin" },
                    { title: "Hill's Science Diet" },
                    { title: "Purina Pro Plan" },
                    { title: "Blue Buffalo" },
                    { title: "Wellness" },
                    { title: "Taste of the Wild" },
                    { title: "Fancy Feast" },
                    { title: "Natural Balance" },
                    { title: "Nutro" },
                    { title: "Meow Mix" },
                    { title: "Friskies" },
                    { title: "Iams" },
                    { title: "Rachael Ray Nutrish" },
                    { title: "Orijen" },
                    { title: "Fromm" },
                ]
            },
            {
                category_name: "Treats",
                categories: [
                    { title: "Temptations" },
                    { title: "Greenies" },
                    { title: "Blue Buffalo Wilderness" },
                    { title: "Wellness Kittles" },
                    { title: "Friskies Party Mix" },
                    { title: "PureBites" },
                    { title: "Hartz Delectables" },
                    { title: "Pounce" },
                    { title: "Feline Greenies" },
                    { title: "Sheba Meaty Tender Sticks" },
                ]
            },
            {
                category_name: "Supplies",
                categories: [
                    { title: "Toys" },
                    { title: "Bedding" },
                    { title: "Bowls & Feeders" },
                    { title: "Cleaning & Potty" },
                    { title: "Training & Behaviour" },
                    { title: "Carriers & Travel" },
                    { title: "Grooming" },
                    { title: "Gates, Crates & Pens" },
                ]
            },
            {
                category_name: "Health Care",
                categories: [
                    { title: "Health Care Aids" },
                    { title: "Vitamins & Supplements" },
                    { title: "Flea & Tick" }
                ]
            },
 
        ]
    },
    {
        title: "Duck",
        icon: "/images/icons/Duck.png",
        sublinks: [
            {
                category_name: "Duck Accessories",
                categories: [
                    { title: "Collar" },
                    { title: "Harness and Leash" },
                    { title: "harness" },
                    { title: "bed" },
                    { title: "Carrier" },
                    { title: "Scratching Post" },
                    { title: "Tree or Condo" },
                    { title: "brush or comb" },
                    { title: "shampoo" },
                    { title: "nail clippers" },
                    { title: "treats" },
                    { title: "tags (for identification)" },
                    { title: "jackets or sweaters (for colder climates)" },
                    { title: "Litter Box" },
                    { title: "Food and Water Bowls" },
                ]
            },
            {
                category_name: "Duck Foods",
                categories: [
                    { title: "Royal Canin" },
                    { title: "Hill's Science Diet" },
                    { title: "Purina Pro Plan" },
                    { title: "Blue Buffalo" },
                    { title: "Wellness" },
                    { title: "Taste of the Wild" },
                    { title: "Fancy Feast" },
                    { title: "Natural Balance" },
                    { title: "Nutro" },
                    { title: "Meow Mix" },
                    { title: "Friskies" },
                    { title: "Iams" },
                    { title: "Rachael Ray Nutrish" },
                    { title: "Orijen" },
                    { title: "Fromm" },
                ]
            },
            {
                category_name: "Treats",
                categories: [
                    { title: "Temptations" },
                    { title: "Greenies" },
                    { title: "Blue Buffalo Wilderness" },
                    { title: "Wellness Kittles" },
                    { title: "Friskies Party Mix" },
                    { title: "PureBites" },
                    { title: "Hartz Delectables" },
                    { title: "Pounce" },
                    { title: "Feline Greenies" },
                    { title: "Sheba Meaty Tender Sticks" },
                ]
            },
            {
                category_name: "Supplies",
                categories: [
                    { title: "Toys" },
                    { title: "Bedding" },
                    { title: "Bowls & Feeders" },
                    { title: "Cleaning & Potty" },
                    { title: "Training & Behaviour" },
                    { title: "Carriers & Travel" },
                    { title: "Grooming" },
                    { title: "Gates, Crates & Pens" },
                ]
            },
            {
                category_name: "Health Care",
                categories: [
                    { title: "Health Care Aids" },
                    { title: "Vitamins & Supplements" },
                    { title: "Flea & Tick" }
                ]
            },
 
        ]
    },
    {
        title: "Parrot",
        icon: "/images/icons/Parrot.png",
        sublinks: [
            {
                category_name: "Parrot Accessories",
                categories: [
                    { title: "Collar" },
                    { title: "Harness and Leash" },
                    { title: "harness" },
                    { title: "bed" },
                    { title: "Carrier" },
                    { title: "Scratching Post" },
                    { title: "Tree or Condo" },
                    { title: "brush or comb" },
                    { title: "shampoo" },
                    { title: "nail clippers" },
                    { title: "treats" },
                    { title: "tags (for identification)" },
                    { title: "jackets or sweaters (for colder climates)" },
                    { title: "Litter Box" },
                    { title: "Food and Water Bowls" },
                ]
            },
            {
                category_name: "Parrot Foods",
                categories: [
                    { title: "Royal Canin" },
                    { title: "Hill's Science Diet" },
                    { title: "Purina Pro Plan" },
                    { title: "Blue Buffalo" },
                    { title: "Wellness" },
                    { title: "Taste of the Wild" },
                    { title: "Fancy Feast" },
                    { title: "Natural Balance" },
                    { title: "Nutro" },
                    { title: "Meow Mix" },
                    { title: "Friskies" },
                    { title: "Iams" },
                    { title: "Rachael Ray Nutrish" },
                    { title: "Orijen" },
                    { title: "Fromm" },
                ]
            },
            {
                category_name: "Treats",
                categories: [
                    { title: "Temptations" },
                    { title: "Greenies" },
                    { title: "Blue Buffalo Wilderness" },
                    { title: "Wellness Kittles" },
                    { title: "Friskies Party Mix" },
                    { title: "PureBites" },
                    { title: "Hartz Delectables" },
                    { title: "Pounce" },
                    { title: "Feline Greenies" },
                    { title: "Sheba Meaty Tender Sticks" },
                ]
            },
            {
                category_name: "Supplies",
                categories: [
                    { title: "Toys" },
                    { title: "Bedding" },
                    { title: "Bowls & Feeders" },
                    { title: "Cleaning & Potty" },
                    { title: "Training & Behaviour" },
                    { title: "Carriers & Travel" },
                    { title: "Grooming" },
                    { title: "Gates, Crates & Pens" },
                ]
            },
            {
                category_name: "Health Care",
                categories: [
                    { title: "Health Care Aids" },
                    { title: "Vitamins & Supplements" },
                    { title: "Flea & Tick" }
                ]
            },
 
        ]
    },
]

const data2 = [
    {
        key: '1',
        facility: "Accessibility",
        facilities: [
            { key: "1", name: "Wheelchair accessible" }
        ]
    },
    {
        key: '2',
        facility: "Internet access",
        facilities: [
            { key: "1", name: "Free Wi-Fi in all rooms!" },
            { key: "2", name: "Internet" },
            { key: "3", name: "Internet services" },
            { key: "4", name: "Wi-Fi in public areas" }, 
        ]
    },
    {
        key: '3',
        facility: "Things to do, ways to relax",
        facilities: [
            { key: "1", name: "Body scrub" },
            { key: "2", name: "Body wrap" },
            { key: "3", name: "Fitness center" },
            { key: "4", name: "Foot bath" }, 
            { key: "5", name: "Game room" }, 
            { key: "6", name: "Garden" }, 
            { key: "7", name: "On-site entertainment" }, 
            { key: "8", name: "Ticket services" },  
        ]
    },
    {
        key: '4',
        facility: "Getting around",
        facilities: [
            { key: "1", name: "Airport transfer" },
            { key: "2", name: "Car park [free of charge]" },
            { key: "3", name: "Car park [nearby]" },
            { key: "4", name: "Rental car" }, 
            { key: "5", name: "Shuttle service" }, 
            { key: "6", name: "Taxi service" }, 
        ]
    },
    {
        key: '5',
        facility: "Services and conveniences",
        facilities: [
            { key: "1", name: "Air conditioning in public area" },
            { key: "2", name: "Cash withdrawal" },
            { key: "3", name: "Concierge" },
            { key: "4", name: "Contactless check-in/out" }, 
            { key: "5", name: "Convenience store" }, 
            { key: "6", name: "Currency exchange" }, 
            { key: "7", name: "Daily housekeeping" }, 
            { key: "8", name: "Doorman" }, 
            { key: "9", name: "Dry cleaning" }, 
            { key: "10", name: "Elevator" }, 
            { key: "11", name: "Facilities for disabled guests" }, 
            { key: "12", name: "Fireplace" }, 
            { key: "13", name: "Food delivery" }, 
            { key: "14", name: "Gift/souvenir shop" }, 
            { key: "15", name: "Grooming service" }, 
            { key: "16", name: "Heating in public area" }, 
            { key: "17", name: "Infirmary" }, 
            { key: "18", name: "Invoice provided" }, 
            { key: "19", name: "Ironing service" }, 
            { key: "20", name: "Laundromat" }, 
            { key: "21", name: "Laundry service" }, 
            { key: "22", name: "Lockers" }, 
            { key: "23", name: "Luggage storage" }, 
            { key: "24", name: "Meeting/banquet facilities" }, 
            { key: "25", name: "Postal service" }, 
            { key: "35", name: "Safety deposit boxes" }, 
            { key: "36", name: "Shops" }, 
            { key: "37", name: "Shrine" }, 
            { key: "38", name: "Smoke-free property" }, 
            { key: "39", name: "Smoking area" }, 
            { key: "40", name: "Terrace" }, 
            { key: "41", name: "Xerox/fax in business center" },  
        ]
    },
    {
        key: '6',
        facility: "Cleanliness and safety",
        facilities: [
            { key: "1", name: "Anti-viral cleaning products" },
            { key: "2", name: "Body thermometer" },
            { key: "3", name: "Breakfast in room" },
            { key: "4", name: "Breakfast takeaway service" }, 
            { key: "5", name: "Cashless payment service" }, 
            { key: "6", name: "Covid-19 testing service" }, 
            { key: "7", name: "Daily disinfection in all rooms" }, 
            { key: "8", name: "Daily disinfection in common areas" }, 
            { key: "9", name: "Doctor/nurse on call" }, 
            { key: "10", name: "Face coverings on staff" }, 
            { key: "11", name: "First aid kit" }, 
            { key: "12", name: "Free face masks" }, 
            { key: "13", name: "Guest rooms seal after sanitization" }, 
            { key: "14", name: "Hand sanitizer" }, 
            { key: "15", name: "Hotel room service app" }, 
            { key: "16", name: "Hot water linen and laundry washing" }, 
            { key: "17", name: "Hygiene certification" }, 
            { key: "18", name: "Individually-wrapped food options" }, 
            { key: "19", name: "Physical distancing of at least 1 meter" }, 
            { key: "20", name: "Professional-grade sanitizing services" }, 
            { key: "21", name: "Protective screens in common areas" }, 
            { key: "22", name: "Room sanitization opt-out available" }, 
            { key: "23", name: "Daily disinfection in all rooms" }, 
            { key: "24", name: "Rooms sanitized between stays" }, 
            { key: "25", name: "Safe dining setup" }, 
            { key: "26", name: "Sanitized kitchen and tableware items" }, 
            { key: "27", name: "Shared stationery removed" }, 
            { key: "28", name: "Staff trained in safety protocol" }, 
            { key: "29", name: "Sterilizing equipment" }, 
            { key: "30", name: "Temperature check for guests and staff" } 
        ]
    },
    {
        key: '7',
        facility: "Dining, drinking, and snacking",
        facilities: [
            { key: "1", name: "A la carte breakfast" },
            { key: "2", name: "Alternative meal arrangement" },
            { key: "3", name: "BBQ facilities" },
            { key: "4", name: "Bottle of water" }, 
            { key: "5", name: "Breakfast [continental]" }, 
            { key: "6", name: "Coffee shop" }, 
            { key: "7", name: "Fruits/snacks" }, 
            { key: "8", name: "Grocery delivery" }, 
            { key: "9", name: "Happy hour" }, 
            { key: "10", name: "Kitchen" }, 
            { key: "11", name: "Restaurant [halal]" }, 
            { key: "12", name: "Restaurant [kosher]" }, 
            { key: "13", name: "Room service [24-hour]" } 
        ]
    },
    {
        key: '8',
        facility: "Available in all rooms",
        facilities: [
            { key: "1", name: "Accessible by stairs" },
            { key: "2", name: "Accessible toilet" },
            { key: "3", name: "Adapted bath" },
            { key: "4", name: "Adapter" }, 
            { key: "5", name: "Additional bathroom" }, 
            { key: "6", name: "Additional toilet" }, 
            { key: "7", name: "Alarm clock" }, 
            { key: "8", name: "Baby safety gates" }, 
            { key: "9", name: "Balcony/terrace" }, 
            { key: "10", name: "Blackout curtains" }, 
            { key: "11", name: "Carpeting" }, 
            { key: "12", name: "Cleaning products" }, 
            { key: "13", name: "Closet" }, 
            { key: "14", name: "Computer" }, 
            { key: "15", name: "Concierge" }, 
            { key: "16", name: "Daily newspaper" }, 
        ]
    } 
]

export function CategoryMegaMenu() {
     
    return (
        <>
            <nav className="py-3 bg-white">
                <div className="container">
                    <ul className="flex flex-row flex-wrap justify-around relative">
                        {
                            data.map((item, index)=> {
                                return(
                                    <li key={index} className=" group">
                                        <Link href={"#"} className="block text-center text-dark text-lg">
                                            <Image
                                                src={item.icon} width={70} height={70} alt="thumb"
                                                className="mx-auto"
                                            />
                                            <span className="flex justify-center gap-1 items-center mt-1 group-hover:text-primary">
                                                {item.title} 
                                                <HiOutlineChevronDown className="group-hover:rotate-180 transition-all duration-150" />
                                            </span>
                                        </Link>
                                        {/* */}
                                        <div className="absolute top-full left-0 p-3 shadow-sm rounded-lg bg-white z-50 w-full transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible ">
                                           
                                            <div className="h-[calc(100vh-275px)] overflow-y-auto overflow-x-hidden">
                                                <div className="block lg:columns-5 md:columns-4 sm:columns-4 columns-5 gap-4"> 
                                                    {
                                                        item.sublinks.map((item)=>{
                                                            return(
                                                                <div key={item.key} className="block break-inside-avoid mb-5">
                                                                    <p className="text-black font-semibold mb-3 text-sm sm:text-base">{item.category_name}</p>
                                                                    <ul className="flex flex-col gap-3">
                                                                        {
                                                                            item.categories?.map((facility, index)=>{
                                                                                return(
                                                                                    <li key={index} className="flex items-center gap-2"> 
                                                                                        <Link href={"#"} className="text-dark hover:text-primary capitalize">{facility.title}</Link>
                                                                                    </li> 
                                                                                )
                                                                            })
                                                                        }
                                                                        
                                                                    </ul>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>

                                            </div>
                                            
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {/* container */}
            </nav>
        </>
    )
}
