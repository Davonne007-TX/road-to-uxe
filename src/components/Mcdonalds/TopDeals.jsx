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
            <section className="flex flex-col gap-4">
              <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
                {item.deal}
              </h2>
              <p>{item.description}</p>
              <Button
                label="See deal in our App"
                className="bg-yellow-300 rounded-lg p-2 font-bold w-60 h-10"
              />
            </section>
          </section>
        </>
      ))}

      {/* <section className="flex flex-col lg:flex-row gap-10 mt-20 max-w-sm md:max-w-3xl lg:max-w-6xl">
        <img
          src={burger.image}
          className="max-w-sm md:max-w-3xl lg:max-w-md"
          alt="Burger With Fries, Photo by Armando Ascorve Morales on Unsplash"
        />

        <section className="flex flex-col gap-4">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl md:mt-10">
            {burger.deal}
          </h2>
          <p>{burger.description}</p>
          <p>{burger.description}</p>
          <Button
            label="Order in our App"
            className="bg-yellow-300 rounded-lg p-2 font-bold w-60 h-10"
          />
        </section>
      </section>

      <section className="flex flex-col lg:flex-row gap-10 mt-20 max-w-sm md:max-w-3xl lg:max-w-6xl">
        <img
          src={nuggets.image}
          className="max-w-am md:max-w-3xl lg:max-w-md"
          alt="Burger With Fries, Photo by Armando Ascorve Morales on Unsplash"
        />

        <section className="flex flex-col gap-4">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl md:mt-10">
            {nuggets.deal}
          </h2>
          <p>{nuggets.description}</p>
          <p>{nuggets.description}</p>
          <Button
            label="See deal in our App"
            className="bg-yellow-300 rounded-lg p-2 font-bold w-60 h-10"
          />
        </section>
      </section>

      <section className="flex flex-col lg:flex-row gap-10 mt-20 max-w-sm md:max-w-3xl lg:max-w-6xl">
        <img
          src={delivery.image}
          className="max-w-am md:max-w-3xl lg:max-w-md"
          alt="Mcdonalds McDelivery Bag, Photo By Erik Mclean on Unsplash"
        />

        <section className="flex flex-col gap-4">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl md:mt-10">
            {delivery.deal}
          </h2>
          <p>{delivery.description}</p>
          <p>{delivery.description}</p>
          <Button
            label="Order Now"
            className="bg-yellow-300 rounded-lg p-2 font-bold w-60 h-10"
          />
        </section>
      </section>

      <section className="flex flex-col lg:flex-row gap-10 mt-20 max-w-sm md:max-w-3xl lg:max-w-6xl">
        <img
          src={chicken.image}
          className="max-w-am md:max-w-3xl lg:max-w-md"
          alt="Mcdonalds McDelivery Bag, Photo By Erik Mclean on Unsplash"
        /> */}

      {/* <section className="flex flex-col gap-4">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl md:mt-10">
            {chicken.deal}
          </h2>
          <p>{chicken.description}</p>
          <p>{chicken.description}</p>
          <Button
            label="Get Deal"
            className="bg-yellow-300 rounded-lg p-2 font-bold w-60 h-10"
          />
        </section>
      </section>

      <section className="flex flex-col lg:flex-row gap-10 mt-20 max-w-sm md:max-w-3xl lg:max-w-6xl">
        <img
          src={mealDeal.image}
          className="max-w-am md:max-w-3xl lg:max-w-md"
          alt="Mcdonalds McDelivery Bag, Photo By Erik Mclean on Unsplash"
        />

        <section className="flex flex-col gap-4">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
            {mealDeal.deal}
          </h2>
          <p>{mealDeal.description}</p>
          <p>{mealDeal.description}</p>
          <Button
            label="Get Meal Deal"
            className="bg-yellow-300 rounded-lg p-2 font-bold w-60 h-10"
          />
        </section>
      </section>

      <section className="flex flex-col lg:flex-row gap-10 mt-20 max-w-sm md:max-w-3xl lg:max-w-6xl">
        <img
          src={late.image}
          className="max-w-am md:max-w-3xl lg:max-w-md"
          alt="Mcdonalds McDelivery Bag, Photo By Erik Mclean on Unsplash"
        />

        <section className="flex flex-col gap-4">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl md:mt-10">
            {late.deal}
          </h2>
          <p>{late.description}</p>
          <p>{late.description}</p>
          <Button
            label="See Menu"
            className="bg-yellow-300 rounded-lg p-2 font-bold w-60 h-10"
          />
        </section>
      </section>

      <section className="flex flex-col lg:flex-row gap-10 mt-20 max-w-sm md:max-w-3xl lg:max-w-6xl">
        <img
          src={delivery.image}
          className="max-w-am md:max-w-3xl lg:max-w-md"
          alt="Mcdonalds McDelivery Bag, Photo By Erik Mclean on Unsplash"
        />

        <section className="flex flex-col gap-4">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl md:mt-10">
            {delivery.deal}
          </h2>
          <p>{delivery.description}</p>
          <p>{delivery.description}</p>
          <Button
            label="Order Now"
            className="bg-yellow-300 rounded-lg p-2 font-bold w-60 h-10"
          />
        </section>
      </section> */}
    </main>
  );
}

//was working on/thinking of doing it this way, and pass down props to MickeyDees.jsx for the TopDeals component
{
  /* <section  className="flex flex-col text-black gap-10 lg:flex-row mt-20 max-w-sm md:max-w-3xl lg:max-w-5xl">
                <h2 className="font-bold text-xl">{descriptionOfDeal}</h2>
                <p>{dealText}</p>
                <img src={dealImage} alt={alternativeText} />
                <Button  label="Order in our App" className="bg-yellow-300 rounded-lg p-2 font-bold w-60 h-10" />
            </section> */
}
