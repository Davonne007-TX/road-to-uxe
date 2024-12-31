import Button from "../Button";

const foodItems = [
  {
    image: "./images/burgerWithFries.jpg",
    deal: "Upgrade Your Burger, add some secret sauce",
    description:
      "Maecenas suscipit tincidunt. Quisque ut mi suscipit mi pulvinar semper. Phasellus maximus ornare mollis. Nunc luctus ligula et loremu. Duis vitae quam att id vel lectus.",
    buttonText: "See deal in our App",
    id: 1,
  },
  {
    image: "./images/chickenNuggets.jpg",
    deal: "$4 Fry Basket, with Nuggets and a Drink",
    description:
      "Maecenas suscipit tincidunt. Quisque ut mi suscipit mi pulvinar semper. Phasellus maximus ornare mollis. Nunc luctus ligula et loremu. Duis vitae quam att id vel lectus.",
    buttonText: "Upgrade Fries: Code MIC25",
    id: 2,
  },
  {
    image: "./images/delivery.jpg",
    deal: "Free MickDelivery with $1 purchase",
    description:
      "Maecenas suscipit tincidunt. Quisque ut mi suscipit mi pulvinar semper. Phasellus maximus ornare mollis. Nunc luctus ligula et loremu. Duis vitae quam att id vel lectus.",
    buttonText: "Order Now",
    id: 3,
  },

  {
    image: "./images/doubleChicken.jpg",
    deal: "Unlimited Fries with Purchase of a Double Chicken",
    description:
      "Maecenas suscipit tincidunt. Quisque ut mi suscipit mi pulvinar semper. Phasellus maximus ornare mollis. Nunc luctus ligula et loremu. Duis vitae quam att id vel lectus.",
    buttonText: "Customize Double Chicken",
    id: 4,
  },

  {
    image: "./images/mealDeal.jpg",
    deal: "$3 Meal Deal with Burger, Nuggets, Potato Wedges or Fries, and Drink",
    description:
      "Maecenas suscipit tincidunt. Quisque ut mi suscipit mi pulvinar semper. Phasellus maximus ornare mollis. Nunc luctus ligula et loremu. Duis vitae quam att id vel lectus.",
    buttonText: "Get limited Deal",
    id: 6,
  },

  {
    image: "./images/late.jpg",
    alt: "Photo by Michael Förtsch on Unsplash",
    deal: "Open 24hrs and All Day Breakfast",
    description:
      "Maecenas suscipit tincidunt. Quisque ut mi suscipit mi pulvinar semper. Phasellus maximus ornare mollis. Nunc luctus ligula et loremu. Duis vitae quam att id vel lectus.",
    buttonText: "Did someone say breakfast?",
    id: 7,
  },
];
export default function TopDeals() {
  return (
    <main className="flex-time md:gap-4 lg:gap-10">
      {foodItems.map((item) => (
        <section
          className="flex flex-col lg:flex-row gap-10 mt-20 max-w-xs md:max-w-xl lg:max-w-6xl"
          key={item.id}
        >
          <img
            src={item.image}
            alt={item.alt}
            className="max-w-xs md:max-w-md lg:max-w-lg"
          />
          <section className="flex flex-col gap-4 md:mt-10" key={item.id}>
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
              {item.deal}
            </h2>
            <p className="text-xl">{item.description}</p>
            <Button
              label={item.buttonText}
              className="bg-yellow-300 rounded-lg p-2 font-bold w-60 h-10"
            />
          </section>
        </section>
      ))}
    </main>
  );
}
