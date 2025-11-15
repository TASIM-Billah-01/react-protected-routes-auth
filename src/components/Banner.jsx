import image from "../assets/m.jpg"
const Banner = () => {
    return (
        <div>
            <section className="flex flex-col gap-10 sm:gap-0 md:flex-row rounded-md items-stretch md:items-center justify-between bg-gradient-to-r from-green-200 via-white to-green-100 shadow-md px-4 py-4">
                <article className=" sm:w-1/2 sm:space-y-4 space-y-2">
                    <h1 className="text-3xl sm:text-4xl font-extrabold sm:leading-10 text-blue-600">Brighten Your Smile with <span className="text-green-600">Expert Dental Care</span></h1>
                    <p className="text-lg sm:text-xl text-gray-700 sm:leading-6 lg:leading-7 font-normal ">From routine cleanings to advanced treatments — we ensure your smile stays healthy, confident, and beautiful.</p>
                </article>
                <figure className="sm:w-1/2  -my-4 -mx-4">
                    <img src={image} alt="" className="w-full h-[250px] sm:h-[350px] lg:h-[400px] xl:h-[500px] object-cover rounded-sm lg:rounded" />
                </figure>
            </section>            
        </div>
    );
};

export default Banner;