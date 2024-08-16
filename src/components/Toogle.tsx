import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaRegSun as Sun } from "react-icons/fa";
import { IoIosMoon as Moon } from "react-icons/io";

const Toogle = () => {

    const [theme, setTheme] = useState("light");
    const [isToggled, setIsToggled] = useState(false);

    useEffect(() => {
        if (theme === "dark"){
            document.documentElement.classList.add("dark");
            setIsToggled(false);
        } else {
            document.documentElement.classList.remove("dark");
            setIsToggled(true);
        }
    }, [theme]);
    const handleThemeSwitch = () =>{
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return(
        <div className='relative flex w-fit items-center rounded-full'>
            <div className="relative flex w-fit items-center rounded-full">
                <button className="flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10"
                onClick={handleThemeSwitch}>           
                <Sun className={`relative z-10 text-white`}/>
                </button>

                <button className="flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10"
                onClick={handleThemeSwitch}>
                <Moon className={`relative z-10 text-[#4a8dc9]`}/>
                </button>
                
                <div className={`absolute inset-0 z-0 flex ${isToggled === false ? "justify-end" : "justify-start"}`}>
                <motion.span
                layout
                transition={{ type: "spring", damping: 15, stiffness: 250 }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-yellow-500 to-[#4a8dc9]"/>
                </div>
            </div>
        </div>
        )
}
export default Toogle;