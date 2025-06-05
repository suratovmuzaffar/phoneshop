import React, { ReactElement, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

type Phone = {
  number: number;
  idName: string;
  showName: string;
  numberPrice: number;
  showPrice: string;
  information: string;
  pictureLink: string;
  isAddedToCart: boolean;
};

type PhonesType = {
  [id: string]: Phone;
};

type Page1Props = {
  phones: PhonesType;
  setPhones: React.Dispatch<React.SetStateAction<PhonesType>>;
};

function Carts({ phones, setPhones }: Page1Props) {
  const { state } = useLocation();
  const { data } = state || {};

  function handleupdate(phone: any, name: string, value: any) {
    const updatedPhones = {
      ...phones,
      [phone.idName]: {
        ...phones[phone.idName],
        [name]: value,
      },
    };
    setPhones(updatedPhones);
  }
  useEffect(() => {
    if (data && phones[data.idName] && !phones[data.idName].isAddedToCart) {
      handleupdate(data, "isAddedToCart", true);
    }
  }, [data]);

  const phonesArray = Object.values(phones);

  const fullPrice = phonesArray.reduce((sum, phone) => {
    return phone.isAddedToCart ? sum + phone.number * phone.numberPrice : sum;
  }, 0);

  const fullProduct = phonesArray.reduce((sum, phone) => {
    return phone.isAddedToCart ? sum + phone.number : sum;
  }, 0);

  return (
    <div className="flex flex-col gap-3 my-[50px] items-center">
      {phonesArray.map(
        (phone) =>
          phone.isAddedToCart && (
            <div className="min-h-[150px] min-w-[1500px] px-[50px] py-[20px]  bg-blue-300 items-center  border-2 rounded-[10px]  grid grid-cols-5">
              {" "}
              <img
                className="w-[100px]  rounded-[10px] mx-auto"
                src={phone.pictureLink}
                alt=""
              />
              <p className=" text-center text-[20px] text-white font-[700]">
                NAME: {phone.showName}
              </p>
              <p className=" text-center text-[20px] text-white font-[700]">
                1-PRICE: {phone.showPrice}
              </p>
              <p className="text-center text-[20px] text-white font-[700]">
                full-PRICE: {phone.number * phone.numberPrice}
                {"  "}
                so'm
              </p>
              <div className="flex items-center justify-center size-[max-content] mx-auto  rounded-[20px]">
                <button
                  onClick={() => {
                    handleupdate(phone, "number", phone.number + 1);
                  }}
                  className="border-2 border-white w-[40px] h-[40px] flex items-center justify-center rounded-l-[20px] text-white text-[30px] font-[600]"
                >
                  +
                </button>
                <button className="border-2 border-white w-[40px] h-[40px] flex items-center justify-center text-white text-[30px] font-[600]">
                  {phone.number}
                </button>
                <button
                  onClick={() => {
                    if (phone.number > 1) {
                      handleupdate(phone, "number", phone.number - 1);
                    } else {
                      handleupdate(phone, "number", 0);
                      handleupdate(phone, "isAddedToCart", false);
                    }
                  }}
                  className="border-2 border-white w-[40px] h-[40px] flex items-center justify-center rounded-r-[20px] text-white text-[30px] font-[600]"
                >
                  -
                </button>
              </div>
            </div>
          )
      )}
      <div className="px-[20px] py-[20px] bg-gray-400 w-[400px] h-[170px] border-2 border-gray-500 rounded-[10px] flex-col gap-[10px] ml-auto mr-[275px]">
        <p className="text-white text-[30px] font-[900] ">
          FULL PRICE: {fullPrice} som
        </p>
        <p className="text-white text-[30px] font-[900]">
          FULL PRODUCT: {fullProduct}
        </p>
      </div>
    </div>
  );
}

export default Carts;
