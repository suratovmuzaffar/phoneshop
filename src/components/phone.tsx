import React from "react";
import { Link } from "react-router-dom";
import Phoneinfo from "./phone-info";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

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
function Phone({ phones, setPhones }: Page1Props) {
  const phonesArray = Object.values(phones);
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center my-[100px]">
      <div className="grid grid-cols-4 grid-rows-2 gap-[10px]">
        {phonesArray.map((phone) => (
          <div
            onClick={() => navigate("/info", { state: { data: phone } })}
            className="flex flex-col h-[max-conetent] w-[max-content]   rounded-[10px] border-5 border-blue-500"
          >
            <div className=" px-[15px] pt-[15px] ">
              <img
                className="rounded-[10px] w-[250px] hover:shadow-2xl hover:shadow-gray-400 hover:scale-105"
                src={phone.pictureLink}
                alt=""
              />
            </div>
            <div className="w-[100%] h-[50px]px-[20px] pt-[12px] flex    rounded-b-[10px]  px-5 flex-col ">
              <div className="flex justify-between items-center">
                <p className="text-[15px] text-black font-[500] ">
                  {phone.showName}
                </p>
                <span className="text-[14px] text-black font-[700]">
                  {phone.showPrice}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/carts", { state: { data: phone } });
                }}
                disabled={phone.isAddedToCart ? true : false}
                className="px-[20px] py-[10px] bg-blue-400 text-white rounded-t-[50%]"
              >
                {phone.isAddedToCart ? "HAVE CART" : "ADD CART"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Phone;
