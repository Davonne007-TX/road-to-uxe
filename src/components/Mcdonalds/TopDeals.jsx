import Button from "../Button";

const foodItems = [
  {
    image: "./images/burgerWithFries.jpg",
    deal: "Upgrade Your Burger, add some secret sauce",
    description:
      "Maecenas suscipit tincidunt. Quisque ut mi suscipit mi pulvinar semper. Phasellus maximus ornare mollis. Nunc luctus ligula et loremu. Duis vitae quam att id vel lectus.",
  },
  {
    image: "./images/chickenNuggets.jpg",
    deal: "$4 Fry Basket, with Nuggets and a Drink",
    description:
      "Maecenas suscipit tincidunt. Quisque ut mi suscipit mi pulvinar semper. Phasellus maximus ornare mollis. Nunc luctus ligula et loremu. Duis vitae quam att id vel lectus.",
  },
  {
    image: "./images/delivery.jpg",
    deal: "Free MickDelivery with $1 purchase",
    description:
      "Maecenas suscipit tincidunt. Quisque ut mi suscipit mi pulvinar semper. Phasellus maximus ornare mollis. Nunc luctus ligula et loremu. Duis vitae quam att id vel lectus.",
  },

  {
    image: "./images/doubleChicken.jpg",
    deal: "Unlimited Fries with Purchase of a Double Chicken",
    description:
      "Maecenas suscipit tincidunt. Quisque ut mi suscipit mi pulvinar semper. Phasellus maximus ornare mollis. Nunc luctus ligula et loremu. Duis vitae quam att id vel lectus.",
  },

  {
    image: "./images/mealDeal.jpg",
    deal: "$3 Meal Deal with Burger, Nuggets, Potato Wedges or Fries, and Drink",
    description:
      "Maecenas suscipit tincidunt. Quisque ut mi suscipit mi pulvinar semper. Phasellus maximus ornare mollis. Nunc luctus ligula et loremu. Duis vitae quam att id vel lectus.",
  },

  {
    image: "./images/late.jpg",
    alt: "Photo by Michael Förtsch on Unsplash",
    deal: "Open 24hrs and All Day Breakfast",
    description:
      "Maecenas suscipit tincidunt. Quisque ut mi suscipit mi pulvinar semper. Phasellus maximus ornare mollis. Nunc luctus ligula et loremu. Duis vitae quam att id vel lectus.",
  },
];
export default function TopDeals() {
  return (
    <main className="flex-time md:gap-4 lg:gap-10">
      {foodItems.map((item) => (
        <>
          <section className="flex flex-col md:flex-row gap-10 mt-20 max-w-sm md:max-w-3xl lg:max-w-6xl">
            <img
              src={item.image}
              alt={foodItems.alt}
              className="max-w-sm md:max-w-3xl lg:max-w-md"
            />
            <section className="flex flex-col gap-4 md:mt-10">
              <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
                {item.deal}
              </h2>
              <p className="text-xl">{item.description}</p>
              <Button
                label="See deal in our App"
                className="bg-yellow-300 rounded-lg p-2 font-bold w-60 h-10"
              />
            </section>
          </section>
        </>
      ))}
    </main>
  );
}
