import { useContext } from "react";
import { authContext } from "./AuthProvider";

const Modal = ({onClose ,isOpen,treatment}) => {
    const {user} = useContext(authContext)
    if(!isOpen) return null;
    const handleSubmit = e => {
        
        e.preventDefault();
        const Fname = e.target.Fname.value;
        const Lname = e.target.Lname.value;
        const email = e.target.email.value;
        
        const info = {
            Fname,Lname,email,treatment
        }
        console.log(info);
        
        let localData = []
        const saved = localStorage.getItem('appoinments');
        console.log(saved);
        
        if (saved) {
            localData = JSON.parse(saved)
        }
        localData.push(info)
        localStorage.setItem('appoinments', JSON.stringify(localData))
        // console.log(saved);

        onClose()
    }
    return (
        <div>
            <section className=" fixed inset-0 flex justify-center items-center z-50">
                <article className="bg-white/30 rounded-md shadow-lg p-6 w-11/12 max-w-md" onClick={(e) => e.stopPropagation()}> 
                    <h3 className="text-xl font-semibold mb-4 text-center">Book Appointment</h3>
                    <p className="text-gray-700 my-4  text-center">
                        Please fill in your details to confirm your appointment.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex space-x-4 ">
                            <div className="w-1/2">
                                <label>First name</label>
                                <input type="text" name="Fname" id="" placeholder="Tasim" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                            </div>
                            <div className="w-1/2">
                                <label>Last name</label>
                                <input type="text" name="Lname" id="" placeholder="Billah" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input value={user.email} type="email" name="email" required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"placeholder="tasimbillah010@gmail.com"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number
                            </label>
                            <input type="text" required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="+8801XXXXXXXXX"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Appointment Date
                            </label>
                            <input type="date" required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                        </div>

                        <div className="flex justify-end space-x-3 pt-4">
                            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition">
                                Cancel
                            </button>
            
                            <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
                                Confirm
                            </button>
                        </div>

                    </form>
                </article>
            </section>
        </div>
    );
};

export default Modal;