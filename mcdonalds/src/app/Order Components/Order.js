import React from "react";
import CardFoodOrder from "../Reusable Components/Cards/CardFoodOrder";
import { Fade } from "react-awesome-reveal";

function Order() {
  return (
    <>
      <div className="pt-12 ">
        <h1
          className="flex justify-center py-8 font-extrabold text-3xl leading-8
         tracking-normal text-black "
        >
          The Best McDonald's Food at Your Door Step
        </h1>
      </div>

      <Fade>
        <div>
          <h1
            className="flex justify-center pt-4 font-extrabold text-xl leading-8
         tracking-normal text-awesomegreen "
          >
            For Yourself
          </h1>
          <div className="pt-4 pb-8">
            <hr className="w-12  border-green-800 flex justify-center m-auto border-4" />
          </div>

          <div className="flex flex-row justify-center py-5 ">
            <div className="px-2">
              <CardFoodOrder
                price="£12.99"
                info="The Spicy Veggie One"
                image="https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-The-Spicy-Veggie-One.jpg?$Product_Desktop$"
              />
            </div>

            <div className="px-2">
              <CardFoodOrder
                price="£8.99"
                info="The BBQ & Bacon Wrap"
                image="https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-The-BBQ-Chicken-Bacon-One-Crispy.jpg?$Product_Desktop$"
              />
            </div>
            <div className="px-2">
              <CardFoodOrder
                price="£7.99"
                info="The Sweet Chilli Wrap"
                image="https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-The-Sweet-Chilli-Chicken-One-Crispy.jpg?$Product_Desktop$"
              />
            </div>
          </div>
          <div className="flex flex-row justify-center py-5 ">
            <div className="px-2">
              <CardFoodOrder
                price="£12.99"
                info="The Big Mac"
                image="https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Bacon-Clubhouse-Double.jpg?$Product_Desktop$"
              />
            </div>

            <div className="px-2">
              <CardFoodOrder
                price="£8.99"
                info="Chicken Deluxe"
                image="https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Chicken-Deluxe-Festive.jpg?$Product_Desktop$"
              />
            </div>
            <div className="px-2">
              <CardFoodOrder
                price="£7.99"
                info="Cheese & Herb Melts"
                image="https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Cheese-Herb-Melts.jpg?$Product_Desktop$"
              />
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <div>
          <h1
            className="flex justify-center pt-12 font-extrabold text-xl leading-8
         tracking-normal text-awesomegreen "
          >
            For Friends & Family
          </h1>
          <div className="pt-4 pb-8">
            <hr className="w-12  border-green-800 flex justify-center m-auto border-4" />
          </div>
          <div className="flex flex-row justify-center py-5 ">
            <div className="px-2">
              <CardFoodOrder
                price="£18.99"
                info="The Spicy Veggie One Meal"
                image="https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-LMB400-VeggieWrapMeal-Apple-Grape.jpg?$Product_Desktop$"
              />
            </div>

            <div className="px-2">
              <CardFoodOrder
                price="£12.99"
                info="McChicken Sandwich Meal "
                image="https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-LMB400-McChickenSandwichMeal.jpg?$Product_Desktop$"
              />
            </div>
            <div className="px-2">
              <CardFoodOrder
                price="£17.99"
                info="Chicken Legend"
                image="https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-LMB400-ChickenLegendSpicyMayoMeal.jpg?$Product_Desktop$"
              />
            </div>
          </div>
          <div className="flex flex-row justify-center py-5 ">
            <div className="px-2">
              <CardFoodOrder
                price="£12.99"
                info="Vegetable Deluxe Meal"
                image="https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-LMB400-VegetableDeluxeMeal.jpg?$Product_Desktop$"
              />
            </div>

            <div className="px-2">
              <CardFoodOrder
                price="£8.99"
                info="Filet-O-Fish"
                image="https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-LMB400-FiletMeal.jpg?$Product_Desktop$"
              />
            </div>
            <div className="px-2">
              <CardFoodOrder
                price="£7.99"
                info="Chicken McNuggets 6 Pieces Meal"
                image="https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-LMB400-6NuggetsMeal.jpg?$Product_Desktop$"
              />
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <div>
          <h1
            className="flex justify-center pt-12 font-extrabold text-xl leading-8
         tracking-normal text-awesomegreen "
          >
            Vegan & Vegetarian
          </h1>
          <div className="pt-4 pb-8">
            <hr className="w-12  border-green-800 flex justify-center m-auto border-4" />
          </div>
          <div className="flex flex-row justify-center py-5 ">
            <div className="px-2">
              <CardFoodOrder
                price="£12.99"
                info="The Spicy Veggie One"
                image="https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-The-Spicy-Veggie-One.jpg?$Product_Desktop$"
              />
            </div>

            <div className="px-2">
              <CardFoodOrder
                price="£3.99"
                info="Buxton Water"
                image="https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Buxton-Mineral-Water-Still-250ml.jpg?$Product_Desktop$"
              />
            </div>
            <div className="px-2">
              <CardFoodOrder
                price="£7.99"
                info="Veggie Dippers"
                image="https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Veggie-Dippers-2.jpg?$Product_Desktop$"
              />
            </div>
          </div>
          <div className="flex flex-row justify-center py-5 ">
            <div className="px-2">
              <CardFoodOrder
                price="£6.99"
                info="Coke"
                image="https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Coca-Cola-Zero-Sugar-Medium.jpg?$Product_Desktop$"
              />
            </div>

            <div className="px-2">
              <CardFoodOrder
                price="£4.99"
                info="Sprite"
                image="https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Sprite-Zero-Medium.jpg?$Product_Desktop$"
              />
            </div>
            <div className="px-2">
              <CardFoodOrder
                price="£3.99"
                info="Oreo Shake"
                image="https://fastfoodnutrition.org/item-photos/full/8832_s.jpg"
              />
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default Order;
