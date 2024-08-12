import {useState, useEffect } from "react";
import { FaRegSun as Sun } from "react-icons/fa";
import { IoIosMoon as Moon } from "react-icons/io";

const Toogle = () => {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        if (theme === "dark"){
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark"); 
        }
    }, [theme]);
    const handleThemeSwitch = () =>{
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return(
        <div className='inline-flex items-center cursor-pointer'>
        <label className='relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
        peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 
        peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
        after:content-[] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 
        after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600'>
        <input
            className='sr-only peer'
            type='checkbox'
            id='darkmode-toggle'
            onChange={handleThemeSwitch}
        />
          <span className='flex justify-around mt-1.5 text-sm font-medium text-gray-900 dark:text-gray-300'>
            <Sun className=''/>
            <Moon className=''/>
          </span>
        </label>
        </div>
        )
}
export default Toogle;