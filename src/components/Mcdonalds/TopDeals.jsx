import Button from "../Button"

const burger = 
    {
    image: "./images/burgerWithFries.jpg",
    deal: "Upgrade Your Burger, add some secret sauce",
    description: "Maecenas suscipit eros sit amet eros aliquam tincidunt. Sed a semper arcu. Quisque scelerisque tempus ligula. Duis vitae quam at tortor venenatis blandit id vel lectus. Aenean sit amet pharetra libero, volutpat commodo lacus",
    }

export default function TopDeals() {
      
  return (
    <main className="flex-time ">
        <section className="flex flex-col gap-10 lg:flex-row mt-20 max-w-2xl lg:max-w-5xl">
            <img src={burger.image} className="max-w-sm md:max-w-xl lg:max-w-md" />
            <section className="flex flex-col gap-4">
                <h2 className="font-bold text-xl">{burger.deal}</h2>
                <p>{burger.description}</p>
                <Button label="Order in our App" className="bg-yellow-300 rounded-lg p-2 font-bold" />
            </section>
        </section>

    </main>
  )
}
