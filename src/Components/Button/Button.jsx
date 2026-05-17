import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

export default function Button({ text, link, yellow }){
    return(
        <div className="w-full flex justify-center">
            <Link to={link} className={ yellow ? "button -bg--yellow -text--grey hover:bg-yellow-500" : "button" }>
                {text} 
                <FaArrowRight className="ml-3 inline-block" />
            </Link>
        </div>
    )
}