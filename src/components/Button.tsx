import { ButtonInterface } from "../types";

const Button = ({text, referencia, icon}: ButtonInterface) => {
    const link = referencia.startsWith('https') ? referencia : `https://${referencia}`;

  return (
        <a href={link} 
        target="_blank" 
        className="flex justify-around items-center p-0.5 mb-2 me-2 overflow-hidden text-sm 
        font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-300 to-orange-400 
        group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white 
         dark:focus:ring-pink-800">
    
            <span className='w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white 
            dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                <strong>{text}</strong>
                {icon}
                </span>
        </a>
    )
}
export default Button;