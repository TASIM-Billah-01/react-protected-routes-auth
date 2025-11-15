import Banner from "../components/Banner";
import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import PrivateRoute from "../components/PrivateRoute";
const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Banner></Banner>            
            <section className="sm:mt-8 mt-4 ">
                <h2 className="text-center text-2xl sm:text-4xl font-bold text-[#9538E2]">Our Dental Service</h2>
                <article className="grid sm:grid-cols-2 mt-4 sm:mt-6 lg:grid-cols-3 gap-6 sm:max-w-[94%] lg:max-w-[96%] mx-auto">
                    {
                        data.slice(0,3).map(item => (
                            
                            <ServiceCard item={item}></ServiceCard>
                        ))
                    }
                </article>
                <nav className="flex justify-center my-6">
                    
                    <NavLink to="/allTreatments"  className="mx-auto inline-block mx-auto bg-[#9538E2] text-white font-semibold px-6 py-2 rounded text-center">Show More</NavLink>

                </nav>

            </section>
        </div>
    );
};

export default Home;