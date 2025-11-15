import { useLoaderData, useLocation } from "react-router-dom";
import { MdOutlineStarHalf } from "react-icons/md";
const Feedback = () => {
    const data = useLoaderData();
    console.log(data);
    const location = useLocation();
    console.log(location);
    const pathname = location.pathname == '/client'
    return (
        <div className={`${pathname ? 'mb-20 mt-6 sm:mt-24 xl:mt-[130px]' : ""}`}>
            <h2 className="text-3xl font-bold text-center text-green-600 sm:mb-8">
                Client's Review
            </h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
                {
                    data.map(item => (
                    <article className="shadow-lg rounded-lg bg-white transition-shadow hover:shadow-2xl duration-200">
                        <article className="flex gap-4  items-center p-6">
                            <img src={item.userImg} className="w-16 h-16 rounded-full object-cover" alt="" />
                            <span className=" ">
                                <h1 className="font-semibold text-lg">{item.name}</h1>
                                {new Date().toLocaleDateString()}
                            </span>
                        </article>
                        <p className="p-6 text-gray-600 leading-relaxed">{item.review}</p>
                        <div className="flex items-center gap-1 text-yellow-400 pb-4 pl-4">
                            <MdOutlineStarHalf className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 xl:w-7 xl:h-7" />
                            <MdOutlineStarHalf className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 xl:w-7 xl:h-7" />
                            <MdOutlineStarHalf className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 xl:w-7 xl:h-7" />
                        </div>  
                    </article>    
                    ))}
            </section>
        </div>
    );
};

export default Feedback;