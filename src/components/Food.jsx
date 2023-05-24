import React, { useState } from "react";
import { data } from "../data/data.js";

function Food() {
  const filterTypesMenu = ["All", "Burger", "Pizza", "Salad", "Chicken"];
  const filterPriceMenu = ["$", "$$", "$$$", "$$$$"];
  const [foods, setFoods] = useState(data);

  //Filter Type
  const [clickedButton, setClickedButton] = useState("");

  const handleButtonClick = (buttonValue, property) => {
    if (buttonValue === "All") {
      console.log(data);
      setFoods(data); // Mostrar todos os itens se "All" for selecionado
    } else {
      const filteredFoods = data.filter(
        (item) => item[property].toLowerCase() === buttonValue.toLowerCase()
      ); // Filtrar os itens pela propriedade correspondente ao valor do botão clicado (ignorando diferenças de maiúsculas e minúsculas)
      setFoods(filteredFoods); // Atualizar os itens filtrados no estado foods
      console.log(filteredFoods);
    }
    setClickedButton(buttonValue);
    console.log("Botão clicado:", buttonValue);
  };

  return (
    <>
      <div className="max-w-[1640px] m-auto px-4 py-12">
        <h1 className="text-orange-600 font-bold text-4xl text-center">
          Top Rated Menu Items
        </h1>
        {/*Filter row*/}
        <div className="flex flex-col lg:flex-row justify-between">
          {/*Fliter Type*/}
          <div>
            <p className="font-bold text-gray-600">Filter Type</p>
            <div className="flex flex-wrap">
              {filterTypesMenu.map((filterTypeMenu, index) => (
                <button
                  className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white "
                  key={index}
                  onClick={() => handleButtonClick(filterTypeMenu, "category")}
                >
                  {filterTypeMenu}
                </button>
              ))}
            </div>
            <div>
              <p>Botão clicado: {clickedButton}</p>
            </div>
          </div>
          {/*Filter Price*/}
          <div>
            <p className="font-bold text-gray-600">Filter Price</p>
            <div className="flex max-w-[390px] w-full">
              {filterPriceMenu.map((filterPriceMenu, index) => (
                <button
                  className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white "
                  key={index}
                  onClick={() => handleButtonClick(filterPriceMenu, "price")}
                >
                  {filterPriceMenu}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/*Display foods*/}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {foods.map((item, index) => (
            <div
              key={index}
              className="border shadow-lg rounded-lg hover:scale-105 duration-300"
            >
              <img
                className="w-full h-[200px] object-cover rounded-t-lg"
                src={item.image}
                alt={item.name}
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{item.name}</p>
                <p>
                  <span className="bg-orange-500 text-white p-1 rounded-full">
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Food;
