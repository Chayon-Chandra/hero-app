import React, { Suspense, useState } from "react";
import Container from "../Container/Container";
import { Link, useParams } from "react-router";
import useProductes from "../../Hooks/useProductes";
import arryImage from "../../assets/icon-downloads.png";
import starImage from "../../assets/icon-ratings.png";
import icon from "../../assets/icon-review.png";
import Rechart from "../Rechart/Rechart";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";

const ratingPromiss = axios("/data.json");
const AppDetailsCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { products, loading } = useProductes();

  const savedApps = JSON.parse(localStorage.getItem("product") || "[]");
  const [installed, setInstalled] = useState(
    savedApps.some((item) => String(item.id) === id)
  );
  if (loading) return <p>loading ......</p>;

  const product = products.find((p) => String(p.id) === id);

  if (!product) return <p>Product not found</p>;

  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    description,
  } = product;

  const handleInstall = () => {
    const saveData = localStorage.getItem("product");
    let productItem = [];
    if (saveData) {
      productItem = [...JSON.parse(saveData)];
    }
    const alreadyInstalled = productItem.find((item) => item.id === product.id);

    if (alreadyInstalled) {
      setInstalled(true);
      return;
    }

    productItem.push(product);
    localStorage.setItem("product", JSON.stringify(productItem));

    toast(
      <p className="text-green-500 text-lg font-bold">
        <i className="fa-regular fa-circle-check"></i> {title} installed
        Successfully
      </p>
    );

    setInstalled(true);
    navigate("/installation");
  };
  return (
    <div className="bg-[#F5F5F5]">
      <Container>
        <div className="flex flex-col md:flex-row justify-start gap-15 py-10 items-center">
          <div className="w-70 bg-white rounded-lg">
            <img className="p-7" src={image} alt="" />
          </div>
          <div className="">
            <div>
              <h2 className="font-bold text-2xl ">{title}</h2>
              <p className="font-medium text-xl">
                Developed by:{" "}
                <span className="text-blue-800">{companyName}</span>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
              <div className="">
                <div>
                  <img src={arryImage} alt="" />
                  <p className="font-medium text-xl py-2">Downloads</p>
                  <h3 className="font-bold text-lg ">{downloads}</h3>
                </div>
              </div>
              <div className="">
                <div>
                  <img src={starImage} alt="" />
                  <p className="font-medium text-xl py-2">Average Ratings</p>
                  <h3 className="font-bold text-lg ">{ratingAvg}</h3>
                </div>
              </div>
              <div className="">
                <div>
                  <img src={icon} alt="" />
                  <p className="font-medium text-xl py-2">Total Reviews</p>
                  <h3 className="font-bold text-lg ">{reviews}</h3>
                </div>
              </div>
            </div>
            <button
              onClick={handleInstall}
              className={`btn btn-success mt-5 font-medium text-xl text-white ${
                installed ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={installed}
            >
              {installed ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
        <Suspense
          fallback={
            <div className="col-span-full flex justify-center py-10">
              <span className="loading loading-spinner loading-lg text-success"></span>
            </div>
          }
        >
          <Rechart ratingPromiss={ratingPromiss}></Rechart>
        </Suspense>
        <div>
          <h2 className="font-bold text-2xl px-5">Description</h2>
          <p className="font-normal text-xl p-5">{description}</p>
        </div>
      </Container>
    </div>
  );
};

export default AppDetailsCard;
