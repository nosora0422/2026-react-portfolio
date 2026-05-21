import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaMinus, FaPlus } from 'react-icons/fa6';

export default function ProjectDetailCard({project}){
    const [openCards, setOpenCards] = useState(() => project.map(item => item.id));

    const toggleCard = (id) => {
        setOpenCards((prev) => (
            prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
        ));
    };

    const detailCards = project.map((item) => {
        const isActive = openCards.includes(item.id);

        return (
            <div className="col-span-12 -bg--card-background overflow-hidden p-6 rounded-2xl border border-solid -border--outline hover:shadow-lg md:p-10 shadow-md" key={item.id}>
                <motion.div
                    onClick={() => toggleCard(item.id)}
                    className="flex justify-between items-center cursor-pointer"
                >
                    <div className="blue-lable">{item.cardTitle}</div>
                    <div className="flex items-center">
                        {isActive ? (
                            <FaMinus className="text-lg -text--primary" />
                        ) : (
                            <FaPlus className="text-lg -text--primary" />
                        )}
                    </div>
                </motion.div>

                <AnimatePresence initial={false}>
                    {isActive && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
                        >
                            <div className="pt-10">
                                {Array.isArray(item.content) ? (
                                    item.content.map((listItem, index) => (
                                        <div className="mb-8" key={index}>
                                            <div className="text-lg -text--primary font-medium">{listItem.list}</div>
                                            <div className="body--gray">{listItem.listDisc}</div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="body--gray">No content available.</p>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    });

    return(
        <>
            {detailCards}
        </>
    )
}