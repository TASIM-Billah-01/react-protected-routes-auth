import { NavLink } from "react-router-dom";
import { FaBarsProgress } from "react-icons/fa6";
import { useContext } from "react";
import { authContext } from "./AuthProvider";

const Navbar = () => {
    
    const {user,handleSignOut} = useContext(authContext)
    console.log(user);
    
    const linkClass = ({isActive}) => `px-3 py-2 font-medium rounded-md transition-colors  duration-200 ${isActive ? 'bg-[#9538E2] text-white' : 'hover:text-[#9538E2] text-gray-700'}`
    const linkClass01 = ({isActive}) => `px-3 py-1 font-medium rounded transition-colors  duration-200 text-[15px] ${isActive ? 'bg-[#9538E2] text-white' : 'hover:text-[#9538E2] text-gray-700'}`
    const linkClass02 = ({isActive}) => `px-3 py-1 rounded transition-colors  duration-200 text-[15px] ${isActive ? 'bg-[#9538E2] text-white' : 'hover:text-[#9538E2] text-gray-700'}`
    return (
        <div className="xl:mb-28 sm:mb-14 lg:mb-[70px] mb-1">
            <header className="hidden  sm:block bg-white fixed top-0 left-0 right-0 shadow-md transition-colors z-50 duration-200">
                <section className=" max-w-6xl mx-auto p-4 flex justify-between items-center">
                    <h1 className="lg:text-2xl sm:text-lg font-bold text-[#9538E2] tracking-wide">Teeth<span className="text-gray-700">Wizard</span></h1>
                    <nav className="hidden lg:flex gap-5 text-lg items-center">
                        <NavLink className={linkClass} to='/'>Home</NavLink>
                        <NavLink className={linkClass} to='/allTreatments'>all Treatments</NavLink>
                        <NavLink className={linkClass} to='/MyAppointments'>My Appointments</NavLink>
                        {/* <NavLink className={linkClass} to='/Profile'>Profile</NavLink> */}
                        <NavLink className={linkClass} to='/client'>client FeedBack</NavLink>
                    </nav>

                    <nav className="lg:hidden ">
                        <NavLink className={linkClass01} to='/'>Home</NavLink>
                        <NavLink className={linkClass01} to='/allTreatments'>all Treatments</NavLink>
                        <NavLink className={linkClass01} to='/MyAppointments'>My Appointments</NavLink>
                        {/* <NavLink className={linkClass01} to='/Profile'>Profile</NavLink> */}
                        <NavLink className={linkClass01} to='/client'>client FeedBack</NavLink>
                    </nav>
                    {
                        user?.email ? (
                            <section className="flex items-center gap-3">
                                <img src={user.photoURL}  className="w-6 h-6 xl:w-8 xl:h-8 rounded-full object-cover" alt="" />
                                <button onClick={handleSignOut} className="px-1 lg:px-3 xl:py-1.5 lg:py-1 py-1 bg-[#7F56D9] text-white rounded-md shadow-md 
             hover:bg-[#6533b3] hover:shadow-lg transition-all duration-200">Logout</button>
                            </section>
                        ) :(
                            <NavLink to='/login' className='lg:px-4 px-3 py-1 lg:py-2 bg-[#7F56D9] text-white lg:text-base text-sm lg:rounded-md rounded hover:bg-[#6533b3] duration-200 transition-all hover:shadow-lg sm:font-medium lg:font-semibold shadow-md'>Login</NavLink>
                        )
                    }
                </section>
            </header>       
            
            <header className="sm:hidden p-4 shadow-md bg-white z-50 flex justify-between items-center" >
                <h1 className="text-lg font-bold text-[#9538E2] tracking-normal">Teeth<span className="text-gray-700">Wizard</span></h1>

                <section className="flex items-center gap-3"> 
                    {/* <NavLink to='/login' className='bg-[#7F56D9] text-white px-3.5 py-1 text-sm rounded-full flex items-center'> <span>Login</span></NavLink> */}
                    {
                        user?.email ? (
                            <section className="flex items-center gap-3">
                                <img src={user.photoURL}  className="w-6 h-6 rounded-full object-cover" alt="" />
                                <button onClick={handleSignOut} className="px-2 text-sm py-1 bg-[#7F56D9] text-white rounded-md shadow-md 
             hover:bg-[#6533b3] hover:shadow-lg transition-all duration-200">Logout</button>
                            </section>
                        ) :(
                            <NavLink to='/login' className='lg:px-4 px-3 py-1 lg:py-2 bg-[#7F56D9] text-white lg:text-base text-sm lg:rounded-md rounded hover:bg-[#6533b3] duration-200 transition-all hover:shadow-lg sm:font-medium lg:font-semibold shadow-md'>Login</NavLink>
                        )
                    }                    
                <div>
                    <input type="checkbox" name="" id="Bars" className="hidden peer"/>
                    <label htmlFor="Bars">
                        <FaBarsProgress className="text-gray-600 " size={18}/>
                    </label>
                    <nav className="bg-white hidden peer-checked:flex flex-col w-full text-left absolute left-0  shadow-xl p-3 mt-1.5 z-50 ">
                        <NavLink className={linkClass02} to='/'>Home</NavLink>
                        <NavLink className={linkClass02} to='/allTreatments'>all Treatments</NavLink>
                        <NavLink className={linkClass02} to='/MyAppointments'>My Appointments</NavLink>
                        {/* <NavLink className={linkClass02} to='/Profile'>Profile</NavLink>? */}
                        <NavLink className={linkClass02} to='/client'>client FeedBack</NavLink>
                    </nav>
                </div>
                </section>
            </header>

        </div>
    );
};

export default Navbar;