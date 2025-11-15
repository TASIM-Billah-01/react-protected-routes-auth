import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Treatments = () => {
    const data = useLoaderData();
    console.log(data);
    
    return (
        <div>
            <section className="transform hover:translate-y-2 grid grid-cols-1 sm:grid-cols-2 sm:max-w-[94%] lg:max-w-[96%] mx-auto lg:grid-cols-3 gap-8">
                {
                    data.map(item => (
                        <article>
                            <ServiceCard item={item}></ServiceCard>
                        </article>
                    ))
                }
            </section>           
        </div>
    );
};

export default Treatments;