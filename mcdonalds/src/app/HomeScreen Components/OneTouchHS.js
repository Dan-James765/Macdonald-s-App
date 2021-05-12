import React from "react";
import CardHomeScreen from "../Reusable Components/Cards/CardHomeScreen";

function OneTouchHS() {
  return (
    <>
      <div className="py-12">
        <div>
          <h1
            className="flex justify-center py-8 font-extrabold text-3xl leading-8
         tracking-normal text-awesomegreen "
          >
            One Touch Delivery!
          </h1>
          <hr className="w-12  border-green-800 flex justify-center m-auto border-4" />
        </div>
        <div className="py-8 text-center text-sm text-gray-500">
          <h3>
            We have missed seeing you in our stores. <br />
            So guess what! We will come to you. <br />
          </h3>
          <p className="pt-3">
            We cannot wait to keep you safe and bring smiles to your front door
            step!
          </p>
          <div>
            <h1 className="pt-3 text-green-900 hover:text-green-700 font underline cursor-pointer">
              Learn how
            </h1>
          </div>
        </div>
        <div className="flex flex-row justify-center py-5 ">
          <div className="px-2">
            <CardHomeScreen
              info="For Family Time"
              image="https://images.unsplash.com/photo-1533777419517-3e4017e2e15a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
            />
          </div>

          <div className="px-2">
            <CardHomeScreen
              info="For Yourself"
              image="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
          </div>
          <div className="px-2">
            <CardHomeScreen
              info="For Friends"
              image="https://images.squarespace-cdn.com/content/v1/50be6057e4b030a9a18e24ba/1557155193386-6VQWF6ZRWR14AXKHRGHB/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Jarlsberg_sweden02.jpg?format=500w"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OneTouchHS;
