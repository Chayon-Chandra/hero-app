import React, { useEffect, useState } from "react";
import Container from "../../Componentes/Container/Container";
import AppsCard from "../../Componentes/AppsCard/AppsCard";
import useProductes from "../../Hooks/useProductes";
import appErorImg from "../../assets/App-Error.png";
import { Link } from "react-router";

const Apps = () => {
  const { products } = useProductes();

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchProduct, setSearchProduct] = useState([]);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const trim = search.trim().toLowerCase();

      if (trim) {
        setSearchProduct(
          products.filter((product) =>
            product.title.toLowerCase().includes(trim)
          )
        );
      } else {
        setSearchProduct(products);
      }

      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [search, products]);

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <Container>
        <div className="py-7">
          <h2 className="font-bold text-3xl text-center">
            Our All Applications
          </h2>
          <p className="font-normal text-xl text-center">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="flex justify-between items-center px-2">
          <p className="font-medium text-lg">
            {loading ? (
              <div className="col-span-full flex justify-center py-10">
                <span className="loading loading-spinner loading-lg text-success"></span>
              </div>
            ) : (
              `(${searchProduct.length}) Apps Found`
            )}
          </p>

          <label className="input text-lg flex items-center gap-2">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </g>
            </svg>

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Apps"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
          {loading ? (
            <div className="col-span-full flex justify-center py-10">
              <span className="loading loading-spinner loading-lg text-success"></span>
            </div>
          ) : searchProduct.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-10">
              <div>
                <img className="mx-auto" src={appErorImg} alt="" />
                <h2 className="font-bold text-2xl text-center mt-3 py-3">
                  OPPS!! APP NOT FOUND
                </h2>
                <p className="font-normal text-xl text-center pb-3">
                  The App you are requesting is not found on our system. please
                  try another apps
                </p>
                <div className="text-center pb-8">
                  <Link
                    to="/"
                    className="font-semibold text-xl btn bg-gradient-to-r from-[#8152E9] to-[#9B5EF1] text-white"
                  >
                    Go Back!
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            searchProduct.map((product) => (
              <AppsCard key={product.id} product={product} />
            ))
          )}
        </div>
      </Container>
    </div>
  );
};

export default Apps;
