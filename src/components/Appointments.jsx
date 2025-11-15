import { useContext, useEffect, useState } from "react";
import { authContext } from "./AuthProvider";

const Appointments = () => {
    const {user} = useContext(authContext);
    const [savedData, setSavedData] = useState([]);
    useEffect(() => {
        const local = localStorage.getItem('appoinments');
        if(local) {
            const parsed = JSON.parse(local)
            const matched = parsed.filter(item => item.email === user.email)
            setSavedData(matched)
        }
    },[user.email])
    return (
        <div>
            <section className="w-[90%] max-w-md lg:max-w-xl lg:p-8 mx-auto bg-white rounded-lg shadow-lg sm:mt-24 hover:shadow-2xl transition-shadow p-6">
                <h1 className="text-2xl font-semibold text-gray-800 m border-b pb-2 text-center mb-4">Your Appointments</h1>
                {
                    savedData.length == 0 ? (
                    <p className="text-gray-600 text-center py-6">
                        No appointments found.
                    </p>
                    ) : (
                        <section className="space-y-4">
                            {
                                savedData.map( (item,index) => (
                                    <article key={index} className="p-4 rounded-xl  shadow-md hover:shadow-lg transition-shadow duration-200 bg-gradient-to-r from-blue-50 to-indigo-50">
                                        {/* <p>{item.Fname} {item.Lname}</p> */}
                                         <p className="text-lg xl:text-xl font-medium text-gray-800">
                                            {item.Fname} {item.Lname}
                                        </p>

                                        <p className="text-gray-600 xl:text-lg">
                                            Treatment:{" "}
                                            <span className="font-semibold text-indigo-600">
                                            {item.treatment}
                                            </span>
                                        </p>

                                        <p className="text-gray-500 text-sm  xl:text-lg" >
                                            Email: {item.email}
                                        </p>
                                    </article>
                                ))
                            }
                        </section>
                    )
                }
            </section>
        </div>
    );
};

export default Appointments;