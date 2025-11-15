import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "../components/Modal";

const Details = () => {
    const data = useLoaderData();
    const [find, setFind] = useState(null);
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        setFind(data)
    },[data])

    if(!find) {
        return <p>loading...</p>
    }
    const {image,treatment,description} = find;
    return (
        <div>
            <section className="h-[600px] relative rounded shadow-md">
                <img src={image} className="h-full w-full " alt="" />
                <div className="bg-gradient-to-t from-black/60 via-black/30 to-transparent absolute inset-0"></div>
                <article className="absolute inset-0 flex items-center justify-center">
                    <article className="text-center space-y-3">
                        <h1 className="text-3xl font-bold text-white">{treatment}</h1>
                        <p className="max-w-3xl text-white text-lg font-normal">{description}</p>
                        <button onClick={() => setIsOpen(true)} className="bg-[#9538E2] text-white font-semibold px-6 py-3 rounded-lg shadow-lg ">
                            Book Appointment
                        </button>
                    </article>
                </article>
            
            </section>
            <Modal isOpen={isOpen} treatment={treatment} onClose = {() => setIsOpen(false)}></Modal>
        </div>
    );
};

export default Details;