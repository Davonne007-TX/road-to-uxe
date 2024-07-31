import Button from "../Button"

const burger = {
    image: "./images/burgerWithFries.jpg",
    deal: "Upgrade Your Burger, add some secret sauce",
    description: "Maecenas suscipit tincidunt. Quisque ut mi suscipit mi pulvinar semper. Phasellus maximus ornare mollis. Nunc luctus ligula et loremu. Duis vitae quam att id vel lectus.",
};

export default function TopDeals() {
      
  return (
    <main className="flex-time ">
        <section className="flex flex-col gap-10 lg:flex-row mt-20 max-w-sm md:max-w-3xl lg:max-w-5xl">
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
    </main>
  )
}
