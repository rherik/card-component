import { IoCloudDownloadOutline } from "react-icons/io5";
import resume from '../statics/resume.pdf';
import { BadgeInterface } from "../types";


const Badge = ({text}: BadgeInterface) => {

    return (
        <a href={resume}
        target="_blank"
        rel="noopener noreferrer">
            <div className='flex justify-center items-center sm:ml-[280px] md:ml-[290px] lg:ml-[420px] -mt-12 fixed w-24 h-24 rounded-full bg-green-400'>
                <small className='text-yellow-100'>{text}</small>
                <IoCloudDownloadOutline className="pl-1"/>
            </div>
        </a>
    )
}
export default Badge;