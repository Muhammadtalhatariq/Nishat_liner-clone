import React from "react";

const Category:React.FC = () => {
  return (
    <>
      <div className="pt-8 md:h-[1055px] font-mont">
        <div className="p-2 flex items-center justify-center ">
          <h1 className="font-semibold text-center text-2xl border-b border-[#D9D9D9]">
            SHOP BY CATEGORY
          </h1>
        </div>
        <div className="w-full lg:h-screen flex flex-wrap md:flex-nowrap">
          <div className="left md:w-1/2 w-full md:relative">
            <div>
              <img className="w-full pr-1" src="/img1c.webp" alt="" />
              <h2 className="text-center p-2 hover:bg-[#DCB95F] hover:text-white duration-500 cursor-pointer text-sm">
                UNSTITCHED
              </h2>
            </div>

            <div className="md:absolute md:-bottom-98 hidden md:flex ">
              <div className="flex gap-[2px]">
                <div>
                  <img className="h-68 w-77" src="/img5c.avif" alt="" />
                  <h2 className="text-center p-2 hover:bg-[#DCB95F]  hover:text-white duration-500 cursor-pointer text-sm">
                    MEN
                  </h2>
                </div>
                <div>
                  <img className="h-68 w-79" src="/img6c.avif" alt="" />
                  <h2 className="text-center p-2 hover:bg-[#DCB95F] hover:text-white duration-500 cursor-pointer text-sm">
                    FREEDOM TO BUY
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="right md:w-1/2 w-full">
            <div className="flex gap-[2px]">
              <div>
                <img className="h-68 w-77" src="/img2c.avif" alt="" />
                <h2 className="text-center p-2 hover:bg-[#DCB95F] hover:text-white duration-500 cursor-pointer text-sm">
                  LUXURY
                </h2>
              </div>
              <div>
                <img className="h-68 w-77" src="/img3c.avif" alt="" />
                <h2 className="text-center p-2 hover:bg-[#DCB95F] hover:text-white duration-500 cursor-pointer text-sm">
                  READY TO STITCH
                </h2>
              </div>
            </div>
            <div className="flex">
              <div>
                <img
                  className=" md:h-[622px] md:w-[620px]"
                  src="/img4c.webp"
                  alt=""
                />
                <h2 className="text-center p-2 hover:bg-[#DCB95F]  hover:text-white duration-500 cursor-pointer text-sm">
                  PRET
                </h2>
              </div>
            </div>
            <div className="md:absolute md:-bottom-98 flex ">
              <div className="flex gap-[2px] md:hidden">
                <div>
                  <img className="h-68 w-77" src="/img5c.avif" alt="" />
                  <h2 className="text-center p-2 hover:bg-[#DCB95F] hover:text-white duration-500 cursor-pointer text-sm ">
                    MEN
                  </h2>
                </div>
                <div>
                  <img className="h-68 w-79" src="/img6c.avif" alt="" />
                  <h2 className="text-center p-2 hover:bg-[#DCB95F]  hover:text-white duration-500 cursor-pointer text-sm">
                    FREEDOM TO BUY
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap font-mont">
        <div className="md:w-1/2">
          <div className="flex gap-[2px]">
            <div>
              <img className="md:h-68 w-77" src="/img7c.avif" alt="" />
              <h2 className="text-center p-2 hover:bg-[#DCB95F] hover:text-white duration-500 cursor-pointer text-sm">
                FOOTWEAR
              </h2>
            </div>
            <div>
              <img className="md:h-68 w-79" src="/img8c.webp" alt="" />
              <h2 className="text-center p-2 hover:bg-[#DCB95F] hover:text-white duration-500 cursor-pointer text-sm">
                BAGS
              </h2>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full h-full">
          <div className="flex gap-[2px]">
            <div>
              <img className="h-68 w-78" src="/img9c.webp" alt="" />
              <h2 className="text-center p-2 hover:bg-[#DCB95F] duration-500 hover:text-white duration-500cursor-pointer text-sm ">
                WRAPS
              </h2>
            </div>
            <div>
              <img className="h-68 w-79" src="/img10c.avif" alt="" />
              <h2 className="text-center p-2 hover:bg-[#DCB95F] hover:text-white duration-500 cursor-pointer text-sm">
                CO-ORDS
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
