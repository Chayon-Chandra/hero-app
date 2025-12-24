import React, { useState, useEffect } from "react";
import Container from "../../Componentes/Container/Container";
import arryImage from "../../assets/icon-downloads.png";
import starImage from "../../assets/icon-ratings.png";
import appEror from "../../assets/App-Error.png";
import { Link } from "react-router";
import { toast } from "react-toastify";

const Installation = () => {
  const [installData, setInstallData] = useState([]);
  const [sortOrder, setSortOrder] = useState('none');

  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem("product") || "[]");
    setInstallData(savedApps);
  }, []);

    const sortItem = () => {
      if(sortOrder === 'size-low'){
        return [...installData].sort((a, b) => a.size - b.size)
      }else if(sortOrder === 'size-high'){
          return [...installData].sort((a, b) => b.size - a.size)
      }else{
       return installData
      }
    }

  const handleUninstall = (id) => {
    const updatedApps = installData.filter((app) => app.id !== id);
    setInstallData(updatedApps);
    localStorage.setItem("product", JSON.stringify(updatedApps));
    toast(<p className="text-green-500 text-lg font-bold"><i className="fa-regular fa-circle-check"></i>  Uninstall Successfully</p>);
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <Container>
        <div className="py-5">
          <h2 className="font-bold text-3xl text-center">
            Your Installed Apps
          </h2>
          <p className="font-normal text-xl text-center">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="flex justify-between items-center px-2">
          <div>
            <p className="font-medium text-lg">
              ({installData.length}) Apps Found
            </p>
          </div>
          <div>
           <label className="form-control w-full max-w-xs">
             <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} className="select select-bordered">
              <option value='none'  className="font-medium text-xl">Sort By Size</option>
              <option value='size-low' className="font-medium text-md">Low-High</option>
              <option value='size-high' className="font-medium text-md">High-Low</option>
             </select>
           </label>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center">
          {installData.length === 0 ? (
            <div className="flex justify-center items-center">
              <div>
                <img className="mx-auto" src={appEror} alt="" />
                <h2 className="font-bold text-2xl text-center mt-3 py-3">OPPS!! APP NOT FOUND</h2>
                <p className="font-normal text-xl text-center pb-3">
                  The App you are requesting is not found on our system. please
                  try another apps
                </p>
                <div className="text-center pb-8">
                  <Link to="/apps" className="font-semibold text-xl btn bg-gradient-to-r from-[#8152E9] to-[#9B5EF1] text-white">Go Back!</Link>
                </div>
              </div>
            </div>
          ) : (
            sortItem().map((app) => (
              <div
                key={app.id}
                className="bg-white p-2 rounded-lg shadow-md flex justify-between items-center my-2"
              >
                <div className="flex justify-start items-center gap-3">
                  <div>
                    <img className="w-14" src={app.image} alt="" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-1">{app.title}</h3>
                    <div className="flex justify-start items-center gap-3">
                      <div className="flex justify-start items-center gap-2">
                        <img className="w-4" src={arryImage} alt="" />
                        <p className="font-normal text-lg text-green-600">
                          {app.downloads}
                        </p>
                      </div>
                      <div className="flex justify-start items-center gap-2">
                        <img className="w-4" src={starImage} alt="" />
                        <p className="font-normal text-lg text-yellow-600">
                          {app.ratingAvg}
                        </p>
                        <p className="font-normal text-lg">{app.size} MB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleUninstall(app.id)}
                    className="bg-green-500 text-white py-2 px-4 rounded-md text-md"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </Container>
    </div>
  );
};

export default Installation;
