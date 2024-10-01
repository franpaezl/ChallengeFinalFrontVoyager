import React from "react";
import FoodCards from "../components/FoodCards";
import drink from "../assets/soft-drink.png"; // Icon for drinks
import burger from "../assets/burger.png"; // Icon for hamburgers
import fries from "../assets/potato-fries.png"; // Icon for sides
import { div } from "framer-motion/client";
import "./MenuView.css"

const imageMap = {
    Oklahoma:
        "https://res.cloudinary.com/dhojn5eon/image/upload/v1727723685/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_lthzrk.jpg",
};

// Map for icons based on the category
const iconMap = {
    burger: burger,
    drink: drink,
    frying: fries,
};

function MenuView() {
    const products = [
        {
            name: "Oklahoma",
            description: "Juicy burger with caramelized onions and cheddar cheese.",
            price: 8.99,
            ingredients: [
                "beef",
                "cheddar cheese",
                "caramelized onions",
                "burger bun",
            ],
            category: "burger",
            img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727749502/oklahoma1_kyqed5.png",
        },
        {
            name: "American",
            description:
                "Classic American burger with lettuce, tomato, and mayonnaise.",
            price: 7.49,
            ingredients: ["beef", "lettuce", "tomato", "mayonnaise", "burger bun"],
            category: "burger",
            img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727749543/american1_haeqpf.png",
        },
        {
            name: "Voyager",
            description: "Gourmet burger with avocado, bacon, and special sauce.",
            price: 9.99,
            ingredients: ["beef", "avocado", "bacon", "special sauce", "burger bun"],
            category: "burger",
            img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727749532/cheeseBuger1_trckvo.png",
        },
        {
            name: "Cheeseburger",
            description: "Delicious burger with double cheese and fresh onion.",
            price: 10.49,
            ingredients: ["beef", "double cheese", "fresh onion", "burger bun"],
            category: "burger",
            img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727749479/voyager1_wqem9z.png",
        },
        {
            name: "Cheddar Fries",
            description:
                "Crispy French fries topped with melted cheddar cheese and crispy bacon.",
            price: 5.99,
            ingredients: ["French fries", "cheddar cheese", "bacon"],
            category: "frying",
            img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727753875/papasChedarPS_xbpzmi.png",
        },
        {
            name: "Veggie Burger",
            description: "Vegetarian burger with chickpeas and avocado sauce.",
            price: 8.99,
            ingredients: ["chickpeas", "avocado sauce", "lettuce", "whole wheat bun"],
            category: "burger",
            img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727723685/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_lthzrk.jpg",
        },
        {
            name: "Coca Bottle",
            description: "Classic bottle cola soda.",
            price: 1.99,
            ingredients: ["carbonated water", "sugar", "natural flavoring"],
            category: "drink",
            img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727757754/cocaBotellaPS_bhhhao.png",
        },
        {
            name: "Coca Can",
            description: "Classic can cola soda.",
            price: 1.49,
            ingredients: ["carbonated water", "sugar", "natural flavoring"],
            category: "drink",
            img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727757755/cocaLataPS_zrwjyx.png",
        },
        {
            name: "Fanta Bottle",
            description: "Orange flavored soda in a bottle.",
            price: 1.99,
            ingredients: ["carbonated water", "sugar", "orange flavor"],
            category: "drink",
            img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727757754/fantaBotellaPS_exinu7.png",
        },
        {
            name: "Fanta Can",
            description: "Orange flavored soda in a can.",
            price: 1.49,
            ingredients: ["carbonated water", "sugar", "orange flavor"],
            category: "drink",
            img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727757753/lataFantaPS_abr5jv.png",
        },
        {
            name: "Fries",
            description: "Crispy golden French fries.",
            price: 2.99,
            ingredients: ["potatoes", "salt", "vegetable oil"],
            category: "frying",
            img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727753876/papas1PS_kh6rye.png",
        },
        {
            name: "Onion Fries",
            description: "Crispy fried onion strips.",
            price: 3.49,
            ingredients: ["onions", "flour", "salt", "vegetable oil"],
            category: "frying",
            img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727753876/friesOnionPS_ziqavq.png",
        },
        {
            name: "Chocolate Cupcake",
            description: "Rich chocolate cupcake with creamy frosting.",
            price: 2.99,
            ingredients: ["flour", "sugar", "chocolate", "eggs", "milk", "butter"],
            category: "dessert",
            img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727753895/postre1PS_cka425.png",
        },
        {
            name: "Strawberry Cupcake",
            description: "Light and fluffy cupcake with strawberry frosting.",
            price: 2.99,
            ingredients: [
                "flour",
                "sugar",
                "strawberry flavor",
                "eggs",
                "milk",
                "butter",
            ],
            category: "dessert",
            img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727753897/postre3PS_u9fzfd.png",
        },
        {
            name: "Chocolate Cake Slice",
            description:
                "A slice of rich chocolate cake with layers of creamy frosting.",
            price: 4.99,
            ingredients: ["flour", "sugar", "chocolate", "eggs", "milk", "butter"],
            category: "dessert",
            img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727753898/postre2PS_bfbigw.png",
        },
        {
            name: "Strawberry Cake Slice",
            description:
                "A slice of light and fruity strawberry cake with whipped cream.",
            price: 4.99,
            ingredients: [
                "flour",
                "sugar",
                "strawberry flavor",
                "eggs",
                "milk",
                "butter",
            ],
            category: "dessert",
            img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727753896/postre5PS_nychtd.png",
        },
        {
            name: "Strawberry Pie",
            description: "Delicious strawberry pie with a flaky crust.",
            price: 5.49,
            ingredients: ["flour", "butter", "sugar", "strawberries"],
            category: "dessert",
            img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727753896/postre4PS_u6i2ja.png",
        },
    ];

    let burgers = products.filter((product) => product.category === "burger");
    let frying = products.filter((product) => product.category === "frying");
    let drinks = products.filter((product) => product.category === "drink");
    let desserts = products.filter((product) => product.category === "dessert");

    return (
        <div className="bground flex flex-col min-h-screen">
            <div className=" mb-[70px] mt-[150px]">
                <div className=" flex flex-col gap-[20px] mx-[20px] justify-center items-center">


                    <div className={`mb-[100px]`}>
                        <h1 className="shadow text-[50px] text-yellow-500 text-center font-extrabold mb-[40px]">BURGERS</h1>
                        <div className="gaga flex flex-wrap gap-[40px] w-full justify-center">
                            {burgers.map((hamburguer) => (
                                <FoodCards
                                    key={hamburguer.name}
                                    name={hamburguer.name}
                                    description={hamburguer.description} // Passing the description
                                    price={hamburguer.price} // Passing the price
                                    // backgroundPosition="50% 100%"
                                    backgroundImage={hamburguer.img}
                                    typeIcon={iconMap[hamburguer.category]} // Passing the category icon
                                />
                            ))}
                        </div>
                    </div>

                    {/* Render Drinks */}

                    <div className={`mb-[100px]`}>
                    <h1 className="shadow text-[50px] text-yellow-500 text-center font-extrabold mb-[40px]">FRIED</h1>
                    <div className='flex flex-wrap gap-[40px] justify-center w-full'>
                        {frying.map((side) => (
                            <FoodCards
                                key={side.name}
                                name={side.name}
                                description={side.description}
                                price={side.price}
                                backgroundImage={side.img}
                                typeIcon={iconMap[side.category]}
                            />
                        ))}
                    </div>
                    </div>

                    <div className={`mb-[100px]`}>
                    <h1 className="shadow text-[50px] text-yellow-500 text-center font-extrabold mb-[40px]">DRINKS</h1>
                    <div className='flex flex-wrap gap-[40px] justify-center w-full '>
                        {drinks.map((drink) => (
                            <FoodCards
                                key={drink.name}
                                name={drink.name}
                                description={drink.description}
                                price={drink.price}
                                backgroundImage={drink.img}
                                typeIcon={iconMap[drink.category]}
                            />
                        ))}
                    </div>
                    </div>

                    <div>
                    <h1 className="shadow text-[50px] text-yellow-500 text-center font-extrabold mb-[40px]">DESSERTS</h1>
                    <div className='flex flex-wrap gap-[40px] justify-center w-full '>
                        {desserts.map((dessert) => (
                            <FoodCards
                                key={dessert.name}
                                name={dessert.name}
                                description={dessert.description}
                                price={dessert.price}
                                backgroundImage={dessert.img}
                                typeIcon={iconMap[dessert.category]}
                            />
                        ))}
                    </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MenuView;
