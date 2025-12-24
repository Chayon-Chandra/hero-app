
import HomeBannar from "../../Componentes/HomeBannar/HomeBannar";
import Trusted from "../../Componentes/Trusted/Trusted";
import useProductes from "../../Hooks/useProductes";
import TrendingApp from "../../Componentes/TrendingApp/TrendingApp";
import Container from "../../Componentes/Container/Container";
import { Link } from "react-router";

const Home = () => {
  const { products } = useProductes();
  const sliceProducts = products.slice(0, 8);
  return (
    <div>
      <HomeBannar></HomeBannar>
      <Trusted></Trusted>
      <div className="bg-[#F5F5F5]">
        <Container>
          <h2 className="pt-10 font-bold text-4xl text-center">
            Trending Apps
          </h2>
          <p className="font-normal text-xl text-center py-2 mb-10">
            Explore All Trending Apps on the Market developed by us
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sliceProducts.map((product) => (
              <TrendingApp key={product.id} product={product}></TrendingApp>
            ))}
          </div>
          <div className="text-center py-10 ">
            <Link
  
              to="/apps"
              className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-2 px-5 rounded-md text-white font-medium text-xl"
            >
              Show All
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
