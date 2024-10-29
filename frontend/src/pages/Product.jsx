import React, { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/*  ---------------------- Product Data ----------------------  */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ----------------------  Product Images ----------------------  */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.95%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* ---------------------- Product Info ----------------------  */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_dull_icon} alt="" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-600" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 ">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 " />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* ----------------- Description & Reviews Section ----------------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border-collapse px-6 text-sm text-gray-500">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur molestiae molestias blanditiis repellat eius, facere, tenetur temporibus harum pariatur fuga alias suscipit voluptates quidem provident quas praesentium recusandae iste ratione soluta magnam at necessitatibus. Alias soluta deserunt ipsum consectetur totam vitae quasi nisi sint, accusamus est vero sapiente fugit quod officia dicta libero perspiciatis in reiciendis aliquid expedita illo blanditiis ullam! Itaque reiciendis, sapiente animi corrupti dolores accusantium ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde soluta corrupti sequi voluptatibus dolorem, optio quis ratione omnis eaque. Earum doloribus beatae labore. Alias eveniet vero ut? Et sunt fugiat maxime optio voluptate fuga corrupti!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae obcaecati et tempora adipisci, quasi error architecto eligendi magni corrupti pariatur maiores, quam quod provident hic eum. Praesentium porro iure debitis temporibus quo eum itaque ipsa consequatur autem illum aliquid at, ipsum minus blanditiis vel aut voluptate facilis doloremque veritatis dolores suscipit! Veniam ullam deserunt in non neque facere! Explicabo facere nobis obcaecati, hic nisi mollitia laborum quisquam accusamus placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem exercitationem facilis vero ullam nulla molestiae, vel odio eligendi? Quam nesciunt saepe magni nobis ad nulla odit. Consequatur hic laborum odit iure ut laudantium alias nobis?</p>
        </div>
      </div>
              {/* ----------------- Display Related Products ------------------ */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>


    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
