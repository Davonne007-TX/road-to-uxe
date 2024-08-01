import Button from "../Button"

const burger = {
    image: "./images/burgerWithFries.jpg",
    deal: "Upgrade Your Burger, add some secret sauce",
    description: "Maecenas suscipit tincidunt. Quisque ut mi suscipit mi pulvinar semper. Phasellus maximus ornare mollis. Nunc luctus ligula et loremu. Duis vitae quam att id vel lectus.",
};

const nuggets = {
    image: "./images/chickenNuggets.jpg",
    deal: "$4 Fry Basket, with Nuggers and a Drink",
    description: "Maecenas suscipit tincidunt. Quisque ut mi suscipit mi pulvinar semper. Phasellus maximus ornare mollis. Nunc luctus ligula et loremu. Duis vitae quam att id vel lectus.",
};


const delivery = {
    image: "./images/delivery.jpg",
    deal: "Free MickDelivery with $1 purchase",
    description: "Maecenas suscipit tincidunt. Quisque ut mi suscipit mi pulvinar semper. Phasellus maximus ornare mollis. Nunc luctus ligula et loremu. Duis vitae quam att id vel lectus.",
};

export default function TopDeals() {
      
  return (
    <main className="flex-time gap-10 ">
        <section className="flex flex-col lg:flex-row gap-10 mt-20 max-w-sm md:max-w-3xl lg:max-w-5xl">
            <img 
            src={burger.image} 
            className="max-w-am md:max-w-3xl lg:max-w-md"
           alt="Burger With Fries, Photo by Armando Ascorve Morales on Unsplash"/>
            
            <section className="flex flex-col gap-4">
                <h2 className="font-bold text-xl">{burger.deal}</h2>
                <p>{burger.description}</p>
                <p>{burger.description}</p>
                <Button label="Order in our App" className="bg-yellow-300 rounded-lg p-2 font-bold w-60 h-10" />
            </section>  

        </section>

        <section className="flex flex-col lg:flex-row gap-10 mt-20 max-w-sm md:max-w-3xl lg:max-w-5xl">
            <img 
            src={nuggets.image} 
            className="max-w-am md:max-w-3xl lg:max-w-md"
           alt="Burger With Fries, Photo by Armando Ascorve Morales on Unsplash"/>
            
            <section className="flex flex-col gap-4">
                <h2 className="font-bold text-xl">{nuggets.deal}</h2>
                <p>{nuggets.description}</p>
                <p>{nuggets.description}</p>
                <Button label="See deal in our App" className="bg-yellow-300 rounded-lg p-2 font-bold w-60 h-10" />
            </section> 
        </section>

        <section className="flex flex-col lg:flex-row gap-10 mt-20 max-w-sm md:max-w-3xl lg:max-w-5xl">
            <img 
            src={delivery.image} 
            className="max-w-am md:max-w-3xl lg:max-w-md"
           alt="Mcdonalds McDelivery Bag, Photo By Erik Mclean on Unsplash"/>
            
            <section className="flex flex-col gap-4">
                <h2 className="font-bold text-xl">{delivery.deal}</h2>
                <p>{delivery.description}</p>
                <p>{delivery.description}</p>
                <Button label="Get Points for MickDeliveries" className="bg-yellow-300 rounded-lg p-2 font-bold w-60 h-10" />
            </section> 
        </section>
    </main>
  )
}

//was working on/thinking of doing it this way, and pass down props to MickeyDees.jsx for the TopDeals component
  {/* <section  className="flex flex-col text-black gap-10 lg:flex-row mt-20 max-w-sm md:max-w-3xl lg:max-w-5xl">
                <h2 className="font-bold text-xl">{descriptionOfDeal}</h2>
                <p>{dealText}</p>
                <img src={dealImage} alt={alternativeText} />
                <Button  label="Order in our App" className="bg-yellow-300 rounded-lg p-2 font-bold w-60 h-10" />
            </section> */}