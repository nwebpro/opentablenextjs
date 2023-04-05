import Header from "@/components/Header/Header";
import Hero from "@/components/Home/Hero";
import RestaurantCard from "@/components/Home/RestaurantCard";

const index = () => {
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
          <div className="max-w-screen-2xl m-auto bg-white">
            <Header />
            <div>
              <Hero />
              <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
                <RestaurantCard />
              </div>
            </div>
          </div>
        </main>
    );
};

export default index;