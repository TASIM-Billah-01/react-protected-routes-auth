import { NavLink } from "react-router-dom";

const ServiceCard = ({item}) => {
    const {image,treatment,description,cost,id} = item;
    return (
        <div>
            <article className="bg-white shadow-lg rounded-lg transform hover:-translate-y-2 ">
                <img src={image} className="h-[190px] sm:h-[230px] lg:h-[280px] w-full sm:rounded-md object-cover" alt="" />
                <article className="p-4 space-y-2">
                    <h1 className="text-xl font-semibold text-[#9538E2]">{treatment}</h1>
                    <p className="text-gray-600  leading-relaxed">{description}</p>
                    <p className="text-lg font-medium text-gray-800">Cost: <span className="text-green-600">${cost}</span> </p>
                    <NavLink to={`/details/${id}`} className="bg-[#9538E2] text-white py-2 rounded-lg w-full block text-center ">Learn More</NavLink>           
                    <div className="mb-2 bg-red-400"></div>
                </article>
            </article>
        </div>
    );
};

export default ServiceCard;