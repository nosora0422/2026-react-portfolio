import RecommendationData from '../../Data/RecommendationData';
import { motion,useInView } from 'framer-motion';
import { useRef, useState } from "react";
import { FaLinkedinIn, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';

export default function RecomCard() {
    const ref = useRef(null);
    const [expandedCards, setExpandedCards] = useState({});
    const isInView = useInView(ref, { 
        once: true,
        threshold:0.8,
    });

    const openLinkedIn = (linkedinUrl) => {
        window.open(linkedinUrl, '_blank');
    };

    const linkedInHref = 'https://www.linkedin.com/in/sora-noh/details/recommendations/?detailScreenTabIndex=0';

    const toggleRecommendation = (event, id) => {
        event.stopPropagation();
        setExpandedCards((currentCards) => ({
            ...currentCards,
            [id]: !currentCards[id],
        }));
    };

    
    const recommendations = RecommendationData.map((item, index) => {
            const isExpanded = expandedCards[item.id];
            const canExpand = item.comment.length > 220;

            return (
            <motion.div
                className={`col-span-7 flex flex-col justify-between w-full h-full ${item.column} ${item.row} -bg--card-background p-6 mr-5 rounded-2xl border border-solid -border--outline backdrop-blur-sm drop-shadow-md cursor-pointer hover:drop-shadow-xl`}
                onClick={()=>openLinkedIn(linkedInHref)}
                key={index}
                initial={{ 
                    opacity:0, 
                    translateX:-40, 
                    translateY: -40 
                }}
                animate={ isInView ? { 
                    opacity: 1, 
                    translateX: 0, 
                    translateY: 0 
                } : { 
                    opacity: 0, 
                    translateX: -20, 
                    translateY: -20 
                }}
                transition={{ 
                    duration: 0.8, 
                    delay: 0.3 * index, 
                    ease: 'easeIn' 
                }}      
            >
                <div>
                    <p><FaQuoteLeft className="mb-3 -text--primary" /></p>
                    <p className={`recom-card__comment -text--primary text-base font-normal ${isExpanded ? '' : 'recom-card__comment--collapsed'}`}>
                        {item.comment}
                    </p>
                    {canExpand && (
                        <button
                            type="button"
                            className="-text--lightgray font-Manrope text-sm font-semibold hover:underline"
                            onClick={(event) => toggleRecommendation(event, item.id)}
                            aria-expanded={!!isExpanded}
                            aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${item.name}'s recommendation`}
                        >
                            {isExpanded ? 'Less' : 'More'}
                        </button>
                    )}
                    <FaQuoteRight className="block text-right mt-3 -text--primary" />
                </div>
                <div className="flex justify-between items-end gap-2">
                    <div>
                        <p className="font-Manrope text-xl font-medium  -text--primary">{item.name}</p>
                        <div className='flex items-center'>
                            <p className="text-base mr-2 -text--primary">{item.title}</p>
                            <a href={item.linkedin} target="_blank" aria-label="LinkedIn"
                            onClick={(event) => event.stopPropagation()}
                            rel="noopener noreferrer" ><FaLinkedinIn className="-text--primary cursor-pointer hover:-text--lightgray" aria-hidden="true"/></a>
                        </div>
                    </div>
                    <img className="object-cover object-center rounded-full border border-solid -border--lightgray w-10 h-10" src={item.img} alt={item.name} loading="lazy"
                    decoding="async" />
                </div>
            </motion.div>
        )
    }
    )

  return (
    <div ref={ref} className='grid grid-cols-7 my-10 gap-x-4 gap-y-4 grid-flow-row-dense'>
        {recommendations}
    </div>
  )
}
