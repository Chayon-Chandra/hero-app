import React from "react";
import arryImage from "../../assets/icon-downloads.png";
import starImage from "../../assets/icon-ratings.png";
import { Link } from "react-router";

const TrendingApp = ({ product }) => {
  const {image, title, ratingAvg, downloads, id } = product;
  return (
  
     <Link to={`/apps/${id}`}>
      <div className="card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out">
        <figure>
          <img className="w-50 h-50 pt-5" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-between">
            <div className="badge bg-[#F1F5E8]">
              <div>
                <img className="w-4 " src={arryImage} alt="" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#00D390]">
                  {downloads}
                </h3>
              </div>
            </div>
            <div className="badge bg-[#FFF0E1]">
              <div>
                <img className="w-4" src={starImage} alt="" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#FF8811]">
                  {ratingAvg}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
     </Link>

  );
};

export default TrendingApp;
