import { BadgeInterface } from "../types";
import { IoCloudDownloadOutline } from "react-icons/io5";
import resume from '../statics/resume.pdf';


const Badge = ({text}: BadgeInterface) => {

    return (
        <a href={resume}
        target="_blank"
        rel="noopener noreferrer">
            <div className='flex justify-center items-center w-24 h-24 rounded-full bg-green-400'>
                <small className='text-yellow-100'>{text}</small>
                <IoCloudDownloadOutline className="pl-1"/>
            </div>
        </a>
    )
}
export default Badge;